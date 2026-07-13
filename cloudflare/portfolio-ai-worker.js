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

function questionLooksCasual(question = "") {
  const clean = String(question || "").trim().toLowerCase();
  return /^(hi|hello|hey|yo|sup|good\s+(morning|afternoon|evening))(\s+[a-z]+){0,3}[\s!.?]*$/.test(clean)
    || /^(thanks|thank\s+you|ok|okay|cool|nice)[\s!.?]*$/.test(clean)
    || /^(what'?s|what\s+is|do\s+you\s+know)\s+my\s+name\??$/.test(clean)
    || /^who\s+am\s+i\??$/.test(clean);
}

function questionHasPortfolioIntent(question = "") {
  const clean = String(question || "").toLowerCase();
  return /\b(maurice|otieno|portfolio|resume|github|linkedin|contact|email|phone|project|projects|repo|repository|repositories|file|files|document|documents|artifact|artifacts|link|links|download|open|show|where|built|created|designed|implemented)\b/.test(clean)
    || /\b(your|his|maurice's)\s+(project|projects|resume|github|linkedin|portfolio|work|email|phone|contact|repo|repository|files?|documents?|links?)\b/.test(clean);
}

function questionIsEngineeringRelated(question = "") {
  const clean = String(question || "").toLowerCase();
  return /\b(op\s*amp|amplifier|analog|mixed\s*signal|adc|dac|filter|vco|oscillator|pwm|charger|rectifier|regulator|buck|boost|ldo|mosfet|bjt|transistor|diode|pcb|schematic|layout|ground|noise|frequency|gain|phase|ltspice|kicad|vivado|verilog|vhdl|fpga|asic|stm32|mcu|microcontroller|embedded|firmware|rtos|i2c|spi|uart|sensor|control|signal|circuit|electronics|hardware|power)\b/.test(clean);
}

function questionLooksConceptual(question = "") {
  const clean = String(question || "").toLowerCase().trim();
  return /^(what|what\s+is|what\s+are|what's|define|explain|describe|how|why|compare|differentiate)\b/.test(clean)
    || /\b(definition|meaning|basics|overview|introduction|difference\s+between|how\s+does|how\s+do|why\s+does|why\s+do)\b/.test(clean);
}

function classifyIntent(question = "", requestedIntent = "") {
  const valid = new Set(["general_conversation", "general_engineering", "general_knowledge", "portfolio_specific", "portfolio_and_general"]);
  if (questionLooksCasual(question)) return "general_conversation";
  const hasPortfolio = questionHasPortfolioIntent(question);
  const hasConcept = questionIsEngineeringRelated(question) || questionLooksConceptual(question);
  if (hasPortfolio && hasConcept) return "portfolio_and_general";
  if (hasPortfolio) return "portfolio_specific";
  if (questionIsEngineeringRelated(question)) return "general_engineering";
  if (valid.has(requestedIntent) && requestedIntent !== "portfolio_specific") return requestedIntent;
  return "general_knowledge";
}

function contextForIntent(context = {}, intent = "portfolio_specific") {
  if (["portfolio_specific", "portfolio_and_general"].includes(intent)) return context;
  return {
    intent,
    profile: context.profile || {},
    question: context.question || ""
  };
}

function conversationalAnswer(question = "") {
  const clean = String(question || "").toLowerCase();
  if (/^(thanks|thank\s+you)/.test(clean)) return "You're welcome. What would you like to look at next?";
  if (/\b(who are you|what are you)\b/.test(clean)) return "I am the AI assistant for this portfolio. I can help with projects, files, links, and related engineering questions.";
  return "Hi, what can I do for you?";
}

function buildInstructions() {
  return [
    "You are the AI assistant for a public engineering portfolio website.",
    "Answer naturally like a helpful technical mentor and recruiter-facing portfolio guide.",
    "If the question is general, answer the concept directly before mentioning portfolio context.",
    "If the question is mixed, answer the general idea first and then connect it to specific relevant portfolio evidence.",
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

function fallbackWorkerAnswer(body = {}) {
  const question = String(body.question || "").trim();
  const clean = question.toLowerCase();
  const context = body.context || {};
  const projects = Array.isArray(context.projects) ? context.projects : [];
  const owner = context.owner || context.profile?.displayName || "Maurice Otieno";

  if (/^(hi|hello|hey|yo)\b/.test(clean)) {
    return `Hi, what can I do for you? I can help with ${owner}'s projects, files, resume links, or related electronics concepts.`;
  }
  if (/\bembedded systems?\b/.test(clean)) {
    return [
      "Embedded systems is a field of engineering where software is built into dedicated hardware to control a device, measure signals, communicate with peripherals, or respond to real-time events.",
      "",
      "Typical embedded work combines microcontrollers or processors, firmware, timing, interrupts, communication buses, sensors, actuators, and hardware validation.",
      "",
      projects.length
        ? `In this portfolio, I would connect that explanation back to saved projects such as ${projects.slice(0, 3).map((project) => project.title || project.name).filter(Boolean).join(", ")} when those projects are relevant.`
        : "When project context is available, I connect the explanation to the saved project evidence."
    ].join("\n");
  }
  if (projects.length && /\b(project|portfolio|maurice|file|github|resume|tool|design|test)\b/.test(clean)) {
    return [
      `I can use the portfolio context for ${owner}.`,
      "",
      "Relevant saved project areas include:",
      ...projects.slice(0, 6).map((project) => `- ${project.title || project.name || "Untitled project"}`),
      "",
      "The full AI model is not reachable from this Worker right now, so this is a fallback answer from the available context."
    ].join("\n");
  }
  return [
    "I can answer that in a general way, but the full AI model is not reachable from this Worker right now.",
    "",
    "A useful answer should define the concept, explain the main parts, give a practical example, and connect it to a project artifact when portfolio context is relevant.",
    "",
    `Question received: ${question}`
  ].join("\n");
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
    const intent = classifyIntent(question, body.intent);
    const routedBody = {
      ...body,
      context: contextForIntent({ ...(body.context || {}), question }, intent),
      intent,
      question
    };
    if (intent === "general_conversation") {
      return json({
        answer: conversationalAnswer(question),
        intent,
        model: "conversation-router",
        provider: "worker-router",
        usedWebSearch: false
      }, 200, cors);
    }

    try {
      let provider = env.OPENAI_API_KEY ? "openai" : "cloudflare-workers-ai";
      let result = env.OPENAI_API_KEY
        ? await callOpenAi(routedBody, env)
        : await callWorkersAi(routedBody, env);
      if (!result.ok && env.OPENAI_API_KEY && env.AI) {
        provider = "cloudflare-workers-ai";
        result = await callWorkersAi(routedBody, env);
      }
      if (!result.ok) {
        return json({
          answer: fallbackWorkerAnswer(routedBody),
          model: "worker-fallback",
          provider: "worker-fallback",
          warning: result.error,
          usedWebSearch: false
        }, 200, cors);
      }
      return json({
        answer: result.answer || "I could not generate a useful answer from the available context.",
        model: result.model,
        provider,
        usedWebSearch: false
      }, 200, cors);
    } catch (error) {
      return json({
        answer: fallbackWorkerAnswer(routedBody),
        model: "worker-fallback",
        provider: "worker-fallback",
        warning: error?.message || "Portfolio AI backend failed unexpectedly.",
        usedWebSearch: false
      }, 200, cors);
    }
  }
};
