const { app, BrowserWindow, Menu, dialog, nativeTheme, shell } = require("electron");
const { execFile } = require("node:child_process");
const fs = require("node:fs");
const fsp = require("node:fs/promises");
const net = require("node:net");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { promisify } = require("node:util");

let mainWindow = null;
let builderOrigin = "";
let updateShutdownStarted = false;
const execFileAsync = promisify(execFile);
const defaultRepositoryUrl = process.env.OMB_BUILDER_REPOSITORY || "";
const defaultWorkspaceHomeName = "OMB Portfolio Builder";

const rootFilesToRefresh = [
  "server.mjs",
  "index.html",
  "styles.css",
  "script.js",
  "electronics-search.js",
  "builder-rich-future-sections.js",
  "template-preview.html",
  "template-preview.css",
  "template-preview.js",
  "_headers"
];

const rootFilesToSeed = [
  "projects.json",
  "project-templates.json",
  "README.md",
  ".nojekyll",
  "robots.txt"
];

const directorySeeds = ["assets", "Backgrounds", "docs", ".well-known"];
const portfolioFilesToSeed = [
  "projects.json",
  "index.html",
  "styles.css",
  "script.js",
  "electronics-search.js",
  ".nojekyll",
  "robots.txt",
  "_headers",
  "sitemap.xml"
];
const portfolioDirectoriesToSeed = ["assets", "Backgrounds", "docs", ".well-known"];
const gitCandidates = [
  process.env.GIT_EXE,
  "git",
  "C:\\Program Files\\Git\\cmd\\git.exe",
  "C:\\Program Files\\Git\\bin\\git.exe",
  "C:\\Program Files (x86)\\Git\\cmd\\git.exe",
  "C:\\Program Files (x86)\\Git\\bin\\git.exe"
].filter(Boolean);

function dispatchBuilderMenuAction(action) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  const payload = JSON.stringify(action);
  mainWindow.webContents.executeJavaScript(
    `window.dispatchEvent(new CustomEvent("builder-menu-action", { detail: ${payload} }));`,
    true
  ).catch(() => {});
}

function quitForBuilderUpdate() {
  if (updateShutdownStarted) return;
  updateShutdownStarted = true;
  try {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.destroy();
    }
  } catch {
    // The process exit fallback below still guarantees the updater can continue.
  }
  try {
    app.quit();
  } catch {
    // Fall through to app.exit.
  }
  setTimeout(() => {
    try {
      app.exit(0);
    } catch {
      process.exit(0);
    }
  }, 1500);
}

process.on("omb-builder-update-started", quitForBuilderUpdate);

function setBuilderFullScreen(nextState = null) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  const shouldFullscreen = typeof nextState === "boolean" ? nextState : !mainWindow.isFullScreen();
  mainWindow.setFullScreen(shouldFullscreen);
  mainWindow.setMenuBarVisibility(true);
  mainWindow.setAutoHideMenuBar(false);
  mainWindow.setMenu(createAppMenu(builderOrigin));
}

function createAppMenu(origin) {
  return Menu.buildFromTemplate([
    {
      label: "File",
      submenu: [
        { label: "New Project", accelerator: "CmdOrCtrl+N", click: () => dispatchBuilderMenuAction({ type: "new-project" }) },
        { label: "Publishing Target", click: () => dispatchBuilderMenuAction({ type: "publishing-target" }) },
        { type: "separator" },
        { label: "Save Draft", accelerator: "CmdOrCtrl+S", click: () => dispatchBuilderMenuAction({ type: "save-draft" }) },
        { label: "Apply to Site", accelerator: "CmdOrCtrl+Shift+S", click: () => dispatchBuilderMenuAction({ type: "apply-site" }) },
        { type: "separator" },
        { role: "quit", label: "Exit" }
      ]
    },
    {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { type: "separator" },
        { role: "cut" },
        { role: "copy" },
        { role: "paste" },
        { role: "selectAll" }
      ]
    },
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forceReload" },
        { type: "separator" },
        { role: "resetZoom" },
        { role: "zoomIn" },
        { role: "zoomOut" },
        { type: "separator" },
        { label: "Portfolio Preview", click: () => dispatchBuilderMenuAction({ type: "portfolio-preview" }) },
        { label: "Check Updates", click: () => dispatchBuilderMenuAction({ type: "check-updates" }) },
        { type: "separator" },
        {
          label: mainWindow?.isFullScreen?.() ? "Exit Full Screen" : "Toggle Full Screen",
          accelerator: "F11",
          click: () => setBuilderFullScreen()
        }
      ]
    },
    {
      label: "Preferences",
      submenu: [
        { label: "Open Preferences", accelerator: "CmdOrCtrl+,", click: () => dispatchBuilderMenuAction({ type: "preferences" }) },
        { type: "separator" },
        { label: "Light Mode", click: () => dispatchBuilderMenuAction({ type: "set-theme", theme: "light" }) },
        { label: "Dark Mode", click: () => dispatchBuilderMenuAction({ type: "set-theme", theme: "dark" }) }
      ]
    },
    {
      label: "Help",
      submenu: [
        { label: "Builder Guide", accelerator: "F1", click: () => dispatchBuilderMenuAction({ type: "builder-guide" }) },
        { label: "GitHub Releases", click: () => shell.openExternal("https://github.com/otienomaurice/omb-portfolio-builder/releases/latest") },
        {
          label: "Focus Builder Window",
          click: () => {
            if (!mainWindow || mainWindow.isDestroyed()) return;
            if (mainWindow.isMinimized()) mainWindow.restore();
            mainWindow.focus();
          }
        }
      ]
    }
  ]);
}

