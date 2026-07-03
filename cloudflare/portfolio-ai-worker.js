const defaultAllowedOrigins = [
  "https://mauriceotieno.com",
  "https://www.mauriceotieno.com",
  "https://otienomaurice.github.io",
  "http://localhost:8080",
  "http://localhost:8081",
  "http://127.0.0.1:8080",
  "http://127.0.0.1:8081"
];

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...headers
    }
  });
}

function allowedOrigins(env) {
  return String(env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean)
    .concat(defaultAllowedOrigins);
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowOrigin = allowedOrigins(env).includes(origin) ? origin : defaultAllowedOrigins[0];
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

function clamp(value, maxLength) {
  return String(value || "").slice(0, maxLength);
}

function cleanConversation(conversation = []) {
  if (!Array.isArray(conversation)) return [];
  return conversation.slice(-8).map((item) => ({
    role: item?.role === "assistant" ? "assistant" : "user",
    content: clamp(item?.content || item?.text || "", 1400)
  })).filter((item) => item.content);
}

function extractOpenAiText(data = {}) {
  if (typeof data.output_text === "string" && data.output_text.trim()) return data.output_text.trim();
  const parts = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (typeof content.text === "string") parts.push(content.text);
      if (typeof content.output_text === "string") parts.push(content.output_text);
    }
  }
  return parts.join("\n").trim();
}

function extractWorkersAiText(data = {}) {
  if (typeof data.response === "string" && data.response.trim()) return data.response.trim();
  if (typeof data.result?.response === "string" && data.result.response.trim()) return data.result.response.trim();
  if (typeof data.output_text === "string" && data.output_text.trim()) return data.output_text.trim();
  if (Array.isArray(data.output)) {
    return data.output.map((item) => {
      if (typeof item === "string") return item;
      if (typeof item?.text === "string") return item.text;
      if (typeof item?.content === "string") return item.content;
      return "";
    }).filter(Boolean).join("\n").trim();
  }
  return "";
}

function buildInstructions() {
  return [
    "You are the AI assistant for a public engineering portfolio website.",
    "Answer naturally like a helpful technical mentor and recruiter-facing portfolio guide.",
    "If the question is general, answer the concept directly before mentioning portfolio context.",
    "If the question is about the portfolio owner, projects, files, resume, tools, links, or sections, answer from the supplied portfolio context.",
    "Use recent conversation to keep a conversational flow. Greetings should receive short greetings.",
    "Only include portfolio links when they are directly relevant to the visitor's question.",
    "Never invent portfolio projects, credentials, files, test results, or private repository access.",
    "If a requested detail is not in the context, say what is missing and give a useful next step.",
    "Keep answers concise, readable, and specific. Use bullets when they make the answer easier to scan."
  ].join("\n");
}

function buildMessages(body = {}) {
  const messages = [{ role: "system", content: buildInstructions() }];
  for (const item of cleanConversation(body.conversation)) {
    messages.push({
      role: item.role === "assistant" ? "assistant" : "user",
      content: item.content
    });
  }
  messages.push({ role: "user", content: buildUserPrompt(body) });
  return messages;
}

function buildUserPrompt(body = {}) {
  return [
    `Visitor question: ${clamp(body.question, 1200)}`,
    `Question intent: ${clamp(body.intent || "portfolio_specific", 80)}`,
    `Web/public lookup requested by browser: ${body.allowWebSearch === true ? "yes" : "no"}`,
    "",
    "Recent conversation JSON:",
    clamp(JSON.stringify(cleanConversation(body.conversation), null, 2), 6000),
    "",
    "Portfolio context JSON:",
    clamp(JSON.stringify(body.context || {}, null, 2), 20000)
  ].join("\n");
}

async function callOpenAi(body, env) {
  const model = env.OPENAI_MODEL || "gpt-4.1-mini";
  const payload = {
    model,
    input: [
      {
        role: "developer",
        content: [{ type: "input_text", text: buildInstructions() }]
      },
      {
        role: "user",
        content: [{ type: "input_text", text: buildUserPrompt(body) }]
      }
    ],
    max_output_tokens: Number(env.OPENAI_MAX_OUTPUT_TOKENS || 1000)
  };

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      error: data?.error?.message || "OpenAI request failed."
    };
  }
  return {
    ok: true,
    answer: extractOpenAiText(data),
    model
  };
}

async function callWorkersAi(body, env) {
  if (!env.AI || typeof env.AI.run !== "function") {
    return {
      ok: false,
      status: 503,
      error: "Cloudflare Workers AI binding is not available for this Worker."
    };
  }

  const model = env.WORKERS_AI_MODEL || "@cf/meta/llama-3.2-3b-instruct";
  const data = await env.AI.run(model, {
    messages: buildMessages(body),
    max_tokens: Number(env.OPENAI_MAX_OUTPUT_TOKENS || 1000)
  });
  return {
    ok: true,
    answer: extractWorkersAiText(data),
    model
  };
}

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });

    const url = new URL(request.url);
    if (request.method !== "POST" || !url.pathname.endsWith("/api/portfolio-ai")) {
      return json({ error: "Portfolio AI endpoint not found." }, 404, cors);
    }

    let body = {};
    try {
      body = await request.json();
    } catch {
      return json({ error: "Request body must be JSON." }, 400, cors);
    }

    const question = clamp(body.question, 1200).trim();
    if (!question) return json({ error: "Question is required." }, 400, cors);

    try {
      const result = env.OPENAI_API_KEY
        ? await callOpenAi({ ...body, question }, env)
        : await callWorkersAi({ ...body, question }, env);
      if (!result.ok) return json({ error: result.error }, result.status || 502, cors);
      return json({
        answer: result.answer || "I could not generate a useful answer from the available context.",
        model: result.model,
        provider: env.OPENAI_API_KEY ? "openai" : "cloudflare-workers-ai",
        usedWebSearch: false
      }, 200, cors);
    } catch (error) {
      return json({
        error: error?.message || "Portfolio AI backend failed unexpectedly."
      }, 500, cors);
    }
  }
};