function fileExists(filePath) {
  try {
    fs.accessSync(filePath);
    return true;
  } catch {
    return false;
  }
}

async function copyFileIfAvailable(source, target, overwrite = false) {
  if (!fileExists(source)) return;
  if (!overwrite && fileExists(target)) return;
  await fsp.mkdir(path.dirname(target), { recursive: true });
  await fsp.copyFile(source, target);
}

async function copyDirectoryMissingFiles(source, target) {
  if (!fileExists(source)) return;
  await fsp.mkdir(target, { recursive: true });
  const entries = await fsp.readdir(source, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      await copyDirectoryMissingFiles(sourcePath, targetPath);
    } else if (entry.isFile()) {
      await copyFileIfAvailable(sourcePath, targetPath, false);
    }
  }
}

async function directoryIsEmpty(directory) {
  try {
    const entries = await fsp.readdir(directory);
    return entries.length === 0;
  } catch {
    return true;
  }
}

async function runGit(args, cwd) {
  let lastError = null;
  for (const candidate of gitCandidates) {
    try {
      await execFileAsync(candidate, args, {
        cwd,
        maxBuffer: 10 * 1024 * 1024,
        windowsHide: true
      });
      return true;
    } catch (error) {
      lastError = error;
      if (error.code === "ENOENT") continue;
      throw error;
    }
  }
  throw lastError || new Error("Git executable was not found.");
}

function workspaceLooksUsable(workspaceRoot) {
  return fileExists(path.join(workspaceRoot, "server.mjs"))
    && fileExists(path.join(workspaceRoot, "index.html"));
}

function workspaceIsGitBacked(workspaceRoot) {
  return fileExists(path.join(workspaceRoot, ".git"));
}

function findRepositoryNearExecutable() {
  let current = path.dirname(process.execPath);
  for (let index = 0; index < 8; index += 1) {
    if (workspaceLooksUsable(current) && workspaceIsGitBacked(current)) return current;
    const next = path.dirname(current);
    if (next === current) break;
    current = next;
  }
  return "";
}

async function cloneWorkspaceIfPossible(workspaceRoot) {
  if (!defaultRepositoryUrl) return false;
  if (workspaceIsGitBacked(workspaceRoot)) return true;
  await fsp.mkdir(workspaceRoot, { recursive: true });
  if (!(await directoryIsEmpty(workspaceRoot))) return false;
  try {
    await runGit(["clone", "--depth", "1", defaultRepositoryUrl, workspaceRoot], path.dirname(workspaceRoot));
    return workspaceIsGitBacked(workspaceRoot);
  } catch {
    return false;
  }
}

async function preparePackagedWorkspace() {
  const bundledSiteRoot = path.join(process.resourcesPath, "site");
  const defaultWorkspaceHome = process.platform === "win32" && process.env.LOCALAPPDATA
    ? path.join(process.env.LOCALAPPDATA, defaultWorkspaceHomeName)
    : path.join(app.getPath("userData"), "workspace");
  const workspaceHome = process.env.OMB_WORKSPACE_HOME || defaultWorkspaceHome;
  const workspaceRoot = path.join(workspaceHome, "builder");
  const portfolioRoot = process.env.OMB_PORTFOLIO_WORKSPACE || path.join(workspaceHome, "portfolio");

  await fsp.mkdir(workspaceRoot, { recursive: true });
  await fsp.mkdir(portfolioRoot, { recursive: true });
  await cloneWorkspaceIfPossible(portfolioRoot);

  for (const fileName of rootFilesToRefresh) {
    await copyFileIfAvailable(path.join(bundledSiteRoot, fileName), path.join(workspaceRoot, fileName), true);
  }
  for (const fileName of rootFilesToSeed) {
    await copyFileIfAvailable(path.join(bundledSiteRoot, fileName), path.join(workspaceRoot, fileName), false);
  }
  for (const directoryName of directorySeeds) {
    await copyDirectoryMissingFiles(path.join(bundledSiteRoot, directoryName), path.join(workspaceRoot, directoryName));
  }

  for (const fileName of portfolioFilesToSeed) {
    await copyFileIfAvailable(path.join(bundledSiteRoot, fileName), path.join(portfolioRoot, fileName), false);
  }
  await copyFileIfAvailable(path.join(bundledSiteRoot, "portfolio-README.md"), path.join(portfolioRoot, "README.md"), false);
  for (const directoryName of portfolioDirectoriesToSeed) {
    await copyDirectoryMissingFiles(path.join(bundledSiteRoot, directoryName), path.join(portfolioRoot, directoryName));
  }

  return { workspaceRoot, portfolioRoot };
}

async function resolveWorkspaceRoots() {
  const envWorkspace = process.env.OMB_BUILDER_WORKSPACE;
  if (envWorkspace && workspaceLooksUsable(envWorkspace)) {
    return {
      workspaceRoot: envWorkspace,
      portfolioRoot: process.env.OMB_PORTFOLIO_WORKSPACE || path.join(path.dirname(envWorkspace), "portfolio")
    };
  }
  if (!app.isPackaged) {
    const workspaceRoot = path.resolve(__dirname);
    return {
      workspaceRoot,
      portfolioRoot: process.env.OMB_PORTFOLIO_WORKSPACE || workspaceRoot
    };
  }
  const nearbyRepository = findRepositoryNearExecutable();
  if (nearbyRepository) {
    return {
      workspaceRoot: nearbyRepository,
      portfolioRoot: process.env.OMB_PORTFOLIO_WORKSPACE || nearbyRepository
    };
  }
  return preparePackagedWorkspace();
}

function findFreePort() {
  return new Promise((resolve, reject) => {
    const tester = net.createServer();
    tester.once("error", reject);
    tester.listen(0, "127.0.0.1", () => {
      const address = tester.address();
      const port = typeof address === "object" && address ? address.port : 0;
      tester.close(() => resolve(port));
    });
  });
}

async function startBuilderServer(workspaceRoot, portfolioRoot) {
  const port = await findFreePort();
  process.env.PORT = String(port);
  process.env.HOST = "127.0.0.1";
  process.env.OMB_DESKTOP_APP = "1";
  process.env.OMB_BUILDER_WORKSPACE = workspaceRoot;
  process.env.OMB_PORTFOLIO_WORKSPACE = portfolioRoot;
  process.env.OMB_BUILDER_REPOSITORY = defaultRepositoryUrl;
  process.env.OMB_APP_VERSION = app.getVersion();

  const serverPath = path.join(workspaceRoot, "server.mjs");
  await import(`${pathToFileURL(serverPath).href}?desktop=${Date.now()}`);
  return `http://127.0.0.1:${port}`;
}

function createWindow(workspaceRoot, origin) {
  const iconPath = path.join(workspaceRoot, "assets", "omb-app-icon-256.png");
  nativeTheme.themeSource = "light";
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 960,
    minWidth: 980,
    minHeight: 680,
    title: "OMB Portfolio Builder",
    autoHideMenuBar: false,
    icon: fileExists(iconPath) ? iconPath : undefined,
    backgroundColor: "#eef8fd",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  mainWindow.setMenu(createAppMenu(origin));
  mainWindow.setMenuBarVisibility(true);
  mainWindow.setAutoHideMenuBar(false);

  const refreshFullscreenMenu = () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.setMenuBarVisibility(true);
      mainWindow.setAutoHideMenuBar(false);
      mainWindow.setMenu(createAppMenu(origin));
    }
  };
  mainWindow.on("enter-full-screen", refreshFullscreenMenu);
  mainWindow.on("leave-full-screen", refreshFullscreenMenu);

  mainWindow.webContents.on("before-input-event", (event, input) => {
    if (input.key === "F11") {
      event.preventDefault();
      setBuilderFullScreen();
      return;
    }
    if (input.key === "Escape" && mainWindow.isFullScreen()) {
      event.preventDefault();
      setBuilderFullScreen(false);
    }
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith(origin)) return { action: "allow" };
    shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.webContents.on("will-navigate", (event, url) => {
    if (url.startsWith(origin)) return;
    event.preventDefault();
    shell.openExternal(url);
  });

  mainWindow.loadURL(`${origin}/template-preview.html`);
}

async function boot() {
  const gotLock = app.requestSingleInstanceLock();
  if (!gotLock) {
    app.quit();
    return;
  }

  app.on("second-instance", () => {
    if (!mainWindow) return;
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  });

  await app.whenReady();
  try {
    const { workspaceRoot, portfolioRoot } = await resolveWorkspaceRoots();
    builderOrigin = await startBuilderServer(workspaceRoot, portfolioRoot);
    createWindow(workspaceRoot, builderOrigin);
  } catch (error) {
    dialog.showErrorBox("OMB Portfolio Builder could not start", error?.message || String(error));
    app.quit();
  }
}

app.on("window-all-closed", () => {
  app.quit();
});

boot();
