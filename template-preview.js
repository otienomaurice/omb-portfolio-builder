const builderGuideOpen = document.querySelector("#builder-guide-open");
const builderGuideDialog = document.querySelector("#builder-guide-dialog");
const builderGuideClose = document.querySelector("#builder-guide-close");
const builderGuideSearch = document.querySelector("#builder-guide-search");
const builderGuideResults = document.querySelector("#builder-guide-results");
const builderGuideSections = document.querySelector("#builder-guide-sections");
const builderGuideTopicDialog = document.querySelector("#builder-guide-topic-dialog");
const builderGuideTopicTitle = document.querySelector("#builder-guide-topic-title");
const builderGuideTopicBody = document.querySelector("#builder-guide-topic-body");
const builderGuideTopicClose = document.querySelector("#builder-guide-topic-close");
const templateSelect = document.querySelector("#template-select");
const newCategorySelect = document.querySelector("#new-category-select");
const placementSelect = document.querySelector("#placement-select");
const newProjectTitle = document.querySelector("#new-project-title");
const addProjectButton = document.querySelector("#add-project");
const addCategoryButton = document.querySelector("#add-category");
const addSiteSectionButton = document.querySelector("#add-site-section");
const funFactsInput = document.querySelector("#fun-facts-input");
const funFactsCount = document.querySelector("#fun-facts-count");
const saveFunFactsButton = document.querySelector("#save-fun-facts");
const clearFunFactsButton = document.querySelector("#clear-fun-facts");
const siteHeroEyebrowInput = document.querySelector("#site-hero-eyebrow");
const siteHeroTitleInput = document.querySelector("#site-hero-title");
const siteHeroCopyInput = document.querySelector("#site-hero-copy");
const saveSiteContentButton = document.querySelector("#save-site-content");
const profileDisplayNameInput = document.querySelector("#profile-display-name");
const profilePortfolioLabelInput = document.querySelector("#profile-portfolio-label");
const profileContactIntroInput = document.querySelector("#profile-contact-intro");
const profileEmailInput = document.querySelector("#profile-email");
const profilePhoneInput = document.querySelector("#profile-phone");
const profileGithubInput = document.querySelector("#profile-github");
const profileLinkedinInput = document.querySelector("#profile-linkedin");
const profileWebsiteInput = document.querySelector("#profile-website");
const saveProfileContentButton = document.querySelector("#save-profile-content");
const profileImageUploadButton = document.querySelector("#profile-image-upload");
const profileHeroUploadButton = document.querySelector("#profile-hero-upload");
const profileResumeUploadButton = document.querySelector("#profile-resume-upload");
const profileBrandUploadButton = document.querySelector("#profile-brand-upload");
const profileAssetStatus = document.querySelector("#profile-asset-status");
const profileAssetDialog = document.querySelector("#profile-asset-dialog");
const profileAssetTitle = document.querySelector("#profile-asset-title");
const profileAssetBody = document.querySelector("#profile-asset-body");
const profileAssetClose = document.querySelector("#profile-asset-close");
const profileAssetView = document.querySelector("#profile-asset-view");
const profileAssetChange = document.querySelector("#profile-asset-change");
const profileAssetRemove = document.querySelector("#profile-asset-remove");
const profileAssetDone = document.querySelector("#profile-asset-done");
const profileAssetViewDialog = document.querySelector("#profile-asset-view-dialog");
const profileAssetViewTitle = document.querySelector("#profile-asset-view-title");
const profileAssetViewBody = document.querySelector("#profile-asset-view-body");
const profileAssetViewClose = document.querySelector("#profile-asset-view-close");
const profileAssetViewDone = document.querySelector("#profile-asset-view-done");
const profileAssetOpenLink = document.querySelector("#profile-asset-open-link");
const categoryDropdown = document.querySelector("#category-dropdown");
const siteSectionList = document.querySelector("#site-section-list");
const projectCreateDialog = document.querySelector("#project-create-dialog");
const projectCreateForm = document.querySelector("#project-create-form");
const projectCreateCategory = document.querySelector("#project-create-category");
const projectCreateCancel = document.querySelector("#project-create-cancel");
const categoryDialog = document.querySelector("#category-dialog");
const categoryForm = document.querySelector("#category-form");
const categoryDialogTitle = document.querySelector("#category-dialog-title");
const categoryTitle = document.querySelector("#category-title");
const categoryDescription = document.querySelector("#category-description");
const categoryAccent = document.querySelector("#category-accent");
const categoryCancel = document.querySelector("#category-cancel");
const projectTree = document.querySelector("#project-tree");
const projectSearchInput = document.querySelector("#project-search");
const projectSearchClear = document.querySelector("#project-search-clear");
const projectSearchStatus = document.querySelector("#project-search-status");
const projectDialog = document.querySelector("#project-dialog");
const projectWindowTitle = document.querySelector("#project-window-title");
const projectWindowClose = document.querySelector("#project-window-close");
const projectWindowDelete = document.querySelector("#project-window-delete");
const viewProjectPreviewButton = document.querySelector("#view-project-preview");
const saveProjectButton = document.querySelector("#save-project");
const saveProjectCloseButton = document.querySelector("#save-project-close");
const projectTitleMenu = document.querySelector("#project-title-menu");
const categoryTitleMenu = document.querySelector("#category-title-menu");
const titleRenameActions = document.querySelector("#title-rename-actions");
const titleRenameSave = document.querySelector("#title-rename-save");
const titleRenameCancel = document.querySelector("#title-rename-cancel");
const projectMetaDialog = document.querySelector("#project-meta-dialog");
const projectMetaTitle = document.querySelector("#project-meta-title");
const projectMetaGrid = document.querySelector("#project-meta-grid");
const projectMetaClose = document.querySelector("#project-meta-close");
const projectFields = document.querySelector("#project-fields");
const sectionTabs = document.querySelector("#section-tabs");
const projectViewTabsBar = document.querySelector("#project-view-tabs");
const projectViewContextMenu = document.querySelector("#project-view-context-menu");
const sectionContent = document.querySelector("#section-content");
const projectWindowContent = document.querySelector(".project-window-content");
const projectPreviewDialog = document.querySelector("#project-preview-dialog");
const projectPreviewTitle = document.querySelector("#project-preview-title");
const projectPreviewContent = document.querySelector("#project-preview-content");
const projectPreviewClose = document.querySelector("#project-preview-close");
const projectPreviewBack = document.querySelector("#project-preview-back");
const projectPreviewForward = document.querySelector("#project-preview-forward");
const builderFileViewDialog = document.querySelector("#builder-file-view-dialog");
const builderFileViewEyebrow = document.querySelector("#builder-file-view-eyebrow");
const builderFileViewTitle = document.querySelector("#builder-file-view-title");
const builderFileViewContent = document.querySelector("#builder-file-view-content");
const builderFileViewClose = document.querySelector("#builder-file-view-close");
const builderFileViewOpen = document.querySelector("#builder-file-view-open");
const builderFileViewDownload = document.querySelector("#builder-file-view-download");
const openPortfolioPreviewButton = document.querySelector("#open-portfolio-preview");
const saveAllSectionsButton = document.querySelector("#save-all-sections");
const portfolioPreviewDialog = document.querySelector("#portfolio-preview-dialog");
const portfolioPreviewClose = document.querySelector("#portfolio-preview-close");
const appUpdateCheckButton = document.querySelector("#app-update-check");
const securityReportOpen = document.querySelector("#security-report-open");
const securityReportDialog = document.querySelector("#security-report-dialog");
const securityReportBody = document.querySelector("#security-report-body");
const securityReportClose = document.querySelector("#security-report-close");
const securityReportRefresh = document.querySelector("#security-report-refresh");
const securityReportOk = document.querySelector("#security-report-ok");
const publishTargetOpen = document.querySelector("#publish-target-open");
const publishTargetDialog = document.querySelector("#publish-target-dialog");
const publishTargetForm = document.querySelector("#publish-target-form");
const publishTargetClose = document.querySelector("#publish-target-close");
const publishTargetCancel = document.querySelector("#publish-target-cancel");
const publishTargetSync = document.querySelector("#publish-target-sync");
const publishTargetCurrent = document.querySelector("#publish-target-current");
const publishTargetReadinessList = document.querySelector("#publish-target-readiness-list");
const publishTargetCheck = document.querySelector("#publish-target-check");
const publishTargetInstallGit = document.querySelector("#publish-target-install-git");
const publishTargetAuth = document.querySelector("#publish-target-auth");
const publishTargetRepository = document.querySelector("#publish-target-repository");
const publishTargetDomain = document.querySelector("#publish-target-domain");
const publishTargetUsername = document.querySelector("#publish-target-username");
const publishTargetPassword = document.querySelector("#publish-target-password");
const publishResultDialog = document.querySelector("#publish-result-dialog");
const publishResultEyebrow = document.querySelector("#publish-result-eyebrow");
const publishResultTitle = document.querySelector("#publish-result-title");
const publishResultMessage = document.querySelector("#publish-result-message");
const publishResultOutput = document.querySelector("#publish-result-output");
const publishResultClose = document.querySelector("#publish-result-close");
const appUpdateDialog = document.querySelector("#app-update-dialog");
const appUpdateTitle = document.querySelector("#app-update-title");
const appUpdateMessage = document.querySelector("#app-update-message");
const appUpdateDetails = document.querySelector("#app-update-details");
const appUpdateReleaseMeta = document.querySelector("#app-update-release-meta");
const appUpdateClose = document.querySelector("#app-update-close");
const appUpdateLater = document.querySelector("#app-update-later");
const appUpdateSkip = document.querySelector("#app-update-skip");
const appUpdateApply = document.querySelector("#app-update-apply");
const deleteConfirmDialog = document.querySelector("#delete-confirm-dialog");
const deleteConfirmTitle = document.querySelector("#delete-confirm-title");
const deleteConfirmMessage = document.querySelector("#delete-confirm-message");
const deleteConfirmYes = document.querySelector("#delete-confirm-yes");
const deleteConfirmNo = document.querySelector("#delete-confirm-no");
const saveDraftButton = document.querySelector("#save-draft");
const applyCatalogButton = document.querySelector("#apply-catalog");
const builderSaveState = document.querySelector("#builder-save-state");
const lightModeReturnButton = document.querySelector("#light-mode-return");
const builderStatus = document.querySelector("#builder-status");
const workflowSelectedProject = document.querySelector("#workflow-selected-project");
const workflowTotalProjects = document.querySelector("#workflow-total-projects");
const workflowSavedProjects = document.querySelector("#workflow-saved-projects");
const workflowVisibleSections = document.querySelector("#workflow-visible-sections");
const quickOpenSelected = document.querySelector("#quick-open-selected");
const quickPreviewSelected = document.querySelector("#quick-preview-selected");
const portfolioPreviewFrame = document.querySelector("#portfolio-preview-frame");
const filePicker = document.querySelector("#file-picker");
const assetDialog = document.querySelector("#asset-dialog");
const assetForm = document.querySelector("#asset-form");
const assetDialogTitle = document.querySelector("#asset-dialog-title");
const assetSource = document.querySelector("#asset-source");
const assetFile = document.querySelector("#asset-file");
const assetUrl = document.querySelector("#asset-url");
const assetTitle = document.querySelector("#asset-title");
const assetCaption = document.querySelector("#asset-caption");
const captionSource = document.querySelector("#caption-source");
const captionFile = document.querySelector("#caption-file");
const assetDetectedNote = document.querySelector("#asset-detected-note");
const assetCancel = document.querySelector("#asset-cancel");
const sectionDialog = document.querySelector("#section-dialog");
const sectionForm = document.querySelector("#section-form");
const sectionDialogTitle = document.querySelector("#section-dialog-title");
const sectionTitle = document.querySelector("#section-title");
const sectionDescription = document.querySelector("#section-description");
const sectionCancel = document.querySelector("#section-cancel");
const siteLinkDialog = document.querySelector("#site-link-dialog");
const siteLinkForm = document.querySelector("#site-link-form");
const siteLinkEyebrow = document.querySelector("#site-link-eyebrow");
const siteLinkTitle = document.querySelector("#site-link-title");
const siteLinkLabel = document.querySelector("#site-link-label");
const siteLinkUrl = document.querySelector("#site-link-url");
const siteLinkCancel = document.querySelector("#site-link-cancel");
const summaryImageDialog = document.querySelector("#summary-image-dialog");
const summaryImageForm = document.querySelector("#summary-image-form");
const summaryImageSource = document.querySelector("#summary-image-source");
const summaryImageFile = document.querySelector("#summary-image-file");
const summaryImageUrl = document.querySelector("#summary-image-url");
const summaryImageTitle = document.querySelector("#summary-image-title");
const summaryImageCaption = document.querySelector("#summary-image-caption");
const summaryImageAlign = document.querySelector("#summary-image-align");
const summaryImageDisplay = document.querySelector("#summary-image-display");
const summaryImageCrop = document.querySelector("#summary-image-crop");
const summaryImageZoom = document.querySelector("#summary-image-zoom");
const summaryImageCancel = document.querySelector("#summary-image-cancel");
const summaryFormulaDialog = document.querySelector("#summary-formula-dialog");
const summaryFormulaForm = document.querySelector("#summary-formula-form");
const summaryFormulaInput = document.querySelector("#summary-formula-input");
const summaryFormulaAlign = document.querySelector("#summary-formula-align");
const summaryFormulaCancel = document.querySelector("#summary-formula-cancel");
const summaryCodeDialog = document.querySelector("#summary-code-dialog");
const summaryCodeForm = document.querySelector("#summary-code-form");
const summaryCodeLanguage = document.querySelector("#summary-code-language");
const summaryCodePasteMode = document.querySelector("#summary-code-paste-mode");
const summaryCodeInput = document.querySelector("#summary-code-input");
const summaryCodePreview = document.querySelector("#summary-code-preview");
const summaryCodeBeautify = document.querySelector("#summary-code-beautify");
const summaryCodeCancel = document.querySelector("#summary-code-cancel");
const preferencesDialog = document.querySelector("#preferences-dialog");
const preferencesForm = document.querySelector("#preferences-form");
const preferenceTheme = document.querySelector("#preference-theme");
const preferenceCompileTheme = document.querySelector("#preference-compile-theme");
const preferencesClose = document.querySelector("#preferences-close");
const summaryContextMenu = document.querySelector("#summary-context-menu");
const richFontSelect = document.querySelector("#rich-font-select");
const richFontSize = document.querySelector("#rich-font-size");
const richColorInput = document.querySelector("#rich-color-input");
const richContextColorSwatches = document.querySelector("#rich-context-color-swatches");
const richBoldButton = document.querySelector("[data-rich-bold]");
const textSelectionInspector = document.querySelector("#text-selection-inspector");
const selectionTextPreview = document.querySelector("#selection-text-preview");
const selectionFontInput = document.querySelector("#selection-font-input");
const selectionColorInput = document.querySelector("#selection-color-input");
const selectionSizeInput = document.querySelector("#selection-size-input");
const selectionColorPicker = document.querySelector("#selection-color-picker");
const selectionColorSwatches = document.querySelector("#selection-color-swatches");
const templateDialog = document.querySelector("#template-dialog");
const templatePreviewGroup = document.querySelector("#template-preview-group");
const templatePreviewTitle = document.querySelector("#template-preview-title");
const templatePreviewDescription = document.querySelector("#template-preview-description");
const templatePreviewCardTitle = document.querySelector("#template-preview-card-title");
const templatePreviewInteraction = document.querySelector("#template-preview-interaction");
const templatePreviewCard = document.querySelector("#template-preview-card");
const templateVisual = document.querySelector("#template-visual");
const templatePalette = document.querySelector("#template-palette");
const templatePreviewClose = document.querySelector("#template-preview-close");

const standardSections = [
  { id: "brief", label: "Overview", folder: "" },
  { id: "compile-code", label: "Compile Code", folder: "compile-code" }
];

const projectStatusOptions = ["Draft", "In progress", "Completed", "Archived"];

const preferenceStorageKey = "omb-builder-preferences";
const compileThemeIds = [
  "dark-vs",
  "dark-navy",
  "dark-graphite",
  "dark-emerald",
  "dark-violet",
  "light-sky",
  "light-paper"
];
const defaultBuilderPreferences = { theme: "light", compileTheme: "dark-vs", zoom: 1 };
let builderPreferences = { ...defaultBuilderPreferences };
let activeCompileTreeContext = null;
let activeScopeSignalContext = null;
let activeOutputDockDrag = null;
let activeOutputDockResize = null;
let activeCompileSidebarResize = null;
let activeCompileScrollElement = null;
let activeCompileStdinDrag = null;
let activeCompileFileDetailsDrag = null;

const supportedCodeLanguages = [
  { id: "c", label: "C", aliases: ["c"], extensions: [".c", ".h"], defaultFile: "main.c" },
  { id: "cpp", label: "C++", aliases: ["cpp", "c++", "cplusplus"], extensions: [".cpp", ".cc", ".cxx", ".hpp", ".h"], defaultFile: "main.cpp" },
  { id: "verilog", label: "Verilog", aliases: ["verilog", "v"], extensions: [".v"], defaultFile: "design.v" },
  { id: "systemverilog", label: "SystemVerilog", aliases: ["systemverilog", "system verilog", "sv"], extensions: [".sv", ".svh"], defaultFile: "design.sv" },
  { id: "ltspice", label: "LTspice", aliases: ["ltspice", "spice", "cir", "net", "asc"], extensions: [".cir", ".net", ".sp", ".asc"], defaultFile: "simulation.cir" },
  { id: "java", label: "Java", aliases: ["java"], extensions: [".java"], defaultFile: "Main.java" },
  { id: "javascript", label: "JavaScript", aliases: ["javascript", "js", "mjs", "node"], extensions: [".js", ".mjs", ".cjs"], defaultFile: "main.js" },
  { id: "python", label: "Python", aliases: ["python", "py"], extensions: [".py"], defaultFile: "main.py" },
  { id: "html", label: "HTML", aliases: ["html", "htm"], extensions: [".html", ".htm"], defaultFile: "index.html" },
  { id: "text", label: "Text / support file", aliases: ["text", "txt", "plain", "support"], extensions: [".txt", ".md", ".json", ".xml", ".csv", ".log", ".xdc", ".sdc", ".tcl", ".do", ".ini", ".cfg", ".yaml", ".yml"], defaultFile: "notes.txt", allowAnyExtension: true }
];

function isHdlLanguage(language = "") {
  return ["verilog", "systemverilog"].includes(normalizeCodeLanguage(language));
}

function inferCompileFileRole(fileName = "", code = "", language = "") {
  if (!isHdlLanguage(language)) return "source";
  const haystack = `${fileName}\n${code}`.toLowerCase();
  if (/\b(tb|testbench|uvm_test|uvm_env|uvm_component|uvm_sequence)\b|(^|[_-])tb([_-]|\.)|test[_-]?bench|\$dumpfile|\$dumpvars|module\s+tb[_a-z0-9]*/i.test(haystack)) {
    return "testbench";
  }
  return "design";
}

function normalizeCompileFileRole(value = "", language = "") {
  if (!isHdlLanguage(language)) return "source";
  const clean = String(value || "").trim().toLowerCase().replace(/[_\s-]+/g, "");
  return ["tb", "testbench", "bench", "uvm", "uvmtest"].includes(clean) ? "testbench" : "design";
}

function compileFileRoleLabel(role = "source") {
  if (role === "testbench") return "Testbench";
  if (role === "design") return "Design";
  return "Program source";
}

function normalizeCompileFileType(value = "", file = {}) {
  const clean = String(value || "").trim().toLowerCase().replace(/[_\s-]+/g, "-");
  if (["design", "testbench", "source", "header", "include", "support"].includes(clean)) return clean;
  const extension = String(file.fileName || file.relativePath || "").split(".").pop()?.toLowerCase() || "";
  if (isHdlLanguage(file.language)) return normalizeCompileFileRole(file.role || inferCompileFileRole(file.fileName, file.code, file.language), file.language);
  if (["h", "hpp", "hh", "hxx", "svh"].includes(extension)) return "header";
  if (["xdc", "sdc", "tcl", "do", "cfg", "ini", "yaml", "yml", "json", "xml", "md", "txt", "csv", "log"].includes(extension)) return "support";
  return "source";
}

function compileFileTypeLabel(value = "source") {
  const type = normalizeCompileFileType(value);
  if (type === "design") return "HDL design";
  if (type === "testbench") return "HDL testbench";
  if (type === "header") return "Header / include";
  if (type === "include") return "Include file";
  if (type === "support") return "Support file";
  return "Program source";
}

const defaultFunFacts = [];

const defaultSiteContent = {
  heroEyebrow: "Engineering portfolio",
  heroTitle: "Build a portfolio that presents your work clearly.",
  heroCopy: "Add your projects, documents, diagrams, source code, images, profile details, and links.\nSave drafts locally, preview the site, then publish when your target repository is ready."
};

const defaultProfile = {
  brandImage: "",
  brandText: "Portfolio",
  contactIntro: "",
  displayName: "",
  email: "",
  githubUrl: "",
  heroImage: "",
  linkedinUrl: "",
  phone: "",
  portfolioLabel: "Portfolio",
  profileImage: "",
  resumeUrl: "",
  websiteUrl: ""
};

const commonRichFonts = [
  "Arial", "Calibri", "Cambria", "Georgia", "Times New Roman",
  "Verdana", "Tahoma", "Trebuchet MS", "Helvetica", "Garamond",
  "Palatino Linotype", "Courier New", "Consolas", "Lucida Console",
  "Segoe UI", "Inter", "Roboto", "Open Sans", "Lato", "Montserrat"
];
const commonRichColors = [
  "#17202a", "#000000", "#ffffff", "#334155", "#475569",
  "#64748b", "#94a3b8", "#1f6ed4", "#2563eb", "#1d4ed8",
  "#0ea5e9", "#0284c7", "#087f9b", "#0891b2", "#06b6d4",
  "#117c7a", "#0f766e", "#059669", "#16a34a", "#65a30d",
  "#ca8a04", "#eab308", "#f59e0b", "#b45309", "#ea580c",
  "#dc2626", "#b91c1c", "#e11d48", "#be123c", "#db2777",
  "#c026d3", "#9333ea", "#6d28d9", "#4f46e5", "#4338ca",
  "#7c3aed", "#8b5cf6", "#14b8a6", "#22c55e", "#f97316"
];
const commonRichSizes = Array.from({ length: 17 }, (_, index) => String(index + 8));
const persistentPlainStyleFieldIds = new Set([
  "site-hero-eyebrow",
  "site-hero-title",
  "site-hero-copy",
  "profile-display-name",
  "profile-portfolio-label",
  "profile-contact-intro",
  "profile-email",
  "profile-phone",
  "profile-github",
  "profile-linkedin",
  "profile-website"
]);

const defaultSiteSections = [
  {
    id: "professional-profile",
    title: "Professional Profile",
    eyebrow: "Professional profile",
    description: "A focused profile section for resume links, technical identity, career direction, websites, and proof of work.",
    visible: false,
    backgroundImage: "",
    links: [],
    assets: [],
    subsections: [
      {
        id: "engineering-identity",
        title: "Engineering Identity",
        description: "Summarize the kind of engineer you are, the problems you like solving, and the technical areas you want recruiters to associate with your name."
      },
      {
        id: "resume-and-websites",
        title: "Resume and Websites",
        description: "Keep resumes, GitHub profiles, personal websites, publications, or other professional links in one recruiter-friendly location."
      },
      {
        id: "career-direction",
        title: "Career Direction",
        description: "Describe the roles, teams, technologies, and industries you are targeting next."
      }
    ]
  },
  {
    id: "personal-background",
    title: "Personal Background",
    eyebrow: "Personal story",
    description: "A short human section for where you come from, what shaped you, and the values that show up in your work.",
    visible: false,
    backgroundImage: "",
    links: [],
    assets: [],
    subsections: [
      {
        id: "origin-and-home",
        title: "Origin and Home",
        description: "Add the country, community, or places that shaped your point of view."
      },
      {
        id: "education-path",
        title: "Education Path",
        description: "Connect your academic path, hands-on learning, and technical growth."
      },
      {
        id: "values",
        title: "Values",
        description: "Write about the habits and values that guide how you build, collaborate, and learn."
      }
    ]
  },
  {
    id: "life-outside-engineering",
    title: "Life Outside Engineering",
    eyebrow: "Beyond the bench",
    description: "A lighter section for sports, hobbies, creative interests, community, and what you enjoy outside technical work.",
    visible: false,
    backgroundImage: "",
    links: [],
    assets: [],
    subsections: [
      {
        id: "sports",
        title: "Sports",
        description: "Add the sports you play or follow, and what they say about your discipline, teamwork, or personality."
      },
      {
        id: "hobbies",
        title: "Hobbies",
        description: "Add hobbies, creative work, travel, reading, music, or other interests."
      },
      {
        id: "what-i-love",
        title: "What I Love To Do",
        description: "Write the things that make you feel energized and alive outside the formal resume."
      }
    ]
  },
  {
    id: "social-and-contact",
    title: "Social and Contact",
    eyebrow: "Connect",
    description: "A compact connection section for social media, email, phone, GitHub, LinkedIn, and other public profiles.",
    visible: false,
    backgroundImage: "",
    links: [],
    assets: [],
    subsections: [
      {
        id: "primary-contact",
        title: "Primary Contact",
        description: "Keep the fastest ways to reach you here."
      },
      {
        id: "social-media",
        title: "Social Media",
        description: "Add LinkedIn, GitHub, YouTube, personal websites, or other professional social links."
      }
    ]
  }
];

const starterProjectIds = new Set([
  "analog-control-bench-test",
  "fpga-digital-design-lab",
  "embedded-sensor-platform"
]);

const legacyTemplateSkins = {
  "skin-light-blue": "appearance-light-blue-red-click",
  "skin-clean-white": "appearance-white-blue-click",
  "skin-deep-navy": "appearance-deep-navy-cyan-click",
  "skin-red-warm": "appearance-warm-red-pale-click",
  "skin-emerald-instrument": "appearance-emerald-mint-click",
  "skin-amber-power": "appearance-amber-cream-click",
  "skin-violet-mixed": "appearance-violet-lilac-click",
  "skin-graphite-asic": "appearance-graphite-white-click",
  "analog-opamp-topology": "appearance-light-blue-red-click",
  "analog-power-charger": "appearance-amber-cream-click",
  "analog-filter-front-end": "appearance-light-blue-red-click",
  "analog-sensor-interface": "appearance-emerald-mint-click",
  "analog-mixed-signal-timing": "appearance-violet-lilac-click",
  "digital-fpga-pipeline": "appearance-deep-navy-cyan-click",
  "digital-asic-block": "appearance-graphite-white-click",
  "digital-verification-suite": "appearance-graphite-white-click",
  "digital-interface-controller": "appearance-deep-navy-cyan-click",
  "digital-signal-processing": "appearance-violet-lilac-click",
  "embedded-stm32-sensor": "appearance-emerald-mint-click",
  "embedded-rtos-control": "appearance-graphite-white-click",
  "embedded-power-monitor": "appearance-amber-cream-click",
  "embedded-wireless-node": "appearance-deep-navy-cyan-click",
  "embedded-motor-control": "appearance-violet-lilac-click"
};

let catalog = { categories: [], projects: [] };
let savedPortfolioCatalog = { categories: [], projects: [] };
let templates = [];
let selectedProjectId = "";
let activeSectionId = "brief";
let projectViewTabs = [];
let activeProjectViewTabId = "";
let pendingProjectViewContext = null;
let detachedProjectViewWindows = [];
let expandedCategories = new Set();
let pendingCreateCategoryId = "";
let editingCategoryId = "";
let previewRenderTimer = 0;
let chromeRenderTimer = 0;
let pendingEditor = null;
let pendingDeleteAction = null;
let activeProjectPreviewProject = null;
let activeProjectPreviewSectionIndex = -1;
let activeProjectPreviewPath = [];
let activeProjectPreviewForwardStack = [];
let activeCustomSectionView = { sectionId: "", path: [] };
let currentPublishTarget = null;
let summaryEditorProjectId = "";
let activeSummaryEditor = null;
let activeSummaryBlock = null;
let activePlainTextControl = null;
let activePlainTextSelection = null;
let activeRichSelectionRange = null;
let activeTextSelectionRange = null;
let activeStaticSelectionText = "";
const persistentSelectionHighlightName = "builder-text-selection";
let persistentSelectionOverlay = null;
let activeSelectionInspectorDrag = null;
let selectionInspectorWasMoved = false;
let selectionInspectorPointerInside = false;
let selectionGestureActive = false;
let selectionGestureProducedRange = false;
let selectionInspectorRefreshTimer = 0;
let selectionGestureFinishTimer = 0;
let selectionInspectorInputTimer = 0;
let selectionCopyMenu = null;
let activeRichDragBlock = null;
let activeImageCropDrag = null;
let activeRichImageMoveDrag = null;
let activeRichDropMarker = null;
let originalTitleDraft = "";
let titleClickTimer = 0;
let autosaveTimer = 0;
let autosaveInFlight = false;
let autosaveQueued = false;
let draftSavedSinceChanges = false;
let projectSearchQuery = "";
let activeDialogDrag = null;
let activeDialogResize = null;
let activeDetachedProjectViewDrag = null;
let projectWindowBackStack = [];
let projectWindowForwardStack = [];
let suppressProjectWindowHistory = false;
let compileTerminalStatus = "";
let activeProfileAssetKind = "";

function setStatus(message) {
  builderStatus.textContent = message;
}

function setSaveState(state, message) {
  if (!builderSaveState) return;
  builderSaveState.dataset.state = state || "loaded";
  builderSaveState.textContent = message || "Loaded";
}

function projectSearchText(value = "") {
  return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function regexEscape(value = "") {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightSearchText(value = "", query = "") {
  const text = String(value || "");
  const cleanQuery = projectSearchText(query);
  if (!cleanQuery) return escapeHtml(text);
  const matcher = new RegExp(`(${regexEscape(cleanQuery)})`, "ig");
  return escapeHtml(text).replace(matcher, "<mark>$1</mark>");
}

function projectSearchHaystack(project = {}, category = {}) {
  return projectSearchText([
    category.label,
    category.description,
    project.title,
    project.summary,
    project.status,
    project.category,
    project.templateLabel,
    ...(project.focus || []),
    ...(project.highlights || []),
    JSON.stringify(project.sections || []),
    JSON.stringify(project.design || {}),
    JSON.stringify(project.documents || []),
    JSON.stringify(project.tests || []),
    JSON.stringify(project.tools || []),
    JSON.stringify(project.links || []),
    JSON.stringify(project.media || []),
    JSON.stringify(project.compileCode || {})
  ].filter(Boolean).join(" "));
}

function projectMatchesSearch(project, category, query) {
  const cleanQuery = projectSearchText(query);
  if (!cleanQuery) return true;
  return projectSearchHaystack(project, category).includes(cleanQuery);
}

function updateProjectSearchStatus(matchCount = catalog.projects.length) {
  const cleanQuery = projectSearchText(projectSearchQuery);
  if (projectSearchInput && document.activeElement !== projectSearchInput) {
    projectSearchInput.value = projectSearchQuery;
  }
  if (projectSearchClear) projectSearchClear.hidden = !cleanQuery;
  if (!projectSearchStatus) return;
  if (!cleanQuery) {
    projectSearchStatus.textContent = "Showing all projects.";
    return;
  }
  projectSearchStatus.textContent = `${matchCount} matching project${matchCount === 1 ? "" : "s"} for "${projectSearchQuery}".`;
}

function updateBuilderWorkflow() {
  const project = selectedProject();
  const savedIds = new Set((savedPortfolioCatalog.projects || []).map((item) => item.id));
  const savedCount = (catalog.projects || []).filter((projectItem) => savedIds.has(projectItem.id)).length;
  const visibleSections = (catalog.siteSections || []).filter(siteSectionRenderable).length;
  if (workflowSelectedProject) {
    workflowSelectedProject.textContent = project ? project.title || "Untitled project" : "No project selected";
  }
  if (workflowTotalProjects) {
    workflowTotalProjects.textContent = `${catalog.projects.length} project${catalog.projects.length === 1 ? "" : "s"}`;
  }
  if (workflowSavedProjects) {
    workflowSavedProjects.textContent = `${savedCount} parsed`;
  }
  if (workflowVisibleSections) {
    workflowVisibleSections.textContent = `${visibleSections} live section${visibleSections === 1 ? "" : "s"}`;
  }
  [quickOpenSelected, quickPreviewSelected].forEach((button) => {
    if (button) button.disabled = !project;
  });
}

function dialogDragHandles(dialog) {
  return [
    ...dialog.querySelectorAll(".project-dialog-heading, .project-preview-heading, .template-dialog-heading"),
    ...dialog.querySelectorAll(".asset-dialog form > div:first-child")
  ];
}

function dialogWindowActionTarget(handle) {
  return handle.querySelector(".project-window-actions, .section-view-actions") || handle;
}

function updateDialogWindowButtons(dialog) {
  const isMinimized = dialog.classList.contains("is-minimized-dialog");
  const isMaximized = dialog.classList.contains("is-maximized-dialog");
  dialog.querySelectorAll("[data-dialog-minimize='true']").forEach((button) => {
    button.textContent = isMinimized ? "+" : "\u2212";
    button.title = isMinimized ? "Restore window" : "Minimize window";
    button.setAttribute("aria-label", isMinimized ? "Restore window" : "Minimize window");
  });
  dialog.querySelectorAll("[data-dialog-hide='true']").forEach((button) => button.remove());
  dialog.querySelectorAll("[data-dialog-maximize='true']").forEach((button) => {
    button.textContent = isMaximized ? "\u2750" : "\u25a1";
    button.title = isMaximized ? "Restore size" : "Maximize window";
    button.setAttribute("aria-label", isMaximized ? "Restore size" : "Maximize window");
  });
  dialog.querySelectorAll("[data-dialog-back='true']").forEach((button) => {
    button.disabled = !dialogCanStepBack(dialog);
  });
  dialog.querySelectorAll("[data-dialog-forward='true']").forEach((button) => {
    button.disabled = !dialogCanStepForward(dialog);
  });
}

function dialogTitleForDock(dialog) {
  return dialog.querySelector("h2")?.textContent?.trim() || "Window";
}

function makeDialogControl(action, label, title) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `dialog-window-control dialog-window-${action}-control`;
  button.dataset.dialogAction = action;
  button.textContent = label;
  button.title = title;
  button.setAttribute("aria-label", title);
  return button;
}

function ensureDialogLeftControls(dialog, handle) {
  if (handle.querySelector(".dialog-window-left-controls")) return;
  const titlebar = handle.querySelector(".section-view-titlebar");
  const controls = document.createElement("div");
  controls.className = "dialog-window-left-controls";

  if (titlebar?.querySelector(".section-view-back, .section-view-forward")) {
    const refresh = makeDialogControl("refresh", "\u21bb", "Refresh window");
    refresh.dataset.dialogRefresh = "true";
    controls.append(refresh);
    titlebar.prepend(controls);
  } else {
    [
      makeDialogControl("back", "\u2190", "Back"),
      makeDialogControl("forward", "\u2192", "Forward"),
      makeDialogControl("refresh", "\u21bb", "Refresh window")
    ].forEach((button) => {
      button.dataset[`dialog${button.dataset.dialogAction[0].toUpperCase()}${button.dataset.dialogAction.slice(1)}`] = "true";
      controls.append(button);
    });
    handle.prepend(controls);
  }
}

function ensureDialogWindowControls(dialog, handle) {
  dialog.querySelectorAll(".dialog-minimize-button").forEach((button) => button.remove());
  ensureDialogLeftControls(dialog, handle);
  const target = dialogWindowActionTarget(handle);
  let cluster = target.querySelector(".dialog-window-control-cluster");
  if (!cluster) {
    cluster = document.createElement("div");
    cluster.className = "dialog-window-control-cluster";
    target.append(cluster);
  }

  const projectWindowUsesNativeSizing = dialog === projectDialog || dialog === projectPreviewDialog;
  cluster.querySelectorAll("[data-dialog-hide='true']").forEach((button) => button.remove());
  if (projectWindowUsesNativeSizing) {
    cluster.querySelectorAll("[data-dialog-minimize='true'], [data-dialog-maximize='true']").forEach((button) => button.remove());
  }
  if (!projectWindowUsesNativeSizing && !cluster.querySelector("[data-dialog-minimize='true']")) {
    const minimize = makeDialogControl("minimize", "\u2212", "Minimize window");
    minimize.dataset.dialogMinimize = "true";
    cluster.append(minimize);
  }
  if (!projectWindowUsesNativeSizing && !cluster.querySelector("[data-dialog-maximize='true']")) {
    const maximize = makeDialogControl("maximize", "\u25a1", "Maximize window");
    maximize.dataset.dialogMaximize = "true";
    cluster.append(maximize);
  }

  let closeButton = cluster.querySelector(".project-window-close, .close-control, [data-dialog-close='true']");
  if (!closeButton) {
    closeButton = [...dialog.querySelectorAll(".project-window-close, .close-control")]
      .find((button) => button.closest(".project-dialog-heading, .project-preview-heading, .template-dialog-heading, .asset-dialog form > div:first-child") === handle);
  }
  if (closeButton) {
    closeButton.classList.add("dialog-window-control", "dialog-close-button");
    closeButton.dataset.dialogAction = "close";
    closeButton.dataset.dialogClose = "true";
    cluster.append(closeButton);
  } else {
    const cloneClose = makeDialogControl("close", "\u00d7", "Close window");
    cloneClose.classList.add("project-window-close", "dialog-close-button");
    cloneClose.dataset.dialogClose = "true";
    cluster.append(cloneClose);
  }
  updateDialogWindowButtons(dialog);
}

function ensureDialogResizeHandles(dialog) {
  if (dialog.querySelector("[data-dialog-resize-handle]")) return;
  ["n", "e", "s", "w", "ne", "nw", "se", "sw"].forEach((direction) => {
    const handle = document.createElement("div");
    handle.className = `dialog-resize-handle resize-${direction}`;
    handle.dataset.dialogResizeHandle = direction;
    handle.setAttribute("aria-hidden", "true");
    dialog.append(handle);
  });
}

function markDialogDragHandles(dialog) {
  dialogDragHandles(dialog).forEach((handle) => {
    handle.dataset.dialogDragHandle = "true";
    handle.title = handle.title || "Drag to move this window";
    ensureDialogWindowControls(dialog, handle);
  });
  ensureDialogResizeHandles(dialog);
}

function draggableDialogFromEvent(event) {
  if (event.target.closest("[data-dialog-resize-handle]")) return null;
  const handle = event.target.closest("[data-dialog-drag-handle='true']");
  if (!handle) return null;
  const dialog = handle.closest("dialog");
  if (!dialog?.open) return null;
  if (dialog.classList.contains("is-hidden-dialog")) return null;
  if (event.target.closest("button, a, input, textarea, select, label, summary, [contenteditable='true']")) return null;
  return dialog;
}

function clampDialogPosition(left, top, dialog) {
  const rect = dialog.getBoundingClientRect();
  const margin = 12;
  const maxLeft = Math.max(margin, window.innerWidth - rect.width - margin);
  const maxTop = Math.max(margin, window.innerHeight - rect.height - margin);
  return {
    left: Math.min(Math.max(left, margin), maxLeft),
    top: Math.min(Math.max(top, margin), maxTop)
  };
}

function anchorDialogForDrag(dialog) {
  const rect = dialog.getBoundingClientRect();
  const position = clampDialogPosition(rect.left, rect.top, dialog);
  dialog.classList.add("is-draggable-dialog");
  dialog.style.left = `${position.left}px`;
  dialog.style.top = `${position.top}px`;
  dialog.style.right = "auto";
  dialog.style.bottom = "auto";
  dialog.style.margin = "0";
}

function saveDialogRestoreState(dialog) {
  if (dialog.dataset.restoreWindowState) return;
  const rect = dialog.getBoundingClientRect();
  dialog.dataset.restoreWindowState = JSON.stringify({
    bottom: dialog.style.bottom || "",
    height: dialog.style.height || `${rect.height}px`,
    left: dialog.style.left || `${rect.left}px`,
    margin: dialog.style.margin || "",
    maxHeight: dialog.style.maxHeight || "",
    right: dialog.style.right || "",
    top: dialog.style.top || `${rect.top}px`,
    width: dialog.style.width || `${rect.width}px`
  });
}

function restoreDialogWindowState(dialog) {
  let state = null;
  try {
    state = JSON.parse(dialog.dataset.restoreWindowState || "null");
  } catch {
    state = null;
  }
  delete dialog.dataset.restoreWindowState;
  if (!state) {
    dialog.removeAttribute("style");
    return;
  }
  Object.entries(state).forEach(([key, value]) => {
    dialog.style[key] = value;
  });
}

function anchorDialogForResize(dialog) {
  anchorDialogForDrag(dialog);
  const rect = dialog.getBoundingClientRect();
  dialog.classList.add("is-resized-dialog");
  dialog.style.width = `${rect.width}px`;
  dialog.style.height = `${rect.height}px`;
  dialog.style.maxHeight = "none";
}

function resizeDialogBounds(state, event) {
  const margin = 12;
  const direction = state.direction;
  const minWidth = Math.min(320, Math.max(180, window.innerWidth - margin * 2));
  const minHeight = Math.min(170, Math.max(120, window.innerHeight - margin * 2));
  let { left, top, width, height } = state.rect;
  const dx = event.clientX - state.startX;
  const dy = event.clientY - state.startY;

  if (direction.includes("e")) {
    width = Math.min(Math.max(state.rect.width + dx, minWidth), window.innerWidth - left - margin);
  }
  if (direction.includes("s")) {
    height = Math.min(Math.max(state.rect.height + dy, minHeight), window.innerHeight - top - margin);
  }
  if (direction.includes("w")) {
    const right = state.rect.left + state.rect.width;
    left = Math.min(Math.max(state.rect.left + dx, margin), right - minWidth);
    width = right - left;
  }
  if (direction.includes("n")) {
    const bottom = state.rect.top + state.rect.height;
    top = Math.min(Math.max(state.rect.top + dy, margin), bottom - minHeight);
    height = bottom - top;
  }

  return { height, left, top, width };
}

function beginDialogResize(event) {
  if (event.button !== 0) return;
  const handle = event.target.closest("[data-dialog-resize-handle]");
  const dialog = handle?.closest("dialog");
  if (!handle || !dialog?.open || dialog.classList.contains("is-minimized-dialog") || dialog.classList.contains("is-hidden-dialog")) return;
  anchorDialogForResize(dialog);
  activeDialogResize = {
    dialog,
    direction: handle.dataset.dialogResizeHandle,
    pointerId: event.pointerId,
    pointerTarget: event.target,
    rect: dialog.getBoundingClientRect(),
    startX: event.clientX,
    startY: event.clientY
  };
  event.target.setPointerCapture?.(event.pointerId);
  dialog.classList.add("is-resizing-dialog");
  event.preventDefault();
}

function moveDialogResize(event) {
  if (!activeDialogResize) return;
  const next = resizeDialogBounds(activeDialogResize, event);
  activeDialogResize.dialog.style.left = `${next.left}px`;
  activeDialogResize.dialog.style.top = `${next.top}px`;
  activeDialogResize.dialog.style.width = `${next.width}px`;
  activeDialogResize.dialog.style.height = `${next.height}px`;
}

function endDialogResize() {
  if (!activeDialogResize) return;
  activeDialogResize.pointerTarget?.releasePointerCapture?.(activeDialogResize.pointerId);
  activeDialogResize.dialog.classList.remove("is-resizing-dialog");
  activeDialogResize = null;
}

function beginDialogDrag(event) {
  if (event.button !== 0) return;
  const dialog = draggableDialogFromEvent(event);
  if (!dialog) return;
  anchorDialogForDrag(dialog);
  const rect = dialog.getBoundingClientRect();
  activeDialogDrag = {
    dialog,
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
    pointerId: event.pointerId,
    pointerTarget: event.target
  };
  event.target.setPointerCapture?.(event.pointerId);
  dialog.classList.add("is-dragging-dialog");
  event.preventDefault();
}

function moveDialogDrag(event) {
  if (!activeDialogDrag) return;
  const next = clampDialogPosition(
    event.clientX - activeDialogDrag.offsetX,
    event.clientY - activeDialogDrag.offsetY,
    activeDialogDrag.dialog
  );
  activeDialogDrag.dialog.style.left = `${next.left}px`;
  activeDialogDrag.dialog.style.top = `${next.top}px`;
}

function endDialogDrag() {
  if (!activeDialogDrag) return;
  activeDialogDrag.pointerTarget?.releasePointerCapture?.(activeDialogDrag.pointerId);
  activeDialogDrag.dialog.classList.remove("is-dragging-dialog");
  activeDialogDrag = null;
}

function toggleDialogMinimized(dialog) {
  if (!dialog) return;
  if (dialog.classList.contains("is-hidden-dialog")) dialog.classList.remove("is-hidden-dialog");
  anchorDialogForDrag(dialog);
  dialog.classList.remove("is-maximized-dialog");
  dialog.classList.toggle("is-minimized-dialog");
  updateDialogWindowButtons(dialog);
}

function toggleDialogMaximized(dialog) {
  if (!dialog) return;
  if (dialog.classList.contains("is-hidden-dialog")) dialog.classList.remove("is-hidden-dialog");
  if (dialog.classList.contains("is-maximized-dialog")) {
    dialog.classList.remove("is-maximized-dialog");
    restoreDialogWindowState(dialog);
  } else {
    saveDialogRestoreState(dialog);
    dialog.classList.remove("is-minimized-dialog");
    dialog.classList.add("is-draggable-dialog", "is-maximized-dialog");
    dialog.style.left = "0";
    dialog.style.top = "0";
    dialog.style.right = "auto";
    dialog.style.bottom = "auto";
    dialog.style.margin = "0";
    dialog.style.width = "100vw";
    dialog.style.height = "100dvh";
    dialog.style.maxHeight = "none";
  }
  updateDialogWindowButtons(dialog);
}

function toggleDialogHidden(dialog) {
  if (!dialog) return;
  if (dialog.classList.contains("is-hidden-dialog")) {
    dialog.classList.remove("is-hidden-dialog");
    restoreDialogWindowState(dialog);
  } else {
    saveDialogRestoreState(dialog);
    dialog.classList.remove("is-minimized-dialog", "is-maximized-dialog");
    dialog.classList.add("is-draggable-dialog", "is-hidden-dialog");
    dialog.style.left = "auto";
    dialog.style.top = "auto";
    dialog.style.right = "12px";
    dialog.style.bottom = "10px";
    dialog.style.margin = "0";
    dialog.style.width = "min(300px, calc(100vw - 24px))";
    dialog.style.height = "32px";
    dialog.style.maxHeight = "32px";
  }
  updateDialogWindowButtons(dialog);
}

function dialogCanStepBack(dialog) {
  if (dialog === projectDialog) return projectWindowBackStack.length > 0;
  if (dialog === projectPreviewDialog) return activeProjectPreviewSectionIndex >= 0;
  return false;
}

function dialogCanStepForward(dialog) {
  if (dialog === projectDialog) return projectWindowForwardStack.length > 0;
  if (dialog === projectPreviewDialog) return activeProjectPreviewForwardStack.length > 0;
  return false;
}

function renderProjectWindowSectionFromHistory(sectionId) {
  suppressProjectWindowHistory = true;
  applyProjectWindowStateKey(sectionId || "brief");
  pendingEditor = null;
  renderAll();
  suppressProjectWindowHistory = false;
  updateDialogWindowButtons(projectDialog);
}

function stepProjectWindowBack() {
  if (!projectWindowBackStack.length) return;
  projectWindowForwardStack.push(projectWindowStateKey());
  renderProjectWindowSectionFromHistory(projectWindowBackStack.pop());
}

function stepProjectWindowForward() {
  if (!projectWindowForwardStack.length) return;
  projectWindowBackStack.push(projectWindowStateKey());
  renderProjectWindowSectionFromHistory(projectWindowForwardStack.pop());
}

function refreshDialogWindow(dialog) {
  saveVisibleRichEditors();
  if (dialog === projectPreviewDialog) {
    refreshOpenPreviews();
  } else if (dialog === portfolioPreviewDialog) {
    renderPreview();
  } else if (dialog === projectDialog) {
    renderAll();
  }
  setStatus("Window refreshed.");
  updateDialogWindowButtons(dialog);
}

function closeDialogFromControl(dialog, button) {
  const originalClose = [...dialog.querySelectorAll(".project-window-close, .close-control")]
    .find((item) => item !== button && !item.dataset.dialogClose);
  if (originalClose && !button.classList.contains("close-control") && !button.id) {
    originalClose.click();
    return;
  }
  closeDialogElement(dialog, "close");
}

function handleDialogWindowAction(button) {
  const dialog = button.closest("dialog");
  if (!dialog?.open) return;
  const action = button.dataset.dialogAction;
  if (action === "hide") toggleDialogMinimized(dialog);
  if (action === "minimize") toggleDialogMinimized(dialog);
  if (action === "maximize") toggleDialogMaximized(dialog);
  if (action === "refresh") refreshDialogWindow(dialog);
  if (action === "back") {
    if (dialog === projectDialog) stepProjectWindowBack();
    else if (dialog === projectPreviewDialog) projectPreviewBackStep();
  }
  if (action === "forward") {
    if (dialog === projectDialog) stepProjectWindowForward();
    else if (dialog === projectPreviewDialog) projectPreviewForwardStep();
  }
  if (action === "close") closeDialogFromControl(dialog, button);
}

function enableDraggableDialogs() {
  document.querySelectorAll("dialog").forEach(markDialogDragHandles);
  document.addEventListener("pointerdown", beginDialogResize);
  document.addEventListener("pointerdown", beginDialogDrag);
  document.addEventListener("pointermove", moveDialogResize);
  document.addEventListener("pointermove", moveDialogDrag);
  document.addEventListener("pointerup", endDialogResize);
  document.addEventListener("pointerup", endDialogDrag);
  document.addEventListener("pointercancel", endDialogResize);
  document.addEventListener("pointercancel", endDialogDrag);
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-dialog-action]");
    if (!button) return;
    handleDialogWindowAction(button);
  });
  document.addEventListener("click", (event) => {
    const hiddenDialog = event.target.closest("dialog.is-hidden-dialog");
    if (!hiddenDialog || event.target.closest("button")) return;
    toggleDialogHidden(hiddenDialog);
  });
  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("close", () => {
      dialog.classList.remove("is-minimized-dialog");
      dialog.classList.remove("is-hidden-dialog");
      dialog.classList.remove("is-maximized-dialog");
      dialog.classList.remove("is-resizing-dialog");
      delete dialog.dataset.restoreWindowState;
      updateDialogWindowButtons(dialog);
    });
  });
  window.addEventListener("resize", () => {
    document.querySelectorAll("dialog.is-draggable-dialog[open]").forEach((dialog) => {
      const rect = dialog.getBoundingClientRect();
      const next = clampDialogPosition(rect.left, rect.top, dialog);
      dialog.style.left = `${next.left}px`;
      dialog.style.top = `${next.top}px`;
    });
  });
}

function markDraftNeedsSave() {
  draftSavedSinceChanges = false;
  setSaveState("dirty", "Save draft needed");
}

function showBuilderError(title, message, details = "") {
  publishResultEyebrow.textContent = "Builder check";
  publishResultTitle.textContent = title;
  publishResultMessage.textContent = message;
  publishResultOutput.textContent = details;
  publishResultDialog.showModal();
}

const APP_UPDATE_CHECK_INTERVAL_MS = 4 * 60 * 60 * 1000;
const APP_UPDATE_FOCUS_RECHECK_MS = 60 * 60 * 1000;
const APP_UPDATE_SNOOZE_MS = 12 * 60 * 60 * 1000;
let lastAppUpdateCheckAt = 0;
let pendingAppUpdate = null;

function appUpdateWasSnoozed(version = "") {
  if (!version) return false;
  const snoozedVersion = localStorage.getItem("omb-snoozed-update-version") || "";
  const snoozedAt = Number(localStorage.getItem("omb-snoozed-update-at") || 0);
  return snoozedVersion === version && Date.now() - snoozedAt < APP_UPDATE_SNOOZE_MS;
}

function shouldShowUpdateDialog(update = {}) {
  if (!update.updateAvailable || !update.latestVersion) return false;
  const skippedVersion = localStorage.getItem("omb-skipped-update-version") || localStorage.getItem("omb-dismissed-update-version") || "";
  if (skippedVersion === update.latestVersion) return false;
  return !appUpdateWasSnoozed(update.latestVersion);
}

function showUpdateDialog(update = {}, options = {}) {
  const force = Boolean(options.force);
  if (!appUpdateDialog || (!force && !shouldShowUpdateDialog(update))) return;
  pendingAppUpdate = update;
  const hasInstaller = Boolean(update.installerUrl);
  const updateBlocked = Boolean(update.updateBlocked);
  const hasUpdate = Boolean(update.updateAvailable && update.latestVersion);
  appUpdateTitle.textContent = updateBlocked ? "Update paused" : hasUpdate ? "Update available" : "Builder is up to date";
  appUpdateMessage.textContent = updateBlocked
    ? `OMB Portfolio Builder ${update.latestVersion || "this release"} is available, but this version is paused for automatic updates.`
    : hasUpdate
    ? `OMB Portfolio Builder ${update.latestVersion} is available. You are running ${update.currentVersion || "an older version"}.`
    : `You are running OMB Portfolio Builder ${update.currentVersion || "the current installed version"}.`;
  appUpdateDetails.textContent = updateBlocked
    ? (update.blockedReason || "This release is temporarily blocked from automatic updates. Check again after the next release is available.")
    : hasUpdate
    ? "Choose Update to download the latest installer, close this app, and install the new version automatically. Remind me later postpones the prompt; Skip this version ignores this release."
    : "No newer released builder was found on GitHub Releases.";
  appUpdateReleaseMeta.innerHTML = (hasUpdate || updateBlocked)
    ? [
      `<span>Current version: ${escapeHtml(update.currentVersion || "unknown")}</span>`,
      `<span>Available version: ${escapeHtml(update.latestVersion || "unknown")}</span>`,
      update.releaseUrl ? `<span>Release source: GitHub Releases</span>` : ""
    ].filter(Boolean).join("")
    : [
      `<span>Current version: ${escapeHtml(update.currentVersion || "unknown")}</span>`,
      update.checkedAt ? `<span>Checked: ${escapeHtml(update.checkedAt)}</span>` : ""
    ].filter(Boolean).join("");
  appUpdateLater.textContent = hasUpdate ? "Remind me later" : "Close";
  appUpdateSkip.hidden = !hasUpdate;
  appUpdateApply.hidden = !hasUpdate;
  appUpdateApply.disabled = hasUpdate && !hasInstaller;
  appUpdateApply.textContent = hasInstaller ? "Update" : "Open release page";
  if (appUpdateDialog.open) return;
  try {
    appUpdateDialog.showModal();
  } catch {
    appUpdateDialog.show();
  }
}

async function startAppUpdateInstall() {
  const update = pendingAppUpdate || {};
  appUpdateApply.disabled = true;
  appUpdateLater.disabled = true;
  appUpdateSkip.disabled = true;
  appUpdateApply.textContent = "Updating...";
  appUpdateDetails.textContent = "Downloading the installer. The builder will close automatically, then the installer will update the app.";
  try {
    const response = await fetch(`/api/app-update/install?t=${Date.now()}`, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ latestVersion: update.latestVersion || "" })
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "The update could not be started.");
    appUpdateMessage.textContent = "Update started";
    appUpdateDetails.textContent = "The installer is ready. This window will close so the new version can be installed.";
  } catch (error) {
    appUpdateApply.disabled = false;
    appUpdateLater.disabled = false;
    appUpdateSkip.disabled = false;
    appUpdateApply.textContent = "Update";
    appUpdateDetails.textContent = error.message || "The update could not be started.";
    const fallback = update.releaseUrl || update.installerUrl || update.portableUrl || "";
    if (fallback) {
      showBuilderError(
        "Automatic update could not start",
        "The app could not run the installer automatically. The release page can still be opened manually.",
        fallback
      );
    }
  }
}

async function checkForAppUpdates(options = {}) {
  const force = Boolean(options.force);
  const manual = Boolean(options.manual);
  if (!force && Date.now() - lastAppUpdateCheckAt < 5 * 60 * 1000) return;
  lastAppUpdateCheckAt = Date.now();
  if (manual) {
    if (appUpdateCheckButton) {
      appUpdateCheckButton.disabled = true;
      appUpdateCheckButton.textContent = "Checking...";
    }
  }
  try {
    const response = await fetch(`/api/app-update?t=${Date.now()}`, { cache: "no-store" });
    const update = await response.json();
    if (response.ok && update.ok !== false) {
      showUpdateDialog({ ...update, checkedAt: new Date().toLocaleString() }, { force: manual });
    } else if (manual) {
      showUpdateDialog({
        currentVersion: update.currentVersion || "unknown",
        updateAvailable: false,
        checkedAt: new Date().toLocaleString()
      }, { force: true });
    }
  } catch {
    if (manual) {
      showUpdateDialog({
        currentVersion: "unknown",
        updateAvailable: false,
        checkedAt: new Date().toLocaleString()
      }, { force: true });
    }
    // Update checks should never interrupt builder work.
  } finally {
    if (manual) {
      if (appUpdateCheckButton) {
        appUpdateCheckButton.disabled = false;
        appUpdateCheckButton.textContent = "Check updates";
      }
    }
  }
}

function formatReportDate(value = "") {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toLocaleString();
}

function renderSecurityReport(report = {}) {
  if (!securityReportBody) return;
  const downloads = report.appDownloads || {};
  const assets = Array.isArray(downloads.assets) ? downloads.assets : [];
  const auth = report.publishingAuth || {};
  const access = report.websiteAccess || {};
  const controls = Array.isArray(report.securityControls) ? report.securityControls : [];
  const assetRows = assets.length
    ? assets.map((asset) => `
        <li>
          <span>${escapeHtml(asset.name || "Release asset")}</span>
          <span>${Number(asset.downloadCount || 0).toLocaleString()} downloads</span>
        </li>
      `).join("")
    : `<li><span>No release assets found</span><span>0 downloads</span></li>`;
  securityReportBody.innerHTML = `
    <div class="security-report-grid">
      <section class="security-report-card">
        <h3>Builder downloads</h3>
        <strong>${downloads.ok ? Number(downloads.totalDownloads || 0).toLocaleString() : "Unavailable"}</strong>
        <p>${downloads.ok
          ? `Latest release: ${escapeHtml(downloads.releaseTag || downloads.releaseName || "latest")}`
          : escapeHtml(downloads.error || "GitHub release counts are not available.")}</p>
        <ul class="security-report-assets">${assetRows}</ul>
      </section>
      <section class="security-report-card">
        <h3>Publishing authorization</h3>
        <strong>${auth.authenticated ? "Active" : "Not active"}</strong>
        <p>${auth.authenticated
          ? `This builder has a remembered GitHub publishing session until ${escapeHtml(formatReportDate(auth.expiresAt) || auth.expiresAt || "the cache expires")}.`
          : "No fresh GitHub publishing session is cached for the current target."}</p>
        <ul>
          <li>Target: ${escapeHtml(auth.targetRepository || "No publishing target saved")}</li>
          <li>Branch: ${escapeHtml(auth.branch || "Not set")}</li>
          <li>Successful authorizations this week: ${Number(auth.successCountLastWeek || 0).toLocaleString()}</li>
        </ul>
      </section>
      <section class="security-report-card">
        <h3>Website access reporting</h3>
        <strong>${access.available ? "Configured" : "Needs Cloudflare"}</strong>
        <p>${escapeHtml(access.summary || "Visitor and IP reporting needs a server-side analytics source.")}</p>
        <ul>${(access.recommendedSetup || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
      <section class="security-report-card">
        <h3>Security controls</h3>
        <strong>${controls.length.toLocaleString()}</strong>
        <p>Controls currently enabled or prepared for publishing.</p>
        <ul>${controls.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
    </div>
    <p>Generated ${escapeHtml(formatReportDate(report.generatedAt) || "just now")}.</p>
  `;
}

async function openSecurityReport() {
  if (!securityReportDialog || !securityReportBody) return;
  securityReportBody.innerHTML = "<p>Loading security report...</p>";
  if (!securityReportDialog.open) securityReportDialog.showModal();
  updateDialogWindowButtons(securityReportDialog);
  try {
    const response = await fetch(`/api/security-report?t=${Date.now()}`, { cache: "no-store" });
    const report = await response.json();
    if (!response.ok || report.ok === false) throw new Error(report.error || "Security report could not be loaded.");
    renderSecurityReport(report);
  } catch (error) {
    securityReportBody.innerHTML = `
      <div class="security-report-card">
        <h3>Security report unavailable</h3>
        <p>${escapeHtml(error.message || "The report could not be loaded.")}</p>
      </div>
    `;
  }
}

function scheduleAppUpdateChecks() {
  checkForAppUpdates({ force: true });
  window.setInterval(() => checkForAppUpdates({ force: true }), APP_UPDATE_CHECK_INTERVAL_MS);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") return;
    if (Date.now() - lastAppUpdateCheckAt >= APP_UPDATE_FOCUS_RECHECK_MS) {
      checkForAppUpdates({ force: true });
    }
  });
}

function renderPublishTargetInfo(target = {}) {
  if (!publishTargetCurrent) return;
  currentPublishTarget = target;
  const checkedText = target.checkedAt ? ` at ${new Date(target.checkedAt).toLocaleString()}` : "";
  const expiresText = target.expiresAt ? `; remembered until ${new Date(target.expiresAt).toLocaleString()}` : "";
  const trustText = target.extendedTrust ? " (30-day trusted target)" : target.authorizationCached ? " (daily cache)" : "";
  const authorizationStatus = target.authorizationChecked
    ? `Verified${checkedText}${trustText}${expiresText}`
    : "Not verified for this repository and branch";
  const rows = [
    ["Builder workspace", target.workspace || "Not available"],
    ["Portfolio workspace", target.portfolioWorkspace || target.workspace || "Not available"],
    ["Repository", target.repository || target.remote || "No repository connected"],
    ["Branch", target.branch || "No branch selected"],
    ["GitHub authorization", authorizationStatus],
    ["Compatible site", target.compatible ? "Yes" : "No"],
    ["Git-backed", target.gitBacked ? "Yes" : "No"]
  ];
  publishTargetCurrent.innerHTML = rows
    .map(([label, value]) => `<div><strong>${escapeHtml(label)}</strong><span>${escapeHtml(value)}</span></div>`)
    .join("");
  if (publishTargetRepository) {
    publishTargetRepository.value = target.remote || "";
    publishTargetRepository.dataset.loadedValue = target.remote || "";
  }
  if (publishTargetSync) publishTargetSync.disabled = !target.authorizationChecked;
}

function renderSystemReadiness(system = {}, target = {}) {
  if (!publishTargetReadinessList) return;
  const rows = [
    {
      ok: true,
      text: `Electron/Node runtime: bundled with the app${system.nodeRuntime?.version ? ` (${system.nodeRuntime.version})` : ""}.`
    },
    {
      ok: system.pnpm?.required === false,
      text: "pnpm: not required for installed users."
    },
    {
      ok: Boolean(system.git?.ok),
      text: system.git?.ok
        ? `Git for Windows: ${system.git.version || "installed"}.`
        : "Git for Windows: missing. Install it before loading or publishing a target."
    },
    {
      ok: Boolean(system.credentialManager?.ok),
      text: system.credentialManager?.ok
        ? `Git Credential Manager: ${system.credentialManager.version || "installed"}.`
        : "Git Credential Manager: missing. Install Git for Windows with Git Credential Manager enabled."
    },
    {
      ok: Boolean(target?.remote),
      text: target?.remote
        ? `Publishing target: ${target.repository || target.remote}.`
        : "Publishing target: enter a repository URL and click Authenticate target."
    },
    {
      ok: Boolean(target?.authorizationChecked),
      text: target?.authorizationChecked
        ? `GitHub authorization: verified for ${target.branch || "the selected branch"}${target.expiresAt ? ` until ${new Date(target.expiresAt).toLocaleString()}` : ""}.`
        : "GitHub authorization: required before Load from target or Apply to site."
    }
  ];
  publishTargetReadinessList.innerHTML = rows
    .map((row) => `<li class="${row.ok ? "ready" : "blocked"}">${escapeHtml(row.ok ? `OK - ${row.text}` : `Needs action - ${row.text}`)}</li>`)
    .join("");
}

function markPublishTargetNeedsAuthentication() {
  if (publishTargetSync) publishTargetSync.disabled = true;
  if (currentPublishTarget) {
    currentPublishTarget = {
      ...currentPublishTarget,
      authorizationChecked: false,
      authorizationCached: false
    };
  }
}

async function loadSystemReadiness() {
  if (!publishTargetReadinessList) return;
  publishTargetReadinessList.innerHTML = "<li>Checking local publishing tools...</li>";
  try {
    const response = await fetch(`/api/system-check?t=${Date.now()}`, { cache: "no-store" });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "System check failed.");
    renderSystemReadiness(result.system || {}, result.target || currentPublishTarget || {});
  } catch (error) {
    publishTargetReadinessList.innerHTML = `<li class="blocked">${escapeHtml(error.message || "System check failed.")}</li>`;
  }
}

function setPublishTargetProgress(title, steps = []) {
  if (!publishTargetCurrent) return;
  publishTargetCurrent.innerHTML = `
    <div><strong>${escapeHtml(title)}</strong><span>${escapeHtml(new Date().toLocaleTimeString())}</span></div>
    ${steps.map((step) => `<div><strong>${escapeHtml(step.label)}</strong><span>${escapeHtml(step.value)}</span></div>`).join("")}
  `;
}

async function loadPublishTargetInfo() {
  if (!publishTargetDialog) return;
  publishTargetCurrent.textContent = "Current target is loading.";
  try {
    const response = await fetch(`/api/publish-target?t=${Date.now()}`, { cache: "no-store" });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Publishing target could not be loaded.");
    renderPublishTargetInfo(result.target || {});
  } catch (error) {
    publishTargetCurrent.textContent = error.message || "Publishing target could not be loaded.";
  }
}

async function openPublishTargetDialog() {
  await loadPublishTargetInfo();
  await loadSystemReadiness();
  publishTargetDialog.showModal();
}

async function savePublishTarget(event) {
  event.preventDefault();
  await authenticatePublishTarget({ fromSave: true });
}

function currentPublishTargetPayload() {
  return {
    repositoryUrl: publishTargetRepository?.value || ""
  };
}

async function installGitForPublishing() {
  publishTargetCurrent.textContent = "Starting Git for Windows setup...";
  try {
    const response = await fetch(`/api/install-git?t=${Date.now()}`, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: "{}"
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Git installer could not be started.");
    if (!result.install?.launched && result.install?.downloadUrl) {
      window.open(result.install.downloadUrl, "_blank", "noreferrer");
    }
    await loadSystemReadiness();
    showBuilderError(
      result.install?.launched ? "Git setup started" : "Open Git download",
      result.install?.message || "Install Git for Windows with Git Credential Manager enabled, then reopen the builder.",
      result.install?.downloadUrl || ""
    );
  } catch (error) {
    publishTargetCurrent.textContent = error.message || "Git installer could not be started.";
  }
}

async function authenticatePublishTarget(options = {}) {
  const fromSave = Boolean(options.fromSave);
  if (publishTargetSync) publishTargetSync.disabled = true;
  setPublishTargetProgress(
    fromSave ? "Authenticating publishing target" : "Checking GitHub authorization",
    [
      { label: "Step 1", value: "Validating the repository URL and local Git tools." },
      { label: "Step 2", value: "Using the saved daily authorization if it is still valid." },
      { label: "Step 3", value: "Finding the target repository default branch." },
      { label: "Step 4", value: "Opening GitHub sign-in only when a fresh authorization is required." }
    ]
  );
  try {
    const response = await fetch(`/api/github-authenticate?t=${Date.now()}`, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentPublishTargetPayload())
    });
    const result = await response.json();
    if (!response.ok || !result.ok) {
      const message = result.error || "GitHub authentication did not complete.";
      throw new Error([message, result.details].filter(Boolean).join("\n\n"));
    }
    renderPublishTargetInfo(result.target || {});
    renderSystemReadiness(result.auth?.system || {}, result.target || {});
    if (publishTargetPassword) publishTargetPassword.value = "";
    const usedCachedAuth = Boolean(result.auth?.authorizationCached || result.target?.authorizationCached);
    setPublishTargetProgress(
      usedCachedAuth ? "Target authenticated from saved authorization" : "Target authenticated",
      [
        { label: "Repository", value: result.target?.repository || result.auth?.repository || "Selected target" },
        { label: "Branch", value: result.target?.branch || result.auth?.branch || "Detected target branch" },
        { label: "Authorization", value: usedCachedAuth ? "A valid saved authorization was reused; no new GitHub sign-in was needed." : "GitHub write access was verified now." },
        { label: "Next step", value: "Click Load from target when you want to import the latest compatible website files into this builder." }
      ]
    );
    if (publishTargetSync) publishTargetSync.disabled = false;
  } catch (error) {
    if (publishTargetSync) publishTargetSync.disabled = true;
    setPublishTargetProgress(
      "Target was not saved",
      [
        { label: "Reason", value: error.message || "GitHub authentication did not complete." },
        { label: "Status", value: "The previous publishing target was kept. Fix the repository or sign-in, then try Authenticate target again." }
      ]
    );
    showBuilderError(
      "Target authentication failed",
      "The builder did not save this publishing target because GitHub write access was not verified.",
      error.message || "GitHub authentication did not complete."
    );
  }
}

async function syncFromPublishTarget(options = {}) {
  if (!publishTargetDialog) return;
  const afterAuth = Boolean(options.afterAuth);
  publishTargetCurrent.textContent = afterAuth
    ? "GitHub authentication was accepted. Importing the target portfolio now..."
    : "Checking GitHub authorization and loading compatible portfolio files from the target repository...";
  try {
    const response = await fetch(`/api/sync-from-publish-target?t=${Date.now()}`, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: "{}"
    });
    const result = await response.json();
    if (!response.ok || !result.ok) {
      throw new Error([
        result.error || "Publishing target could not be imported.",
        result.details || "Click Authenticate target, complete the browser sign-in if prompted, then try Load from target again."
      ].filter(Boolean).join("\n\n"));
    }
    renderPublishTargetInfo(result.target || {});
    closeDialogElement(publishTargetDialog);
    await loadData();
    draftSavedSinceChanges = true;
    showBuilderError(
      afterAuth ? "GitHub connected and target loaded" : "Target content loaded",
      afterAuth
        ? "Authentication succeeded, and compatible portfolio files were loaded into this local builder workspace. The local draft now matches the imported target catalog."
        : "Compatible portfolio files were loaded from the authenticated publishing target into this local builder workspace. The local draft now matches the imported target catalog.",
      [
        `Imported: ${(result.sync?.imported || []).join(", ")}`,
        result.sync?.backup ? `Backup: ${result.sync.backup}` : ""
      ].filter(Boolean).join("\n")
    );
  } catch (error) {
    publishTargetCurrent.textContent = afterAuth
      ? `Authentication completed, but target loading failed. ${error.message || "Publishing target could not be imported."}`
      : error.message || "Publishing target could not be imported.";
    if (afterAuth) {
      showBuilderError(
        "Target saved, loading failed",
        "GitHub authorization succeeded, but the builder could not import compatible portfolio files from that target.",
        error.message || "Publishing target could not be imported."
      );
    }
  }
}

function showPublishResult(result) {
  const publish = result.publish || {};
  const pushed = Boolean(publish.pushed);
  const authorizationRequired = Boolean(publish.authorizationRequired);
  publishResultEyebrow.textContent = "GitHub publish";
  publishResultTitle.textContent = pushed
    ? "Successfully pushed to GitHub"
    : authorizationRequired
      ? "Publishing access required"
      : "Site applied, push failed";
  publishResultMessage.textContent = pushed
    ? `Your portfolio changes were committed and pushed to ${publish.branch || "GitHub"}.`
    : authorizationRequired
      ? "No live website files were applied. Open Publishing target, click Authenticate with GitHub, complete the browser sign-in, then try Apply to site again."
      : "The site was applied locally, but Git push did not complete.";

  const output = [
    pushed ? "PUSH STATUS: SUCCESS" : "PUSH STATUS: FAILED",
    `FILE: ${result.file || "projects.json"}`,
    authorizationRequired ? "AUTHORIZATION: REQUIRED BEFORE WEBSITE CHANGES" : "",
    publish.repository ? `REPOSITORY: ${publish.repository}` : "",
    publish.remote ? `REMOTE: ${publish.remote}` : "",
    publish.branch ? `BRANCH: ${publish.branch}` : "",
    publish.committed === false ? "COMMIT: No file changes to commit." : "",
    publish.commitOutput ? `COMMIT OUTPUT:\n${publish.commitOutput}` : "",
    publish.pushOutput ? `PUSH OUTPUT:\n${publish.pushOutput}` : "",
    publish.error ? `ERROR:\n${publish.error}` : "",
    publish.details ? `DETAILS:\n${publish.details}` : "",
    publish.help ? `NEXT STEP:\n${publish.help}` : ""
  ].filter(Boolean).join("\n\n");

  publishResultOutput.textContent = output || "No Git output was returned.";
  publishResultDialog.showModal();
}

function scheduleAutosave(delay = 900) {
  markDraftNeedsSave();
  clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(() => {
    autosaveDraft();
  }, delay);
}

async function autosaveDraft() {
  if (autosaveInFlight) {
    autosaveQueued = true;
    return;
  }
  autosaveInFlight = true;
  setSaveState("saving", "Autosaving...");
  try {
    const response = await fetch("/api/save-draft", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ catalog })
    });
    const result = await response.json();
    if (!response.ok) {
      setStatus(result.error || "Autosave failed.");
      setSaveState("error", "Autosave failed");
    } else if (!draftSavedSinceChanges) {
      setSaveState("dirty", "Autosaved locally");
    }
  } catch {
    setStatus("Autosave failed. Make sure the local server is running.");
    setSaveState("error", "Autosave failed");
  } finally {
    autosaveInFlight = false;
    if (autosaveQueued) {
      autosaveQueued = false;
      scheduleAutosave(300);
    }
  }
}

function schedulePreviewRender() {
  if (!portfolioPreviewDialog?.open) return;
  clearTimeout(previewRenderTimer);
  previewRenderTimer = setTimeout(() => {
    renderPreview();
  }, 220);
}

function scheduleChromeRender() {
  clearTimeout(chromeRenderTimer);
  chromeRenderTimer = setTimeout(() => {
    renderTree();
    renderSectionTabs(selectedProject());
    if (portfolioPreviewDialog?.open) renderPreview();
  }, 260);
}

function updateAssetDialogVisibility() {
  const isLocal = assetSource.value === "local";
  const isCaptionFile = captionSource.value === "file";
  document.querySelector(".asset-local-field").hidden = !isLocal;
  document.querySelector(".asset-url-field").hidden = isLocal;
  document.querySelector(".caption-text-field").hidden = isCaptionFile;
  document.querySelector(".caption-file-field").hidden = !isCaptionFile;
  const url = assetUrl?.value?.trim() || "";
  if (assetDetectedNote) {
    assetDetectedNote.textContent = isLocal || !url
      ? ""
      : `Detected: ${labelForUrlAssetKind(inferUrlAssetKind(url, assetSource.value))}.`;
  }
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function wordCount(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function limitWords(value, maxWords = 1000) {
  const words = String(value || "").trim().split(/\s+/).filter(Boolean);
  return words.length > maxWords ? words.slice(0, maxWords).join(" ") : value;
}

function normalizeFunFacts(value) {
  const items = Array.isArray(value) ? value : String(value || "").split(/\r?\n/);
  return items
    .map((item) => String(item || "").replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .slice(0, 3);
}

function syncFunFactsFromInput() {
  if (!funFactsInput) return [];
  const rich = extractRichSummary(funFactsInput);
  const facts = normalizeFunFacts(plainTextFromRich(rich));
  catalog.funFacts = facts;
  catalog.funFactsRich = rich;
  if (funFactsCount) funFactsCount.textContent = `${facts.length}/3`;
  return facts;
}

function renderFunFactsEditor() {
  if (!funFactsInput) return;
  const facts = normalizeFunFacts(catalog.funFacts || []);
  if (funFactsCount) funFactsCount.textContent = `${facts.length}/3`;
  if (document.activeElement === funFactsInput) return;
  populateStandaloneRichEditor(funFactsInput, catalog.funFactsRich, facts.join("\n"));
}

function populateTextOnlyRichField(field, rich, fallbackText = "") {
  if (!field) return;
  populateStandaloneRichEditor(field, rich, fallbackText);
  field.dataset.richTextOnly = "true";
}

function richFieldValue(field, fallbackText = "") {
  if (!field) {
    return {
      plain: String(fallbackText || "").trim(),
      rich: { blocks: textBlocksFromPlainText(fallbackText) }
    };
  }
  const rich = extractRichSummary(field);
  return {
    plain: plainTextFromRich(rich, "\n").trim(),
    rich
  };
}

function mergeRichFieldMaps(current = {}, fallback = {}) {
  return {
    ...clone(fallback || {}),
    ...clone(current || {})
  };
}

function parsedSiteContentRich() {
  return mergeRichFieldMaps(catalog.siteContentRich, savedPortfolioCatalog.siteContentRich);
}

function parsedProfileRich() {
  return mergeRichFieldMaps(catalog.profileRich, savedPortfolioCatalog.profileRich);
}

function parsedFunFactsRich() {
  return Object.prototype.hasOwnProperty.call(catalog, "funFactsRich")
    ? clone(catalog.funFactsRich || null)
    : clone(savedPortfolioCatalog.funFactsRich || null);
}

function syncPortfolioTextInputsForParsing() {
  if (funFactsInput) syncFunFactsFromInput();
  if (siteHeroTitleInput || siteHeroCopyInput || siteHeroEyebrowInput) syncSiteContentFromInputs();
  if (profileDisplayNameInput || profileEmailInput || profilePhoneInput) syncProfileFromInputs();
}

function parsedPortfolioGlobals() {
  syncPortfolioTextInputsForParsing();
  return {
    categories: clone(catalog.categories || savedPortfolioCatalog.categories || []),
    fieldStyles: clone(normalizeFieldStyles(catalog.fieldStyles || savedPortfolioCatalog.fieldStyles || {})),
    funFacts: normalizeFunFacts(catalog.funFacts || savedPortfolioCatalog.funFacts || []),
    funFactsRich: parsedFunFactsRich(),
    profile: clone(normalizeProfile(catalog.profile || savedPortfolioCatalog.profile || {})),
    profileRich: parsedProfileRich(),
    siteContent: clone(normalizeSiteContent(catalog.siteContent || savedPortfolioCatalog.siteContent || {})),
    siteContentRich: parsedSiteContentRich(),
    siteSections: (catalog.siteSections || savedPortfolioCatalog.siteSections || []).filter(siteSectionRenderable).map(clone)
  };
}

function syncParsedPortfolioGlobalsIntoSaved() {
  Object.assign(savedPortfolioCatalog, parsedPortfolioGlobals());
}

function siteContentRichValue(key) {
  return catalog.siteContentRich?.[key] || savedPortfolioCatalog.siteContentRich?.[key] || null;
}

function profileRichValue(key) {
  return catalog.profileRich?.[key] || savedPortfolioCatalog.profileRich?.[key] || null;
}

function syncSiteRichField(editor) {
  const key = editor?.dataset.siteField;
  if (!key) return;
  catalog.siteContentRich = catalog.siteContentRich || {};
  const { plain, rich } = richFieldValue(editor, catalog.siteContent?.[key] || "");
  catalog.siteContent = normalizeSiteContent({
    ...(catalog.siteContent || {}),
    [key]: plain
  });
  catalog.siteContentRich[key] = rich;
  markDraftNeedsSave();
  scheduleAutosave();
  schedulePreviewRender();
}

function syncProfileRichField(editor) {
  const key = editor?.dataset.profileField;
  if (!key) return;
  catalog.profileRich = catalog.profileRich || {};
  const { plain, rich } = richFieldValue(editor, catalog.profile?.[key] || "");
  catalog.profile = normalizeProfile({
    ...(catalog.profile || {}),
    [key]: plain
  });
  catalog.profileRich[key] = rich;
  markDraftNeedsSave();
  scheduleAutosave();
  schedulePreviewRender();
}

function renderSiteContentEditor() {
  const content = normalizeSiteContent(catalog.siteContent || {});
  if (siteHeroEyebrowInput && document.activeElement !== siteHeroEyebrowInput) {
    populateTextOnlyRichField(siteHeroEyebrowInput, siteContentRichValue("heroEyebrow"), content.heroEyebrow);
  }
  if (siteHeroTitleInput && document.activeElement !== siteHeroTitleInput) {
    populateTextOnlyRichField(siteHeroTitleInput, siteContentRichValue("heroTitle"), content.heroTitle);
  }
  if (siteHeroCopyInput && document.activeElement !== siteHeroCopyInput) {
    populateTextOnlyRichField(siteHeroCopyInput, siteContentRichValue("heroCopy"), content.heroCopy);
  }
}

function renderProfileEditor() {
  const profile = normalizeProfile(catalog.profile || {});
  const fields = [
    [profileDisplayNameInput, profile.displayName],
    [profilePortfolioLabelInput, profile.portfolioLabel],
    [profileContactIntroInput, profile.contactIntro],
    [profileEmailInput, profile.email],
    [profilePhoneInput, profile.phone],
    [profileGithubInput, profile.githubUrl],
    [profileLinkedinInput, profile.linkedinUrl],
    [profileWebsiteInput, profile.websiteUrl]
  ];
  fields.forEach(([field, value]) => {
    if (field && document.activeElement !== field) {
      populateTextOnlyRichField(field, profileRichValue(field.dataset.profileField), value);
    }
  });
  if (profileAssetStatus) {
    const assetLabels = [
      profile.profileImage ? "profile photo" : "",
      profile.heroImage ? "main background" : "",
      profile.resumeUrl ? "resume" : "",
      profile.brandImage ? "brand icon" : ""
    ].filter(Boolean);
    profileAssetStatus.textContent = assetLabels.length
      ? `Added: ${assetLabels.join(", ")}.`
      : "No profile photo, resume, brand icon, or main background added yet.";
  }
}

function syncSiteContentFromInputs() {
  catalog.siteContentRich = catalog.siteContentRich || {};
  const eyebrow = richFieldValue(siteHeroEyebrowInput, catalog.siteContent?.heroEyebrow || "");
  const title = richFieldValue(siteHeroTitleInput, catalog.siteContent?.heroTitle || "");
  const copy = richFieldValue(siteHeroCopyInput, catalog.siteContent?.heroCopy || "");
  catalog.siteContent = normalizeSiteContent({
    heroCopy: copy.plain,
    heroEyebrow: eyebrow.plain,
    heroTitle: title.plain
  });
  catalog.siteContentRich.heroCopy = copy.rich;
  catalog.siteContentRich.heroEyebrow = eyebrow.rich;
  catalog.siteContentRich.heroTitle = title.rich;
  return catalog.siteContent;
}

function syncProfileFromInputs() {
  catalog.profileRich = catalog.profileRich || {};
  const fields = {
    contactIntro: richFieldValue(profileContactIntroInput, catalog.profile?.contactIntro || ""),
    displayName: richFieldValue(profileDisplayNameInput, catalog.profile?.displayName || ""),
    email: richFieldValue(profileEmailInput, catalog.profile?.email || ""),
    githubUrl: richFieldValue(profileGithubInput, catalog.profile?.githubUrl || ""),
    linkedinUrl: richFieldValue(profileLinkedinInput, catalog.profile?.linkedinUrl || ""),
    phone: richFieldValue(profilePhoneInput, catalog.profile?.phone || ""),
    portfolioLabel: richFieldValue(profilePortfolioLabelInput, catalog.profile?.portfolioLabel || ""),
    websiteUrl: richFieldValue(profileWebsiteInput, catalog.profile?.websiteUrl || "")
  };
  catalog.profile = normalizeProfile({
    ...(catalog.profile || {}),
    contactIntro: fields.contactIntro.plain,
    displayName: fields.displayName.plain,
    email: fields.email.plain,
    githubUrl: fields.githubUrl.plain,
    linkedinUrl: fields.linkedinUrl.plain,
    phone: fields.phone.plain,
    portfolioLabel: fields.portfolioLabel.plain,
    websiteUrl: fields.websiteUrl.plain
  });
  Object.entries(fields).forEach(([key, value]) => {
    catalog.profileRich[key] = value.rich;
  });
  return catalog.profile;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function closeDialogElement(dialog, returnValue = "close") {
  if (!dialog) return;
  const closeValue = String(returnValue || "close");
  const wasOpen = Boolean(dialog.open || dialog.hasAttribute("open"));
  if (typeof dialog.close === "function") {
    try {
      if (dialog.open) dialog.close(closeValue);
    } catch {
      // Fall through to manual cleanup if the browser rejects the native close call.
    }
    if (!dialog.open && !dialog.hasAttribute("open")) return;
  }
  dialog.returnValue = closeValue;
  dialog.open = false;
  dialog.removeAttribute("open");
  if (wasOpen) dialog.dispatchEvent(new Event("close"));
}

function getByPath(target, pathValue) {
  return String(pathValue || "").split(".").filter(Boolean).reduce((current, key) => current?.[key], target);
}

function setByPath(target, pathValue, value) {
  const keys = String(pathValue || "").split(".").filter(Boolean);
  const last = keys.pop();
  let current = target;
  keys.forEach((key) => {
    current[key] = current[key] || {};
    current = current[key];
  });
  if (last) current[last] = value;
}

function defaultDesignModel() {
    return {
        brief: { summary: "", summaryRich: null, files: [] },
        documentation: { summary: "", summaryRich: null, files: [], references: [], mathAnalysis: [] },
        simulation: { summary: "", summaryRich: null, files: [], results: [] }
    };
}

function isAnalogProject(project) {
  return project?.category === "analog-mixed-signal";
}

function ensureDesignModel(project) {
  if (!project) return null;
  const defaults = defaultDesignModel();
  project.design = project.design || {};
  project.design.brief = { ...defaults.brief, ...(project.design.brief || {}) };
  project.design.documentation = { ...defaults.documentation, ...(project.design.documentation || {}) };
  project.design.documentation.summaryRich = project.design.documentation.summaryRich || null;
  project.design.simulation = { ...defaults.simulation, ...(project.design.simulation || {}) };
  project.design.brief.files = project.design.brief.files || [];
  project.design.documentation.files = project.design.documentation.files || [];
  project.design.documentation.references = project.design.documentation.references || [];
  project.design.documentation.mathAnalysis = project.design.documentation.mathAnalysis || [];
  project.design.simulation.files = project.design.simulation.files || [];
  project.design.simulation.results = project.design.simulation.results || [];
  return project.design;
}

function ensureCompileCode(project) {
  if (!project) return null;
  project.compileCode = project.compileCode || {};
  project.compileCode.files = Array.isArray(project.compileCode.files) ? project.compileCode.files : [];
  project.compileCode.directories = Array.isArray(project.compileCode.directories)
    ? project.compileCode.directories.map(compileDirectoryPath).filter(Boolean)
    : [];
  const normalizedDirectories = [];
  project.compileCode.directories.forEach((directory) => {
    compileAncestorDirectories(directory).forEach((ancestor) => {
      if (!normalizedDirectories.includes(ancestor)) normalizedDirectories.push(ancestor);
    });
  });
  project.compileCode.directories = normalizedDirectories;
  project.compileCode.files = project.compileCode.files.map((file, index) => {
    const incomingPath = file.relativePath || file.fileName || defaultCodeFileName(file.language);
    const language = normalizeCodeLanguage(file.language || detectCodeLanguage(file.code || "", incomingPath));
    const relativePath = safeClientCodeRelativePath(incomingPath || defaultCodeFileName(language), language);
    const fileName = compileFileNameFromPath(relativePath, language);
    const role = normalizeCompileFileRole(file.role || inferCompileFileRole(fileName, file.code || "", language), language);
    return {
      id: file.id || slugify(`${fileName}-${index}-${Date.now()}`),
      title: fileName,
      fileName,
      relativePath,
      language,
      role,
      code: String(file.code || ""),
      stdin: String(file.stdin || ""),
      savedPath: file.savedPath || file.workspacePath || "",
      savedAt: file.savedAt || "",
      waveform: file.waveform || file.lastResult?.waveform || null,
      lastResult: file.lastResult || null,
      dirty: Boolean(file.dirty)
    };
  });
  project.compileCode.files.forEach((file) => addCompileDirectoryPath(project.compileCode, compileFileDirectory(file.relativePath)));
  const fileIds = new Set(project.compileCode.files.map((file) => file.id));
  const hadOpenFileIds = Array.isArray(project.compileCode.openFileIds);
  const validActiveFileId = fileIds.has(project.compileCode.activeFileId) ? project.compileCode.activeFileId : "";
  project.compileCode.openFileIds = hadOpenFileIds
    ? project.compileCode.openFileIds.filter((id) => fileIds.has(id))
    : (validActiveFileId ? [validActiveFileId] : []);
  if (project.compileCode.activeFileId && !fileIds.has(project.compileCode.activeFileId)) {
    project.compileCode.activeFileId = project.compileCode.openFileIds[0] || "";
  }
  if (project.compileCode.activeFileId && !project.compileCode.openFileIds.includes(project.compileCode.activeFileId)) {
    project.compileCode.openFileIds.unshift(project.compileCode.activeFileId);
  }
  if (!project.compileCode.activeFileId && project.compileCode.openFileIds.length) {
    project.compileCode.activeFileId = project.compileCode.openFileIds[0];
  }
  project.compileCode.terminal = String(project.compileCode.terminal || "");
  project.compileCode.scopeSettings = project.compileCode.scopeSettings && typeof project.compileCode.scopeSettings === "object"
    ? project.compileCode.scopeSettings
    : {};
  Object.entries(project.compileCode.scopeSettings).forEach(([key, settings]) => {
    project.compileCode.scopeSettings[key] = {
      color: normalizeScopeColor(settings?.color, scopeDefaultColorForIndex(Object.keys(project.compileCode.scopeSettings).indexOf(key))),
      radix: normalizeScopeRadix(settings?.radix),
      stateMap: normalizeScopeStateMap(settings?.stateMap)
    };
  });
  const simulationTimeout = Number(project.compileCode.hdlSimulationTimeoutMs);
  project.compileCode.hdlSimulationTimeoutMs = Number.isFinite(simulationTimeout)
    ? Math.max(5000, Math.min(120000, Math.round(simulationTimeout)))
    : 30000;
  project.compileCode.scopeFilter = String(project.compileCode.scopeFilter || "");
  project.compileCode.scopeZoom = normalizeScopeZoom(project.compileCode.scopeZoom);
  project.compileCode.scopeView = normalizeScopeView(project.compileCode.scopeView);
  project.compileCode.sidebarWidth = normalizeCompileSidebarWidth(project.compileCode.sidebarWidth);
  project.compileCode.selectedFileIds = Array.isArray(project.compileCode.selectedFileIds)
    ? project.compileCode.selectedFileIds.filter((id) => fileIds.has(id))
    : [];
  project.compileCode.stdinWindowOpen = Boolean(project.compileCode.stdinWindowOpen);
  const stdinPosition = project.compileCode.stdinWindowPosition || {};
  project.compileCode.stdinWindowPosition = {
    x: Number.isFinite(Number(stdinPosition.x)) ? Number(stdinPosition.x) : null,
    y: Number.isFinite(Number(stdinPosition.y)) ? Number(stdinPosition.y) : null
  };
  project.compileCode.showFileDetails = Boolean(project.compileCode.showFileDetails);
  const fileDetailsPosition = project.compileCode.fileDetailsPosition || {};
  project.compileCode.fileDetailsPosition = {
    x: Number.isFinite(Number(fileDetailsPosition.x)) ? Number(fileDetailsPosition.x) : null,
    y: Number.isFinite(Number(fileDetailsPosition.y)) ? Number(fileDetailsPosition.y) : null
  };
  project.compileCode.systemTerminal = {
    cwd: compileDirectoryPath(project.compileCode.systemTerminal?.cwd || project.compileCode.terminalCwd || ""),
    command: String(project.compileCode.systemTerminal?.command || ""),
    output: String(project.compileCode.systemTerminal?.output || ""),
    rootPath: String(project.compileCode.systemTerminal?.rootPath || ""),
    cwdAbsolute: String(project.compileCode.systemTerminal?.cwdAbsolute || ""),
    promptPath: String(project.compileCode.systemTerminal?.promptPath || ""),
    history: Array.isArray(project.compileCode.systemTerminal?.history)
      ? project.compileCode.systemTerminal.history.slice(0, 40).map((item) => ({
        at: item.at || new Date().toISOString(),
        command: String(item.command || ""),
        output: String(item.output || "")
      })).filter((item) => item.command)
      : []
  };
  project.compileCode.outputDockUnlocked = Boolean(project.compileCode.outputDockUnlocked);
  const dockPosition = project.compileCode.outputDockPosition || {};
  project.compileCode.outputDockPosition = {
    x: Number.isFinite(Number(dockPosition.x)) ? Number(dockPosition.x) : 72,
    y: Number.isFinite(Number(dockPosition.y)) ? Number(dockPosition.y) : 120
  };
  const dockSize = project.compileCode.outputDockSize || {};
  project.compileCode.outputDockSize = {
    width: normalizeCompileFloatingWidth(dockSize.width),
    height: normalizeCompileFloatingHeight(dockSize.height)
  };
  project.compileCode.outputDockHeight = normalizeCompileOutputHeight(project.compileCode.outputDockHeight);
  project.compileCode.activePanel = ["console", "messages", "terminal", "scope"].includes(project.compileCode.activePanel)
    ? project.compileCode.activePanel
    : "console";
  const appendDestinations = compileAppendDestinations(project);
  if (!project.compileCode.appendTargetId || !appendDestinations.some((destination) => destination.id === project.compileCode.appendTargetId)) {
    project.compileCode.appendTargetId = appendDestinations[0]?.id || "";
  }
  project.compileCode.appendPanelOpen = Boolean(project.compileCode.appendPanelOpen);
  project.compileCode.messages = Array.isArray(project.compileCode.messages)
    ? project.compileCode.messages.map((message) => ({
      id: message.id || slugify(`message-${Date.now()}-${Math.random().toString(16).slice(2)}`),
      at: message.at || new Date().toISOString(),
      level: ["info", "success", "warning", "error"].includes(message.level) ? message.level : "info",
      text: String(message.text || "")
    })).filter((message) => message.text)
    : [];
  return project.compileCode;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeProjectStatus(value = "") {
  const clean = String(value || "").trim().toLowerCase().replace(/[-_]+/g, " ");
  if (!clean) return "Draft";
  if (["inprogress", "in progress", "progress", "ongoing", "in work"].includes(clean)) return "In progress";
  const match = projectStatusOptions.find((status) => status.toLowerCase() === clean);
  return match || "Draft";
}

function projectStatusClass(status = "") {
  return slugify(normalizeProjectStatus(status)).replace(/-/g, "_") || "draft";
}

function projectStatusVisible(project = {}) {
  if (project?.portfolioView && Object.prototype.hasOwnProperty.call(project.portfolioView, "showStatus")) {
    return project.portfolioView.showStatus !== false;
  }
  return project?.showStatusOnPortfolio !== false;
}

function projectStatusText(project = {}) {
  return normalizeProjectStatus(project?.portfolioView?.status || project?.status || "Draft");
}

function projectStatusBadge(project = {}) {
  if (!projectStatusVisible(project)) return "";
  const status = projectStatusText(project);
  return `<span class="project-status-badge project-status-${escapeHtml(projectStatusClass(status))}">${escapeHtml(status)}</span>`;
}

function projectTitleHeading(title, project = {}) {
  return `
    <div class="project-title-row">
      <h3>${escapeHtml(title || "Untitled project")}</h3>
      ${projectStatusBadge(project)}
    </div>
  `;
}

function escapeCodeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function normalizeCodeLanguage(value = "") {
  const clean = String(value || "").trim().toLowerCase().replace(/[_-]+/g, " ");
  if (!clean) return "javascript";
  const match = supportedCodeLanguages.find((language) =>
    language.id === clean || language.aliases.includes(clean)
  );
  return match?.id || "text";
}

function codeLanguageProfile(value = "") {
  return supportedCodeLanguages.find((language) => language.id === normalizeCodeLanguage(value)) || supportedCodeLanguages.find((language) => language.id === "javascript");
}

function codeLanguageLabel(value = "") {
  return supportedCodeLanguages.find((language) => language.id === normalizeCodeLanguage(value))?.label || "Code";
}

function sourceLooksCpp(source = "") {
  const text = String(source || "");
  return /#include\s*<(?:iostream|string|vector|array|map|unordered_map|memory|algorithm|optional|variant)>/.test(text) ||
    /\b(std::|cout|cin|cerr|namespace|template\s*<|class\s+\w+|new\s+\w|delete\s+|constexpr|nullptr|using\s+namespace)\b/.test(text);
}

function sourceLooksC(source = "") {
  const text = String(source || "");
  return /#include\s*<(?:stdio|stdlib|string|stdint|stdbool|math)\.h>/.test(text) ||
    /\b(printf|scanf|malloc|calloc|realloc|free|struct\s+\w+|typedef\s+struct)\b/.test(text);
}

function languageFromFileName(fileName = "", source = "") {
  const clean = String(fileName || "").toLowerCase();
  const extension = clean.includes(".") ? `.${clean.split(".").pop()}` : "";
  if (extension === ".h") {
    if (sourceLooksCpp(source)) return "cpp";
    if (sourceLooksC(source)) return "c";
    return "c";
  }
  return supportedCodeLanguages.find((language) => language.extensions?.includes(extension))?.id || "";
}

function defaultCodeFileName(language = "javascript") {
  return codeLanguageProfile(language)?.defaultFile || "main.js";
}

function safeClientCodeFileName(fileName = "", language = "javascript") {
  const profile = codeLanguageProfile(language);
  const fallback = profile.defaultFile || "main.js";
  const clean = String(fileName || fallback).trim().replace(/[\\/:*?"<>|]+/g, "-");
  const namePart = clean.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") || fallback.replace(/\.[^.]+$/, "");
  const extMatch = clean.match(/(\.[a-zA-Z0-9_+-]+)$/);
  const ext = (extMatch?.[1] || fallback.match(/(\.[^.]+)$/)?.[1] || ".js").toLowerCase();
  if (profile.allowAnyExtension) {
    const originalExt = extMatch?.[1]?.toLowerCase() || (clean === fallback ? fallback.match(/(\.[^.]+)$/)?.[1] || ".txt" : "");
    return `${namePart}${originalExt}`;
  }
  return `${namePart}${profile.extensions?.includes(ext) ? ext : fallback.match(/(\.[^.]+)$/)?.[1] || ".js"}`;
}

function compilePathSegments(value = "") {
  return String(value || "")
    .replace(/\\/g, "/")
    .split("/")
    .map((segment) => segment.trim())
    .filter((segment) => segment && segment !== "." && segment !== "..");
}

function safeClientCodeDirectorySegment(value = "") {
  return String(value || "folder")
    .trim()
    .replace(/[\\/:*?"<>|]+/g, "-")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "") || "folder";
}

function safeClientCodeRelativePath(value = "", language = "javascript") {
  const segments = compilePathSegments(value || defaultCodeFileName(language));
  const fileName = safeClientCodeFileName(segments.pop() || defaultCodeFileName(language), language);
  const folders = segments.map(safeClientCodeDirectorySegment).filter(Boolean).slice(0, 12);
  return [...folders, fileName].join("/");
}

function compileFilePath(file = {}) {
  return safeClientCodeRelativePath(file.relativePath || file.fileName || defaultCodeFileName(file.language), file.language);
}

function compileProjectFolderName(project = selectedProject()) {
  return safeClientCodeDirectorySegment(project?.id || "project");
}

function compileTerminalBasePath() {
  return "C:\\Users\\otien\\AppData\\Local\\OMB Portfolio Builder\\compile-code";
}

function compileProjectRootPath(project = selectedProject()) {
  return `${compileTerminalBasePath()}\\${compileProjectFolderName(project)}`;
}

function compileAbsolutePath(project, relativePath = "") {
  const cleanRelative = compilePathSegments(relativePath).join("\\");
  return cleanRelative ? `${compileProjectRootPath(project)}\\${cleanRelative}` : compileProjectRootPath(project);
}

function compileFileAbsolutePath(project, file = {}) {
  return compileAbsolutePath(project, compileFilePath(file));
}

function compileRelativePathFromInput(value = "", file = {}, project = selectedProject()) {
  const raw = String(value || "").trim();
  if (!raw) return compileFilePath(file);
  const normalizedRaw = raw.replace(/\//g, "\\");
  const projectRoot = compileProjectRootPath(project).replace(/\//g, "\\");
  const projectRootLower = projectRoot.toLowerCase();
  const rawLower = normalizedRaw.toLowerCase();
  if (rawLower === projectRootLower) return compileFilePath(file);
  if (rawLower.startsWith(`${projectRootLower}\\`)) {
    return safeClientCodeRelativePath(normalizedRaw.slice(projectRoot.length + 1), file.language);
  }
  if (/^[a-zA-Z]:\\/.test(normalizedRaw)) {
    const segments = compilePathSegments(normalizedRaw);
    return safeClientCodeRelativePath(segments.slice(-Math.min(segments.length, 3)).join("/"), file.language);
  }
  return safeClientCodeRelativePath(raw, file.language);
}

function compileFileNameFromPath(relativePath = "", language = "javascript") {
  const segments = compilePathSegments(relativePath);
  return safeClientCodeFileName(segments.pop() || defaultCodeFileName(language), language);
}

function compileDirectoryPath(value = "") {
  return compilePathSegments(value)
    .map(safeClientCodeDirectorySegment)
    .filter(Boolean)
    .slice(0, 12)
    .join("/");
}

function compileDirectoryName(value = "") {
  const segments = compilePathSegments(value);
  return segments.pop() || "folder";
}

function compileFileDirectory(relativePath = "") {
  const segments = compilePathSegments(relativePath);
  segments.pop();
  return compileDirectoryPath(segments.join("/"));
}

function compileAncestorDirectories(folderPath = "") {
  const segments = compilePathSegments(folderPath);
  const directories = [];
  let current = "";
  segments.forEach((segment) => {
    const clean = safeClientCodeDirectorySegment(segment);
    current = current ? `${current}/${clean}` : clean;
    if (current) directories.push(current);
  });
  return directories;
}

function addCompileDirectoryPath(workspace = {}, folderPath = "") {
  if (!workspace) return "";
  workspace.directories = Array.isArray(workspace.directories) ? workspace.directories : [];
  const cleanFolder = compileDirectoryPath(folderPath);
  compileAncestorDirectories(cleanFolder).forEach((directory) => {
    if (!workspace.directories.includes(directory)) workspace.directories.push(directory);
  });
  return cleanFolder;
}

function compileContextBaseDirectory(context = activeCompileTreeContext) {
  if (context?.type === "folder") return compileDirectoryPath(context.path || "");
  if (context?.type === "file") return compileFileDirectory(context.path || "");
  return "";
}

function uniqueCompileFilePath(workspace = {}, requestedPath = "", language = "javascript") {
  const normalized = normalizeCodeLanguage(language);
  const safePath = safeClientCodeRelativePath(requestedPath || defaultCodeFileName(normalized), normalized);
  const usedPaths = new Set((workspace.files || []).map((file) => compileFilePath(file).toLowerCase()));
  if (!usedPaths.has(safePath.toLowerCase())) return safePath;

  const segments = compilePathSegments(safePath);
  const fileName = segments.pop() || defaultCodeFileName(normalized);
  const extensionMatch = fileName.match(/(\.[^.]+)$/);
  const extension = extensionMatch?.[1] || defaultCodeFileName(normalized).match(/(\.[^.]+)$/)?.[1] || ".js";
  const baseName = fileName.slice(0, fileName.length - extension.length) || "source";
  const directory = compileDirectoryPath(segments.join("/"));
  for (let index = 2; index < 1000; index += 1) {
    const candidateName = `${baseName}-${index}${extension}`;
    const candidate = directory ? `${directory}/${candidateName}` : candidateName;
    if (!usedPaths.has(candidate.toLowerCase())) return candidate;
  }
  return `${directory ? `${directory}/` : ""}${baseName}-${Date.now()}${extension}`;
}

function normalizeCodePasteMode(value = "") {
  return value === "source" ? "source" : "basic";
}

function normalizeCodeText(value = "", pasteMode = "source") {
  const normalized = String(value || "").replace(/\r\n?/g, "\n").replace(/\u00a0/g, " ");
  if (normalizeCodePasteMode(pasteMode) === "source") return normalized.replace(/\t/g, "  ").replace(/\s+$/g, "");
  return normalized
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();
}

function detectCodeLanguage(value = "", fileName = "") {
  const byFile = languageFromFileName(fileName, value);
  if (byFile) return byFile;
  const code = String(value || "");
  if (/<\/?[a-z][\s\S]*?>/i.test(code) || /<!doctype\s+html/i.test(code)) return "html";
  if (/\b(always_ff|always_comb|always_latch|logic|interface|covergroup|assert\s+property|typedef\s+enum|class\s+\w+)\b/.test(code)) return "systemverilog";
  if (/\b(module|endmodule|always|assign|reg|wire|initial|posedge|negedge)\b/.test(code)) return "verilog";
  if (/^\s*\.?(tran|ac|dc|op|model|subckt|ends|param)\b/im.test(code) || /\bV\w+\s+\w+\s+\w+\s+(?:DC|SIN|PULSE)?/i.test(code)) return "ltspice";
  if (/\b(def|elif|import\s+\w+|from\s+\w+\s+import|self|None|True|False)\b/.test(code)) return "python";
  if (/\b(public\s+class|private\s+|protected\s+|static\s+void\s+main|System\.out)\b/.test(code)) return "java";
  if (sourceLooksCpp(code) || sourceLooksC(code) || /\b(#include|main\s*\(|puts\s*\(|fprintf|sizeof\s*\()\b/.test(code)) {
    return sourceLooksCpp(code) ? "cpp" : "c";
  }
  if (/\b(const|let|var|function|=>|console\.log|document\.|window\.)\b/.test(code)) return "javascript";
  return "text";
}

const codeSyntaxDefinitions = {
  c: {
    keywords: "_Alignas _Alignof _Atomic _Bool _Complex _Generic _Imaginary _Noreturn _Static_assert _Thread_local auto break case const continue default do else enum extern for goto if inline register restrict return signed sizeof static struct switch typedef union unsigned volatile while",
    types: "bool char double float int int8_t int16_t int32_t int64_t long short size_t ssize_t uint8_t uint16_t uint32_t uint64_t void FILE"
  },
  cpp: {
    keywords: "alignas alignof and and_eq asm auto bitand bitor break case catch class compl concept const consteval constexpr constinit const_cast continue co_await co_return co_yield decltype default delete do dynamic_cast else enum explicit export extern false for friend if inline mutable namespace new noexcept not not_eq nullptr operator or or_eq private protected public register reinterpret_cast requires return sizeof static static_assert static_cast struct switch template this thread_local throw true try typedef typeid typename union unsigned using virtual volatile while xor xor_eq",
    types: "bool char char8_t char16_t char32_t double float int long short size_t std string uint8_t uint16_t uint32_t uint64_t void wchar_t"
  },
  verilog: {
    keywords: "always and assign begin buf case casex casez deassign default defparam disable edge else end endcase endfunction endgenerate endmodule endprimitive endspecify endtable endtask event for force forever fork function generate genvar if initial inout input join localparam module nand negedge nor not or output parameter posedge primitive release repeat signed specify supply0 supply1 table task wand while wor xnor xor",
    types: "integer real reg time tri wire"
  },
  systemverilog: {
    keywords: "always always_comb always_ff always_latch assign automatic begin case class clocking constraint cover covergroup coverpoint default disable do else end endcase endclass endclocking endfunction endgenerate endgroup endinterface endmodule endpackage endprogram endproperty endsequence endtask enum final for foreach forever fork function generate genvar if iff import initial inout input inside interface join join_any join_none localparam modport module negedge output package parameter posedge program property rand randc ref return sequence signed static struct task typedef union unique unsigned var virtual wait with",
    types: "bit byte chandle event int integer logic longint real realtime reg shortint string time tri void wire"
  },
  ltspice: {
    keywords: "ac dc end ends four func global ic include lib meas model nodeset op options param plot probe save step subckt temp tran",
    types: "V I R C L D Q M X E F G H K S W B"
  },
  java: {
    keywords: "abstract assert break case catch class const continue default do else enum extends final finally for if implements import instanceof interface native new null package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while",
    types: "boolean byte char double float int long short String System void"
  },
  javascript: {
    keywords: "async await break case catch class const continue debugger default delete do else export extends false finally for from function if import in instanceof let new null of return static super switch this throw true try typeof undefined var void while yield",
    types: "Array BigInt Boolean Date Error JSON Map Math Number Object Promise RegExp Set String Symbol console document window"
  },
  python: {
    keywords: "and as assert async await break class continue def del elif else except False finally for from global if import in is lambda None nonlocal not or pass raise return True try while with yield",
    types: "bool dict float int list set str tuple"
  },
  html: {
    keywords: "a article body button code div footer form h1 h2 h3 h4 h5 h6 head header html img input label link main meta nav p pre script section span style title",
    types: ""
  },
  text: {
    keywords: "",
    types: ""
  }
};

const codeSyntaxSets = Object.fromEntries(Object.entries(codeSyntaxDefinitions).map(([language, definition]) => [
  language,
  {
    keywords: new Set(definition.keywords.split(/\s+/).filter(Boolean)),
    types: new Set(definition.types.split(/\s+/).filter(Boolean))
  }
]));

function codeTokenSpan(className, value = "") {
  return `<span class="${className}">${escapeCodeHtml(value)}</span>`;
}

function nextNonSpaceCharacter(line = "", index = 0) {
  const match = String(line).slice(index).match(/\S/);
  return match ? match[0] : "";
}

function skipHdlWhitespace(source = "", index = 0) {
  let cursor = index;
  while (/\s/.test(source[cursor] || "")) cursor += 1;
  return cursor;
}

function skipBalancedHdlParentheses(source = "", index = 0) {
  if (source[index] !== "(") return index;
  let depth = 0;
  let cursor = index;
  while (cursor < source.length) {
    const character = source[cursor];
    if (character === "(") depth += 1;
    if (character === ")") {
      depth -= 1;
      if (depth <= 0) return cursor + 1;
    }
    cursor += 1;
  }
  return cursor;
}

function hdlInstanceIdentifierStarts(line = "", language = "verilog") {
  const syntax = codeSyntaxSets[language] || codeSyntaxSets.verilog;
  const source = String(line || "").split("//")[0];
  const starts = new Set();
  let cursor = source.search(/\S/);
  if (cursor < 0 || source[cursor] === ".") return starts;

  const first = source.slice(cursor).match(/^[A-Za-z_$][\w$]*/);
  if (!first) return starts;
  const firstWord = first[0];
  if (syntax.keywords.has(firstWord) || syntax.types.has(firstWord)) return starts;

  const firstStart = cursor;
  cursor = skipHdlWhitespace(source, firstStart + firstWord.length);
  if (source[cursor] === "#") {
    cursor = skipHdlWhitespace(source, cursor + 1);
    if (source[cursor] !== "(") return starts;
    cursor = skipHdlWhitespace(source, skipBalancedHdlParentheses(source, cursor));
  }

  const secondStart = cursor;
  const second = source.slice(secondStart).match(/^[A-Za-z_$][\w$]*/);
  if (!second) return starts;
  const secondWord = second[0];
  if (syntax.keywords.has(secondWord) || syntax.types.has(secondWord)) return starts;

  cursor = skipHdlWhitespace(source, secondStart + secondWord.length);
  if (source[cursor] !== "(") return starts;

  starts.add(firstStart);
  starts.add(secondStart);
  return starts;
}

function highlightIdentifierToken(word = "", line = "", nextIndex = 0, language = "javascript") {
  const syntax = codeSyntaxSets[language] || codeSyntaxSets.javascript;
  if (syntax.types.has(word)) return codeTokenSpan("code-token-type", word);
  if (syntax.keywords.has(word)) return codeTokenSpan("code-token-keyword", word);
  if (nextNonSpaceCharacter(line, nextIndex) === "(" && !["verilog", "systemverilog", "ltspice"].includes(language)) {
    return codeTokenSpan("code-token-function", word);
  }
  if (language === "ltspice" && /^[A-Z][A-Za-z0-9_.$-]*/.test(word)) return codeTokenSpan("code-token-type", word);
  return escapeCodeHtml(word);
}

function highlightHtmlLine(line = "", state = {}) {
  let output = "";
  let index = 0;
  while (index < line.length) {
    if (state.htmlComment) {
      const end = line.indexOf("-->", index);
      const nextIndex = end === -1 ? line.length : end + 3;
      output += codeTokenSpan("code-token-comment", line.slice(index, nextIndex));
      state.htmlComment = end === -1;
      index = nextIndex;
      continue;
    }
    if (line.startsWith("<!--", index)) {
      state.htmlComment = true;
      continue;
    }
    if (line[index] === "<") {
      const end = line.indexOf(">", index);
      const rawTag = line.slice(index, end === -1 ? line.length : end + 1);
      output += rawTag.replace(/([A-Za-z_:][-A-Za-z0-9_:.]*)(\s*=)?|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(<\/?|\/?>|=)/g, (match, name, equals, quoted, symbol) => {
        if (quoted) return codeTokenSpan("code-token-string", quoted);
        if (symbol) return codeTokenSpan("code-token-tag", symbol);
        if (equals) return `${codeTokenSpan("code-token-attribute", name)}${escapeCodeHtml(equals)}`;
        if (/^(DOCTYPE|html|head|body|main|section|article|div|span|script|style|link|meta|title|header|footer|nav|button|input|form|label|img|a|p|pre|code)$/i.test(name)) {
          return codeTokenSpan("code-token-tag", name);
        }
        return codeTokenSpan("code-token-attribute", name);
      });
      index += rawTag.length;
      continue;
    }
    output += escapeCodeHtml(line[index]);
    index += 1;
  }
  return output;
}

function highlightCodeLine(line = "", language = "javascript", state = {}) {
  const normalizedLanguage = normalizeCodeLanguage(language);
  if (normalizedLanguage === "html") return highlightHtmlLine(line, state);
  if (normalizedLanguage === "text") return escapeCodeHtml(line);
  const hdlLanguage = ["verilog", "systemverilog"].includes(normalizedLanguage);
  const hdlInstanceStarts = hdlLanguage ? hdlInstanceIdentifierStarts(line, normalizedLanguage) : new Set();
  if (normalizedLanguage === "ltspice" && /^\s*[\*;]/.test(line)) return codeTokenSpan("code-token-comment", line);
  if (["c", "cpp"].includes(normalizedLanguage) && /^\s*#/.test(line)) return codeTokenSpan("code-token-preprocessor", line);
  if (normalizedLanguage === "ltspice" && /^\s*\.[A-Za-z]+/.test(line)) {
    const directive = line.match(/^(\s*)(\.[A-Za-z]+)(.*)$/);
    return directive
      ? `${escapeCodeHtml(directive[1])}${codeTokenSpan("code-token-preprocessor", directive[2])}${escapeCodeHtml(directive[3])}`
      : escapeCodeHtml(line);
  }

  let output = "";
  let index = 0;
  while (index < line.length) {
    if (state.blockComment) {
      const end = line.indexOf("*/", index);
      const nextIndex = end === -1 ? line.length : end + 2;
      output += codeTokenSpan("code-token-comment", line.slice(index, nextIndex));
      state.blockComment = end === -1;
      index = nextIndex;
      continue;
    }

    const current = line[index];
    const next = line[index + 1] || "";
    if (current === "/" && next === "*") {
      state.blockComment = true;
      continue;
    }
    if (current === "/" && next === "/") {
      output += codeTokenSpan("code-token-comment", line.slice(index));
      break;
    }
    if (normalizedLanguage === "python" && current === "#") {
      output += codeTokenSpan("code-token-comment", line.slice(index));
      break;
    }
    if (normalizedLanguage === "ltspice" && current === ";") {
      output += codeTokenSpan("code-token-comment", line.slice(index));
      break;
    }
    if (["verilog", "systemverilog"].includes(normalizedLanguage) && current === "`") {
      const match = line.slice(index).match(/^`[A-Za-z_]\w*/);
      if (match) {
        output += codeTokenSpan("code-token-preprocessor", match[0]);
        index += match[0].length;
        continue;
      }
    }

    const stringQuote = current === "\"" || current === "'" || (current === "`" && normalizedLanguage === "javascript");
    if (stringQuote) {
      let end = index + 1;
      let escaped = false;
      while (end < line.length) {
        const character = line[end];
        if (escaped) {
          escaped = false;
        } else if (character === "\\") {
          escaped = true;
        } else if (character === current) {
          end += 1;
          break;
        }
        end += 1;
      }
      output += codeTokenSpan("code-token-string", line.slice(index, end));
      index = end;
      continue;
    }

    if (hdlLanguage) {
      if (current === ".") {
        const portConnection = line.slice(index).match(/^\.[$A-Za-z_][\w$]*\s*\((?:[^()]|\([^()]*\))*\)/);
        if (portConnection) {
          output += codeTokenSpan("code-token-hdl-port", portConnection[0]);
          index += portConnection[0].length;
          continue;
        }
      }
      const hdlNumber = line.slice(index).match(/^\d*'[sS]?[bBoOdDhH][0-9a-fA-F_xXzZ?]+/);
      if (hdlNumber) {
        output += codeTokenSpan("code-token-number", hdlNumber[0]);
        index += hdlNumber[0].length;
        continue;
      }
    }

    const number = line.slice(index).match(/^(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(?:[munpfkKMG]?|ms|us|ns|ps|fs)?)/);
    if (number) {
      output += codeTokenSpan("code-token-number", number[0]);
      index += number[0].length;
      continue;
    }

    const identifier = line.slice(index).match(/^[A-Za-z_$][\w$]*/);
    if (identifier) {
      if (hdlLanguage && (/^(dut|uut)$/i.test(identifier[0]) || hdlInstanceStarts.has(index))) {
        output += codeTokenSpan("code-token-hdl-instance", identifier[0]);
      } else {
        output += highlightIdentifierToken(identifier[0], line, index + identifier[0].length, normalizedLanguage);
      }
      index += identifier[0].length;
      continue;
    }

    const operator = line.slice(index).match(/^(?:===|!==|==|!=|<=|>=|=>|->|::|&&|\|\||<<|>>|\+\+|--|[+\-*/%=&|!~^<>?:]+)/);
    if (operator) {
      output += codeTokenSpan("code-token-operator", operator[0]);
      index += operator[0].length;
      continue;
    }

    output += escapeCodeHtml(current);
    index += 1;
  }
  return output;
}

function tokenizedCodeHtml(code = "", language = "javascript") {
  const normalizedLanguage = normalizeCodeLanguage(language);
  const state = { blockComment: false, htmlComment: false };
  return String(code || "")
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => highlightCodeLine(line, normalizedLanguage, state))
    .join("\n");
}

function renderRichCodeBlock(block = {}) {
  const language = normalizeCodeLanguage(block.language || detectCodeLanguage(block.code || ""));
  const code = normalizeCodeText(block.code || "", block.pasteMode || "source");
  const label = codeLanguageLabel(language);
  return `
    <figure class="rich-code-block rich-code-language-${language}">
      <figcaption><span>&lt;/&gt;</span> ${escapeHtml(label)}</figcaption>
      <pre><code>${tokenizedCodeHtml(code, language)}</code></pre>
    </figure>
  `;
}

function renderPlainMultiline(value = "") {
  return escapeHtml(value).replace(/\r\n?|\n/g, "<br>");
}

function normalizeSiteContent(content = {}) {
  return {
    heroCopy: String(content.heroCopy || "").trim() || defaultSiteContent.heroCopy,
    heroEyebrow: String(content.heroEyebrow || "").trim() || defaultSiteContent.heroEyebrow,
    heroTitle: String(content.heroTitle || "").trim() || defaultSiteContent.heroTitle
  };
}

function normalizeProfile(profile = {}) {
  return {
    brandImage: String(profile.brandImage || "").trim(),
    brandText: String(profile.brandText || "").trim() || String(profile.displayName || "").trim() || defaultProfile.brandText,
    contactIntro: String(profile.contactIntro || "").trim(),
    displayName: String(profile.displayName || "").trim(),
    email: String(profile.email || "").trim(),
    githubUrl: String(profile.githubUrl || "").trim(),
    heroImage: String(profile.heroImage || "").trim(),
    linkedinUrl: String(profile.linkedinUrl || "").trim(),
    phone: String(profile.phone || "").trim(),
    portfolioLabel: String(profile.portfolioLabel || "").trim() || defaultProfile.portfolioLabel,
    profileImage: String(profile.profileImage || "").trim(),
    resumeUrl: String(profile.resumeUrl || "").trim(),
    websiteUrl: String(profile.websiteUrl || "").trim()
  };
}

function normalizePlainFieldStyle(style = {}) {
  const fontFamily = cleanFontFamily(style.fontFamily || "");
  const fontPx = normalizeFontPx(style.fontPx || style.fontSize || "");
  const color = normalizeTextColor(style.color || "");
  const normalized = {};

  if (fontFamily) normalized.fontFamily = fontFamily;
  if (fontPx) normalized.fontPx = fontPx;
  if (color) normalized.color = rgbColorToHex(color);
  if (style.bold === true || style.bold === "true") normalized.bold = true;
  if (style.italic === true || style.italic === "true") normalized.italic = true;
  if (style.underline === true || style.underline === "true") normalized.underline = true;

  return normalized;
}

function normalizeFieldStyles(styles = {}) {
  return Object.fromEntries(
    Object.entries(styles || {})
      .filter(([fieldId]) => persistentPlainStyleFieldIds.has(fieldId))
      .map(([fieldId, style]) => [fieldId, normalizePlainFieldStyle(style)])
      .filter(([, style]) => Object.keys(style).length)
  );
}

function loadBuilderPreferences() {
  try {
    const stored = JSON.parse(localStorage.getItem(preferenceStorageKey) || "{}");
    builderPreferences = {
      ...defaultBuilderPreferences,
      ...stored,
      theme: ["light", "dark"].includes(stored.theme) ? stored.theme : defaultBuilderPreferences.theme,
      compileTheme: compileThemeIds.includes(stored.compileTheme) ? stored.compileTheme : defaultBuilderPreferences.compileTheme,
      zoom: normalizeBuilderZoom(stored.zoom)
    };
  } catch {
    builderPreferences = { ...defaultBuilderPreferences };
  }
  applyBuilderPreferences();
}

function normalizeBuilderZoom(value = 1) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 1;
  return Math.max(0.75, Math.min(1.4, Math.round(numeric * 100) / 100));
}

function normalizeCompileOutputHeight(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 170;
  return Math.max(120, Math.min(340, Math.round(numeric)));
}

function normalizeCompileFloatingWidth(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 900;
  return Math.max(420, Math.min(1280, Math.round(numeric)));
}

function normalizeCompileFloatingHeight(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 430;
  return Math.max(180, Math.min(780, Math.round(numeric)));
}

function normalizeCompileSidebarWidth(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 340;
  return Math.max(240, Math.min(640, Math.round(numeric)));
}

function applyBuilderPreferences() {
  const theme = ["light", "dark"].includes(builderPreferences.theme) ? builderPreferences.theme : "light";
  const compileTheme = compileThemeIds.includes(builderPreferences.compileTheme) ? builderPreferences.compileTheme : defaultBuilderPreferences.compileTheme;
  const zoom = normalizeBuilderZoom(builderPreferences.zoom);
  builderPreferences.zoom = zoom;
  builderPreferences.compileTheme = compileTheme;
  document.documentElement.dataset.builderTheme = theme;
  document.body.dataset.builderTheme = theme;
  document.documentElement.dataset.compileTheme = compileTheme;
  document.body.dataset.compileTheme = compileTheme;
  document.documentElement.style.setProperty("--builder-app-zoom", String(zoom));
  document.body.style.zoom = String(zoom);
  document.querySelectorAll("[data-compile-workspace]").forEach((workspace) => {
    workspace.dataset.compileTheme = compileTheme;
  });
  if (preferenceTheme) preferenceTheme.value = theme;
  if (preferenceCompileTheme) preferenceCompileTheme.value = compileTheme;
  if (lightModeReturnButton) lightModeReturnButton.hidden = theme !== "dark";
}

function setBuilderTheme(theme = "light") {
  builderPreferences.theme = ["light", "dark"].includes(theme) ? theme : "light";
  localStorage.setItem(preferenceStorageKey, JSON.stringify(builderPreferences));
  applyBuilderPreferences();
  setStatus(`Builder ${builderPreferences.theme} mode enabled.`);
}

function setCompileTheme(theme = defaultBuilderPreferences.compileTheme) {
  builderPreferences.compileTheme = compileThemeIds.includes(theme) ? theme : defaultBuilderPreferences.compileTheme;
  localStorage.setItem(preferenceStorageKey, JSON.stringify(builderPreferences));
  applyBuilderPreferences();
  setStatus(`Compile Code appearance set to ${builderPreferences.compileTheme.replace(/-/g, " ")}.`);
}

function setBuilderZoom(value = 1, options = {}) {
  builderPreferences.zoom = normalizeBuilderZoom(value);
  localStorage.setItem(preferenceStorageKey, JSON.stringify(builderPreferences));
  applyBuilderPreferences();
  if (options.announce !== false) {
    setStatus(`Builder zoom set to ${Math.round(builderPreferences.zoom * 100)}%.`);
  }
}

function openPreferencesDialog() {
  applyBuilderPreferences();
  if (!preferencesDialog?.open) preferencesDialog.showModal();
}

function saveBuilderPreferencesFromDialog() {
  setBuilderTheme(preferenceTheme?.value || "light");
  setCompileTheme(preferenceCompileTheme?.value || defaultBuilderPreferences.compileTheme);
  setStatus("Preferences saved.");
}

function plainFieldStyleToCss(style = {}) {
  const normalized = normalizePlainFieldStyle(style);
  const rules = [];
  if (normalized.fontFamily) rules.push(`font-family: ${normalized.fontFamily}`);
  if (normalized.fontPx) rules.push(`font-size: ${normalized.fontPx}px`);
  if (normalized.color) rules.push(`color: ${normalized.color}`);
  if (normalized.bold) rules.push("font-weight: 700");
  if (normalized.italic) rules.push("font-style: italic");
  if (normalized.underline) rules.push("text-decoration: underline");
  return rules.join("; ");
}

function plainFieldStyleAttribute(styles = {}, fieldId = "") {
  const css = plainFieldStyleToCss(styles[fieldId]);
  return css ? ` style="${escapeHtml(css)}"` : "";
}

function plainStyleFromControl(control) {
  if (!control) return {};
  return normalizePlainFieldStyle({
    bold: control.dataset.builderBold,
    color: control.dataset.builderColor,
    fontFamily: control.dataset.builderFontFamily,
    fontPx: control.dataset.builderFontPx,
    italic: control.dataset.builderItalic,
    underline: control.dataset.builderUnderline
  });
}

function applyPlainFieldStyleToControl(control, style = {}) {
  if (!control) return;
  const normalized = normalizePlainFieldStyle(style);
  control.dataset.builderFontFamily = normalized.fontFamily || "";
  control.dataset.builderFontPx = normalized.fontPx || "";
  control.dataset.builderColor = normalized.color || "";
  control.dataset.builderBold = normalized.bold ? "true" : "false";
  control.dataset.builderItalic = normalized.italic ? "true" : "false";
  control.dataset.builderUnderline = normalized.underline ? "true" : "false";
  control.style.fontFamily = normalized.fontFamily || "";
  control.style.fontSize = normalized.fontPx ? `${normalized.fontPx}px` : "";
  control.style.color = normalized.color || "";
  control.style.fontWeight = normalized.bold ? "700" : "";
  control.style.fontStyle = normalized.italic ? "italic" : "";
  control.style.textDecoration = normalized.underline ? "underline" : "";
}

function applyStoredPlainFieldStyle(control) {
  if (!control?.id || !persistentPlainStyleFieldIds.has(control.id)) return;
  const styles = normalizeFieldStyles(catalog.fieldStyles || {});
  applyPlainFieldStyleToControl(control, styles[control.id] || {});
}

function storePlainControlStyle(control) {
  if (!control?.id || !persistentPlainStyleFieldIds.has(control.id)) return;
  const nextStyles = normalizeFieldStyles(catalog.fieldStyles || {});
  const style = plainStyleFromControl(control);
  if (Object.keys(style).length) {
    nextStyles[control.id] = style;
  } else {
    delete nextStyles[control.id];
  }
  catalog.fieldStyles = nextStyles;
  savedPortfolioCatalog.fieldStyles = clone(nextStyles);
  markDraftNeedsSave();
  scheduleAutosave();
  schedulePreviewRender();
}

function mailComposeLink(email = "") {
  const clean = String(email || "").trim();
  return clean ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(clean)}` : "";
}

function phoneLink(phone = "") {
  const clean = String(phone || "").trim();
  return clean ? `tel:${clean.replace(/[^\d+]/g, "")}` : "";
}

function textBlocksFromPlainText(text) {
  return [{
    align: "left",
    fontFamily: "Arial",
    fontSize: "normal",
    text: String(text || ""),
    type: "paragraph"
  }];
}

function richBlocksForProject(project) {
  return project?.summaryRich?.blocks?.length ? clone(project.summaryRich.blocks) : textBlocksFromPlainText(project?.summary || "");
}

function plainTextFromRich(rich, separator = "\n\n") {
  return (rich?.blocks || [])
    .map((block) => {
      if (block.type === "paragraph") return block.text || "";
      if (block.type === "formula") return block.formula || "";
      if (block.type === "code") return block.code || "";
      if (block.type === "image") return [block.title, block.caption].filter(Boolean).join(" ");
      return "";
    })
    .filter(Boolean)
    .join(separator);
}

function unwrapFormula(value) {
  const text = String(value || "").trim();
  const wrappers = [
    [/^\$\$([\s\S]+)\$\$$/, 1],
    [/^\\\[([\s\S]+)\\\]$/, 1],
    [/^\\\(([\s\S]+)\\\)$/, 1],
    [/^\$([^$]+)\$$/, 1]
  ];
  for (const [pattern, group] of wrappers) {
    const match = text.match(pattern);
    if (match) return match[group].trim();
  }
  return text;
}

function isFormulaOnly(value) {
  const text = String(value || "").trim();
  if (!text) return false;
  if (looksLikeWebOrContactText(text)) return false;
  if (/^\$\$[\s\S]+\$\$$/.test(text) || /^\\\[[\s\S]+\\\]$/.test(text) || /^\\\([\s\S]+\\\)$/.test(text)) return true;
  const mathSignals = /\\frac|\\sqrt|\\sum|\\int|\\Delta|\\omega|\\pi|[=^_√∫ΣπΩμ]/;
  return text.length <= 180 && mathSignals.test(text) && !/[.!?]\s*$/.test(text);
}

function renderInlineMath(text) {
  const escaped = escapeHtml(text);
  const withMath = escaped.replace(/\$([^$]+)\$/g, '<span class="rich-inline-formula">$1</span>');
  return withMath.replace(/\b(https?:\/\/[^\s<]+|www\.[^\s<]+|(?:github|linkedin|gitlab|bitbucket|drive|docs)\.com\/[^\s<]+)/gi, (match) => {
    const trailing = match.match(/[),.;:!?]+$/)?.[0] || "";
    const clean = trailing ? match.slice(0, -trailing.length) : match;
    const href = normalizeLinkTarget(clean, { assumeWeb: true });
    return `<a href="${href}" target="_blank" rel="noreferrer">${clean}</a>${trailing}`;
  });
}

function renderMultilineInlineText(text = "") {
  return renderInlineMath(text).replace(/\r\n?|\n/g, "<br>");
}

function looksLikeBareWebAddress(value = "") {
  const clean = String(value || "").trim();
  if (!clean || /\s/.test(clean) || /^(\.?\.?\/|#|mailto:|tel:)/i.test(clean)) return false;
  if (/^[a-z][a-z0-9+.-]*:/i.test(clean)) return false;
  const host = clean.split(/[/?#]/)[0].toLowerCase();
  if (!/^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(host)) return false;
  return !/\.(pdf|docx?|xlsx?|pptx?|zip|7z|rar|png|jpe?g|gif|svg|webp|txt|md|csv|json|xml|log|c|h|cpp|hpp|py|js|mjs|ts|v|sv|vhdl?|spice|cir|net|asc|sch|kicad_sch|kicad_pcb)$/i.test(host);
}

function looksLikeWebOrContactText(value = "") {
  const clean = String(value || "").trim();
  if (!clean) return false;
  if (/\b(?:https?:\/\/|www\.)[^\s<>"']+/i.test(clean)) return true;
  if (/\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/i.test(clean)) return true;
  if (/\b(?:github|linkedin|gitlab|bitbucket|drive|docs)\.com\/[^\s<>"']+/i.test(clean)) return true;
  if (looksLikeBareWebAddress(clean)) return true;
  return clean.split(/\s+/).some((word) => looksLikeBareWebAddress(word.replace(/^[("']+|[)"'.,;:!?]+$/g, "")));
}

function normalizeLinkTarget(target = "", options = {}) {
  const clean = String(target || "").trim();
  if (!clean) return "";
  if (/^\/\//.test(clean)) return `https:${clean}`;
  if (/^www\./i.test(clean)) return `https://${clean}`;
  if (options.assumeWeb && looksLikeBareWebAddress(clean)) return `https://${clean}`;
  return clean;
}

function isWebsiteLinkItem(item = {}, target = "") {
  const clean = String(target || "").trim();
  if (/^(https?:)?\/\//i.test(clean) || /^www\./i.test(clean)) return true;
  const typeText = [item.kind, item.type, item.status, item.meta, item.label, item.title]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return /\b(link|website|web link|url|external|github|linkedin|drive|social|profile)\b/.test(typeText);
}

function extensionFromUrl(value = "") {
  const clean = String(value || "").split(/[?#]/)[0];
  const match = clean.match(/(\.[a-z0-9_]+)$/i);
  return match ? match[1].toLowerCase() : "";
}

function urlLooksLikeDirectImage(value = "") {
  const clean = normalizeLinkTarget(value, { assumeWeb: true });
  return /^(data:image\/|blob:)/i.test(clean) ||
    /\.(png|jpe?g|webp|gif|svg|bmp|avif)([?#].*)?$/i.test(clean);
}

function inferUrlAssetKind(value = "", source = "web") {
  const clean = normalizeLinkTarget(value, { assumeWeb: true });
  const extension = extensionFromUrl(clean);
  if (source === "drive" || /(^https?:\/\/)?(drive|docs)\.google\.com\//i.test(clean)) return "google-drive";
  if (/github\.com|raw\.githubusercontent\.com/i.test(clean)) return "github";
  if (/linkedin\.com/i.test(clean)) return "linkedin";
  if (urlLooksLikeDirectImage(clean)) return "image";
  if ([".pdf"].includes(extension)) return "pdf";
  if ([".doc", ".docx", ".ppt", ".pptx", ".xls", ".xlsx", ".csv", ".txt", ".md"].includes(extension)) return "document";
  if ([".zip", ".7z", ".rar"].includes(extension)) return "archive";
  if ([".c", ".h", ".cpp", ".hpp", ".py", ".js", ".mjs", ".ts", ".v", ".sv", ".vhd", ".vhdl", ".spice", ".cir", ".net", ".asc", ".sch", ".kicad_sch", ".kicad_pcb"].includes(extension)) return "engineering-file";
  if (/^https?:\/\//i.test(clean) || /^www\./i.test(value) || looksLikeBareWebAddress(value)) return "webpage";
  return extension ? "file" : "link";
}

function labelForUrlAssetKind(kind = "link") {
  return {
    archive: "Archive link",
    document: "Document link",
    "engineering-file": "Engineering file link",
    file: "File link",
    github: "GitHub link",
    "google-drive": "Google Drive link",
    image: "Image URL",
    linkedin: "LinkedIn link",
    link: "Link",
    pdf: "PDF link",
    webpage: "Website link"
  }[kind] || "Link";
}

function displayNameFromUrl(value = "", fallback = "Linked asset") {
  const clean = normalizeLinkTarget(value, { assumeWeb: true });
  try {
    const parsed = new URL(clean);
    const lastPath = parsed.pathname.split("/").filter(Boolean).pop();
    return decodeURIComponent(lastPath || parsed.hostname.replace(/^www\./, "")) || fallback;
  } catch {
    return String(value || "").split("/").filter(Boolean).pop() || fallback;
  }
}

function linkifyRichTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent || !/(https?:\/\/|www\.|(?:github|linkedin|gitlab|bitbucket|drive|docs)\.com\/)/i.test(node.textContent)) return NodeFilter.FILTER_REJECT;
      return node.parentElement?.closest("a") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  let node = walker.nextNode();
  while (node) {
    nodes.push(node);
    node = walker.nextNode();
  }

  nodes.forEach((textNode) => {
    const text = textNode.textContent || "";
    const fragment = document.createDocumentFragment();
    let cursor = 0;
    text.replace(/\b(https?:\/\/[^\s<]+|www\.[^\s<]+|(?:github|linkedin|gitlab|bitbucket|drive|docs)\.com\/[^\s<]+)/gi, (match, _url, offset) => {
      if (offset > cursor) fragment.append(document.createTextNode(text.slice(cursor, offset)));
      const trailing = match.match(/[),.;:!?]+$/)?.[0] || "";
      const clean = trailing ? match.slice(0, -trailing.length) : match;
      const link = document.createElement("a");
      link.href = normalizeLinkTarget(clean, { assumeWeb: true });
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = clean;
      fragment.append(link);
      if (trailing) fragment.append(document.createTextNode(trailing));
      cursor = offset + match.length;
      return match;
    });
    if (cursor < text.length) fragment.append(document.createTextNode(text.slice(cursor)));
    textNode.replaceWith(fragment);
  });
}

function inlineStyleSignature(element) {
  const style = element?.style;
  if (!style) return "";
  return [
    style.fontFamily || "",
    style.fontSize || "",
    style.color || "",
    style.fontWeight || "",
    style.fontStyle || "",
    style.textDecoration || ""
  ].join("|");
}

function normalizeInlineStyleSpans(root) {
  if (!root) return;
  root.querySelectorAll("span.rich-inline-style, span[style]").forEach((span) => {
    span.style.display = "inline";
    if (!span.textContent) {
      span.remove();
      return;
    }
    if (!span.getAttribute("style")) span.replaceWith(...span.childNodes);
  });
  root.normalize();
  root.querySelectorAll("span.rich-inline-style, span[style]").forEach((span) => {
    let next = span.nextSibling;
    while (next?.nodeType === Node.ELEMENT_NODE && next.matches("span.rich-inline-style, span[style]") && inlineStyleSignature(next) === inlineStyleSignature(span)) {
      span.append(...next.childNodes);
      const remove = next;
      next = next.nextSibling;
      remove.remove();
    }
  });
}

function sanitizeRichInlineHtml(value = "") {
  const template = document.createElement("template");
  template.innerHTML = String(value || "");
  const allowedTags = new Set(["A", "B", "BR", "EM", "I", "SPAN", "STRONG", "U"]);

  [...template.content.querySelectorAll("*")].forEach((node) => {
    if (!allowedTags.has(node.tagName)) {
      node.replaceWith(...node.childNodes);
      return;
    }

    const href = node.tagName === "A" ? String(node.getAttribute("href") || "").trim() : "";
    const normalizedHref = normalizeLinkTarget(href, { assumeWeb: true });
    const safeHref = /^(https?:|mailto:|tel:|#|\/)/i.test(normalizedHref) ? normalizedHref : "";
    const fontFamily = cleanFontFamily(node.style.fontFamily || "");
    const fontPx = normalizeFontPx(parseFloat(node.style.fontSize || ""));
    const color = normalizeTextColor(node.style.color || "");
    const rawFontWeight = node.style.fontWeight || "";
    const fontWeight = /^(bold|[6-9]00)$/i.test(rawFontWeight)
      ? "700"
      : /^(normal|[1-5]00)$/i.test(rawFontWeight)
        ? "400"
        : "";
    const fontStyle = node.style.fontStyle === "italic" ? "italic" : "";
    const textDecoration = node.style.textDecoration.includes("underline") ? "underline" : "";

    [...node.attributes].forEach((attribute) => node.removeAttribute(attribute.name));

    if (node.tagName === "A" && safeHref) {
      node.setAttribute("href", safeHref);
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noreferrer");
    }
    if (fontFamily) node.style.fontFamily = fontFamily;
    if (fontPx) node.style.fontSize = `${fontPx}px`;
    if (color) node.style.color = color;
    if (fontWeight) node.style.fontWeight = fontWeight;
    if (fontStyle) node.style.fontStyle = fontStyle;
    if (textDecoration) node.style.textDecoration = textDecoration;
  });

  linkifyRichTextNodes(template.content);
  normalizeInlineStyleSpans(template.content);
  return template.innerHTML;
}

function displayTitle(value, fallback = "Untitled item") {
  const title = String(value || fallback).trim();
  const replacements = {
    "Brief": "Overview",
    "Project Brief": "Overview",
    "Design Brief": "Design Overview",
    "Simulation Brief": "Simulation Overview"
  };
  return replacements[title] || title;
}

function cleanFontFamily(value = "") {
  return String(value)
    .split(",")
    .map((item) => item.replace(/[^\w\s-]/g, "").trim())
    .filter(Boolean)
    .slice(0, 3)
    .join(", ");
}

function normalizeFontPx(value) {
  const size = Number(value);
  return Number.isFinite(size) && size >= 8 && size <= 24 ? String(size) : "";
}
function normalizeTextColor(value = "") {
    const color = String(value || "").trim();
    return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(color) ||
        /^rgba?\(/i.test(color) ||
        /^hsla?\(/i.test(color)
        ? color
        : "";
}

function summaryRichPathFromTextPath(pathValue = "") {
    return String(pathValue || "").replace(/\.summary$/, ".summaryRich");
}

function overviewFolderFromPath(pathValue = "") {
    if (pathValue.includes("design.brief")) return "design-overview";
    if (pathValue.includes("design.documentation")) return "documentation-overview";
    if (pathValue.includes("design.simulation")) return "simulation-overview";
    return "overview";
}

function richBlocksFromValue(rich, fallbackText = "") {
    return rich?.blocks?.length ? clone(rich.blocks) : textBlocksFromPlainText(fallbackText);
}
function richTextStyle(block = {}) {
    const styles = [];
    const fontFamily = cleanFontFamily(block.fontFamily || "Arial") || "Arial";
    const fontPx = normalizeFontPx(block.fontPx);
    const color = normalizeTextColor(block.color || "");

    if (fontFamily) styles.push(`font-family: ${fontFamily}`);
    if (fontPx) styles.push(`font-size: ${fontPx}px`);
    if (color) styles.push(`color: ${color}`);
    if (block.bold) styles.push("font-weight: 700");
    if (block.italic) styles.push("font-style: italic");
    if (block.underline) styles.push("text-decoration: underline");

    return styles.length ? ` style="${escapeHtml(styles.join("; "))}"` : "";
}

function normalizeCropAspect(value = "") {
  return ["1 / 1", "4 / 3", "16 / 9", "3 / 4"].includes(value) ? value : "original";
}

function normalizeCropZoom(value = 1) {
  const zoom = Number(value);
  return Number.isFinite(zoom) ? Math.min(3, Math.max(1, zoom)) : 1;
}

function normalizeCropPosition(value = 50) {
  const position = Number(value);
  return Number.isFinite(position) ? Math.min(100, Math.max(0, position)) : 50;
}

function richImageCropStyle(block = {}) {
  const aspect = normalizeCropAspect(block.cropAspect);
  const zoom = normalizeCropZoom(block.cropZoom);
  const x = normalizeCropPosition(block.cropX);
  const y = normalizeCropPosition(block.cropY);
  const styles = [`--crop-zoom: ${zoom}`, `--crop-x: ${x}%`, `--crop-y: ${y}%`];
  if (aspect !== "original") styles.push(`--crop-aspect: ${aspect}`);
  return ` style="${escapeHtml(styles.join("; "))}"`;
}

function richImageDownloadLink(block = {}) {
  const label = escapeHtml(cleanRichImageTitle(block) || block.caption || "Image file");
  const url = block.url || "#";
  const target = normalizeLinkTarget(url, { assumeWeb: isWebsiteLinkItem(block, url) });
  return `<p class="rich-download-only"><a class="resource-link" href="${escapeHtml(target)}"${linkAttributes(target, block)}${downloadAttribute(target, block)}>${label}</a></p>`;
}

function cleanRichImageTitle(block = {}) {
  const title = String(block.title || "").trim();
  return /^pasted image\b/i.test(title) ? "" : title;
}

function renderRichContent(rich, fallbackText = "") {
  const blocks = rich?.blocks?.length ? rich.blocks : textBlocksFromPlainText(fallbackText);
  return `
    <div class="rich-content">
      ${blocks.map((block) => {
        const align = ["left", "center", "right"].includes(block.align) ? block.align : "left";
        if (block.type === "image") {
          if (block.display === "download") return richImageDownloadLink(block);
          const title = cleanRichImageTitle(block);
          const imageSrc = normalizeLinkTarget(block.url, { assumeWeb: true });
          return `
            <figure class="rich-image justify-${align}">
              <span class="rich-image-viewport crop-${normalizeCropAspect(block.cropAspect) === "original" ? "original" : "active"}"${richImageCropStyle(block)}>
                <img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(title || "Overview image")}">
              </span>
              ${(title || block.caption) ? `<figcaption>${title ? `<strong>${escapeHtml(title)}</strong>` : ""}${block.caption ? `<span>${escapeHtml(block.caption)}</span>` : ""}</figcaption>` : ""}
            </figure>
          `;
        }
        if (block.type === "formula") {
          const formula = unwrapFormula(block.formula);
          if (looksLikeWebOrContactText(formula)) {
            return `<p class="rich-paragraph rich-text-normal text-${align}">${renderInlineMath(formula)}</p>`;
          }
          return `<div class="rich-formula justify-${align}">${escapeHtml(formula)}</div>`;
        }
        if (block.type === "code") return renderRichCodeBlock(block);
        const size = ["small", "normal", "large"].includes(block.fontSize) ? block.fontSize : "normal";
        const content = block.html
          ? sanitizeRichInlineHtml(block.html)
          : renderInlineMath(block.text || "");
        return `<p class="rich-paragraph rich-text-${size} text-${align}"${richTextStyle(block)}>${content}</p>`;
      }).join("")}
    </div>
  `;
}

function renderRichFieldContent(rich, fallbackText = "") {
  const blocks = rich?.blocks?.length ? rich.blocks : textBlocksFromPlainText(fallbackText);
  return blocks.map((block) => {
    if (block.type !== "paragraph") return "";
    const align = ["left", "center", "right"].includes(block.align) ? block.align : "left";
    const content = block.html
      ? sanitizeRichInlineHtml(block.html)
      : renderInlineMath(block.text || "");
    return `<span class="rich-field-line text-${align}"${richTextStyle(block)}>${content}</span>`;
  }).filter(Boolean).join("");
}

async function saveSelectedProjectToPortfolio(options = {}) {
  const settings = options && options.currentTarget ? {} : options;
  if (settings.commitEdits !== false && !(await commitActiveProjectEdits())) return false;
  const project = selectedProject();
  if (!project) return false;
  migrateLegacyProjectSections(project);
  ensureCompileCode(project);
  const parsedProject = parseProjectForPortfolio(project);
  syncParsedPortfolioGlobalsIntoSaved();
  const nextProjects = (savedPortfolioCatalog.projects || []).filter((item) => item.id !== project.id);
  const workingIds = new Set((catalog.projects || []).map((item) => item.id));
  savedPortfolioCatalog.projects = nextProjects.filter((item) => workingIds.has(item.id));
  const workingIndex = catalog.projects.findIndex((item) => item.id === project.id);
  const insertAt = Math.max(0, workingIndex);
  savedPortfolioCatalog.projects.splice(insertAt, 0, parsedProject);
  markDraftNeedsSave();
  scheduleAutosave();
  refreshOpenPreviews();
  setStatus(`${project.title} saved into the portfolio preview.`);
  updateBuilderWorkflow();
  return true;
}

function removeProjectFromPortfolio(projectId) {
  savedPortfolioCatalog.projects = (savedPortfolioCatalog.projects || []).filter((item) => item.id !== projectId);
}

function deleteProjectById(projectId) {
  const project = catalog.projects.find((item) => item.id === projectId);
  if (!project) return;
  catalog.projects = catalog.projects.filter((item) => item.id !== project.id);
  removeProjectFromPortfolio(project.id);
  selectedProjectId = catalog.projects[0]?.id || "";
  activeSectionId = "brief";
  if (projectDialog?.open && project.id === projectWindowTitle.dataset.projectId) {
    closeDialogElement(projectDialog);
  }
  setStatus("Project deleted locally.");
  scheduleAutosave();
  renderAll();
}

function ensureFallbackCategory(excludedId = "") {
  const categories = catalog.categories || [];
  const existing = categories.find((category) => category.id !== excludedId && (
    category.id === "uncategorized" ||
    String(category.label || "").trim().toLowerCase() === "uncategorized"
  ));
  if (existing) return existing.id;
  const existingIds = new Set(categories.map((category) => category.id));
  let id = "uncategorized";
  let suffix = 2;
  while (existingIds.has(id) || id === excludedId) {
    id = `uncategorized-${suffix}`;
    suffix += 1;
  }
  const fallback = normalizeCategory({
    id,
    label: "Uncategorized",
    description: "Projects moved from deleted categories.",
    accent: "#91c7dd"
  });
  catalog.categories = [...categories, fallback];
  return fallback.id;
}

function deleteCategoryById(categoryId) {
  const category = (catalog.categories || []).find((item) => item.id === categoryId);
  if (!category) return;
  const affectedProjects = (catalog.projects || []).filter((project) => project.category === categoryId);
  const fallbackId = affectedProjects.length ? ensureFallbackCategory(categoryId) : "";
  if (fallbackId) {
    affectedProjects.forEach((project) => {
      project.category = fallbackId;
    });
  }
  catalog.categories = (catalog.categories || []).filter((item) => item.id !== categoryId);
  if (!catalog.categories.length) {
    ensureFallbackCategory();
  }
  savedPortfolioCatalog.categories = clone(catalog.categories || []);
  savedPortfolioCatalog.projects = (catalog.projects || []).map((project) => parseProjectForPortfolio(project));
  expandedCategories.delete(categoryId);
  if (fallbackId) expandedCategories.add(fallbackId);
  selectedProjectId = selectedProjectId && catalog.projects.some((project) => project.id === selectedProjectId)
    ? selectedProjectId
    : catalog.projects[0]?.id || "";
  setStatus(affectedProjects.length
    ? `Category deleted. ${affectedProjects.length} project${affectedProjects.length === 1 ? "" : "s"} moved to Uncategorized.`
    : "Category deleted locally.");
  markDraftNeedsSave();
  scheduleAutosave();
  refreshCategoryControls();
  renderAll();
}

function openDeleteConfirm({ title = "Delete project", message, onConfirm }) {
  pendingDeleteAction = onConfirm;
  deleteConfirmTitle.textContent = title;
  deleteConfirmMessage.textContent = message;
  deleteConfirmDialog.showModal();
}

function requestProjectDelete(projectId) {
  const project = catalog.projects.find((item) => item.id === projectId);
  if (!project) return;
  openDeleteConfirm({
    title: "Delete project",
    message: "Are you sure you want to delete this project?",
    onConfirm: () => deleteProjectById(project.id)
  });
}

function requestCategoryDelete(categoryId) {
  const category = (catalog.categories || []).find((item) => item.id === categoryId);
  if (!category) return;
  const projectCount = (catalog.projects || []).filter((project) => project.category === categoryId).length;
  openDeleteConfirm({
    title: "Delete category",
    message: projectCount
      ? `Are you sure you want to delete "${category.label}"? ${projectCount} project${projectCount === 1 ? "" : "s"} will be moved to Uncategorized.`
      : `Are you sure you want to delete "${category.label}"?`,
    onConfirm: () => deleteCategoryById(category.id)
  });
}

function showCategoryTitleMenu(categoryId, clientX, clientY) {
  if (!categoryTitleMenu) return;
  const category = categoryById(categoryId);
  if (!category?.id) return;
  categoryTitleMenu.dataset.categoryId = category.id;
  categoryTitleMenu.style.left = `${clientX + window.scrollX}px`;
  categoryTitleMenu.style.top = `${clientY + window.scrollY}px`;
  categoryTitleMenu.hidden = false;
}

function hideCategoryTitleMenu() {
  if (!categoryTitleMenu) return;
  categoryTitleMenu.hidden = true;
  categoryTitleMenu.dataset.categoryId = "";
}

async function handleCategoryTitleAction(action, categoryId) {
  const category = categoryById(categoryId);
  if (!category?.id) {
    hideCategoryTitleMenu();
    return;
  }
  if (action === "close") {
    hideCategoryTitleMenu();
    return;
  }
  if (action === "copy") {
    await navigator.clipboard.writeText(category.label || "");
    hideCategoryTitleMenu();
    return;
  }
  if (action === "paste") {
    const text = (await navigator.clipboard.readText()).trim();
    if (text) {
      category.label = text;
      savedPortfolioCatalog.categories = clone(catalog.categories || []);
      refreshCategoryControls();
      renderAll();
      scheduleAutosave();
      setStatus(`Category renamed to "${category.label}".`);
    }
    hideCategoryTitleMenu();
    return;
  }
  if (action === "rename" || action === "details") {
    hideCategoryTitleMenu();
    openCategoryDialog(category.id);
    return;
  }
  if (action === "delete") {
    hideCategoryTitleMenu();
    requestCategoryDelete(category.id);
  }
}

function parserItem(title, description = "", url = "", meta = "", kind = "text", rich = null, children = []) {
  const item = {
    children: children.filter((child) => child && (child.title || child.description || child.url || child.children?.length)),
    description: description || "",
    kind,
    meta: meta || "",
    title: title || "Untitled item",
    url: url || ""
  };
  if (rich?.blocks?.length) item.rich = clone(rich);
  return item;
}

function canonicalTemplateId(id) {
  return legacyTemplateSkins[id] || id || "";
}

function projectTemplateId(project) {
  return canonicalTemplateId(project?.portfolioView?.template?.id || project?.templateId || "");
}

function projectTemplateFor(project) {
  const templateId = projectTemplateId(project);
  return templates.find((template) => template.id === templateId) || {};
}

function projectTemplateClass(project) {
  const templateId = projectTemplateId(project);
  return templateId ? `project-template project-template-${templateId}` : "project-template-white";
}

function responsiveClassName(value, fallback) {
  return String(value || fallback || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || fallback;
}

function projectResponsiveClass(project) {
  const profile = projectResponsiveProfile(project);
  return `responsive-project responsive-density-${responsiveClassName(profile.density, "balanced")} responsive-card-${responsiveClassName(profile.cardLayout, "single")}`;
}

function responsiveStyleValues(project) {
  const profile = projectResponsiveProfile(project);
  return {
    "--responsive-section-card-min": profile.sectionCardMin,
    "--responsive-content-max": profile.contentMax,
    "--responsive-media-max": profile.mediaMax,
    "--responsive-touch-target": profile.touchTarget
  };
}

function hasPublicTemplate(project) {
  return Boolean(projectTemplateId(project));
}

function projectTemplateVisual(project) {
  return project?.portfolioView?.template?.visual || project?.templateVisual || projectTemplateFor(project).visual || null;
}

function projectTemplateStyle(project, accent) {
  const visual = projectTemplateVisual(project) || {};
  const values = {
    "--accent": accent,
    "--template-bg": visual.background,
    "--template-panel": visual.panel,
    "--template-accent": visual.accent,
    "--template-hover": visual.hover,
    "--template-click": visual.click,
    "--template-click-text": visual.clickText,
    "--template-line": visual.line,
    "--template-text": visual.text,
    ...responsiveStyleValues(project)
  };
  return Object.entries(values)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");
}

function applyProjectTemplateToElement(element, project, accent) {
  if (!element) return;
  [...element.classList]
    .filter((className) =>
      className === "project-template" ||
      className === "project-template-white" ||
      className === "responsive-project" ||
      className.startsWith("project-template-") ||
      className.startsWith("responsive-density-") ||
      className.startsWith("responsive-card-")
    )
    .forEach((className) => element.classList.remove(className));
  projectTemplateClass(project).split(" ").forEach((className) => element.classList.add(className));
  projectResponsiveClass(project).split(" ").forEach((className) => element.classList.add(className));
  const visual = projectTemplateVisual(project) || {};
  const values = {
    "--accent": accent,
    "--template-bg": visual.background,
    "--template-panel": visual.panel,
    "--template-accent": visual.accent,
    "--template-hover": visual.hover,
    "--template-click": visual.click,
    "--template-click-text": visual.clickText,
    "--template-line": visual.line,
    "--template-text": visual.text,
    ...responsiveStyleValues(project)
  };
  Object.entries(values).forEach(([key, value]) => {
    if (value) {
      element.style.setProperty(key, value);
    } else {
      element.style.removeProperty(key);
    }
  });
}

function resourcesFrom(project, key) {
  return (project[key] || []).map((item) => {
    if (key === "tests") {
      return parserItem(item.name, item.result || item.method, item.artifact, item.method || item.status || "Test", "test", item.richDescription);
    }
    if (key === "pcbs") {
      return parserItem(item.name, item.revision || item.status, item.artifact, item.status || "PCB", "pcb", item.richDescription);
    }
    if (key === "media") {
      return parserItem(item.title, item.caption, item.url, item.status || "Image", "image", item.richDescription);
    }
    if (key === "links") {
      return parserItem(item.label, item.description || "", item.url, "Link", "link", item.richDescription);
    }
    return parserItem(item.title || item.name || item.label, item.description || item.caption, item.url || item.artifact, item.type || item.status || "Document", "document", item.richDescription);
  });
}

function resourcesFromItems(items = [], fallbackKind = "document") {
  return (items || []).map((item) => {
    const url = item.url || item.artifact || "";
    const kind = item.kind || fallbackKind;
    return parserItem(
      item.title || item.name || item.label || "Untitled item",
      item.description || item.caption || item.result || item.method || "",
      url,
      item.type || item.status || item.method || "",
      kind,
      item.richDescription
    );
  });
}

function parsedSubsection(title, description = "", items = [], rich = null) {
  return parserItem(title, description, "", "Subsection", "subsection", rich, items);
}

function richHasContent(rich) {
  return Boolean(rich?.blocks?.some((block) =>
    block.type === "image" && block.url ||
    block.type === "formula" && block.formula ||
    block.type === "code" && block.code ||
    block.text ||
    block.title ||
    block.caption
  ));
}

function parsedItemHasContent(item) {
  if (!item) return false;
  if (item.kind === "summary") return Boolean(item.description || richHasContent(item.rich));
  const children = item.children || item.items || [];
  if (item.kind === "subsection") {
    return Boolean(item.description || item.url || richHasContent(item.rich) || children.some(parsedItemHasContent));
  }
  if (["tool", "language"].includes(item.kind)) {
    return Boolean(item.title || item.description || item.url || richHasContent(item.rich) || children.some(parsedItemHasContent));
  }
  return Boolean(item.description || item.url || richHasContent(item.rich) || children.some(parsedItemHasContent));
}

function parsedSectionHasContent(section) {
  return Boolean(section?.description || richHasContent(section?.rich) || (section?.items || []).some(parsedItemHasContent));
}

function responsiveChildren(node) {
  return node?.items || node?.children || [];
}

function richContainsMedia(rich) {
  return Boolean(rich?.blocks?.some((block) => block.type === "image" && block.url));
}

function responsiveNodeHasMedia(node) {
  if (!node) return false;
  if (node.kind === "image" || richContainsMedia(node.rich)) return true;
  const url = String(node.url || "");
  if (/\.(apng|avif|gif|jpe?g|png|svg|webp)(\?|#|$)/i.test(url)) return true;
  return responsiveChildren(node).some(responsiveNodeHasMedia);
}

function responsiveNodeCount(node) {
  if (!node || !parsedItemHasContent(node)) return 0;
  return 1 + responsiveChildren(node).reduce((count, child) => count + responsiveNodeCount(child), 0);
}

function responsiveNodeDepth(node) {
  if (!node || !parsedItemHasContent(node)) return 0;
  const children = responsiveChildren(node).filter(parsedItemHasContent);
  if (!children.length) return 1;
  return 1 + Math.max(...children.map(responsiveNodeDepth));
}

function buildResponsiveProfile(project, parsedSections = []) {
  const visibleSections = (parsedSections || []).filter((section) => section?.id !== "brief" && parsedSectionHasContent(section));
  const itemCount = visibleSections.reduce(
    (count, section) => count + (section.items || []).reduce((sum, item) => sum + responsiveNodeCount(item), 0),
    0
  );
  const maxDepth = visibleSections.reduce(
    (depth, section) => Math.max(depth, ...(section.items || []).map(responsiveNodeDepth), 1),
    1
  );
  const hasMedia = visibleSections.some((section) => responsiveNodeHasMedia(section));
  const density = itemCount >= 18 || visibleSections.length >= 6 || maxDepth >= 4
    ? "dense"
    : itemCount <= 6 && visibleSections.length <= 2
      ? "simple"
      : "balanced";
  return {
    version: 1,
    breakpoints: {
      mobile: 640,
      tablet: 900,
      desktop: 1180
    },
    cardLayout: hasPublicTemplate(project) ? "single" : "split",
    contentMax: hasMedia || maxDepth >= 3 ? "1180px" : "980px",
    density,
    mediaMax: hasMedia ? "860px" : "720px",
    sectionCardMin: density === "dense" ? "210px" : density === "simple" ? "280px" : "240px",
    touchTarget: "44px",
    windowMode: "full-screen"
  };
}

function projectResponsiveProfile(project) {
  const savedProfile = project?.portfolioView?.responsive;
  if (savedProfile?.version) {
    return {
      ...buildResponsiveProfile(project, project?.portfolioView?.sections || []),
      ...savedProfile
    };
  }
  return buildResponsiveProfile(project, project?.portfolioView?.sections || []);
}

function parsedSection(id, title, items = [], description = "", rich = null) {
  const section = {
    description,
    id,
    items: items.filter(parsedItemHasContent),
    title
  };
  if (richHasContent(rich)) section.rich = clone(rich);
  return section;
}

function builderSectionNodeHasContent(node) {
  if (!node) return false;
  const children = [...(node.children || []), ...(node.items || [])];
  return Boolean(
    node.description ||
    node.caption ||
    node.result ||
    node.method ||
    node.url ||
    node.artifact ||
    richHasContent(node.richDescription) ||
    children.some(builderSectionNodeHasContent)
  );
}

function builderProjectSectionHasContent(section) {
  if (!section) return false;
  return Boolean(
    section.description ||
    richHasContent(section.richDescription) ||
    (section.items || []).some(builderSectionNodeHasContent)
  );
}

function pruneBuilderNodeTree(node) {
  if (!node) return null;
  const children = [...(node.children || []), ...(node.items || [])]
    .map(pruneBuilderNodeTree)
    .filter(Boolean);
  const next = { ...node };
  if (children.length) next.children = children;
  else next.children = [];
  delete next.items;
  return builderSectionNodeHasContent(next) ? next : null;
}

function pruneProjectSectionTree(section) {
  if (!section) return null;
  const next = {
    ...section,
    items: (section.items || []).map(pruneBuilderNodeTree).filter(Boolean)
  };
  return builderProjectSectionHasContent(next) ? next : null;
}

function parsedNodeFromBuilder(node, fallbackKind = "subsection") {
  const children = [...(node.children || []), ...(node.items || [])]
    .filter(builderSectionNodeHasContent)
    .map((child) => parsedNodeFromBuilder(child, child.url || child.artifact ? "file" : "subsection"))
    .filter(parsedItemHasContent);
  const url = node.url || node.artifact || "";
  const kind = node.kind || (url ? "file" : fallbackKind);
  const meta = node.type || node.status || node.method || (url ? "File" : "Subsection");
  return parserItem(
    node.title || node.name || node.label || (url ? "Untitled file" : "Untitled section"),
    node.description || node.caption || node.result || node.method || "",
    url,
    meta,
    kind,
    node.richDescription,
    children
  );
}

function parsedGenericSection(section) {
  normalizeBuilderSectionStorage(section);
  return parsedSection(
    `custom:${section.id}`,
    section.title || "Untitled section",
    sectionRootChildren(section).filter(builderSectionNodeHasContent).map((item) => parsedNodeFromBuilder(item)),
    section.description || "",
    section.richDescription
  );
}

function legacyNodeHasSubstance(node) {
  if (!node) return false;
  const children = [...(node.children || []), ...(node.items || [])].filter(legacyNodeHasSubstance);
  const kind = String(node.kind || node.type || "").toLowerCase();
  return Boolean(
    node.description ||
    node.caption ||
    node.result ||
    node.method ||
    node.url ||
    node.artifact ||
    richHasContent(node.richDescription) ||
    children.length ||
    (node.title && ["tool", "language", "link", "document", "file", "image", "test", "pcb", "code"].includes(kind))
  );
}

function pruneLegacyNode(node) {
  if (!node) return null;
  const children = [...(node.children || []), ...(node.items || [])].map(pruneLegacyNode).filter(Boolean);
  const next = { ...node };
  if (children.length) next.children = children;
  else delete next.children;
  delete next.items;
  return legacyNodeHasSubstance(next) ? next : null;
}

function normalizeBuilderNodeTree(node) {
  if (!node) return node;
  const children = [...(node.children || []), ...(node.items || [])].filter(Boolean).map(normalizeBuilderNodeTree);
  const next = { ...node };
  if (children.length) next.children = children;
  else if (!Array.isArray(next.children)) next.children = [];
  delete next.items;
  return next;
}

function legacySectionHasSubstance(section) {
  return Boolean(
    section?.description ||
    richHasContent(section?.richDescription) ||
    (section?.items || []).some(legacyNodeHasSubstance)
  );
}

function legacyFileNode(item = {}, fallbackTitle = "File", kind = "file") {
  const url = item.url || item.artifact || "";
  return {
    title: item.title || item.name || item.label || fallbackTitle,
    description: item.description || item.caption || item.result || item.method || "",
    kind,
    type: item.type || item.status || item.method || (url ? "File" : "Text"),
    url,
    richDescription: item.richDescription || null,
    status: item.status || (url ? "uploaded" : "draft")
  };
}

function uniqueSectionId(project, title) {
  const baseId = slugify(title || "section") || "section";
  const existing = new Set((project.sections || []).map((section) => section.id));
  let id = baseId;
  let suffix = 2;
  while (existing.has(id)) {
    id = `${baseId}-${suffix}`;
    suffix += 1;
  }
  return id;
}

function addMigratedSection(project, title, items = [], description = "", richDescription = null) {
  const cleanItems = (items || []).map(pruneLegacyNode).filter(Boolean);
  const section = {
    id: uniqueSectionId(project, title),
    title,
    description: description || "",
    richDescription: richHasContent(richDescription) ? clone(richDescription) : null,
    items: cleanItems
  };
  if (!legacySectionHasSubstance(section)) return;
  project.sections = project.sections || [];
  project.sections.push(section);
}

function legacyDesignHasContent(design = {}) {
  return Boolean(
    design.brief?.summary ||
    richHasContent(design.brief?.summaryRich) ||
    (design.brief?.files || []).some(legacyNodeHasSubstance) ||
    design.documentation?.summary ||
    richHasContent(design.documentation?.summaryRich) ||
    (design.documentation?.files || []).some(legacyNodeHasSubstance) ||
    (design.documentation?.references || []).some(legacyNodeHasSubstance) ||
    (design.documentation?.mathAnalysis || []).some(legacyNodeHasSubstance) ||
    design.simulation?.summary ||
    richHasContent(design.simulation?.summaryRich) ||
    (design.simulation?.files || []).some(legacyNodeHasSubstance) ||
    (design.simulation?.results || []).some(legacyNodeHasSubstance)
  );
}

function migrateLegacyProjectSections(project) {
  if (!project) return project;
  project.sections = Array.isArray(project.sections) ? project.sections : [];
  if (project.sectionModelVersion >= 2) {
    project.sections = project.sections
      .map((section) => ({
        ...section,
        items: Array.isArray(section.items) ? section.items.map(normalizeBuilderNodeTree) : []
      }))
      .map(pruneProjectSectionTree)
      .filter(Boolean);
    project.sectionModelVersion = 3;
    return project;
  }

  project.sections = project.sections
    .map((section) => ({
      ...section,
      items: (section.items || []).map(pruneLegacyNode).filter(Boolean)
    }))
    .map(pruneProjectSectionTree)
    .filter(Boolean);

  const design = project.design || {};
  if (legacyDesignHasContent(design)) {
    const designItems = [];
    if (design.brief?.summary || richHasContent(design.brief?.summaryRich) || (design.brief?.files || []).length) {
      designItems.push({
        title: "Design overview",
        description: design.brief?.summary || "",
        richDescription: design.brief?.summaryRich || null,
        children: (design.brief?.files || []).map((item) => legacyFileNode(item, "Design file", "document"))
      });
    }
    if (design.documentation?.summary || richHasContent(design.documentation?.summaryRich) || (design.documentation?.files || []).length || (design.documentation?.references || []).length || (design.documentation?.mathAnalysis || []).length) {
      designItems.push({
        title: "Documentation",
        description: design.documentation?.summary || "",
        richDescription: design.documentation?.summaryRich || null,
        children: [
          ...(design.documentation?.files || []).map((item) => legacyFileNode(item, "Document", "document")),
          ...(design.documentation?.references || []).map((item) => legacyFileNode(item, "Reference", "reference")),
          ...(design.documentation?.mathAnalysis || []).map((item) => legacyFileNode(item, "Math / analysis", "analysis"))
        ]
      });
    }
    if (designItems.length) addMigratedSection(project, "Design", designItems);

    const simulationItems = [
      ...(design.simulation?.files || []).map((item) => legacyFileNode(item, "Simulation file", "simulation-file")),
      ...(design.simulation?.results || []).map((item) => legacyFileNode(item, "Simulation result", "simulation-result"))
    ];
    if (design.simulation?.summary || richHasContent(design.simulation?.summaryRich) || simulationItems.length) {
      addMigratedSection(project, "Simulation", simulationItems, design.simulation?.summary || "", design.simulation?.summaryRich || null);
    }
  }

  if ((project.documents || []).length) addMigratedSection(project, "Documents", (project.documents || []).map((item) => legacyFileNode(item, "Document", "document")));
  if ((project.tests || []).length) addMigratedSection(project, "Tests", (project.tests || []).map((item) => legacyFileNode(item, "Test", "test")));
  if ((project.pcbs || []).length) addMigratedSection(project, "PCBs Built", (project.pcbs || []).map((item) => legacyFileNode(item, "PCB", "pcb")));
  if ((project.media || []).length) addMigratedSection(project, "Images", (project.media || []).map((item) => legacyFileNode(item, "Image", "image")));

  const toolItems = [
    ...(project.tools || []).map((item) => ({
      title: toolName(item) || "Tool",
      description: toolDescription(item) || "",
      kind: "tool",
      type: "Tool",
      richDescription: item?.richDescription || null
    })),
    ...(project.languages || []).map((item) => ({
      title: typeof item === "string" ? item : itemTitle(item),
      description: "Language used in this project.",
      kind: "language",
      type: "Language"
    })),
    ...(project.links || []).map((item) => legacyFileNode(item, "Link", "link"))
  ];
  if (toolItems.some(legacyNodeHasSubstance)) addMigratedSection(project, "Tools and Links", toolItems);

  const compileFiles = project.compileCode?.files || [];
  if (compileFiles.some((file) => file.code || file.savedPath || file.fileName)) {
    addMigratedSection(project, "Compile Code", compileFiles.map((file) => ({
      title: file.title || file.fileName || "Source file",
      description: file.code || file.savedPath || "",
      kind: "code",
      type: file.language || "code",
      richDescription: file.code ? { blocks: [{ type: "code", language: file.language || "text", code: file.code, title: file.fileName || file.title || "Source file" }] } : null
    })));
  }

  project.documents = [];
  project.tests = [];
  project.pcbs = [];
  project.media = [];
  project.tools = [];
  project.languages = [];
  project.links = [];
  delete project.design;
  project.sections = project.sections.map(pruneProjectSectionTree).filter(Boolean);
  project.sectionModelVersion = 3;
  return project;
}

function parsedDesignSection(project) {
  if (isAnalogProject(project)) {
    const design = ensureDesignModel(project);
    const documentationItems = [
      ...resourcesFrom(project, "documents"),
      ...resourcesFromItems(design.documentation.files, "document"),
      parsedSubsection("References", "", resourcesFromItems(design.documentation.references, "reference")),
      parsedSubsection("Math / Analysis", "", resourcesFromItems(design.documentation.mathAnalysis, "analysis"))
    ];
    const boardMediaItems = [
      ...resourcesFrom(project, "pcbs"),
      ...resourcesFrom(project, "media")
    ];
    return parsedSection("design", "Design", [
      parsedSubsection("Design Overview", design.brief.summary || "", [
        ...resourcesFromItems(design.brief.files, "document")
      ], design.brief.summaryRich),
      parsedSubsection("Documentation", design.documentation.summary || "", documentationItems, design.documentation.summaryRich),
      parsedSubsection("PCB and Visual Evidence", "", boardMediaItems)
    ]);
  }
  return parsedSection("design", "Design", [
    ...resourcesFrom(project, "documents"),
    ...resourcesFrom(project, "pcbs"),
    ...resourcesFrom(project, "media")
  ]);
}

function parsedSimulationSection(project) {
  if (!isAnalogProject(project)) return null;
  const design = ensureDesignModel(project);
  return parsedSection("simulation", "Simulation", [
    parsedSubsection("Simulation Overview", design.simulation.summary || "", [], design.simulation.summaryRich),
    parsedSubsection("Simulation Files", "", resourcesFromItems(design.simulation.files, "simulation-file")),
    parsedSubsection("Simulation Results", "", resourcesFromItems(design.simulation.results, "simulation-result"))
  ]);
}

function parsedToolsSection(project) {
  const toolItems = (project.tools || []).map((tool) => parserItem(toolName(tool), toolDescription(tool), "", "Tool", "tool", tool?.richDescription));
  const languageItems = (project.languages || []).map((language) => {
    const label = typeof language === "string" ? language : itemTitle(language);
    return parserItem(label, "", "", "Language", "language");
  });
  return parsedSection("tools", "Tools", [
    ...toolItems,
    ...languageItems,
    ...resourcesFrom(project, "links")
  ]);
}

function parseProjectForPortfolio(project) {
  const template = projectTemplateFor(project);
  project.status = normalizeProjectStatus(project.status);
  const parsedSections = sectionOptions(project).flatMap((section) => {
    if (section.id === "brief") {
      return parsedSection("brief", "Overview", [
        parserItem("Overview", project.summary || "", "", "Overview", "summary", project.summaryRich)
      ]);
    }
    if (section.id.startsWith("custom:")) {
      const sectionId = section.id.replace("custom:", "");
      const custom = (project.sections || []).find((item) => item.id === sectionId);
      return custom ? parsedGenericSection(custom) : null;
    }
    return null;
  }).filter(parsedSectionHasContent);

  return {
    ...clone(project),
    portfolioView: {
      builtAt: new Date().toISOString(),
      template: {
        group: "Appearance",
        id: projectTemplateId(project),
        label: template.label || project.templateLabel || "",
        visual: template.visual ? clone(template.visual) : projectTemplateVisual(project)
      },
      responsive: buildResponsiveProfile(project, parsedSections),
      showStatus: project.showStatusOnPortfolio !== false,
      status: normalizeProjectStatus(project.status),
      title: project.title,
      sections: parsedSections
    }
  };
}

function refreshOpenPreviews() {
  if (projectPreviewDialog?.open) {
    const project = selectedProject();
    const savedProject = (savedPortfolioCatalog.projects || []).find((item) => item.id === project?.id);
    renderProjectWebsitePreview(savedProject || project);
  }
  if (portfolioPreviewDialog?.open) {
    renderPreview();
  }
}

async function saveSelectedProjectAndClose() {
  if (await saveSelectedProjectToPortfolio()) {
    closeDialogElement(projectDialog);
  }
}

async function commitActiveProjectEdits() {
  saveVisibleRichEditors();

  if (summaryEditorProjectId) {
    return saveRichSummary();
  }

  return true;
}

async function saveAllSections(options = {}) {
  const settings = options && options.currentTarget ? {} : options;
  if (!(await commitActiveProjectEdits())) return false;
  syncParsedPortfolioGlobalsIntoSaved();
  (catalog.projects || []).forEach((project) => {
    migrateLegacyProjectSections(project);
    ensureCompileCode(project);
  });
  savedPortfolioCatalog.projects = (catalog.projects || []).map((project) => parseProjectForPortfolio(project));
  markDraftNeedsSave();
  scheduleAutosave();
  if (projectDialog?.open) closeDialogElement(projectDialog);
  if (settings.refreshOpenPreviews !== false) refreshOpenPreviews();
  setStatus(`Saved ${savedPortfolioCatalog.projects.length} project${savedPortfolioCatalog.projects.length === 1 ? "" : "s"} into the portfolio preview.`);
  updateBuilderWorkflow();
  return true;
}

function selectedProject() {
  return catalog.projects.find((project) => project.id === selectedProjectId) || catalog.projects[0];
}

function sectionWindowId(sectionId) {
  if (["documents", "pcbs", "media"].includes(sectionId)) return "design";
  if (["links", "highlights", "tools", "languages"].includes(sectionId)) return "tools";
  return sectionId || "brief";
}

function activeCustomSectionPath(sectionId = "") {
  return activeCustomSectionView.sectionId === sectionId
    ? [...activeCustomSectionView.path]
    : [];
}

function setActiveCustomSectionPath(sectionId = "", path = []) {
  activeCustomSectionView = {
    sectionId,
    path: Array.isArray(path) ? [...path] : nodePathFromString(path)
  };
}

function projectWindowStateKey(sectionId = activeSectionId) {
  if (String(sectionId || "").startsWith("custom:")) {
    const customSectionId = String(sectionId).replace("custom:", "");
    const pathValue = nodePathToString(activeCustomSectionPath(customSectionId));
    return pathValue ? `${sectionId}|${pathValue}` : sectionId;
  }
  return sectionId || "brief";
}

function projectViewTabId() {
  return `project-view-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function projectViewStateTitle(project, stateKey = "brief") {
  const [sectionId, pathValue = ""] = String(stateKey || "brief").split("|");
  const section = sectionOptions(project).find((item) => item.id === sectionId);
  if (!section) return "Project view";
  if (!sectionId.startsWith("custom:")) return section.label || "Project view";
  const sectionDataId = sectionId.replace("custom:", "");
  const sectionData = (project.sections || []).find((item) => item.id === sectionDataId);
  const path = nodePathFromString(pathValue);
  if (!path.length) return section.label || sectionData?.title || "Section";
  const node = sectionData ? findBuilderNode(sectionData, path) : null;
  return node ? builderNodeTitle(node) : section.label || "Subsection";
}

function syncActiveProjectViewTabFromState() {
  const project = selectedProject();
  if (!project || !projectViewTabsBar) return;
  const currentState = projectWindowStateKey();
  if (!projectViewTabs.length) {
    const id = projectViewTabId();
    projectViewTabs = [{ id, stateKey: currentState, title: projectViewStateTitle(project, currentState), backStack: [], forwardStack: [] }];
    activeProjectViewTabId = id;
    return;
  }
  const activeTab = projectViewTabs.find((tab) => tab.id === activeProjectViewTabId) || projectViewTabs[0];
  activeProjectViewTabId = activeTab.id;
  activeTab.stateKey = currentState;
  activeTab.title = projectViewStateTitle(project, currentState);
  activeTab.backStack = [...projectWindowBackStack];
  activeTab.forwardStack = [...projectWindowForwardStack];
}

function openProjectViewTab(stateKey = "brief", options = {}) {
  const project = selectedProject();
  if (!project) return false;
  const existing = projectViewTabs.find((tab) => tab.stateKey === stateKey);
  if (existing) {
    activeProjectViewTabId = existing.id;
    projectWindowBackStack = [...(existing.backStack || [])];
    projectWindowForwardStack = [...(existing.forwardStack || [])];
    applyProjectWindowStateKey(existing.stateKey);
    pendingEditor = null;
    renderAll();
    resetProjectWindowScroll();
    return true;
  }
  if (projectViewTabs.length >= 4) {
    setStatus("You can keep up to four project section views open at the same time.");
    return false;
  }
  const id = projectViewTabId();
  projectViewTabs.push({
    id,
    stateKey,
    title: options.title || projectViewStateTitle(project, stateKey),
    backStack: [],
    forwardStack: []
  });
  activeProjectViewTabId = id;
  projectWindowBackStack = [];
  projectWindowForwardStack = [];
  applyProjectWindowStateKey(stateKey);
  pendingEditor = null;
  renderAll();
  resetProjectWindowScroll();
  setStatus("Opened project section view.");
  return true;
}

function detachedProjectWindowId() {
  return `detached-project-view-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function renderDetachedNestedSectionNav(section, currentChildren = [], currentPath = [], windowId = "") {
  const childRows = (currentChildren || [])
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item && !item.url && !item.artifact);
  if (!childRows.length) return "";
  return `
    <nav class="detached-project-view-nav" aria-label="Subsections in this detached view">
      ${childRows.map(({ item, index }) => {
        const pathValue = customViewPathValue([...currentPath, index]);
        return `
          <button
            class="nested-section-link"
            type="button"
            data-detached-window-node="${escapeHtml(windowId)}"
            data-section-id="${escapeHtml(section.id)}"
            data-node-path="${escapeHtml(pathValue)}"
          >
            ${escapeHtml(builderNodeTitle(item))}
          </button>
        `;
      }).join("")}
    </nav>
  `;
}

function renderDetachedCustomSectionContent(project, sectionId, path = [], windowId = "") {
  const section = (project.sections || []).find((item) => item.id === sectionId);
  if (!section) return `<p class="evidence-empty">Section not found.</p>`;
  normalizeBuilderSectionStorage(section);
  const currentNode = path.length ? findBuilderNode(section, path) : section;
  if (path.length && !currentNode) return `<p class="evidence-empty">Subsection not found.</p>`;
  const currentChildren = path.length ? builderNodeChildren(currentNode) : sectionRootChildren(section);
  const description = path.length ? currentNode?.description || "" : section.description || "";
  const richDescription = path.length ? currentNode?.richDescription : section.richDescription;
  const hasViewContent = richHasContent(richDescription) || Boolean(String(description || "").trim());
  const fileListHtml = renderCustomFilesList(section, currentChildren, path);
  const hasChildSections = (currentChildren || []).some((item) => item && !item.url && !item.artifact);
  const emptyMetadata = !hasChildSections && !fileListHtml
    ? `<p class="evidence-empty explorer-empty section-window-bottom-metadata">No subsections or files added yet.</p>`
    : "";

  return `
    ${renderDetachedNestedSectionNav(section, currentChildren, path, windowId)}
    <div class="section-window-view-canvas${hasViewContent || fileListHtml ? "" : " is-empty"}">
      <div class="section-window-content-stack">
        ${hasViewContent ? builderPreviewContent(richDescription, description, "") : ""}
        ${fileListHtml}
      </div>
      ${emptyMetadata}
    </div>
  `;
}

function renderDetachedProjectViewWindow(win = {}) {
  const project = (catalog.projects || []).find((item) => item.id === win.projectId);
  if (!project) return "";
  const [sectionId, pathValue = ""] = String(win.stateKey || "brief").split("|");
  const path = nodePathFromString(pathValue);
  const title = projectViewStateTitle(project, win.stateKey);
  const content = sectionId === "brief"
    ? `<div class="section-window-view-canvas"><div class="section-window-content-stack">${builderPreviewContent(project.summaryRich, project.summary || "", "") || `<p class="evidence-empty">No overview has been added yet.</p>`}</div></div>`
    : sectionId === "compile-code"
      ? `<div class="section-window-view-canvas"><p class="evidence-empty">Compile Code stays in the main project window so the editor, terminal, and compiler state are not duplicated.</p></div>`
      : sectionId.startsWith("custom:")
        ? renderDetachedCustomSectionContent(project, sectionId.replace("custom:", ""), path, win.id)
        : `<div class="section-window-view-canvas"><p class="evidence-empty">Open this section from the main project window.</p></div>`;
  return `
    <section
      class="detached-project-view-window"
      data-detached-project-view="${escapeHtml(win.id)}"
      style="left:${Number(win.x) || 72}px; top:${Number(win.y) || 72}px; width:${Number(win.width) || 760}px; height:${Number(win.height) || 520}px;"
      role="dialog"
      aria-label="${escapeHtml(title)}"
    >
      <div class="detached-project-view-heading" data-detached-project-view-drag="${escapeHtml(win.id)}">
        <strong>${escapeHtml(title)}</strong>
        <button class="project-window-close" type="button" data-close-detached-project-view="${escapeHtml(win.id)}" aria-label="Close detached project view">&times;</button>
      </div>
      <div class="detached-project-view-body">
        ${content}
      </div>
    </section>
  `;
}

function detachedProjectViewHost() {
  return projectWindowContent || projectDialog?.querySelector(".project-window-content") || projectDialog || document.body;
}

function renderDetachedProjectViewWindows() {
  document.querySelectorAll("[data-detached-project-view]").forEach((node) => node.remove());
  projectDialog?.classList.toggle("has-detached-project-view-window", detachedProjectViewWindows.length > 0);
  const host = detachedProjectViewHost();
  detachedProjectViewWindows.forEach((win) => {
    host.insertAdjacentHTML("beforeend", renderDetachedProjectViewWindow(win));
  });
}

function detachedProjectViewElement(windowId = "") {
  return [...document.querySelectorAll("[data-detached-project-view]")]
    .find((element) => element.dataset.detachedProjectView === windowId) || null;
}

function openDetachedProjectViewWindow(stateKey = "brief", options = {}) {
  const project = selectedProject();
  if (!project) return false;
  if (detachedProjectViewWindows.length >= 4) {
    setStatus("You can keep up to four detached project windows open at the same time.");
    return false;
  }
  const existing = detachedProjectViewWindows.find((win) => win.projectId === project.id && win.stateKey === stateKey);
  if (existing) {
    existing.x = Math.max(24, existing.x || 72);
    existing.y = Math.max(24, existing.y || 72);
    renderDetachedProjectViewWindows();
    setStatus("That project view is already open in a separate window.");
    return true;
  }
  const offset = detachedProjectViewWindows.length * 28;
  const hostRect = detachedProjectViewHost().getBoundingClientRect();
  const width = Math.min(820, Math.max(360, Math.round(hostRect.width - 48)));
  const height = Math.min(560, Math.max(260, Math.round(hostRect.height - 48)));
  detachedProjectViewWindows.push({
    id: detachedProjectWindowId(),
    projectId: project.id,
    stateKey,
    title: options.title || projectViewStateTitle(project, stateKey),
    x: 24 + offset,
    y: 24 + offset,
    width,
    height
  });
  renderDetachedProjectViewWindows();
  setStatus("Opened project section in a separate window.");
  return true;
}

function activateProjectViewTab(tabId = "") {
  const tab = projectViewTabs.find((item) => item.id === tabId);
  if (!tab) return;
  activeProjectViewTabId = tab.id;
  projectWindowBackStack = [...(tab.backStack || [])];
  projectWindowForwardStack = [...(tab.forwardStack || [])];
  applyProjectWindowStateKey(tab.stateKey);
  pendingEditor = null;
  renderAll();
  resetProjectWindowScroll();
}

function closeProjectViewTab(tabId = "") {
  if (projectViewTabs.length <= 1) {
    setStatus("Keep at least one project section tab open.");
    return;
  }
  const index = projectViewTabs.findIndex((tab) => tab.id === tabId);
  if (index < 0) return;
  const wasActive = projectViewTabs[index].id === activeProjectViewTabId;
  projectViewTabs.splice(index, 1);
  if (wasActive) {
    const next = projectViewTabs[Math.min(index, projectViewTabs.length - 1)] || projectViewTabs[0];
    activeProjectViewTabId = next.id;
    projectWindowBackStack = [...(next.backStack || [])];
    projectWindowForwardStack = [...(next.forwardStack || [])];
    applyProjectWindowStateKey(next.stateKey);
  }
  pendingEditor = null;
  renderAll();
  resetProjectWindowScroll();
}

function applyProjectWindowStateKey(stateKey = "brief") {
  const [sectionId, pathValue = ""] = String(stateKey || "brief").split("|");
  activeSectionId = sectionId || "brief";
  if (activeSectionId.startsWith("custom:")) {
    setActiveCustomSectionPath(activeSectionId.replace("custom:", ""), nodePathFromString(pathValue));
  }
}

function resetProjectWindowScroll() {
  projectWindowContent.scrollTop = 0;
  requestAnimationFrame(() => {
    projectWindowContent.scrollTop = 0;
    requestAnimationFrame(() => {
      projectWindowContent.scrollTop = 0;
    });
  });
}

function openProjectWindow(projectId, sectionId = "brief") {
  selectedProjectId = projectId;
  projectWindowTitle.dataset.projectId = projectId;
  activeSectionId = sectionWindowId(sectionId);
  setActiveCustomSectionPath("", []);
  projectWindowBackStack = [];
  projectWindowForwardStack = [];
  const initialStateKey = projectWindowStateKey(activeSectionId);
  projectViewTabs = [{ id: projectViewTabId(), stateKey: initialStateKey, title: "Overview", backStack: [], forwardStack: [] }];
  activeProjectViewTabId = projectViewTabs[0].id;
  projectTitleMenu.hidden = true;
  projectDialog.removeAttribute("style");
  projectDialog.classList.remove(
    "is-draggable-dialog",
    "is-hidden-dialog",
    "is-maximized-dialog",
    "is-minimized-dialog",
    "is-resized-dialog"
  );
  delete projectDialog.dataset.restoreWindowState;
  const project = selectedProject();
  const category = categoryById(project?.category);
  if (project) applyProjectTemplateToElement(projectDialog, project, category.accent || "#117c7a");
  renderAll();
  document.body.classList.add("project-window-open");
  if (!projectDialog.open) projectDialog.showModal();
  resetProjectWindowScroll();
  updateDialogWindowButtons(projectDialog);
}

function categoryById(id) {
  return catalog.categories.find((category) => category.id === id) || {};
}

function normalizeCategory(category = {}) {
  const label = String(category.label || category.title || "New category").trim() || "New category";
  const id = slugify(category.id || label) || "category";
  const accent = normalizeTextColor(category.accent || "") || "#1677a8";
  return {
    accent,
    description: String(category.description || "").trim(),
    id,
    label
  };
}

function refreshCategoryControls() {
  catalog.categories = (catalog.categories || []).map(normalizeCategory);
  savedPortfolioCatalog.categories = clone(catalog.categories || []);
  if (newCategorySelect) {
    newCategorySelect.innerHTML = catalog.categories.map((category) => `<option value="${escapeHtml(category.id)}">${escapeHtml(category.label)}</option>`).join("");
  }
  renderCategoryDropdown();
}

function linkAttributes(url, item = {}) {
  const target = normalizeLinkTarget(url, { assumeWeb: isWebsiteLinkItem(item, url) });
  return /^https?:\/\//i.test(target) ? ' target="_blank" rel="noreferrer"' : "";
}

function isLocalDownloadTarget(target = "") {
  const value = normalizeLinkTarget(target, { assumeWeb: true });
  return Boolean(value) && !/^(https?:)?\/\//i.test(value) && !/^(mailto:|tel:|#)/i.test(value);
}

function downloadAttribute(target = "", item = {}) {
  const value = normalizeLinkTarget(target, { assumeWeb: isWebsiteLinkItem(item, target) });
  return isLocalDownloadTarget(value) ? " download" : "";
}

function builderFileUrl(item = {}) {
  return item?.url || item?.artifact || item?.href || item?.file || item?.path || item?.src || "";
}

function builderFileDisplayName(item = {}) {
  return itemTitle(item) || displayNameFromUrl(builderFileUrl(item), "Project file");
}

function isBuilderPdfFile(item = {}) {
  const url = builderFileUrl(item);
  return extensionFromUrl(url) === ".pdf" || /pdf/i.test(item?.type || "");
}

function isBuilderTextFile(item = {}) {
  const url = builderFileUrl(item);
  const extension = extensionFromUrl(url);
  return extension === ".txt" || /^text\/plain\b/i.test(item?.type || "");
}

function downloadBuilderFile(item = {}) {
  const rawUrl = builderFileUrl(item);
  const target = normalizeLinkTarget(rawUrl, { assumeWeb: isWebsiteLinkItem(item, rawUrl) });
  if (!target) return false;
  const anchor = document.createElement("a");
  anchor.href = target;
  anchor.download = builderFileDisplayName(item);
  if (/^https?:\/\//i.test(target)) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  return true;
}

async function openBuilderFileWindow(item = {}) {
  const rawUrl = builderFileUrl(item);
  const target = normalizeLinkTarget(rawUrl, { assumeWeb: isWebsiteLinkItem(item, rawUrl) });
  if (!target) {
    setStatus("This file has no URL to open.");
    return;
  }

  const title = builderFileDisplayName(item);
  if (!isBuilderPdfFile(item) && !isBuilderTextFile(item)) {
    if (downloadBuilderFile(item)) setStatus(`Downloading ${title}.`);
    return;
  }

  if (builderFileViewTitle) builderFileViewTitle.textContent = title;
  if (builderFileViewEyebrow) builderFileViewEyebrow.textContent = isBuilderPdfFile(item) ? "PDF viewer" : "Text file viewer";
  if (builderFileViewOpen) {
    builderFileViewOpen.href = target;
    builderFileViewOpen.hidden = false;
  }
  if (builderFileViewDownload) {
    builderFileViewDownload.href = target;
    builderFileViewDownload.download = title;
    builderFileViewDownload.hidden = false;
  }

  if (isBuilderPdfFile(item)) {
    builderFileViewContent.innerHTML = `
      <iframe class="builder-file-pdf-frame" title="${escapeHtml(title)}" src="${escapeHtml(target)}"></iframe>
    `;
  } else {
    builderFileViewContent.innerHTML = `<div class="builder-file-loading">Loading text file...</div>`;
    try {
      const response = await fetch(target, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const text = await response.text();
      builderFileViewContent.innerHTML = `
        <textarea class="builder-file-text-editor" spellcheck="false" readonly>${escapeHtml(text)}</textarea>
      `;
    } catch (error) {
      builderFileViewContent.innerHTML = `
        <div class="builder-file-error">
          <strong>Text preview failed.</strong>
          <p>${escapeHtml(error.message || "The file could not be loaded into the text viewer.")}</p>
        </div>
      `;
    }
  }

  if (!builderFileViewDialog?.open) builderFileViewDialog.showModal();
  updateDialogWindowButtons(builderFileViewDialog);
}

function resourceLink(item, label = item.label || item.title || item.name) {
  const rawTarget = item.url || item.artifact || item.href || item.file || item.path || item.src || "";
  const target = normalizeLinkTarget(rawTarget, { assumeWeb: isWebsiteLinkItem(item, rawTarget) });

  if (!target || item.status === "planned") {
    return `<span class="resource-link muted">${label}</span>`;
  }

  return `<a class="resource-link" href="${escapeHtml(target)}"${linkAttributes(target, item)}${downloadAttribute(target, item)}>${escapeHtml(label)}</a>`;
}

function pillList(items, className = "") {
  return (items || []).map((item) => {
    const label = typeof item === "string" ? item : item.name || item.title || item.label || "";
    return `<span class="tag ${className}">${label}</span>`;
  }).join("");
}

function evidenceList(items, renderItem, emptyMessage) {
  if (!items || !items.length) return `<p class="evidence-empty">${emptyMessage}</p>`;
  return `<ul>${items.map(renderItem).join("")}</ul>`;
}

function detailBlock(title, className, content) {
  return `
    <details class="${className}">
      <summary>${title}</summary>
      ${content}
    </details>
  `;
}

function mediaGrid(items) {
  if (!items || !items.length) return `<p class="evidence-empty">No project images have been added yet.</p>`;

  return `
    <div class="media-grid">
      ${items.map((item) => `
        <figure>
          ${item.status === "planned" ? `
            <div class="media-placeholder">${item.title}</div>
          ` : `
            <a href="${escapeHtml(normalizeLinkTarget(item.url, { assumeWeb: isWebsiteLinkItem(item, item.url) }))}"${linkAttributes(item.url, item)}>
              <img src="${escapeHtml(normalizeLinkTarget(item.url, { assumeWeb: isWebsiteLinkItem(item, item.url) }))}" alt="${escapeHtml(item.title)}">
            </a>
          `}
          <figcaption>
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.caption || "")}</span>
          </figcaption>
        </figure>
      `).join("")}
    </div>
  `;
}

function itemTitle(item) {
  if (typeof item === "string") return item;
  return item?.title || item?.name || item?.label || "Untitled item";
}

function itemUrl(item) {
  return item?.url || item?.artifact || "";
}

function itemDescription(item) {
  return item?.description || item?.caption || item?.result || item?.method || "";
}

function isImageUrl(url) {
  return /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(url || "");
}

function portfolioLink(url, label) {
  if (!url) return `<span>${label}</span>`;
  const target = normalizeLinkTarget(url, { assumeWeb: true });
  return `<a href="${escapeHtml(target)}"${linkAttributes(target)}${downloadAttribute(target)}>${escapeHtml(label)}</a>`;
}

function renderPortfolioResourceList(title, items, emptyMessage) {
  return `
    <section class="portfolio-preview-section">
      <h3>${title}</h3>
      ${(items || []).length ? `
        <div class="portfolio-resource-list">
          ${items.map((item) => {
            const titleText = itemTitle(item);
            const url = itemUrl(item);
            const description = itemDescription(item);
            return `
              <article class="portfolio-resource">
                <strong>${portfolioLink(url, titleText)}</strong>
                ${description ? `<p>${description}</p>` : ""}
              </article>
            `;
          }).join("")}
        </div>
      ` : `<p class="evidence-empty">${emptyMessage}</p>`}
    </section>
  `;
}

function renderPortfolioMedia(items) {
  return `
    <section class="portfolio-preview-section">
      <h3>Images</h3>
      ${(items || []).length ? `
        <div class="portfolio-media-grid">
          ${items.map((item) => {
            const url = itemUrl(item);
            return `
              <figure>
                ${isImageUrl(url) ? `<img src="${url}" alt="${itemTitle(item)}">` : `<div class="media-placeholder">${itemTitle(item)}</div>`}
                <figcaption>
                  <strong>${itemTitle(item)}</strong>
                  ${itemDescription(item) ? `<span>${itemDescription(item)}</span>` : ""}
                </figcaption>
              </figure>
            `;
          }).join("")}
        </div>
      ` : `<p class="evidence-empty">No images have been added yet.</p>`}
    </section>
  `;
}

function renderPortfolioTools(project) {
  return `
    <section class="portfolio-preview-section">
      <h3>Tools</h3>
      ${(project.tools || []).length ? `
        <div class="portfolio-tool-list">
          ${project.tools.map((tool) => `
            <article>
              <strong>${toolName(tool)}</strong>
              ${toolDescription(tool) ? `<p>${toolDescription(tool)}</p>` : ""}
            </article>
          `).join("")}
        </div>
      ` : `<p class="evidence-empty">No tools have been added yet.</p>`}
    </section>
  `;
}

function renderPortfolioCustomSections(project) {
  return (project.sections || []).map((section) => `
    <section class="portfolio-preview-section">
      <h3>${section.title}</h3>
      ${section.description ? `<p>${section.description}</p>` : ""}
      ${(section.items || []).length ? `
        <div class="portfolio-resource-list">
          ${section.items.map((item) => `
            <article class="portfolio-resource">
              <strong>${portfolioLink(item.url, item.title || "Untitled subsection")}</strong>
              ${item.description ? `<p>${item.description}</p>` : ""}
            </article>
          `).join("")}
        </div>
      ` : `<p class="evidence-empty">No content has been added yet.</p>`}
    </section>
  `).join("");
}

function publicCustomSectionBlocks(project) {
  return (project.sections || []).map((section) => detailBlock(section.title, "evidence-block evidence-wide", `
    ${section.description ? `<p class="evidence-empty">${renderMultilineInlineText(section.description)}</p>` : ""}
    ${evidenceList(section.items || [], (item) => `
      <li>
        ${item.url ? resourceLink(item, item.title) : `<strong>${item.title}</strong>`}
        <span>${item.type || "Section item"} &middot; ${item.status || "tracked"}</span>
        ${item.description ? `<p>${renderMultilineInlineText(item.description)}</p>` : ""}
      </li>
    `, "No content has been added yet.")}
  `)).join("");
}

function renderProjectPortfolioPreview(project) {
  if (!project) return `<p class="evidence-empty">Select a project first.</p>`;
  const category = categoryById(project.category);
  const accent = category.accent || "#117c7a";
  if (project.portfolioView) {
    const briefSection = (project.portfolioView.sections || []).find((section) => section.id === "brief");
    const otherSections = (project.portfolioView.sections || []).filter((section) => section.id !== "brief" && previewSectionHasRenderableContent(section));
    return `
      <article class="portfolio-preview-article ${projectTemplateClass(project)} ${projectResponsiveClass(project)}" style="${projectTemplateStyle(project, accent)}">
        <header>
          ${renderParsedBriefBlock(briefSection, project.summary)}
        </header>
        <div class="evidence-grid">
          ${otherSections.map((section, index) => parsedPublicSection(section, index)).join("")}
        </div>
      </article>
    `;
  }
  return `
    <article class="portfolio-preview-article ${projectTemplateClass(project)} ${projectResponsiveClass(project)}" style="${projectTemplateStyle(project, accent)}">
      <header>
        <div class="project-brief-default">
          <h4>Overview</h4>
          ${project.summary ? `<p class="rich-paragraph">${renderMultilineInlineText(project.summary)}</p>` : `<p class="evidence-empty">No project overview has been added yet.</p>`}
        </div>
      </header>
      ${renderPortfolioResourceList("Documents", project.documents, "No documents have been added yet.")}
      ${renderPortfolioResourceList("Tests", project.tests, "No tests have been added yet.")}
      ${renderPortfolioResourceList("PCBs Built", project.pcbs, "No PCB files have been added yet.")}
      ${renderPortfolioMedia(project.media)}
      ${renderPortfolioTools(project)}
      ${renderPortfolioResourceList("Languages", (project.languages || []).map((item) => ({ title: typeof item === "string" ? item : itemTitle(item) })), "No languages have been added yet.")}
      ${renderPortfolioResourceList("Links", project.links, "No links have been added yet.")}
      ${renderPortfolioCustomSections(project)}
    </article>
  `;
}

function fullProjectPreviewHtmlExact(project) {
  const baseHref = `${window.location.origin}/`;
  if (!project) {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="${baseHref}" />
    <link rel="stylesheet" href="styles.css" />
    <title>Project preview</title>
  </head>
  <body class="project-isolated-preview">
    <main class="project-isolated-shell">
      <div class="empty-state">
        <h3>No saved project preview</h3>
        <p>Click Save project before viewing the parsed project preview.</p>
      </div>
    </main>
  </body>
</html>`;
  }
  const parsedProject = project.portfolioView ? project : parseProjectForPortfolio(project);
  const categorySource = categoryById(parsedProject.category);
  const previewCategory = normalizeCategory(categorySource.id ? categorySource : {
    id: parsedProject.category || "project",
    label: displayTitle(parsedProject.category || "Project", "Project")
  });
  const parsedGlobals = parsedPortfolioGlobals();
  const previewDataObject = {
    categories: [previewCategory],
    fieldStyles: parsedGlobals.fieldStyles,
    funFacts: [],
    funFactsRich: null,
    profile: parsedGlobals.profile,
    profileRich: parsedGlobals.profileRich,
    projects: [parsedProject],
    siteContent: parsedGlobals.siteContent,
    siteContentRich: parsedGlobals.siteContentRich,
    siteSections: []
  };
  const previewData = JSON.stringify(previewDataObject).replaceAll("</", "<\\/");
  const title = parsedProject.portfolioView?.title || parsedProject.title || "Project preview";
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="${baseHref}" />
    <title>${escapeHtml(title)} | Project preview</title>
    <link rel="stylesheet" href="styles.css" />
    <style>
      body.project-isolated-preview {
        min-height: 100vh;
        margin: 0;
        background: var(--paper, #f8fbff);
        color: var(--ink, #172636);
      }

      .project-isolated-shell {
        width: 100%;
        max-width: none;
        margin: 0;
        padding: 0;
      }

      .project-isolated-support {
        display: none !important;
      }

      body.project-isolated-preview .project-grid {
        display: block;
        width: 100%;
        max-width: none;
        margin: 0;
      }

      body.project-isolated-preview .category-section {
        padding: 0;
        border: 0;
        background: transparent;
      }

      body.project-isolated-preview .project-isolated-section {
        padding: 0;
      }

      body.project-isolated-preview .category-heading,
      body.project-isolated-preview .category-description {
        display: none;
      }

      body.project-isolated-preview .category-projects {
        display: block;
      }

      body.project-isolated-preview .project-card {
        margin: 0;
        width: 100%;
        max-width: none;
      }

      body.project-isolated-preview .project-card .project-body,
      body.project-isolated-preview .responsive-project.project-card .project-body {
        width: 100%;
        max-width: none;
        justify-self: stretch;
        padding: 12px;
      }

      body.project-isolated-preview .project-title-row {
        margin: 0;
      }

      @media (max-width: 720px) {
        .project-isolated-shell {
          width: 100%;
          padding: 0;
        }
      }
    </style>
  </head>
  <body class="project-isolated-preview">
    <main class="project-isolated-shell" aria-label="Isolated project preview">
      <div class="project-isolated-support" aria-hidden="true">
        <label class="search-wrap" for="project-search">
          <span>Search</span>
          <input id="project-search" type="search" tabindex="-1" />
        </label>
        <div id="project-filters">
          <button class="filter-button active" type="button" data-filter="all" tabindex="-1">All</button>
        </div>
        <span id="project-count">0</span>
        <span id="project-track-count">0 Tracks</span>
        <span id="project-track-labels">project categories</span>
        <span id="year">${new Date().getFullYear()}</span>
      </div>

      <section class="section project-isolated-section" id="projects" aria-labelledby="project-isolated-title">
        <h1 class="sr-only" id="project-isolated-title">${escapeHtml(title)}</h1>
        <div class="project-grid" id="project-grid" aria-live="polite"></div>
      </section>
    </main>

    <script>window.__PORTFOLIO_CATALOG__ = ${previewData};<\/script>
    <script src="electronics-search.js"><\/script>
    <script src="script.js"><\/script>
  </body>
</html>`;
}

function renderProjectWebsitePreview(project) {
  const category = categoryById(project?.category);
  applyProjectTemplateToElement(projectPreviewDialog, project, category.accent || "#117c7a");
  projectPreviewTitle.textContent = project?.portfolioView?.title || project?.title || "Project preview";
  activeProjectPreviewProject = project || null;
  activeProjectPreviewSectionIndex = -1;
  activeProjectPreviewPath = [];
  activeProjectPreviewForwardStack = [];
  updateProjectPreviewNavigation();
  projectPreviewContent.classList.add("is-website-preview");
  projectPreviewContent.innerHTML = `
    <iframe
      class="portfolio-preview-frame project-preview-frame"
      title="${escapeHtml(project?.title || "Project website preview")}"
    ></iframe>
  `;
  const frame = projectPreviewContent.querySelector("iframe");
  if (frame) frame.srcdoc = fullProjectPreviewHtmlExact(project);
}

function openProjectPortfolioPreview() {
  const project = selectedProject();
  const savedProject = (savedPortfolioCatalog.projects || []).find((item) => item.id === project?.id);
  const previewProject = savedProject || project;
  renderProjectWebsitePreview(previewProject);
  document.body.classList.add("full-window-open");
  projectPreviewDialog.showModal();
  projectPreviewDialog.scrollTop = 0;
}

function updateProjectPreviewNavigation() {
  projectPreviewBack.hidden = activeProjectPreviewSectionIndex < 0;
  projectPreviewForward.hidden = !activeProjectPreviewForwardStack.length;
  updateDialogWindowButtons(projectPreviewDialog);
}

function openProjectPreviewNode(sectionIndex, path = [], options = {}) {
  if (!activeProjectPreviewProject?.portfolioView) return;
  const sections = (activeProjectPreviewProject.portfolioView.sections || []).filter((section) => section.id !== "brief" && previewSectionHasRenderableContent(section));
  const section = sections[Number(sectionIndex)];
  if (!section) return;
  const node = path.length ? previewNodeAtPath(section, path) : section;
  if (!node) return;
  if (path.length ? !parsedItemHasContent(node) : !previewSectionHasRenderableContent(section)) return;

  activeProjectPreviewSectionIndex = Number(sectionIndex);
  activeProjectPreviewPath = path;
  if (!options.preserveForward) activeProjectPreviewForwardStack = [];
  updateProjectPreviewNavigation();
  projectPreviewTitle.textContent = displayTitle(node.title || section.title, "Section");
  projectPreviewContent.innerHTML = `
    <article class="portfolio-preview-article">
      <section class="portfolio-preview-section">
        ${parsedPublicSectionContent(section, Number(sectionIndex), path)}
      </section>
    </article>
  `;
  projectPreviewDialog.scrollTop = 0;
}

function projectPreviewBackStep() {
  if (!activeProjectPreviewProject) return;
  if (!activeProjectPreviewPath.length) {
    if (activeProjectPreviewSectionIndex >= 0) {
      activeProjectPreviewForwardStack.push({
        path: activeProjectPreviewPath.slice(),
        sectionIndex: activeProjectPreviewSectionIndex
      });
    }
    projectPreviewTitle.textContent = activeProjectPreviewProject.title || "Project preview";
    projectPreviewContent.innerHTML = renderProjectPortfolioPreview(activeProjectPreviewProject);
    activeProjectPreviewSectionIndex = -1;
    activeProjectPreviewPath = [];
    updateProjectPreviewNavigation();
    return;
  }
  activeProjectPreviewForwardStack.push({
    path: activeProjectPreviewPath.slice(),
    sectionIndex: activeProjectPreviewSectionIndex
  });
  const nextPath = activeProjectPreviewPath.slice(0, -1);
  openProjectPreviewNode(activeProjectPreviewSectionIndex, nextPath, { preserveForward: true });
}

function projectPreviewForwardStep() {
  if (!activeProjectPreviewProject || !activeProjectPreviewForwardStack.length) return;
  const next = activeProjectPreviewForwardStack.pop();
  openProjectPreviewNode(next.sectionIndex, next.path, { preserveForward: true });
}

function closeOrStepBackProjectPreview() {
  if (activeProjectPreviewProject && (activeProjectPreviewSectionIndex >= 0 || activeProjectPreviewPath.length)) {
    projectPreviewBackStep();
    return;
  }
  closeProjectPreviewWindow();
}

function closeProjectPreviewWindow() {
  activeProjectPreviewProject = null;
  activeProjectPreviewSectionIndex = -1;
  activeProjectPreviewPath = [];
  activeProjectPreviewForwardStack = [];
  closeDialogElement(projectPreviewDialog);
}

function publicProjectCard(project) {
  if (project.portfolioView) return parsedPublicProjectCard(project);
  const category = categoryById(project.category);
  const accent = category.accent || "#117c7a";

  return `
    <article class="project-card catalog-card ${projectTemplateClass(project)} ${projectResponsiveClass(project)}" id="${project.id}" style="${projectTemplateStyle(project, accent)}">
      <div class="project-body">
        ${projectTitleHeading(project.title, project)}
        <p>${project.summary || ""}</p>

        ${project.highlights && project.highlights.length ? detailBlock("Project highlights", "project-drawer", `
          <ul class="highlight-list">
            ${project.highlights.map((item) => `<li>${typeof item === "string" ? item : itemTitle(item)}</li>`).join("")}
          </ul>
        `) : ""}

        <div class="evidence-grid" aria-label="${project.title} evidence blocks">
          ${detailBlock("Documents", "evidence-block", evidenceList(project.documents, (item) => `
            <li>
              ${resourceLink(item, item.title)}
              <span>${item.type || "Document"} &middot; ${item.status || "tracked"}</span>
            </li>
          `, "No document artifact has been added yet."))}

          ${detailBlock("Tests and results", "evidence-block", evidenceList(project.tests, (item) => `
            <li>
              ${resourceLink({ url: item.artifact, status: item.status }, item.name)}
              <span>${item.method || "Validation"} &middot; ${item.status || "tracked"}</span>
              ${item.result ? `<p>${item.result}</p>` : ""}
            </li>
          `, "No test artifact has been added yet."))}

          ${detailBlock("PCBs built", "evidence-block", evidenceList(project.pcbs, (item) => `
            <li>
              ${resourceLink({ url: item.artifact, status: item.status }, item.name)}
              <span>${item.revision || "Revision"} &middot; ${item.status || "tracked"}</span>
            </li>
          `, "No PCB build has been added yet."))}

          ${detailBlock("Images", "evidence-block evidence-wide", mediaGrid(project.media))}
          ${publicCustomSectionBlocks(project)}
        </div>

        ${detailBlock("Tools and implementation files", "project-drawer", `
          <div class="project-tooling">
            <div>
              <h4>Tools Used</h4>
              <div class="project-meta">${pillList(project.tools, "tool-tag")}</div>
            </div>
            <div>
              <h4>Languages</h4>
              <div class="project-meta">${pillList(project.languages, "language-tag")}</div>
            </div>
          </div>
        `)}

        <div class="resource-list">
          ${(project.links || []).map((item) => resourceLink(item)).join("")}
        </div>
      </div>
    </article>
  `;
}

function renderParsedBriefBlock(section, fallbackSummary = "") {
  const briefItem = section?.items?.[0] || {};
  const briefText = briefItem.description || fallbackSummary || "";
  if (!briefItem.rich?.blocks?.length && !briefText) return "";
  return `
    <details class="project-brief-default parsed-summary" open>
      <summary>Overview</summary>
      ${renderRichContent(briefItem.rich, briefText)}
    </details>
  `;
}

function previewPathToString(path = []) {
  return path.join(".");
}

function previewPathFromString(value = "") {
  if (!value) return [];
  return value.split(".").map((item) => Number(item)).filter((item) => Number.isInteger(item));
}

function previewNodeAtPath(section, path = []) {
  let node = section;
  let children = section?.items || [];
  for (const index of path) {
    node = children[index];
    if (!node) return null;
    children = node.children || [];
  }
  return node;
}

function previewNodeChildren(node) {
  return node?.items || node?.children || [];
}

function previewSectionHasRenderableContent(section) {
  return Boolean(section?.description || richHasContent(section?.rich) || (section?.items || []).some(parsedItemHasContent));
}

function previewNodeSummary(title, rich, text, emptyMessage = "No summary has been added yet.") {
  if (!rich?.blocks?.length && !text) return "";
  return `
    <details class="parsed-summary" open>
      <summary>${escapeHtml(title)}</summary>
      ${renderRichContent(rich, text || "")}
    </details>
  `;
}

function previewNodeIsOverview(item = {}) {
  const title = normalize(displayTitle(item.title || item.label || ""));
  return item.kind === "summary" || title === "overview" || title.endsWith(" overview");
}

function previewNodeOverviewDetails(node, children = []) {
  const overviewItems = children.filter(previewNodeIsOverview);
  const blocks = [];
  if (node?.rich?.blocks?.length || node?.description) {
    blocks.push(renderRichContent(node.rich, node.description || ""));
  }
  overviewItems.forEach((item) => {
    if (item.rich?.blocks?.length || item.description) blocks.push(renderRichContent(item.rich, item.description || ""));
    const itemFiles = previewFileList(previewNodeChildren(item));
    if (itemFiles) blocks.push(itemFiles);
  });
  if (!blocks.length) return "";
  return `
    <details class="parsed-summary section-overview-default" open>
      <summary>Overview</summary>
      ${blocks.join("")}
    </details>
  `;
}

function previewNodeCard(node, sectionIndex, path) {
  const title = displayTitle(node.title);
  return `
    <button class="section-open-card subsection-open-card" type="button" data-preview-section-index="${sectionIndex}" data-preview-resource-path="${previewPathToString(path)}">
      <span>${escapeHtml(title)}</span>
    </button>
  `;
}

function previewChildCards(children, sectionIndex, basePath = []) {
  const visibleChildren = children.filter((child) => parsedItemHasContent(child) && !child.url && !previewNodeIsOverview(child));
  if (!visibleChildren.length) return "";
  return `
    <div class="subsection-grid section-content-grid">
      ${children.map((child, index) => parsedItemHasContent(child) && !child.url && !previewNodeIsOverview(child) ? previewNodeCard(child, sectionIndex, [...basePath, index]) : "").join("")}
    </div>
  `;
}

function previewFileList(children = []) {
  const files = children.filter((child) => child?.url);
  if (!files.length) return "";
  return `
    <div class="section-file-list">
      ${files.map((file) => `
        <a
          class="section-file-link"
          href="${escapeHtml(normalizeLinkTarget(file.url, { assumeWeb: isWebsiteLinkItem(file, file.url) }))}"
          ${linkAttributes(file.url, file)}
          ${downloadAttribute(file.url, file)}
        >
          ${escapeHtml(file.title || "Open link")}
        </a>
      `).join("")}
    </div>
  `;
}

function previewNodeContent(node, sectionIndex, path = []) {
  const isContainer = !node.kind || node.kind === "subsection";
  if (!isContainer && node.url) return previewFileList([node]);
  const children = previewNodeChildren(node);
  const contentChildren = children.filter((child) => !previewNodeIsOverview(child));
  return `
    <article class="parsed-window-panel section-directory">
    ${previewNodeOverviewDetails(node, children)}
    ${previewChildCards(children, sectionIndex, path)}
    ${previewFileList(contentChildren)}
    </article>
  `;
}

function parsedPublicSectionContent(section, sectionIndex = 0, path = []) {
  const node = path.length ? previewNodeAtPath(section, path) : section;
  if (!node) return `<p class="evidence-empty">This section could not be found.</p>`;
  return previewNodeContent(node, sectionIndex, path);
}

function parsedPublicSection(section, index = 0) {
  const visibleItems = (section.items || []).filter(parsedItemHasContent);
  const hasImages = visibleItems.some((item) => item.kind === "image");
  return `
    <button class="section-open-card evidence-block ${hasImages ? "evidence-wide" : ""}" type="button" data-preview-section-index="${index}">
      <span>${escapeHtml(displayTitle(section.title, "Section"))}</span>
    </button>
  `;
}

function parsedPublicProjectCard(project) {
  const category = categoryById(project.category);
  const accent = category.accent || "#117c7a";
  const view = project.portfolioView;
  const briefSection = (view.sections || []).find((section) => section.id === "brief");
  const otherSections = (view.sections || []).filter((section) => section.id !== "brief" && previewSectionHasRenderableContent(section));

  return `
    <article class="project-card catalog-card ${projectTemplateClass(project)} ${projectResponsiveClass(project)}" id="${project.id}" style="${projectTemplateStyle(project, accent)}">
      <div class="project-body">
        ${projectTitleHeading(view.title || project.title, project)}
        ${renderParsedBriefBlock(briefSection, project.summary)}
        <div class="evidence-grid" aria-label="${project.title} parsed project content">
          ${otherSections.map((section, index) => parsedPublicSection(section, index)).join("")}
        </div>
      </div>
    </article>
  `;
}

function publicCategorySection(category, visibleProjects) {
  return `
    <section class="category-section ${visibleProjects.length ? "" : "empty-category-section"}" aria-labelledby="${category.id}-preview-title">
      <div class="category-heading">
        <div>
          <h3 id="${category.id}-preview-title">${category.label}</h3>
        </div>
        ${visibleProjects.length ? `<span>${visibleProjects.length} project${visibleProjects.length === 1 ? "" : "s"}</span>` : ""}
      </div>
      ${visibleProjects.length ? `<p class="category-description">${category.description}</p>` : ""}
      <div class="category-projects">
        ${visibleProjects.map(publicProjectCard).join("")}
      </div>
    </section>
  `;
}

function renderedPublicProjects() {
  if (!savedPortfolioCatalog.projects.length) {
    return `
      <div class="empty-state">
        <h3>No parsed projects saved yet.</h3>
        <p>Open a project, edit it, then click Save to build it into this portfolio preview.</p>
      </div>
    `;
  }
  return savedPortfolioCatalog.categories.map((category) => {
    const categoryProjects = savedPortfolioCatalog.projects.filter((project) => project.category === category.id);
    return categoryProjects.length ? publicCategorySection(category, categoryProjects) : "";
  }).join("") || `
    <div class="empty-state">
      <h3>No parsed projects saved yet.</h3>
      <p>Open a project, edit it, then click Save to build it into this portfolio preview.</p>
    </div>
  `;
}

function sectionControls(sectionId, uploadKey = "", folder = "") {
  return `
    <div class="local-section-controls">
      <button type="button" title="Edit this section" data-preview-section="${sectionId}">Edit</button>
      ${uploadKey ? `<button type="button" title="Add file or image" data-preview-upload="${uploadKey}" data-folder="${folder}">+</button>` : ""}
    </div>
  `;
}

function customSectionBlocks(project) {
  return (project.sections || []).map((section) => detailBlock(section.title, "evidence-block evidence-wide", `
    ${sectionControls(`custom:${section.id}`, "sections", section.id)}
    ${section.description ? `<p class="evidence-empty">${section.description}</p>` : ""}
    ${evidenceList(section.items || [], (item) => `
      <li>
        ${item.url ? resourceLink(item, item.title) : `<strong>${item.title}</strong>`}
        <span>${item.type || "Section item"} &middot; ${item.status || "tracked"}</span>
        ${item.description ? `<p>${item.description}</p>` : ""}
      </li>
    `, "No content has been added yet.")}
  `)).join("");
}

function projectCard(project, isSelected = false) {
  const category = categoryById(project.category);
  const accent = category.accent || "#117c7a";

  return `
    <article class="project-card catalog-card ${projectTemplateClass(project)} ${projectResponsiveClass(project)} ${isSelected ? "preview-project-card" : ""}" id="${project.id}" style="${projectTemplateStyle(project, accent)}">
      <div class="project-body">
        <div class="local-card-controls">
          <button type="button" title="Open project" data-preview-project="${project.id}">Open</button>
          <button type="button" title="Delete project" data-preview-delete="${project.id}">Delete</button>
        </div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>

        ${project.highlights && project.highlights.length ? detailBlock("Project highlights", "project-drawer", `
          <ul class="highlight-list">
            ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        `) : ""}

        <div class="evidence-grid" aria-label="${project.title} evidence blocks">
          ${detailBlock("Documents", "evidence-block", `
            ${sectionControls("documents", "documents", "documents")}
            ${evidenceList(project.documents, (item) => `
            <li>
              ${resourceLink(item, item.title)}
              <span>${item.type || "Document"} &middot; ${item.status || "tracked"}</span>
            </li>
          `, "No document artifact has been added yet.")}
          `)}

          ${detailBlock("Tests and results", "evidence-block", `
            ${sectionControls("tests", "tests", "tests")}
            ${evidenceList(project.tests, (item) => `
            <li>
              ${resourceLink({ url: item.artifact, status: item.status }, item.name)}
              <span>${item.method || "Validation"} &middot; ${item.status || "tracked"}</span>
              ${item.result ? `<p>${item.result}</p>` : ""}
            </li>
          `, "No test artifact has been added yet.")}
          `)}

          ${detailBlock("PCBs built", "evidence-block", `
            ${sectionControls("pcbs", "pcbs", "pcbs")}
            ${evidenceList(project.pcbs, (item) => `
            <li>
              ${resourceLink({ url: item.artifact, status: item.status }, item.name)}
              <span>${item.revision || "Revision"} &middot; ${item.status || "tracked"}</span>
            </li>
          `, "No PCB build has been added yet.")}
          `)}

          ${detailBlock("Images", "evidence-block evidence-wide", `
            ${sectionControls("media", "media", "images")}
            ${mediaGrid(project.media)}
          `)}
          ${customSectionBlocks(project)}
        </div>

        ${detailBlock("Tools and implementation files", "project-drawer", `
          <div class="project-tooling">
            <div>
              <h4>Tools Used</h4>
              <div class="project-meta">${pillList(project.tools, "tool-tag")}</div>
            </div>
            <div>
              <h4>Languages</h4>
              <div class="project-meta">${pillList(project.languages, "language-tag")}</div>
            </div>
          </div>
        `)}

        <div class="resource-list">
          ${(project.links || []).map((item) => resourceLink(item)).join("")}
        </div>
      </div>
    </article>
  `;
}

function buildTemplateProject() {
  const template = templates.find((item) => item.id === templateSelect.value) || null;
  const title = newProjectTitle.value.trim() || "New Hardware Project";
  const id = slugify(title);
  const category = newCategorySelect.value || pendingCreateCategoryId || "analog-mixed-signal";

  return {
    id,
    title,
    templateId: template?.id || "",
    templateLabel: template?.label || "",
    templateGroup: "Appearance",
    templateVisual: template?.visual ? clone(template.visual) : null,
    category,
    status: "Draft",
    showStatusOnPortfolio: true,
    summary: "",
    summaryRich: null,
    focus: [],
    highlights: [],
    documents: [],
    tests: [],
    pcbs: [],
    media: [],
    tools: [],
    languages: [],
    links: [],
    sections: [],
    sectionModelVersion: 3,
    compileCode: { files: [], directories: [], openFileIds: [], activeFileId: "", terminal: "", outputDockHeight: 170 }
  };
}

function insertProject(project) {
  const nextProjects = catalog.projects.filter((item) => item.id !== project.id);
  const placement = placementSelect.value;

  if (placement === "site-start") return [project, ...nextProjects];
  if (placement === "site-end") return [...nextProjects, project];

  const indexes = nextProjects
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item.category === project.category)
    .map(({ index }) => index);

  if (!indexes.length) return [...nextProjects, project];
  const targetIndex = placement === "category-start" ? indexes[0] : indexes[indexes.length - 1] + 1;
  nextProjects.splice(targetIndex, 0, project);
  return nextProjects;
}

function renderCategoryDropdown() {
  categoryDropdown.innerHTML = (catalog.categories || []).map((category) => `
    <button type="button" data-create-category="${escapeHtml(category.id)}" style="--category-accent: ${escapeHtml(category.accent || "#117c7a")}">
      <span>${escapeHtml(category.label)}</span>
      <small>${escapeHtml(category.description || "Project category")}</small>
    </button>
  `).join("");
}

function toggleCategoryDropdown(forceOpen = null) {
  const open = forceOpen === null ? categoryDropdown.hidden : forceOpen;
  categoryDropdown.hidden = !open;
  addProjectButton.setAttribute("aria-expanded", String(open));
}

function createProjectInCategory(categoryId) {
  newCategorySelect.value = categoryId;
  const project = buildTemplateProject();
  catalog.projects = insertProject(project);
  selectedProjectId = project.id;
  activeSectionId = "brief";
  expandedCategories.add(categoryId);
  toggleCategoryDropdown(false);
  setStatus(`Project added locally in ${categoryById(categoryId).label || categoryId}. Click Save project to include it in the portfolio preview.`);
  scheduleAutosave();
  renderAll();
  openProjectWindow(project.id, "brief");
}

function openProjectCreateDialog(categoryId) {
  pendingCreateCategoryId = categoryId;
  newCategorySelect.value = categoryId;
  const category = categoryById(categoryId);
  projectCreateCategory.textContent = category.label || "Project category";
  templateSelect.innerHTML = groupedTemplateOptions();
  templateSelect.value = "";
  newProjectTitle.value = "";
  toggleCategoryDropdown(false);
  projectCreateDialog.showModal();
}

function groupedTemplateOptions() {
  const emptyOption = `<option value="">No appearance - white project layout</option>`;
  const options = templates
    .map((template) => `<option value="${template.id}">${template.label}</option>`)
    .join("");
  return `${emptyOption}${options}`;
}

function showTemplatePreview(template) {
  if (!template) return;
  const visual = template.visual || {};
  const palette = visual.palette || ["#0f4c5c", "#7dd3c7", "#ffffff"];

  templatePreviewGroup.textContent = visual.style ? `Appearance / ${visual.style}` : "Appearance";
  templatePreviewTitle.textContent = template.label;
  templatePreviewDescription.textContent = template.description || "";
  templatePreviewCardTitle.textContent = template.label;
  templatePreviewInteraction.textContent = visual.interaction || "Hover and click styles are shown in the local builder.";
  templatePreviewCard.style.setProperty("--template-primary", palette[0]);
  templatePreviewCard.style.setProperty("--template-hover", palette[1]);
  templatePreviewCard.style.setProperty("--template-paper", palette[2] || "#ffffff");
  templatePreviewCard.style.setProperty("--template-bg", visual.background || palette[0]);
  templatePreviewCard.style.setProperty("--template-panel", visual.panel || palette[2] || "#ffffff");
  templatePreviewCard.style.setProperty("--template-accent", visual.accent || palette[1]);
  templatePreviewCard.style.setProperty("--template-click", visual.click || palette[2] || "#ffffff");
  templatePreviewCard.style.setProperty("--template-click-text", visual.clickText || visual.text || "#172636");
  templateVisual.className = `template-visual template-visual-${visual.style || "schematic"}`;
  templatePalette.innerHTML = palette.map((color) => `<span style="background: ${color}">${color}</span>`).join("");
  templateDialog.showModal();
}

function renderTree() {
  const cleanQuery = projectSearchText(projectSearchQuery);
  let matchCount = 0;
  const treeMarkup = catalog.categories.map((category) => {
    const allCategoryProjects = catalog.projects.filter((project) => project.category === category.id);
    const categoryHit = cleanQuery && projectSearchText(`${category.label} ${category.description}`).includes(cleanQuery);
    const categoryProjects = cleanQuery
      ? allCategoryProjects.filter((project) => categoryHit || projectMatchesSearch(project, category, cleanQuery))
      : allCategoryProjects;
    if (cleanQuery && !categoryProjects.length && !categoryHit) return "";
    matchCount += categoryProjects.length;
    const isExpanded = cleanQuery ? true : expandedCategories.has(category.id);
    return `
      <section class="tree-category">
        <div class="tree-category-heading" data-category-heading="${escapeHtml(category.id)}" title="Right-click to edit this category">
          <button class="tree-category-toggle" type="button" data-toggle-category="${escapeHtml(category.id)}" data-category-title-target="${escapeHtml(category.id)}" aria-expanded="${isExpanded}">
            <span>${highlightSearchText(category.label, projectSearchQuery)}</span>
            <small>${allCategoryProjects.length} project${allCategoryProjects.length === 1 ? "" : "s"}</small>
          </button>
          <div class="tree-category-actions">
            <button class="tree-category-delete danger-icon" type="button" data-delete-category="${escapeHtml(category.id)}" aria-label="Delete ${escapeHtml(category.label)}" title="Delete category">&times;</button>
          </div>
        </div>
        <div class="tree-projects" ${isExpanded ? "" : "hidden"}>
          ${categoryProjects.length ? categoryProjects.map((project) => `
            <div class="tree-project-row ${project.id === selectedProjectId ? "active" : ""}">
              <button type="button" data-project-id="${escapeHtml(project.id)}">
                <span>${highlightSearchText(project.title, projectSearchQuery)}</span>
              </button>
              <button class="tree-project-delete" type="button" data-delete-project="${escapeHtml(project.id)}" aria-label="Delete ${escapeHtml(project.title)}" title="Delete project">
                &times;
              </button>
            </div>
          `).join("") : cleanQuery ? `<p class="tree-empty">Category matches, but no projects are in it yet.</p>` : ""}
        </div>
      </section>
    `;
  }).join("");
  projectTree.innerHTML = treeMarkup || `
    <section class="tree-category tree-search-empty">
      <p class="tree-empty">No project, file, tool, or section matched this search.</p>
    </section>
  `;
  updateProjectSearchStatus(cleanQuery ? matchCount : catalog.projects.length);
}

function summaryWordCount(project) {
  return wordCount(project?.summaryRich?.blocks?.length ? plainTextFromRich(project.summaryRich) : project?.summary || "");
}

function renderSummaryPreview(project) {
  if (project.summaryRich?.blocks?.length) return renderRichContent(project.summaryRich, project.summary || "");
  if (project.summary) return `<p class="rich-paragraph">${renderMultilineInlineText(project.summary)}</p>`;
  return `<p class="evidence-empty">No project overview has been added yet.</p>`;
}

function renderSummaryBuilder(project) {
  const isEditing = summaryEditorProjectId === project.id;
  const summaryWords = summaryWordCount(project);
  const hasSummary = summaryWords > 0 || Boolean(project.summaryRich?.blocks?.length);
  return `
    <div class="summary-builder wide-field">
      <div class="summary-builder-heading">
        <div>
          <span>Project overview <small>${summaryWords}/1000 words</small></span>
        </div>
        <div class="summary-builder-actions">
          ${isEditing
            ? `<button class="button secondary" type="button" data-summary-cancel="true">Cancel overview</button>`
            : `<button class="button primary" type="button" data-summary-create="true">${hasSummary ? "Edit overview" : "Create overview"}</button>`}
          ${hasSummary && !isEditing ? `<button class="button danger-control" type="button" data-summary-delete="true">Delete overview</button>` : ""}
        </div>
      </div>
      ${isEditing ? `
        <div class="rich-summary-panel">
          <p class="rich-editor-hint">Right-click text or an inserted block for formatting, images, formulas, code blocks, alignment, and delete controls.</p>
          <div class="rich-summary-editor" data-rich-editor="summary" data-placeholder="Click anywhere and start writing the project overview." contenteditable="true" spellcheck="true" aria-label="Rich overview editor"></div>
          <div class="summary-save-actions">
            <button class="button primary" type="button" data-summary-save="true">Save overview</button>
          </div>
        </div>
      ` : `<div class="summary-rendered-preview">${renderSummaryPreview(project)}</div>`}
    </div>
  `;
}

function applyRichTextBlockStyle(block) {
    const fontFamily = cleanFontFamily(block.dataset.fontFamily || "Arial") || "Arial";
    const fontPx = normalizeFontPx(block.dataset.fontPx || "");
    const color = normalizeTextColor(block.dataset.color || "");

    block.style.fontFamily = fontFamily || "";
    block.style.fontSize = fontPx ? `${fontPx}px` : "";
    block.style.color = color || "";
    block.style.fontWeight = block.dataset.bold === "true" ? "700" : "";
    block.style.fontStyle = block.dataset.italic === "true" ? "italic" : "";
    block.style.textDecoration = block.dataset.underline === "true" ? "underline" : "";
}

function createRichTextBlock(text = "", fontSize = "normal", align = "left", fontFamily = "Arial", fontPx = "", color = "", bold = false, html = "", italic = false, underline = false) {
    const block = document.createElement("p");
    block.className = `rich-block rich-text-block rich-text-${fontSize} text-${align}`;
    block.dataset.type = "paragraph";
    block.dataset.fontSize = fontSize;
    block.dataset.align = align;
    block.dataset.fontFamily = cleanFontFamily(fontFamily || "Arial") || "Arial";
    block.dataset.fontPx = normalizeFontPx(fontPx);
    block.dataset.color = normalizeTextColor(color);
    block.dataset.bold = bold ? "true" : "false";
    block.dataset.italic = italic ? "true" : "false";
    block.dataset.underline = underline ? "true" : "false";
    block.spellcheck = true;
    if (html) block.innerHTML = sanitizeRichInlineHtml(html);
    else block.textContent = text;
    applyRichTextBlockStyle(block);
    return block;
}

function richBlockActions(label = "block", options = {}) {
  return `
    ${options.typingRails ? `
      <button class="rich-block-typing-rail rich-block-typing-before" type="button" data-rich-caret="before" aria-label="Type before ${escapeHtml(label)}"></button>
      <button class="rich-block-typing-rail rich-block-typing-after" type="button" data-rich-caret="after" aria-label="Type after ${escapeHtml(label)}"></button>
    ` : ""}
    <div class="rich-block-actions">
      ${options.movable ? `<button class="rich-drag-handle" type="button" draggable="true" data-rich-drag-handle aria-label="Move ${escapeHtml(label)}">Move</button>` : ""}
      <button type="button" data-rich-block-action="edit" aria-label="Edit ${escapeHtml(label)}">Edit</button>
      <button class="danger-icon" type="button" data-rich-block-action="delete" aria-label="Delete ${escapeHtml(label)}">Delete</button>
    </div>
  `;
}

function createRichImageBlock(blockData) {
  const figure = document.createElement("figure");
  const align = blockData.align || "center";
  const title = cleanRichImageTitle(blockData);
  figure.className = `rich-block rich-image-block justify-${align}`;
  figure.dataset.type = "image";
  figure.dataset.url = blockData.url || "";
  figure.dataset.title = blockData.title || "";
  figure.dataset.caption = blockData.caption || "";
  figure.dataset.align = align;
  figure.dataset.display = blockData.display === "download" ? "download" : "show";
  figure.dataset.source = blockData.source || "local";
  figure.dataset.cropAspect = normalizeCropAspect(blockData.cropAspect);
  figure.dataset.cropZoom = String(normalizeCropZoom(blockData.cropZoom));
  figure.dataset.cropX = String(normalizeCropPosition(blockData.cropX));
  figure.dataset.cropY = String(normalizeCropPosition(blockData.cropY));
  figure.contentEditable = "false";
  figure.draggable = true;
  figure.title = "Drag image to move it between text.";
  figure.innerHTML = `
    ${richBlockActions("overview image", { movable: true, typingRails: true })}
    ${figure.dataset.display === "download" ? `<span class="rich-download-badge">Download only</span>` : ""}
    <span class="rich-image-viewport crop-${figure.dataset.cropAspect === "original" ? "original" : "active"}"${richImageCropStyle(blockData)}>
      <img src="${escapeHtml(normalizeLinkTarget(blockData.url, { assumeWeb: true }))}" alt="${escapeHtml(title || "Overview image")}" draggable="true" data-rich-image-drag="true">
    </span>
    ${(title || blockData.caption) ? `<figcaption>${title ? `<strong>${escapeHtml(title)}</strong>` : ""}${blockData.caption ? `<span>${escapeHtml(blockData.caption)}</span>` : ""}</figcaption>` : ""}
  `;
  return figure;
}

function createRichFormulaBlock(blockData) {
  const block = document.createElement("div");
  const align = blockData.align || "center";
  block.className = `rich-block rich-formula-block justify-${align}`;
  block.dataset.type = "formula";
  block.dataset.formula = unwrapFormula(blockData.formula || "");
  block.dataset.align = align;
  block.contentEditable = "false";
  block.innerHTML = `
    ${richBlockActions("formula", { typingRails: true })}
    <span class="formula-text">${escapeHtml(unwrapFormula(blockData.formula || ""))}</span>
  `;
  return block;
}

function createRichCodeBlock(blockData = {}) {
  const block = document.createElement("figure");
  const pasteMode = normalizeCodePasteMode(blockData.pasteMode || "source");
  const code = normalizeCodeText(blockData.code || "", pasteMode);
  const language = normalizeCodeLanguage(blockData.language || detectCodeLanguage(code));
  block.className = `rich-block rich-code-block rich-code-language-${language}`;
  block.dataset.type = "code";
  block.dataset.language = language;
  block.dataset.pasteMode = pasteMode;
  block.dataset.code = code;
  block.contentEditable = "false";
  block.innerHTML = `
    ${richBlockActions("code block", { typingRails: true })}
    <figcaption><span>&lt;/&gt;</span> ${escapeHtml(codeLanguageLabel(language))}<button type="button" data-rich-block-action="copy-code">Copy code</button></figcaption>
    <pre><code>${tokenizedCodeHtml(code, language)}</code></pre>
  `;
  return block;
}

function refreshRichImageBlock(block, blockData) {
  const align = blockData.align || block.dataset.align || "center";
  block.dataset.url = blockData.url || block.dataset.url || "";
  block.dataset.title = blockData.title || "";
  block.dataset.caption = blockData.caption || "";
  block.dataset.align = align;
  block.dataset.display = blockData.display === "download" ? "download" : "show";
  block.dataset.source = blockData.source || block.dataset.source || "local";
  block.dataset.cropAspect = normalizeCropAspect(blockData.cropAspect || block.dataset.cropAspect);
  block.dataset.cropZoom = String(normalizeCropZoom(blockData.cropZoom || block.dataset.cropZoom));
  block.dataset.cropX = String(normalizeCropPosition(blockData.cropX ?? block.dataset.cropX));
  block.dataset.cropY = String(normalizeCropPosition(blockData.cropY ?? block.dataset.cropY));
  block.draggable = true;
  block.title = "Drag image to move it between text.";
  block.classList.remove("justify-left", "justify-center", "justify-right");
  block.classList.add(`justify-${align}`);
  const title = cleanRichImageTitle({ title: block.dataset.title });
  block.innerHTML = `
    ${richBlockActions("overview image", { movable: true, typingRails: true })}
    ${block.dataset.display === "download" ? `<span class="rich-download-badge">Download only</span>` : ""}
    <span class="rich-image-viewport crop-${block.dataset.cropAspect === "original" ? "original" : "active"}"${richImageCropStyle({
      cropAspect: block.dataset.cropAspect,
      cropZoom: block.dataset.cropZoom,
      cropX: block.dataset.cropX,
      cropY: block.dataset.cropY
    })}>
      <img src="${escapeHtml(normalizeLinkTarget(block.dataset.url, { assumeWeb: true }))}" alt="${escapeHtml(title || "Overview image")}" draggable="true" data-rich-image-drag="true">
    </span>
    ${(title || block.dataset.caption) ? `<figcaption>${title ? `<strong>${escapeHtml(title)}</strong>` : ""}${block.dataset.caption ? `<span>${escapeHtml(block.dataset.caption)}</span>` : ""}</figcaption>` : ""}
  `;
}

function refreshRichFormulaBlock(block, blockData) {
  const align = blockData.align || block.dataset.align || "center";
  const formula = unwrapFormula(blockData.formula || block.dataset.formula || "");
  block.dataset.formula = formula;
  block.dataset.align = align;
  block.classList.remove("justify-left", "justify-center", "justify-right");
  block.classList.add(`justify-${align}`);
  block.innerHTML = `
    ${richBlockActions("formula", { typingRails: true })}
    <span class="formula-text">${escapeHtml(formula)}</span>
  `;
}

function refreshRichCodeBlock(block, blockData = {}) {
  const pasteMode = normalizeCodePasteMode(blockData.pasteMode || block.dataset.pasteMode || "source");
  const code = normalizeCodeText(blockData.code || block.dataset.code || "", pasteMode);
  const language = normalizeCodeLanguage(blockData.language || block.dataset.language || detectCodeLanguage(code));
  block.dataset.language = language;
  block.dataset.pasteMode = pasteMode;
  block.dataset.code = code;
  block.className = `rich-block rich-code-block rich-code-language-${language}`;
  block.innerHTML = `
    ${richBlockActions("code block", { typingRails: true })}
    <figcaption><span>&lt;/&gt;</span> ${escapeHtml(codeLanguageLabel(language))}<button type="button" data-rich-block-action="copy-code">Copy code</button></figcaption>
    <pre><code>${tokenizedCodeHtml(code, language)}</code></pre>
  `;
}

function createRichBlockElement(block) {
    if (block.type === "image") return createRichImageBlock(block);
    if (block.type === "formula") return createRichFormulaBlock(block);
    if (block.type === "code") return createRichCodeBlock(block);

    return createRichTextBlock(
        block.text || "",
        block.fontSize || "normal",
        block.align || "left",
        block.fontFamily || "Arial",
        block.fontPx || "",
        block.color || "",
        Boolean(block.bold),
        block.html || "",
        Boolean(block.italic),
        Boolean(block.underline)
    );
}

function populateSummaryEditor(project) {
    const editor = projectFields.querySelector("[data-rich-editor='summary']");
    if (!editor) return;
    populateRichEditor(editor, project);
}

function populateStandaloneRichEditor(editor, rich, fallbackText = "") {
    if (!editor) return;
    editor.contentEditable = "true";
    editor.tabIndex = 0;
    editor.spellcheck = true;
    editor.innerHTML = "";
    richBlocksFromValue(rich, fallbackText).forEach((block) => editor.append(createRichBlockElement(block)));
    if (!editor.children.length) editor.append(createRichTextBlock(""));
}

function populateRichEditor(editor, project = selectedProject()) {
    if (!editor) return;
    editor.contentEditable = "true";
    editor.tabIndex = 0;
    editor.spellcheck = true;

    if (editor.dataset.richEditor === "pending-description") {
        editor.innerHTML = "";
        richBlocksFromValue(pendingEditor?.richDescription, pendingEditor?.description || "")
          .forEach((block) => editor.append(createRichBlockElement(block)));
        if (!editor.children.length) editor.append(createRichTextBlock(""));
        return;
    }

    if (!project) return;

    editor.innerHTML = "";

    let blocks = [];

    if (editor.dataset.richEditor === "summary" && !editor.dataset.richPath) {
        blocks = richBlocksForProject(project);
    } else {
        const textPath = editor.dataset.richTextPath || "";
        const richPath = editor.dataset.richPath || "";
        blocks = richBlocksFromValue(getByPath(project, richPath), getByPath(project, textPath) || "");
    }

    blocks.forEach((block) => editor.append(createRichBlockElement(block)));
    if (!editor.children.length) editor.append(createRichTextBlock(""));
}

function populateRichEditors(root = document) {
    root.querySelectorAll("[data-rich-editor]").forEach((editor) => populateRichEditor(editor));
}

function saveRichEditorToProject(editor) {
    if (!editor) return true;

    if (editor.dataset.richEditor === "fun-facts") {
        syncFunFactsFromInput();
        setStatus("Unsaved local changes.");
        return true;
    }

    if (editor.dataset.richEditor === "site-field") {
        syncSiteRichField(editor);
        setStatus("Front page text formatting updated locally. Click Save draft before applying to site.");
        return true;
    }

    if (editor.dataset.richEditor === "profile-field") {
        syncProfileRichField(editor);
        setStatus("Profile and contact formatting updated locally. Click Save draft before applying to site.");
        return true;
    }

    if (editor.dataset.richEditor === "standalone") {
        setStatus("Unsaved dialog changes. Use the dialog save button to keep them.");
        return true;
    }

    const project = selectedProject();

    if (editor.dataset.richEditor === "pending-description" && pendingEditor) {
        const rich = extractRichSummary(editor);
        pendingEditor.richDescription = rich;
        pendingEditor.description = plainTextFromRich(rich);
        setStatus("Unsaved local changes.");
        return true;
    }

    if (!project) return true;

    const rich = extractRichSummary(editor);
    const plain = plainTextFromRich(rich);

    if (wordCount(plain) > 1000) {
        setStatus("Overview is limited to 1000 words. Shorten the text before saving.");
        return false;
    }

    if (editor.dataset.richEditor === "summary" && !editor.dataset.richPath) {
        project.summaryRich = rich;
        project.summary = plain;
    } else {
        const textPath = editor.dataset.richTextPath;
        const richPath = editor.dataset.richPath;
        if (textPath) setByPath(project, textPath, plain);
        if (richPath) setByPath(project, richPath, rich);
    }

    setStatus("Unsaved local changes.");
    scheduleAutosave();
    schedulePreviewRender();
    return true;
}

function saveVisibleRichEditors() {
    document.querySelectorAll("[data-rich-editor]").forEach((editor) => {
        saveRichEditorToProject(editor);
    });
}

function currentRichBlock(editor) {
  const selection = window.getSelection();
  let node = selection?.anchorNode;
  if (!node || !editor.contains(node)) return editor.querySelector(".rich-block:last-child");
  if (node.nodeType === Node.TEXT_NODE) node = node.parentElement;
  return node.closest(".rich-block") || editor.querySelector(".rich-block:last-child");
}

function selectionRangeInsideEditor(editor) {
  const selection = window.getSelection();
  if (!selection?.rangeCount) return null;
  const range = selection.getRangeAt(0);
  const container = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? range.commonAncestorContainer.parentElement
    : range.commonAncestorContainer;
  return container && editor.contains(container) ? range.cloneRange() : null;
}

function captureRichSelection(editor) {
  const range = selectionRangeInsideEditor(editor);
  if (range) activeRichSelectionRange = range;
  return range;
}

function rememberRichFormattingSelection(editor = activeSummaryEditor) {
  if (!editor) return null;
  const range = selectionRangeInsideEditor(editor)
    || (rangeBelongsToEditor(activeTextSelectionRange, editor) ? activeTextSelectionRange.cloneRange() : null)
    || (rangeBelongsToEditor(activeRichSelectionRange, editor) ? activeRichSelectionRange.cloneRange() : null);
  if (!range) return null;
  activeSummaryEditor = editor;
  activeRichSelectionRange = range.cloneRange();
  if (!range.collapsed) activeTextSelectionRange = range.cloneRange();
  return range;
}

function restoreRichSelection(editor) {
  if (!activeRichSelectionRange) return false;
  const container = activeRichSelectionRange.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? activeRichSelectionRange.commonAncestorContainer.parentElement
    : activeRichSelectionRange.commonAncestorContainer;
  if (!container || !editor.contains(container)) return false;
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(activeRichSelectionRange.cloneRange());
  showPersistentTextSelection(activeRichSelectionRange);
  return true;
}

function showPersistentTextSelection(range) {
  if (!range || range.collapsed) return;
  if (window.CSS?.highlights && typeof window.Highlight === "function") {
    window.CSS.highlights.set(persistentSelectionHighlightName, new window.Highlight(range.cloneRange()));
    if (persistentSelectionOverlay) persistentSelectionOverlay.hidden = true;
    return;
  }

  const container = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? range.commonAncestorContainer.parentElement
    : range.commonAncestorContainer;
  const editor = container?.closest?.("[data-rich-editor]") || activeSummaryEditor;
  const host = editor?.closest("dialog") || document.body;
  if (!persistentSelectionOverlay) {
    persistentSelectionOverlay = document.createElement("div");
    persistentSelectionOverlay.className = "persistent-selection-overlay";
    persistentSelectionOverlay.setAttribute("aria-hidden", "true");
  }
  if (persistentSelectionOverlay.parentElement !== host) host.append(persistentSelectionOverlay);
  persistentSelectionOverlay.replaceChildren();
  [...range.getClientRects()].forEach((rect) => {
    if (rect.width < 1 || rect.height < 1) return;
    const marker = document.createElement("span");
    marker.style.left = `${rect.left}px`;
    marker.style.top = `${rect.top}px`;
    marker.style.width = `${rect.width}px`;
    marker.style.height = `${rect.height}px`;
    persistentSelectionOverlay.append(marker);
  });
  persistentSelectionOverlay.hidden = !persistentSelectionOverlay.childElementCount;
}

function clearPersistentTextSelection(clearRanges = false) {
  window.CSS?.highlights?.delete?.(persistentSelectionHighlightName);
  if (persistentSelectionOverlay) {
    persistentSelectionOverlay.replaceChildren();
    persistentSelectionOverlay.hidden = true;
  }
  if (!clearRanges) return;
  activeRichSelectionRange = null;
  activeTextSelectionRange = null;
}

function refreshPersistentSelectionHighlight() {
  const range = rangeBelongsToEditor(activeTextSelectionRange, activeSummaryEditor)
    ? activeTextSelectionRange
    : rangeBelongsToEditor(activeRichSelectionRange, activeSummaryEditor)
      ? activeRichSelectionRange
      : null;
  if (range) showPersistentTextSelection(range);
}

function rangeBelongsToEditor(range, editor) {
  if (!range || range.collapsed || !editor) return false;
  const container = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? range.commonAncestorContainer.parentElement
    : range.commonAncestorContainer;
  return Boolean(container && editor.contains(container));
}

function editorFromRange(range) {
  if (!range || range.collapsed) return null;
  const container = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? range.commonAncestorContainer.parentElement
    : range.commonAncestorContainer;
  return container?.closest?.("[data-rich-editor]") || null;
}

function pointInsideRange(range, x, y) {
  if (!range || range.collapsed) return false;
  return [...range.getClientRects()].some((rect) =>
    rect.width > 0 &&
    rect.height > 0 &&
    x >= rect.left &&
    x <= rect.right &&
    y >= rect.top &&
    y <= rect.bottom
  );
}

function richEditorFromContextEvent(event) {
  const directEditor = event.target.closest?.("[data-rich-editor]");
  if (directEditor) return directEditor;
  const savedRange = rangeBelongsToEditor(activeTextSelectionRange, activeSummaryEditor)
    ? activeTextSelectionRange
    : activeRichSelectionRange;
  if (pointInsideRange(savedRange, event.clientX, event.clientY)) {
    return editorFromRange(savedRange);
  }
  return null;
}

function displayRichFontName(value = "") {
  return String(value || "")
    .split(",")[0]
    .replace(/^['\"]|['\"]$/g, "")
    .trim() || "Arial";
}

function rgbColorToHex(value = "") {
  const color = String(value || "").trim();
  if (/^#[0-9a-f]{6}$/i.test(color)) return color.toLowerCase();
  if (/^#[0-9a-f]{3}$/i.test(color)) {
    return `#${color.slice(1).split("").map((part) => part + part).join("")}`.toLowerCase();
  }
  const match = color.match(/^rgba?\(\s*(\d+)\D+(\d+)\D+(\d+)/i);
  if (!match) return color;
  return `#${match.slice(1, 4).map((part) => Math.min(255, Number(part)).toString(16).padStart(2, "0")).join("")}`;
}

function textNodesInRichSelection(range, editor, includeWhitespace = false) {
  const walker = document.createTreeWalker(editor, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent || (!includeWhitespace && !node.textContent.trim())) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest("[contenteditable='false']")) return NodeFilter.FILTER_REJECT;
      try {
        return range.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      } catch {
        return NodeFilter.FILTER_REJECT;
      }
    }
  });
  const nodes = [];
  let node = walker.nextNode();
  while (node) {
    nodes.push(node);
    node = walker.nextNode();
  }
  return nodes;
}

function richBlockFromRange(range, editor) {
  if (!range || !editor) return null;
  const container = range.startContainer?.nodeType === Node.TEXT_NODE
    ? range.startContainer.parentElement
    : range.startContainer;
  const block = container?.closest?.(".rich-block");
  return block && editor.contains(block) ? block : null;
}

function uniformSelectionValue(values) {
  const cleanValues = values.map((value) => String(value || "").trim()).filter(Boolean);
  if (!cleanValues.length) return "";
  return cleanValues.every((value) => value.toLowerCase() === cleanValues[0].toLowerCase())
    ? cleanValues[0]
    : "";
}

function richSelectionStyleState(range, editor) {
  const textNodes = textNodesInRichSelection(range, editor);
  const styles = textNodes.map((node) => getComputedStyle(node.parentElement || editor));
  return {
    color: uniformSelectionValue(styles.map((style) => rgbColorToHex(style.color))),
    font: uniformSelectionValue(styles.map((style) => displayRichFontName(style.fontFamily))),
    size: uniformSelectionValue(styles.map((style) => String(Math.round(parseFloat(style.fontSize) || 16))))
  };
}

function closeSelectionInspectorOptions(except = "") {
  textSelectionInspector?.querySelectorAll("[data-selection-options]").forEach((options) => {
    if (options.dataset.selectionOptions !== except) options.hidden = true;
  });
}

function positionSelectionInspector(range) {
  if (!textSelectionInspector || selectionInspectorWasMoved) return;
  const rect = range.getBoundingClientRect();
  const hostDialog = textSelectionInspector.closest("dialog");
  const hostRect = hostDialog?.getBoundingClientRect();
  const bounds = {
    bottom: Math.min(window.innerHeight - 8, (hostRect?.bottom ?? window.innerHeight) - 8),
    left: Math.max(8, (hostRect?.left ?? 0) + 8),
    right: Math.min(window.innerWidth - 8, (hostRect?.right ?? window.innerWidth) - 8),
    top: Math.max(8, (hostRect?.top ?? 0) + 8)
  };
  const inspectorRect = textSelectionInspector.getBoundingClientRect();
  const inspectorWidth = Math.min(inspectorRect.width || 310, bounds.right - bounds.left);
  const inspectorHeight = Math.min(inspectorRect.height || 260, bounds.bottom - bounds.top);
  const left = Math.max(bounds.left, Math.min(rect.left, bounds.right - inspectorWidth));
  const preferredTop = rect.bottom + 10;
  const top = preferredTop + inspectorHeight <= bounds.bottom
    ? preferredTop
    : Math.max(bounds.top, rect.top - inspectorHeight - 10);
  textSelectionInspector.style.left = `${left}px`;
  textSelectionInspector.style.top = `${top}px`;
}

function showTextSelectionInspector(editor, range) {
  if (!editor || !range || range.collapsed) return;
  activeSummaryEditor = editor;
  activeRichSelectionRange = range.cloneRange();
  activeTextSelectionRange = range.cloneRange();
  showPersistentTextSelection(range);
  hideTextSelectionInspector();
}

function hideTextSelectionInspector() {
  if (!textSelectionInspector) return;
  textSelectionInspector.hidden = true;
  closeSelectionInspectorOptions();
  selectionInspectorWasMoved = false;
}

function refreshTextSelectionInspector() {
  hideTextSelectionInspector();
}

function scheduleTextSelectionInspectorRefresh(delay = 0) {
  clearTimeout(selectionInspectorRefreshTimer);
  selectionInspectorRefreshTimer = setTimeout(hideTextSelectionInspector, delay);
}

function applySelectionInspectorFormat(kind, rawValue) {
  if (!activeSummaryEditor || !activeTextSelectionRange) return;
  activeRichSelectionRange = activeTextSelectionRange.cloneRange();
  if (kind === "font") {
    const font = cleanFontFamily(rawValue);
    if (!font) return;
    selectionFontInput.value = font;
    applyRichInlineCommand(activeSummaryEditor, "fontName", font);
  }
  if (kind === "color") {
    const color = normalizeTextColor(rawValue);
    if (!color) return;
    const normalized = rgbColorToHex(color);
    selectionColorInput.value = normalized;
    if (/^#[0-9a-f]{6}$/i.test(normalized)) selectionColorPicker.value = normalized;
    applyRichInlineCommand(activeSummaryEditor, "foreColor", normalized);
  }
  if (kind === "size") {
    const size = normalizeFontPx(rawValue);
    if (!size) return;
    selectionSizeInput.value = size;
    applyRichInlineCommand(activeSummaryEditor, "fontSize", size);
  }
  closeSelectionInspectorOptions();
  requestAnimationFrame(() => {
    if (activeRichSelectionRange && activeSummaryEditor) {
      activeTextSelectionRange = activeRichSelectionRange.cloneRange();
      showTextSelectionInspector(activeSummaryEditor, activeRichSelectionRange);
    }
  });
}

function renderSelectionInspectorOptions() {
  const fontOptions = textSelectionInspector?.querySelector("[data-selection-options='font']");
  const sizeOptions = textSelectionInspector?.querySelector("[data-selection-options='size']");
  if (fontOptions) {
    fontOptions.innerHTML = commonRichFonts.map((font) => `<button type="button" data-selection-value="font" data-value="${escapeHtml(font)}" style="font-family: ${escapeHtml(font)}">${escapeHtml(font)}</button>`).join("");
  }
  if (sizeOptions) {
    sizeOptions.innerHTML = commonRichSizes.map((size) => `<button type="button" data-selection-value="size" data-value="${size}">${size} px</button>`).join("");
  }
  if (selectionColorSwatches) {
    selectionColorSwatches.innerHTML = commonRichColors.map((color) => `<button type="button" data-selection-value="color" data-value="${color}" style="--selection-swatch: ${color}" aria-label="Use ${color}"></button>`).join("");
  }
  if (richContextColorSwatches) {
    richContextColorSwatches.innerHTML = commonRichColors.map((color) => `<button type="button" data-rich-color-value="${color}" style="--selection-swatch: ${color}" aria-label="Use ${color}"></button>`).join("");
  }
}

function applyStyleToRichSelection(editor, range, command, value = "") {
  const nodes = textNodesInRichSelection(range, editor, true);
  if (!nodes.length) return null;
  const makeBold = command === "bold"
    ? !nodes.every((node) => Number.parseInt(getComputedStyle(node.parentElement || editor).fontWeight, 10) >= 600)
    : false;
  const makeItalic = command === "italic"
    ? !nodes.every((node) => getComputedStyle(node.parentElement || editor).fontStyle === "italic")
    : false;
  const makeUnderline = command === "underline"
    ? !nodes.every((node) => getComputedStyle(node.parentElement || editor).textDecorationLine.includes("underline"))
    : false;
  const formattedNodes = [];

  nodes.forEach((node) => {
    const length = node.textContent?.length || 0;
    let start = node === range.startContainer ? range.startOffset : 0;
    let end = node === range.endContainer ? range.endOffset : length;
    start = Math.max(0, Math.min(start, length));
    end = Math.max(start, Math.min(end, length));
    if (start === end) return;

    if (end < length) node.splitText(end);
    const selectedNode = start > 0 ? node.splitText(start) : node;
    const wrapper = document.createElement("span");
    wrapper.className = "rich-inline-style";
    wrapper.style.display = "inline";
    if (command === "fontName") wrapper.style.fontFamily = cleanFontFamily(value);
    if (command === "foreColor") wrapper.style.color = normalizeTextColor(value);
    if (command === "fontSize") wrapper.style.fontSize = `${normalizeFontPx(value)}px`;
    if (command === "bold") wrapper.style.fontWeight = makeBold ? "700" : "400";
    if (command === "italic") wrapper.style.fontStyle = makeItalic ? "italic" : "normal";
    if (command === "underline") wrapper.style.textDecoration = makeUnderline ? "underline" : "none";
    selectedNode.replaceWith(wrapper);
    wrapper.append(selectedNode);
    formattedNodes.push(selectedNode);
  });

  if (!formattedNodes.length) return null;
  normalizeInlineStyleSpans(editor);
  const nextRange = document.createRange();
  const firstNode = formattedNodes[0];
  const lastNode = formattedNodes[formattedNodes.length - 1];
  nextRange.setStart(firstNode, 0);
  nextRange.setEnd(lastNode, lastNode.textContent?.length || 0);
  return nextRange;
}

function applyRichInlineCommand(editor, command, value = "") {
  if (!editor) return;
  const liveRange = selectionRangeInsideEditor(editor);
  const savedRange = liveRange && !liveRange.collapsed
    ? liveRange.cloneRange()
    : rangeBelongsToEditor(activeTextSelectionRange, editor)
    ? activeTextSelectionRange.cloneRange()
    : rangeBelongsToEditor(activeRichSelectionRange, editor)
      ? activeRichSelectionRange.cloneRange()
      : null;

  let appliedToSelection = false;
  if (savedRange) {
    const nextRange = applyStyleToRichSelection(editor, savedRange, command, value);
    if (nextRange) {
      activeRichSelectionRange = nextRange.cloneRange();
      activeTextSelectionRange = nextRange.cloneRange();
      showPersistentTextSelection(nextRange);
      appliedToSelection = true;
    }
  }

  if (!appliedToSelection) {
    const block = richBlockFromRange(savedRange, editor) || selectedRichBlock(editor) || currentRichBlock(editor);
    if (!block || block.dataset.type !== "paragraph") {
      setStatus("Highlight text or click inside a text line before formatting.");
      return;
    }
    selectRichBlock(block);
    if (command === "fontName") updateCurrentTextBlock(editor, { fontFamily: value });
    if (command === "foreColor") updateCurrentTextBlock(editor, { color: value });
    if (command === "fontSize") updateCurrentTextBlock(editor, { fontPx: value });
    if (command === "bold") updateCurrentTextBlock(editor, { bold: block.dataset.bold !== "true" });
    if (command === "italic") {
      updateCurrentTextBlock(editor, { italic: block.dataset.italic !== "true" });
    }
    if (command === "underline") {
      updateCurrentTextBlock(editor, { underline: block.dataset.underline !== "true" });
    }
    saveRichEditorToProject(editor);
    setStatus("Formatting applied and saved locally for the current text line.");
    return;
  }

  saveRichEditorToProject(editor);
  setStatus("Unsaved local changes. Click the section save button to keep this formatting.");
}

function selectRichBlock(block) {
  document.querySelectorAll(".rich-block.selected").forEach((item) => item.classList.remove("selected"));
  activeSummaryBlock = block || null;
  if (block) {
    block.classList.add("selected");
    const editor = block.closest("[data-rich-editor]");
    if (editor) editor.dataset.activeRichBlockIndex = String([...editor.children].indexOf(block));
  }
}

function selectedRichBlock(editor) {
  if (!editor) return null;
  const index = Number(editor.dataset.activeRichBlockIndex);
  if (Number.isInteger(index) && index >= 0 && editor.children[index]?.matches(".rich-block")) {
    return editor.children[index];
  }
  if (activeSummaryBlock && editor.contains(activeSummaryBlock)) return activeSummaryBlock;
  return currentRichBlock(editor);
}

function syncRichContextMenuControls(block) {
    if (!block || block.dataset.type !== "paragraph") return;

    const computed = getComputedStyle(block);
    const family = displayRichFontName(computed.fontFamily) || "Arial";
    const size = String(Math.round(parseFloat(computed.fontSize) || 16));
    const color = normalizeTextColor(block.dataset.color || "") || "#17202a";
    restoreRichSelection(block.closest("[data-rich-editor]"));
    const bold = document.queryCommandState("bold") || block.dataset.bold === "true";

    if (richFontSelect) {
        richFontSelect.value = [...richFontSelect.options].some((option) => option.value === family || option.textContent === family)
            ? family
            : "Arial";
    }

    if (richFontSize) richFontSize.value = size;
    if (richColorInput) richColorInput.value = color;
    if (richBoldButton) richBoldButton.setAttribute("aria-pressed", bold ? "true" : "false");
}

function focusTextBlock(block) {
  if (!block) return;
  selectRichBlock(block);
  const editor = block.closest("[data-rich-editor]");
  editor?.focus();
  const range = document.createRange();
  range.selectNodeContents(block);
  range.collapse(false);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  captureRichSelection(editor);
}

function setTextBlockCaretOffset(block, offset) {
  if (!block) return;
  selectRichBlock(block);
  const editor = block.closest("[data-rich-editor]");
  editor?.focus();
  const textNode = block.firstChild || block;
  const safeOffset = Math.max(0, Math.min(offset, textNode.textContent?.length || 0));
  const range = document.createRange();
  range.setStart(textNode, safeOffset);
  range.collapse(true);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  captureRichSelection(editor);
}

function textBlockCaretOffset(block) {
  const selection = window.getSelection();
  if (!selection?.rangeCount || !block.contains(selection.anchorNode)) return block.textContent.length;
  const range = selection.getRangeAt(0).cloneRange();
  range.selectNodeContents(block);
  range.setEnd(selection.anchorNode, selection.anchorOffset);
  return range.toString().length;
}

function matchingTextBlock(block, text = "") {
    return createRichTextBlock(
        text,
        block?.dataset.fontSize || "normal",
        block?.dataset.align || "left",
        block?.dataset.fontFamily || "Arial",
        block?.dataset.fontPx || "",
        block?.dataset.color || "",
        block?.dataset.bold === "true",
        "",
        block?.dataset.italic === "true",
        block?.dataset.underline === "true"
    );
}

function richInsertionRange(editor) {
  const currentRange = selectionRangeInsideEditor(editor);
  if (currentRange) {
    currentRange.collapse(true);
    return currentRange;
  }
  if (restoreRichSelection(editor)) {
    const restored = selectionRangeInsideEditor(editor);
    if (restored) {
      restored.collapse(true);
      return restored;
    }
  }
  const lastText = [...editor.querySelectorAll(".rich-text-block")].at(-1);
  if (lastText) {
    const range = document.createRange();
    range.selectNodeContents(lastText);
    range.collapse(false);
    return range;
  }
  return null;
}

function insertRichBlockAtCursor(editor, blockElement, insertionRange = null) {
  const range = insertionRange?.cloneRange() || richInsertionRange(editor);
  const rangeNode = range?.startContainer?.nodeType === Node.TEXT_NODE
    ? range.startContainer.parentElement
    : range?.startContainer;
  const current = rangeNode?.closest?.(".rich-block") || selectedRichBlock(editor);
  let nextText = null;

  if (range && current?.dataset.type === "paragraph" && current.contains(range.startContainer)) {
    range.collapse(true);
    const tail = document.createRange();
    tail.setStart(range.startContainer, range.startOffset);
    tail.setEnd(current, current.childNodes.length);
    const trailingContent = tail.extractContents();
    current.after(blockElement);
    nextText = matchingTextBlock(current, "");
    nextText.append(trailingContent);
    blockElement.after(nextText);
  } else if (range?.startContainer === editor) {
    const reference = editor.children[range.startOffset] || null;
    editor.insertBefore(blockElement, reference);
    nextText = createRichTextBlock("");
    blockElement.after(nextText);
  } else if (current) {
    current.after(blockElement);
    nextText = matchingTextBlock(current, "");
    blockElement.after(nextText);
  } else {
    editor.append(blockElement);
    nextText = createRichTextBlock("");
    editor.append(nextText);
  }

  focusTextBlock(nextText);
}

function insertRichBlockAfterCursor(editor, blockElement) {
  insertRichBlockAtCursor(editor, blockElement);
}

function cleanupEmptyRichTextBlocks(editor) {
  if (!editor) return;
  [...editor.querySelectorAll(":scope > .rich-text-block")].forEach((block) => {
    const hasVisibleText = richElementPlainText(block);
    if (hasVisibleText) return;
    const previous = block.previousElementSibling;
    const next = block.nextElementSibling;
    const keepTypingBlockAfterImage = previous?.dataset.type === "image" && !next;
    const isOnlyBlock = editor.children.length <= 1;
    if (!isOnlyBlock && !keepTypingBlockAfterImage) block.remove();
  });
  if (!editor.querySelector(":scope > .rich-block")) editor.append(createRichTextBlock(""));
}

function normalizeRichEditorStructure(editor) {
  if (!editor) return;
  [...editor.childNodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!node.textContent.trim()) {
        node.remove();
        return;
      }
      const paragraph = createRichTextBlock(node.textContent);
      node.replaceWith(paragraph);
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE || node.matches(".rich-block")) return;
    const paragraph = createRichTextBlock("");
    paragraph.innerHTML = sanitizeRichInlineHtml(node.innerHTML || node.textContent || "");
    node.replaceWith(paragraph);
  });

  editor.querySelectorAll(".rich-text-block").forEach((block) => {
    block.dataset.type = "paragraph";
    block.dataset.fontSize ||= "normal";
    block.dataset.align ||= "left";
    block.dataset.fontFamily ||= "Arial";
    block.classList.add("rich-block");
    block.removeAttribute("contenteditable");
    applyRichTextBlockStyle(block);
  });

  if (!editor.querySelector(":scope > .rich-block")) editor.append(createRichTextBlock(""));
}

function richElementPlainText(element) {
  const cloneElement = element.cloneNode(true);
  cloneElement.querySelectorAll("br").forEach((lineBreak) => lineBreak.replaceWith("\n"));
  return String(cloneElement.textContent || "").trim();
}

function updateCurrentTextBlock(editor, updates) {
    const block = selectedRichBlock(editor);
    if (!block || block.dataset.type !== "paragraph") return;

    if (updates.fontSize) {
        block.dataset.fontSize = updates.fontSize;
        block.classList.remove("rich-text-small", "rich-text-normal", "rich-text-large");
        block.classList.add(`rich-text-${updates.fontSize}`);
    }

    if (updates.align) {
        block.dataset.align = updates.align;
        block.classList.remove("text-left", "text-center", "text-right");
        block.classList.add(`text-${updates.align}`);
    }

    if (Object.prototype.hasOwnProperty.call(updates, "fontFamily")) {
        block.dataset.fontFamily = cleanFontFamily(updates.fontFamily);
    }

    if (Object.prototype.hasOwnProperty.call(updates, "fontPx")) {
        block.dataset.fontPx = normalizeFontPx(updates.fontPx);
    }

    if (Object.prototype.hasOwnProperty.call(updates, "color")) {
        block.dataset.color = normalizeTextColor(updates.color);
    }

    if (Object.prototype.hasOwnProperty.call(updates, "bold")) {
        block.dataset.bold = updates.bold ? "true" : "false";
    }

    if (Object.prototype.hasOwnProperty.call(updates, "italic")) {
        block.dataset.italic = updates.italic ? "true" : "false";
    }

    if (Object.prototype.hasOwnProperty.call(updates, "underline")) {
        block.dataset.underline = updates.underline ? "true" : "false";
    }

    applyRichTextBlockStyle(block);
    saveRichEditorToProject(editor);
}

function extractRichSummary(editor) {
  normalizeRichEditorStructure(editor);
  normalizeInlineStyleSpans(editor);
  const blocks = [...editor.querySelectorAll(".rich-block")].map((element) => {
    const align = element.dataset.align || "left";
    if (element.dataset.type === "image") {
      return {
        align,
        caption: element.dataset.caption || "",
        cropAspect: normalizeCropAspect(element.dataset.cropAspect),
        cropX: normalizeCropPosition(element.dataset.cropX),
        cropY: normalizeCropPosition(element.dataset.cropY),
        cropZoom: normalizeCropZoom(element.dataset.cropZoom),
        display: element.dataset.display === "download" ? "download" : "show",
        source: element.dataset.source || "local",
        title: element.dataset.title || "",
        type: "image",
        url: element.dataset.url || ""
      };
    }
    if (element.dataset.type === "formula") {
      return {
        align,
        formula: unwrapFormula(element.dataset.formula || element.textContent || ""),
        type: "formula"
      };
    }
    if (element.dataset.type === "code") {
      const code = normalizeCodeText(element.dataset.code || element.querySelector("code")?.textContent || "", element.dataset.pasteMode || "source");
      if (!code) return null;
      return {
        code,
        language: normalizeCodeLanguage(element.dataset.language || detectCodeLanguage(code)),
        pasteMode: normalizeCodePasteMode(element.dataset.pasteMode),
        type: "code"
      };
    }
    const text = richElementPlainText(element);
    if (!text) return null;
    if (isFormulaOnly(text)) {
      return { align: element.dataset.align || "center", formula: unwrapFormula(text), type: "formula" };
    }
    return {
      align,
      bold: element.dataset.bold === "true",
      color: element.dataset.color || "",
      fontFamily: element.dataset.fontFamily || "",
      fontPx: element.dataset.fontPx || "",
      fontSize: element.dataset.fontSize || "normal",
      html: sanitizeRichInlineHtml(element.innerHTML),
      italic: element.dataset.italic === "true",
      text,
      underline: element.dataset.underline === "true",
      type: "paragraph"
    };
  }).filter(Boolean);
  return { blocks };
}

async function uploadSummaryImageFile(file, options = {}) {
  const project = selectedProject();
  const projectId = options.projectId || project?.id;
  if (!projectId || !file) return null;
  const validation = isAllowedUpload("media", file.name, file.type);
  if (!validation.ok) {
    setStatus(validation.message);
    return null;
  }
  const displayTitle = Object.prototype.hasOwnProperty.call(options, "title") ? options.title : file.name;
  const fileName = withExtension(displayTitle || file.name, file.name);
  const data = await readFileAsDataUrl(file);
  const response = await fetch("/api/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      projectId,
        section: options.folder || "summary",
      fileName,
      data
    })
  });
  const result = await response.json();
  if (!response.ok) {
    setStatus(result.error || "Image upload failed.");
    return null;
  }
  return {
    align: options.align || "center",
    caption: options.caption || "",
    cropAspect: normalizeCropAspect(options.cropAspect),
    cropX: normalizeCropPosition(options.cropX),
    cropY: normalizeCropPosition(options.cropY),
    cropZoom: normalizeCropZoom(options.cropZoom),
    display: options.display === "download" ? "download" : "show",
    source: "local",
    title: displayTitle || "",
    type: "image",
    url: result.url
  };
}

function updateSummaryImageDialogVisibility() {
  const source = summaryImageSource?.value || "local";
  const isLocal = source === "local";
  document.querySelector(".summary-image-local-field").hidden = !isLocal;
  document.querySelector(".summary-image-url-field").hidden = isLocal;
}

async function openSummaryImageDialog(existingBlock = null, options = {}) {
  const heading = summaryImageDialog.querySelector("h2");
  const submitButton = summaryImageDialog.querySelector("button[type='submit']");
  if (heading) heading.textContent = existingBlock ? "Edit image" : "Add image to overview";
  if (submitButton) submitButton.textContent = existingBlock ? "Save image" : "Add image";
  summaryImageSource.value = existingBlock?.dataset.source || "local";
  summaryImageFile.value = "";
  summaryImageUrl.value = existingBlock?.dataset.source && existingBlock.dataset.source !== "local" ? existingBlock.dataset.url || "" : "";
  summaryImageTitle.value = existingBlock?.dataset.title || "";
  summaryImageCaption.value = existingBlock?.dataset.caption || "";
  summaryImageAlign.value = existingBlock?.dataset.align || "center";
  summaryImageDisplay.value = existingBlock?.dataset.display || "show";
  summaryImageCrop.value = normalizeCropAspect(existingBlock?.dataset.cropAspect);
  summaryImageZoom.value = String(normalizeCropZoom(existingBlock?.dataset.cropZoom));
  updateSummaryImageDialogVisibility();
  const saved = await dialogValue(summaryImageDialog);
  if (!saved) return null;
  const file = summaryImageFile.files[0];
  const source = summaryImageSource.value || "local";
  const url = normalizeLinkTarget(summaryImageUrl.value.trim(), { assumeWeb: true });

  if (source !== "local") {
    const existingUrl = existingBlock?.dataset.url || "";
    const nextUrl = url || existingUrl;
    if (!nextUrl) {
      setStatus("Paste an image URL or share link first.");
      return null;
    }
    const display = summaryImageDisplay.value === "download" ? "download" : "show";
    if (display === "show" && !urlLooksLikeDirectImage(nextUrl)) {
      setStatus("Use a direct image URL for visible images, or choose Downloadable file only for share links and non-image URLs.");
      return null;
    }
    return {
      align: summaryImageAlign.value,
      caption: summaryImageCaption.value.trim(),
      cropAspect: summaryImageCrop.value,
      cropX: normalizeCropPosition(existingBlock?.dataset.cropX),
      cropY: normalizeCropPosition(existingBlock?.dataset.cropY),
      cropZoom: normalizeCropZoom(summaryImageZoom.value),
      display,
      source,
      title: summaryImageTitle.value.trim() || displayNameFromUrl(nextUrl, source === "drive" ? "Google Drive image" : "Web image"),
      type: "image",
      url: nextUrl
    };
  }

  if (!file && !existingBlock) {
    setStatus("Choose an image first.");
    return null;
  }
  if (!file && existingBlock) {
    return {
      align: summaryImageAlign.value,
      caption: summaryImageCaption.value.trim(),
      cropAspect: summaryImageCrop.value,
      cropX: normalizeCropPosition(existingBlock.dataset.cropX),
      cropY: normalizeCropPosition(existingBlock.dataset.cropY),
      cropZoom: normalizeCropZoom(summaryImageZoom.value),
      display: summaryImageDisplay.value === "download" ? "download" : "show",
      source: existingBlock.dataset.source || "local",
      title: summaryImageTitle.value.trim() || existingBlock.dataset.title || "",
      type: "image",
      url: existingBlock.dataset.url || ""
    };
  }
  return uploadSummaryImageFile(file, {
    align: summaryImageAlign.value,
    caption: summaryImageCaption.value.trim(),
      cropAspect: summaryImageCrop.value,
      cropX: 50,
      cropY: 50,
      cropZoom: normalizeCropZoom(summaryImageZoom.value),
      display: summaryImageDisplay.value === "download" ? "download" : "show",
      folder: options.folder || "summary",
      projectId: options.projectId || "",
    title: summaryImageTitle.value.trim() || file.name
  });
}

async function openSummaryFormulaDialog(existingBlock = null) {
  const heading = summaryFormulaDialog.querySelector("h2");
  const submitButton = summaryFormulaDialog.querySelector("button[type='submit']");
  if (heading) heading.textContent = existingBlock ? "Edit formula" : "Add formula";
  if (submitButton) submitButton.textContent = existingBlock ? "Save formula" : "Add formula";
  summaryFormulaInput.value = existingBlock?.dataset.formula || "";
  summaryFormulaAlign.value = existingBlock?.dataset.align || "center";
  const saved = await dialogValue(summaryFormulaDialog);
  if (!saved) return null;
  const formula = unwrapFormula(summaryFormulaInput.value.trim());
  if (!formula) {
    setStatus("Paste or type a formula first.");
    return null;
  }
  return { align: summaryFormulaAlign.value, formula, type: "formula" };
}

function refreshSummaryCodeDialogPreview() {
  if (!summaryCodePreview || !summaryCodeInput) return;
  const rawCode = summaryCodeInput.value || "";
  const language = summaryCodeLanguage?.value === "auto"
    ? detectCodeLanguage(rawCode)
    : normalizeCodeLanguage(summaryCodeLanguage?.value || "javascript");
  const code = normalizeCodeText(rawCode, summaryCodePasteMode?.value || "source");
  summaryCodePreview.innerHTML = code
    ? renderRichCodeBlock({ code, language, pasteMode: summaryCodePasteMode?.value || "source" })
    : `<p class="evidence-empty">Code preview appears here.</p>`;
}

function indentBraceCodeClient(code = "") {
  let depth = 0;
  return String(code || "")
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((rawLine) => {
      const line = rawLine.trim();
      if (!line) return "";
      const hasLeadingClose = /^[}\])]/.test(line);
      if (hasLeadingClose) depth = Math.max(0, depth - 1);
      const formatted = `${"  ".repeat(depth)}${line}`;
      const opens = (line.match(/[{\[(]/g) || []).length;
      const closeCount = (line.match(/[}\])]/g) || []).length;
      const closes = Math.max(0, closeCount - (hasLeadingClose ? 1 : 0));
      depth = Math.max(0, depth + opens - closes);
      return formatted;
    })
    .join("\n")
    .trimEnd();
}

function expandBraceCodeClient(code = "") {
  const source = String(code || "").replace(/\r\n?/g, "\n");
  let result = "";
  let quote = "";
  let escaped = false;
  let lineComment = false;
  let blockComment = false;
  let parenDepth = 0;
  const appendNewline = () => {
    result = result.replace(/[ \t]+$/g, "");
    if (!result.endsWith("\n")) result += "\n";
  };
  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1] || "";
    if (lineComment) {
      result += char;
      if (char === "\n") lineComment = false;
      continue;
    }
    if (blockComment) {
      result += char;
      if (char === "*" && next === "/") {
        result += next;
        index += 1;
        blockComment = false;
      }
      continue;
    }
    if (quote) {
      result += char;
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = "";
      continue;
    }
    if (char === "/" && next === "/") {
      result += char + next;
      index += 1;
      lineComment = true;
      continue;
    }
    if (char === "/" && next === "*") {
      result += char + next;
      index += 1;
      blockComment = true;
      continue;
    }
    if (char === "\"" || char === "`") {
      quote = char;
      result += char;
      continue;
    }
    const previous = source[index - 1] || "";
    const systemVerilogWidthLiteral = char === "'" && /[0-9a-zA-Z_$\])]/.test(previous) && /[bBdDhHoOsS01xzXZ]/.test(next);
    if (char === "'" && !systemVerilogWidthLiteral) {
      quote = char;
      result += char;
      continue;
    }
    if (char === "(" || char === "[") parenDepth += 1;
    if (char === ")" || char === "]") parenDepth = Math.max(0, parenDepth - 1);
    if (char === "{") {
      result = result.replace(/[ \t]+$/g, "");
      result += " {";
      appendNewline();
      continue;
    }
    if (char === "}") {
      appendNewline();
      result += "}";
      if (next && next !== ";" && next !== "," && next !== ")" && next !== "\n") appendNewline();
      continue;
    }
    if (char === ";" && parenDepth === 0) {
      result += ";";
      appendNewline();
      continue;
    }
    if (char === "\n") {
      appendNewline();
      continue;
    }
    result += char;
  }
  return result.replace(/[ \t]+$/gm, "").replace(/\n{4,}/g, "\n\n\n").trimEnd();
}

function beautifyHdlCodeClient(code = "") {
  const expanded = String(code || "")
    .replace(/\r\n?/g, "\n")
    .replace(/\t/g, "  ")
    .replace(/;\s*(?=\S)/g, ";\n")
    .replace(/\b(begin|case|casex|casez|fork|generate)\b\s*(?=\S)/gi, "$1\n")
    .replace(/\s+\b(end|endcase|endgenerate|endtask|endfunction|endmodule|join|join_any|join_none)\b/gi, "\n$1")
    .replace(/\belse\b\s*(?=\S)/gi, "else\n")
    .replace(/\n{3,}/g, "\n\n");
  let depth = 0;
  return expanded.split("\n").map((rawLine) => {
    const line = rawLine.trim();
    if (!line) return "";
    const lower = line.toLowerCase();
    const closes = /^(end|endcase|endgenerate|endtask|endfunction|endmodule|join|join_any|join_none)\b/.test(lower);
    const middle = /^(else)\b/.test(lower);
    if (closes || middle) depth = Math.max(0, depth - 1);
    const nextLine = /^`/.test(line) ? line : `${"  ".repeat(depth)}${line}`;
    if (/\b(module|begin|case|casex|casez|fork|generate|task|function)\b/.test(lower) && !/\bendmodule\b/.test(lower)) depth += 1;
    if (middle) depth += 1;
    return nextLine;
  }).join("\n").replace(/\n{4,}/g, "\n\n\n").trimEnd();
}

function beautifyPythonCodeClient(code = "") {
  let depth = 0;
  return String(code || "")
    .replace(/\r\n?/g, "\n")
    .replace(/\t/g, "    ")
    .split("\n")
    .map((rawLine) => {
      const line = rawLine.trim();
      if (!line) return "";
      if (/^(elif|else|except|finally)\b/.test(line)) depth = Math.max(0, depth - 1);
      const formatted = `${"    ".repeat(depth)}${line}`;
      if (/:\s*(?:#.*)?$/.test(line) && !line.startsWith("#")) depth += 1;
      if (/^(return|raise|break|continue|pass)\b/.test(line)) depth = Math.max(0, depth - 1);
      return formatted;
    })
    .join("\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trimEnd();
}

function beautifyHtmlCodeClient(code = "") {
  const voidTags = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
  const lines = String(code || "")
    .replace(/\r\n?/g, "\n")
    .replace(/>\s+</g, ">\n<")
    .replace(/(<[^>]+>)/g, "\n$1\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  let depth = 0;
  return lines.map((line) => {
    const closing = /^<\//.test(line);
    const tagName = (line.match(/^<\/?\s*([a-zA-Z0-9:-]+)/) || [])[1]?.toLowerCase() || "";
    const selfClosing = /\/>$/.test(line) || voidTags.has(tagName) || /^<!|^<\?/.test(line);
    if (closing) depth = Math.max(0, depth - 1);
    const formatted = `${"  ".repeat(depth)}${line}`;
    if (!closing && !selfClosing && /^</.test(line) && !line.includes(`</${tagName}>`)) depth += 1;
    return formatted;
  }).join("\n").trimEnd();
}

function beautifyLtspiceCodeClient(code = "") {
  return String(code || "")
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((rawLine) => {
      const trimmed = rawLine.trim();
      if (!trimmed) return "";
      if (/^[+]/.test(trimmed)) return `+ ${trimmed.slice(1).trim()}`;
      if (/^[*.]/.test(trimmed)) return trimmed;
      return trimmed.replace(/\s+/g, " ");
    })
    .join("\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trimEnd();
}

function beautifyCodeClient(code = "", language = "javascript") {
  const normalized = String(code || "").replace(/\r\n?/g, "\n").replace(/\t/g, "  ");
  const lang = normalizeCodeLanguage(language);
  if (["verilog", "systemverilog"].includes(lang)) return beautifyHdlCodeClient(normalized);
  if (["c", "cpp", "java", "javascript"].includes(lang)) {
    return indentBraceCodeClient(expandBraceCodeClient(normalized)).replace(/[ \t]+$/gm, "").replace(/\n{4,}/g, "\n\n\n");
  }
  if (lang === "python") return beautifyPythonCodeClient(code);
  if (lang === "html") return beautifyHtmlCodeClient(code);
  if (lang === "ltspice") return beautifyLtspiceCodeClient(code);
  return normalized.split("\n").map((line) => line.trimEnd()).join("\n").replace(/\n{4,}/g, "\n\n\n").trimEnd();
}

async function beautifySummaryCodeDialog() {
  if (!summaryCodeInput) return;
  const language = summaryCodeLanguage?.value === "auto"
    ? detectCodeLanguage(summaryCodeInput.value || "")
    : normalizeCodeLanguage(summaryCodeLanguage?.value || "javascript");
  try {
    const response = await fetch(`/api/code/beautify?t=${Date.now()}`, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language, code: summaryCodeInput.value || "" })
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Beautifier failed.");
    summaryCodeInput.value = result.code || summaryCodeInput.value;
  } catch {
    summaryCodeInput.value = beautifyCodeClient(summaryCodeInput.value || "", language);
  }
  refreshSummaryCodeDialogPreview();
}

async function openSummaryCodeDialog(existingBlock = null, options = {}) {
  const heading = summaryCodeDialog.querySelector("h2");
  const submitButton = summaryCodeDialog.querySelector("button[type='submit']");
  if (heading) heading.textContent = existingBlock ? "Edit code block" : "Add code block";
  if (submitButton) submitButton.textContent = existingBlock ? "Save code" : "Add code";
  const defaultCode = options.code || "";
  summaryCodeLanguage.value = existingBlock?.dataset.language || (defaultCode ? detectCodeLanguage(defaultCode) : "auto");
  summaryCodePasteMode.value = existingBlock?.dataset.pasteMode || options.pasteMode || "source";
  summaryCodeInput.value = existingBlock?.dataset.code || defaultCode;
  refreshSummaryCodeDialogPreview();
  const saved = await dialogValue(summaryCodeDialog);
  if (!saved) return null;
  const pasteMode = normalizeCodePasteMode(summaryCodePasteMode.value);
  const code = normalizeCodeText(summaryCodeInput.value, pasteMode);
  if (!code) {
    setStatus("Paste or type code before saving the block.");
    return null;
  }
  const language = summaryCodeLanguage.value === "auto" ? detectCodeLanguage(code) : normalizeCodeLanguage(summaryCodeLanguage.value);
  return { code, language, pasteMode, type: "code" };
}

function configureSummaryContextMenu(mode = "rich", options = {}) {
  const plainActions = new Set([
    "copy-text",
    "paste-text",
    "cut-text",
    "select-all-text",
    "toggle-bold",
    "toggle-italic",
    "toggle-underline"
  ]);
  const selectionActions = new Set(["copy-text"]);
  summaryContextMenu.querySelectorAll("[data-rich-action]").forEach((button) => {
    const action = button.dataset.richAction;
    button.hidden = mode === "selection" ? !selectionActions.has(action) : mode === "plain" ? !plainActions.has(action) : false;
  });
  summaryContextMenu.querySelectorAll(".rich-menu-field").forEach((field) => {
    field.hidden = mode === "selection";
  });
  if (richContextColorSwatches) richContextColorSwatches.hidden = true;
  if (mode === "rich") {
    const textOnly = Boolean(options.textOnly);
    summaryContextMenu.querySelectorAll("[data-rich-action='add-image'], [data-rich-action='add-formula'], [data-rich-action='add-code'], [data-rich-action='paste-code']").forEach((button) => {
      button.hidden = textOnly;
    });
  }
}

function applyPlainTextControlFormat(control, updates = {}) {
  if (!control) return;
  if (Object.prototype.hasOwnProperty.call(updates, "fontFamily")) {
    const font = cleanFontFamily(updates.fontFamily);
    control.dataset.builderFontFamily = font;
    control.style.fontFamily = font || "";
  }
  if (Object.prototype.hasOwnProperty.call(updates, "fontPx")) {
    const size = normalizeFontPx(updates.fontPx);
    control.dataset.builderFontPx = size;
    control.style.fontSize = size ? `${size}px` : "";
  }
  if (Object.prototype.hasOwnProperty.call(updates, "color")) {
    const color = normalizeTextColor(updates.color);
    control.dataset.builderColor = color;
    control.style.color = color || "";
    if (richColorInput && color && /^#[0-9a-f]{6}$/i.test(rgbColorToHex(color))) {
      richColorInput.value = rgbColorToHex(color);
    }
  }
  if (Object.prototype.hasOwnProperty.call(updates, "bold")) {
    control.dataset.builderBold = updates.bold ? "true" : "false";
    control.style.fontWeight = updates.bold ? "700" : "";
  }
  if (Object.prototype.hasOwnProperty.call(updates, "italic")) {
    control.dataset.builderItalic = updates.italic ? "true" : "false";
    control.style.fontStyle = updates.italic ? "italic" : "";
  }
  if (Object.prototype.hasOwnProperty.call(updates, "underline")) {
    control.dataset.builderUnderline = updates.underline ? "true" : "false";
    control.style.textDecoration = updates.underline ? "underline" : "";
  }
  storePlainControlStyle(control);
  setStatus("Formatting applied and saved locally for this field.");
}

function syncPlainContextMenuControls(control) {
  if (!control) return;
  const computed = getComputedStyle(control);
  const family = displayRichFontName(control.dataset.builderFontFamily || computed.fontFamily) || "Arial";
  const size = String(Math.round(parseFloat(control.dataset.builderFontPx || computed.fontSize) || 16));
  const color = rgbColorToHex(control.dataset.builderColor || computed.color || "#17202a");
  if (richFontSelect) {
    richFontSelect.value = [...richFontSelect.options].some((option) => option.value === family || option.textContent === family)
      ? family
      : "Arial";
  }
  if (richFontSize) richFontSize.value = [...richFontSize.options].some((option) => option.value === size || option.textContent === size)
    ? size
    : "16";
  if (richColorInput && /^#[0-9a-f]{6}$/i.test(color)) richColorInput.value = color;
  if (richBoldButton) richBoldButton.setAttribute("aria-pressed", control.dataset.builderBold === "true" ? "true" : "false");
}

function plainTextControlFromContextEvent(event) {
  const control = event.target.closest?.("textarea, input");
  if (!control || control.closest("#summary-context-menu")) return null;
  const type = String(control.type || "text").toLowerCase();
  if (control.disabled || control.readOnly) return null;
  if (["button", "checkbox", "color", "file", "hidden", "image", "radio", "range", "reset", "submit"].includes(type)) return null;
  return control;
}

async function handlePlainTextAction(action) {
  const control = activePlainTextControl;
  if (!control) return;
  control.focus({ preventScroll: true });
  const selection = activePlainTextSelection || {
    start: control.selectionStart ?? 0,
    end: control.selectionEnd ?? control.value.length
  };
  const start = Math.max(0, Math.min(selection.start, control.value.length));
  const end = Math.max(start, Math.min(selection.end, control.value.length));

  if (action === "copy-text" || action === "cut-text") {
    const text = control.value.slice(start, end) || control.value;
    if (text) await navigator.clipboard.writeText(text);
    if (action === "cut-text" && end > start) {
      control.setRangeText("", start, end, "start");
      control.dispatchEvent(new Event("input", { bubbles: true }));
    }
    return;
  }

  if (action === "paste-text") {
    const text = await navigator.clipboard.readText();
    if (text) {
      control.setRangeText(text, start, end, "end");
      control.dispatchEvent(new Event("input", { bubbles: true }));
    }
    return;
  }

  if (action === "select-all-text") {
    control.select();
    activePlainTextSelection = { start: 0, end: control.value.length };
    return;
  }

  if (action === "toggle-bold") {
    applyPlainTextControlFormat(control, { bold: control.dataset.builderBold !== "true" });
    return;
  }
  if (action === "toggle-italic") {
    applyPlainTextControlFormat(control, { italic: control.dataset.builderItalic !== "true" });
    return;
  }
  if (action === "toggle-underline") {
    applyPlainTextControlFormat(control, { underline: control.dataset.builderUnderline !== "true" });
    return;
  }
}

async function handleRichAction(action, editor) {
  if (!editor) return;
  activeSummaryEditor = editor;
  if (action === "toggle-bold") {
    applyRichInlineCommand(editor, "bold");
  }
  if (action === "toggle-italic") {
    applyRichInlineCommand(editor, "italic");
  }
  if (action === "toggle-underline") {
    applyRichInlineCommand(editor, "underline");
  }
  if (action === "align-left") updateCurrentTextBlock(editor, { align: "left" });
  if (action === "align-center") updateCurrentTextBlock(editor, { align: "center" });
    if (action === "align-right") updateCurrentTextBlock(editor, { align: "right" });
    if (action === "copy-text") {
        restoreRichSelection(editor);
        const selectedText = window.getSelection()?.toString() || "";
        const block = selectedRichBlock(editor);
        const text = selectedText || block?.textContent || "";
        if (text) await navigator.clipboard.writeText(text);
        return;
    }

    if (action === "paste-text") {
        const text = await navigator.clipboard.readText();
        if (text) {
            insertPlainTextIntoRichEditor(editor, text);
            saveRichEditorToProject(editor);
        }
        return;
    }
    if (action === "cut-text") {
        restoreRichSelection(editor);
        const selection = window.getSelection();
        const selectedText = selection?.toString() || "";
        if (selectedText && selection.rangeCount) {
            await navigator.clipboard.writeText(selectedText);
            const range = selection.getRangeAt(0);
            range.deleteContents();
            captureRichSelection(editor);
            cleanupEmptyRichTextBlocks(editor);
            saveRichEditorToProject(editor);
        }
        return;
    }
    if (action === "select-all-text") {
        const block = selectedRichBlock(editor);
        const target = block?.dataset.type === "paragraph" ? block : editor;
        const range = document.createRange();
        range.selectNodeContents(target);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        activeRichSelectionRange = range.cloneRange();
        activeTextSelectionRange = range.cloneRange();
        showPersistentTextSelection(range);
        showTextSelectionInspector(editor, range);
        return;
    }
  if (action === "add-image") {
      const imageBlock = await openSummaryImageDialog(null, {
          folder: editor.dataset.richFolder || "summary",
          projectId: editor.dataset.richProjectId || ""
      });
    if (imageBlock) {
      insertRichBlockAfterCursor(editor, createRichImageBlock(imageBlock));
      saveRichEditorToProject(editor);
    }
  }
  if (action === "add-formula") {
    const formulaBlock = await openSummaryFormulaDialog();
    if (formulaBlock) {
      insertRichBlockAfterCursor(editor, createRichFormulaBlock(formulaBlock));
      saveRichEditorToProject(editor);
    }
  }
  if (action === "add-code") {
    const selectedText = window.getSelection()?.toString() || "";
    const codeBlock = await openSummaryCodeDialog(null, { code: selectedText, pasteMode: "source" });
    if (codeBlock) {
      insertRichBlockAfterCursor(editor, createRichCodeBlock(codeBlock));
      saveRichEditorToProject(editor);
    }
  }
  if (action === "paste-code") {
    const text = await navigator.clipboard.readText();
    const codeBlock = await openSummaryCodeDialog(null, { code: text, pasteMode: "source" });
    if (codeBlock) {
      insertRichBlockAfterCursor(editor, createRichCodeBlock(codeBlock));
      saveRichEditorToProject(editor);
    }
  }
  if (action === "edit-block") {
    await editSelectedRichBlock(editor);
    saveRichEditorToProject(editor);
  }
  if (action === "delete-block") deleteSelectedRichBlock(editor);
}

function hideSummaryContextMenu() {
  summaryContextMenu.hidden = true;
  activePlainTextControl = null;
  activePlainTextSelection = null;
  activeStaticSelectionText = "";
  if (richContextColorSwatches) richContextColorSwatches.hidden = true;
}

function positionCompactContextMenu(menu, event, host = document.body, options = {}) {
  if (!menu) return;
  const hostRect = host?.getBoundingClientRect?.() || {
    bottom: window.innerHeight,
    left: 0,
    right: window.innerWidth,
    top: 0
  };
  const bounds = {
    bottom: Math.min(window.innerHeight - 8, hostRect.bottom - 8),
    left: Math.max(8, hostRect.left + 8),
    right: Math.min(window.innerWidth - 8, hostRect.right - 8),
    top: Math.max(8, hostRect.top + 8)
  };
  const maxHeight = Math.min(options.maxHeight || 320, Math.max(options.minHeight || 150, bounds.bottom - bounds.top));
  menu.style.maxHeight = `${maxHeight}px`;
  const menuRect = menu.getBoundingClientRect();
  const left = Math.max(bounds.left, Math.min(event.clientX, bounds.right - menuRect.width));
  const top = Math.max(bounds.top, Math.min(event.clientY, bounds.bottom - menuRect.height));
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
}

async function editSelectedRichBlock(editor) {
  const block = selectedRichBlock(editor);
  if (!block) return;
  selectRichBlock(block);
  if (block.dataset.type === "image") {
    const updated = await openSummaryImageDialog(block);
    if (updated) refreshRichImageBlock(block, updated);
    return;
  }
  if (block.dataset.type === "formula") {
    const updated = await openSummaryFormulaDialog(block);
    if (updated) refreshRichFormulaBlock(block, updated);
    return;
  }
  if (block.dataset.type === "code") {
    const updated = await openSummaryCodeDialog(block);
    if (updated) refreshRichCodeBlock(block, updated);
    return;
  }
  if (block.dataset.type === "paragraph") {
    focusTextBlock(block);
    setStatus("Text block selected. Type directly in the block to edit it.");
  }
}

async function copyRichCodeBlock(block) {
  if (!block || block.dataset.type !== "code") return false;
  const code = block.dataset.code || block.querySelector("code")?.textContent || "";
  if (!code) return false;
  await navigator.clipboard.writeText(code);
  setStatus("Code copied to clipboard.");
  return true;
}

function removeRichBlock(block, editor) {
  if (!block) return;
  const nextFocus = block.previousElementSibling?.matches(".rich-text-block")
    ? block.previousElementSibling
    : block.nextElementSibling?.matches(".rich-text-block")
      ? block.nextElementSibling
      : null;
  block.remove();
  activeSummaryBlock = null;
  if (!editor.querySelector(".rich-block")) editor.append(createRichTextBlock(""));
  focusTextBlock(nextFocus || editor.querySelector(".rich-text-block"));
}

function deleteSelectedRichBlock(editor) {
  const block = selectedRichBlock(editor);
  if (!block) return;
  const label = block.dataset.type === "image"
    ? "this overview image"
    : block.dataset.type === "formula"
      ? "this formula"
      : block.dataset.type === "code"
        ? "this code block"
        : "this text block";
  openDeleteConfirm({
    title: "Delete overview block",
    message: `Are you sure you want to delete ${label}?`,
    onConfirm: () => removeRichBlock(block, editor)
  });
}

function deleteProjectSummary(project) {
  if (!project) return;
  openDeleteConfirm({
    title: "Delete project overview",
    message: "Are you sure you want to delete the current project overview?",
    onConfirm: () => {
      project.summary = "";
      project.summaryRich = null;
      summaryEditorProjectId = "";
      activeSummaryEditor = null;
      activeSummaryBlock = null;
      setStatus("Project overview deleted in the editor. Click Save project to update the portfolio preview.");
      scheduleAutosave();
      renderAll();
    }
  });
}

async function saveRichSummary() {
  const project = selectedProject();
  const editor = projectFields.querySelector("[data-rich-editor='summary']");
  if (!project || !editor) return true;
  const rich = extractRichSummary(editor);
  const plain = plainTextFromRich(rich);
  if (wordCount(plain) > 1000) {
    setStatus("Project overview is limited to 1000 words. Shorten the text before saving.");
    return false;
  }
  project.summaryRich = rich;
  project.summary = plain;
  summaryEditorProjectId = "";
  activeSummaryEditor = null;
  activeSummaryBlock = null;
  setStatus("Overview saved in the editor. Click Save project to include this version in the portfolio preview.");
  scheduleAutosave();
  renderAll();
  return true;
}

function renderFields(project) {
  if (!project) {
    projectFields.hidden = false;
    projectFields.innerHTML = `<p class="evidence-empty">Add or select a project to begin editing.</p>`;
    return;
  }

  projectFields.hidden = activeSectionId !== "brief";
  projectWindowTitle.textContent = project.title;
  projectFields.innerHTML = `
    ${renderSummaryBuilder(project)}
  `;
  if (summaryEditorProjectId === project.id) {
    requestAnimationFrame(() => populateSummaryEditor(project));
  }
}

function sectionOptions(project) {
  const custom = (project.sections || [])
    .filter((section) => !isCompileCodeBuilderSection(section))
    .map((section) => ({
      id: `custom:${section.id}`,
      label: section.title,
      folder: section.id
    }));
  return [
    ...standardSections.filter((section) => !section.analogOnly || isAnalogProject(project)),
    ...custom
  ];
}

function ensureSiteSections() {
  catalog.siteSections = catalog.siteSections || [];
  savedPortfolioCatalog.siteSections = savedPortfolioCatalog.siteSections || clone(catalog.siteSections || []);
}

function siteSectionHasContent(section) {
  return Boolean(
    section?.description ||
    richHasContent(section?.richDescription) ||
    section?.backgroundImage ||
    (section?.links || []).some((link) => link.label || link.url) ||
    (section?.assets || []).some((asset) => asset.title || asset.url) ||
    (section?.subsections || []).some((item) => item.title || item.description || richHasContent(item.richDescription) || (item.links || []).length)
  );
}

function siteSectionRenderable(section) {
  return section?.visible !== false && siteSectionHasContent(section);
}

function siteSectionLinkCount(section) {
  return [
    ...(section.links || []),
    ...(section.assets || []),
    ...(section.subsections || []).flatMap((item) => item.links || [])
  ].filter((item) => item.label || item.url).length;
}

function renderSiteSectionList() {
  ensureSiteSections();
  const sections = catalog.siteSections || [];
  siteSectionList.innerHTML = sections.length ? sections.map((section) => `
    <article class="site-section-item ${section.visible === false ? "is-hidden-section" : ""}" style="${section.backgroundImage ? `--site-section-bg: url('${section.backgroundImage}')` : ""}">
      <div>
        <strong>${section.title || "Untitled section"}</strong>
        <span>${section.visible === false ? "Hidden from website" : "Visible on website"} · ${(section.subsections || []).length} subsection${(section.subsections || []).length === 1 ? "" : "s"} · ${siteSectionLinkCount(section)} link${siteSectionLinkCount(section) === 1 ? "" : "s"}</span>
        ${section.description || richHasContent(section.richDescription) ? renderRichContent(section.richDescription, section.description || "") : ""}
      </div>
      ${(section.subsections || []).length ? `
        <div class="site-subsection-list">
          ${(section.subsections || []).map((item, index) => `
            <article class="site-subsection-item">
              <div>
                <strong>${item.title || "Untitled subsection"}</strong>
                ${item.description || richHasContent(item.richDescription) ? renderRichContent(item.richDescription, item.description || "") : ""}
              </div>
              <div class="site-section-actions">
                <button type="button" data-site-subsection-edit="${section.id}" data-index="${index}">Edit</button>
                <button class="danger-icon" type="button" data-site-subsection-delete="${section.id}" data-index="${index}">Delete</button>
              </div>
            </article>
          `).join("")}
        </div>
      ` : ""}
      ${(section.links || []).length ? `
        <div class="site-link-list">
          ${(section.links || []).map((link, index) => `
            <span>
              ${link.label || "Untitled link"}
              <button type="button" data-site-link-edit="${section.id}" data-index="${index}">Edit</button>
              <button type="button" data-site-link-delete="${section.id}" data-index="${index}">Delete</button>
            </span>
          `).join("")}
        </div>
      ` : ""}
      <div class="site-section-actions">
        <button type="button" data-site-section-toggle="${section.id}">${section.visible === false ? "Show" : "Hide"}</button>
        <button type="button" data-site-section-edit="${section.id}">Edit</button>
        <button type="button" data-site-subsection-add="${section.id}">Add subsection</button>
        <button type="button" data-site-link-add="${section.id}">Add link</button>
        <button type="button" data-site-section-bg="${section.id}">Background</button>
        ${section.backgroundImage ? `<button type="button" data-site-section-bg-clear="${section.id}">Clear bg</button>` : ""}
        <button class="danger-icon" type="button" data-site-section-delete="${section.id}">Delete</button>
      </div>
    </article>
  `).join("") : `<p class="evidence-empty">No extra portfolio areas added yet.</p>`;
}

async function siteSectionDialogValue(section = {}) {
  sectionDialogTitle.textContent = section.id ? "Edit section" : "Create section";
  sectionTitle.placeholder = "Professional profile, Personal background, Sports...";
  sectionDescription.dataset.placeholder = "Short section overview shown on the website";
  sectionDescription.dataset.richFolder = section.id || "new-portfolio-section";
  sectionDescription.dataset.richProjectId = "_site-sections";
  sectionTitle.value = section.title || "";
  populateStandaloneRichEditor(sectionDescription, section.richDescription, section.description || "");
  const saved = await dialogValue(sectionDialog);
  if (!saved) return null;
  const title = sectionTitle.value.trim();
  if (!title) {
    setStatus("Type a section title before saving.");
    return null;
  }
  const richDescription = extractRichSummary(sectionDescription);
  return {
    description: plainTextFromRich(richDescription, "\n").trim(),
    id: section.id || slugify(title),
    richDescription,
    title
  };
}

async function siteSubsectionDialogValue(subsection = {}) {
  sectionDialogTitle.textContent = subsection.id ? "Edit subsection" : "Create subsection";
  sectionTitle.placeholder = "Sports, Hobbies, Resume links, Origin...";
  sectionDescription.dataset.placeholder = "Short subsection text shown inside the portfolio area";
  sectionDescription.dataset.richFolder = subsection.id || "new-portfolio-subsection";
  sectionDescription.dataset.richProjectId = "_site-sections";
  sectionTitle.value = subsection.title || "";
  populateStandaloneRichEditor(sectionDescription, subsection.richDescription, subsection.description || "");
  const saved = await dialogValue(sectionDialog);
  if (!saved) return null;
  const title = sectionTitle.value.trim();
  if (!title) {
    setStatus("Type a subsection title before saving.");
    return null;
  }
  const richDescription = extractRichSummary(sectionDescription);
  return {
    description: plainTextFromRich(richDescription, "\n").trim(),
    id: subsection.id || slugify(title),
    links: subsection.links || [],
    richDescription,
    title
  };
}

function dialogLinkValue(link = {}) {
  return new Promise((resolve) => {
    siteLinkEyebrow.textContent = link.url ? "Edit portfolio link" : "Add portfolio link";
    siteLinkTitle.textContent = link.url ? "Edit link" : "Add link";
    siteLinkLabel.value = link.label || "";
    siteLinkUrl.value = link.url || "";
    const onClose = () => {
      siteLinkDialog.removeEventListener("close", onClose);
      if (siteLinkDialog.returnValue !== "save") {
        resolve(null);
        return;
      }
      const label = siteLinkLabel.value.trim();
      const url = siteLinkUrl.value.trim();
      if (!label || !url) {
        setStatus("Type both a link label and URL before saving.");
        resolve(null);
        return;
      }
      resolve({ ...link, label, url: normalizeLinkTarget(url, { assumeWeb: true }) });
    };
    siteLinkDialog.addEventListener("close", onClose);
    siteLinkDialog.showModal();
  });
}

async function addSiteSection() {
  ensureSiteSections();
  const input = await siteSectionDialogValue();
  if (!input) return;
  const id = input.id || slugify(input.title);
  catalog.siteSections.push({
    id,
    title: input.title,
    description: input.description,
    richDescription: input.richDescription,
    visible: false,
    backgroundImage: "",
    links: [],
    assets: [],
    subsections: []
  });
  markDraftNeedsSave();
  setStatus("Portfolio area added locally.");
  scheduleAutosave();
  renderAll();
}

async function editSiteSection(sectionId) {
  ensureSiteSections();
  const section = catalog.siteSections.find((item) => item.id === sectionId);
  if (!section) return;
  const input = await siteSectionDialogValue(section);
  if (!input) return;
  section.title = input.title;
  section.description = input.description;
  section.richDescription = input.richDescription;
  markDraftNeedsSave();
  setStatus("Portfolio area edited locally.");
  scheduleAutosave();
  renderAll();
}

async function addSiteSubsection(sectionId) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  if (!section) return;
  const input = await siteSubsectionDialogValue();
  if (!input) return;
  section.subsections = section.subsections || [];
  section.subsections.push(input);
  markDraftNeedsSave();
  setStatus("Portfolio subsection added locally.");
  scheduleAutosave();
  renderAll();
}

async function editSiteSubsection(sectionId, index) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  const subsection = section?.subsections?.[Number(index)];
  if (!section || !subsection) return;
  const input = await siteSubsectionDialogValue(subsection);
  if (!input) return;
  section.subsections[Number(index)] = input;
  markDraftNeedsSave();
  setStatus("Portfolio subsection edited locally.");
  scheduleAutosave();
  renderAll();
}

function deleteSiteSubsection(sectionId, index) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  const subsection = section?.subsections?.[Number(index)];
  if (!section || !subsection) return;
  openDeleteConfirm({
    title: "Delete subsection",
    message: `Are you sure you want to delete "${subsection.title}"?`,
    onConfirm: () => {
      section.subsections.splice(Number(index), 1);
      markDraftNeedsSave();
      scheduleAutosave();
      renderAll();
    }
  });
}

async function addSiteSectionLink(sectionId) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  if (!section) return;
  const input = await dialogLinkValue();
  if (!input) return;
  section.links = section.links || [];
  section.links.push(input);
  markDraftNeedsSave();
  setStatus("Portfolio link added locally.");
  scheduleAutosave();
  renderAll();
}

async function editSiteSectionLink(sectionId, index) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  const link = section?.links?.[Number(index)];
  if (!section || !link) return;
  const input = await dialogLinkValue(link);
  if (!input) return;
  section.links[Number(index)] = input;
  markDraftNeedsSave();
  setStatus("Portfolio link edited locally.");
  scheduleAutosave();
  renderAll();
}

function deleteSiteSectionLink(sectionId, index) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  if (!section?.links?.[Number(index)]) return;
  section.links.splice(Number(index), 1);
  markDraftNeedsSave();
  setStatus("Portfolio link deleted locally.");
  scheduleAutosave();
  renderAll();
}

function toggleSiteSectionVisibility(sectionId) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  if (!section) return;
  section.visible = section.visible === false;
  markDraftNeedsSave();
  setStatus(section.visible ? "Portfolio area will show on the website preview." : "Portfolio area hidden from the website preview.");
  scheduleAutosave();
  renderAll();
}

function deleteSiteSection(sectionId) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  if (!section) return;
  openDeleteConfirm({
    title: "Delete portfolio area",
    message: `Are you sure you want to delete "${section.title}"?`,
    onConfirm: () => {
      catalog.siteSections = (catalog.siteSections || []).filter((item) => item.id !== sectionId);
      savedPortfolioCatalog.siteSections = (savedPortfolioCatalog.siteSections || []).filter((item) => item.id !== sectionId);
      markDraftNeedsSave();
      scheduleAutosave();
      renderAll();
    }
  });
}

async function setSiteSectionBackground(sectionId) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  if (!section) return;
  const file = await chooseFile();
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    setStatus("Choose an image file for a section background.");
    return;
  }
  const data = await readFileAsDataUrl(file);
  const response = await fetch(`/api/upload?t=${Date.now()}`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      projectId: "_site-sections",
      section: section.id,
      fileName: file.name,
      data
    })
  });
  const result = await response.json();
  if (!response.ok) {
    setStatus(result.error || "Background upload failed.");
    return;
  }
  section.backgroundImage = result.url;
  markDraftNeedsSave();
  setStatus("Portfolio area background saved locally.");
  scheduleAutosave();
  renderAll();
}

function clearSiteSectionBackground(sectionId) {
  const section = (catalog.siteSections || []).find((item) => item.id === sectionId);
  if (!section) return;
  section.backgroundImage = "";
  markDraftNeedsSave();
  setStatus("Portfolio area background cleared locally.");
  scheduleAutosave();
  renderAll();
}

function renderSectionTabs(project) {
  if (!project) {
    sectionTabs.innerHTML = "";
    if (projectViewTabsBar) {
      projectViewTabsBar.innerHTML = "";
      projectViewTabsBar.hidden = true;
    }
    return;
  }

  const rows = sectionOptions(project).map((section) => {
    return `
      <div class="project-section-row ${section.id === activeSectionId ? "active" : ""}" role="listitem">
        <button class="project-section-select" type="button" data-section-id="${escapeHtml(section.id)}">
          ${escapeHtml(section.label || "Untitled section")}
        </button>
      </div>
    `;
  }).join("");

  sectionTabs.innerHTML = `
    <div class="project-section-row-strip">
      <div class="project-section-list" role="list">
        ${rows}
        <button type="button" data-add-section="true">Add section</button>
      </div>
      ${renderActiveSectionToolbar(project)}
    </div>
    ${renderActiveSubsectionStrip(project)}
  `;
}

function renderActiveSubsectionStrip(project) {
  if (!project || !String(activeSectionId || "").startsWith("custom:")) return "";
  const sectionId = activeSectionId.slice("custom:".length);
  const section = (project.sections || []).find((item) => item.id === sectionId);
  if (!section) return "";
  normalizeBuilderSectionStorage(section);
  const currentPath = activeCustomSectionPath(sectionId);
  const currentNode = currentPath.length ? findBuilderNode(section, currentPath) : section;
  if (!currentNode) return "";
  const currentChildren = currentPath.length ? builderNodeChildren(currentNode) : sectionRootChildren(section);
  return renderNestedSectionNav(section, currentChildren, currentPath, "section-bar-subsections");
}

function renderActiveSectionToolbar(project) {
  if (!project || !String(activeSectionId || "").startsWith("custom:")) return "";
  const sectionId = activeSectionId.slice("custom:".length);
  const section = (project.sections || []).find((item) => item.id === sectionId);
  if (!section || isCompileCodeBuilderSection(section)) return "";
  normalizeBuilderSectionStorage(section);
  const currentPath = activeCustomSectionPath(sectionId);
  const currentNode = currentPath.length ? findBuilderNode(section, currentPath) : section;
  if (currentPath.length && !currentNode) return "";
  const pathValue = customViewPathValue(currentPath);
  const editButton = currentPath.length
    ? `<button type="button" data-open-editor="custom" data-mode="edit" data-section-id="${escapeHtml(section.id)}" data-node-path="${escapeHtml(pathValue)}">Edit current</button>`
    : `<button type="button" data-open-editor="custom-section" data-section-id="${escapeHtml(section.id)}">Edit section</button>`;
  const deleteButton = currentPath.length
    ? `<button class="danger-icon" type="button" data-delete-node="${escapeHtml(section.id)}" data-node-path="${escapeHtml(pathValue)}">Delete subsection</button>`
    : `<button class="danger-icon" type="button" data-delete-section="${escapeHtml(section.id)}">Delete section</button>`;

  return `
    <div class="project-section-toolbar" aria-label="Current section actions">
      <button class="button primary" type="button" data-add-node-subsection="${escapeHtml(section.id)}" data-node-path="${escapeHtml(pathValue)}">Add subsection</button>
      <button class="button secondary" type="button" data-upload-node="${escapeHtml(section.id)}" data-node-path="${escapeHtml(pathValue)}">Add file or image</button>
      ${editButton}
      ${deleteButton}
    </div>
  `;
}

function renderProjectViewTabs(project) {
  if (!projectViewTabsBar) return;
  if (!project) {
    projectViewTabsBar.innerHTML = "";
    projectViewTabsBar.hidden = true;
    return;
  }
  syncActiveProjectViewTabFromState();
  if (projectViewTabs.length <= 1) {
    projectViewTabsBar.innerHTML = "";
    projectViewTabsBar.hidden = true;
    return;
  }
  projectViewTabsBar.hidden = false;
  projectViewTabsBar.innerHTML = `
    <div class="project-view-tab-list" role="tablist" aria-label="Open project views">
      ${projectViewTabs.map((tab) => `
        <span class="project-view-tab-item${tab.id === activeProjectViewTabId ? " is-active" : ""}">
          <button
            class="project-view-tab${tab.id === activeProjectViewTabId ? " is-active" : ""}"
            type="button"
            role="tab"
            aria-selected="${tab.id === activeProjectViewTabId ? "true" : "false"}"
            data-project-view-tab="${escapeHtml(tab.id)}"
            title="${escapeHtml(tab.title || "Project view")}"
          >
            <span>${escapeHtml(tab.title || "Project view")}</span>
          </button>
          <button
            class="project-view-tab-close"
            type="button"
            data-close-project-view-tab="${escapeHtml(tab.id)}"
            aria-label="Close ${escapeHtml(tab.title || "project view")} tab"
          >&times;</button>
        </span>
      `).join("")}
    </div>
    <span class="project-view-tab-count">${projectViewTabs.length}/4</span>
  `;
}

function hideProjectViewContextMenu() {
  if (projectViewContextMenu) projectViewContextMenu.hidden = true;
  pendingProjectViewContext = null;
}

function showProjectViewContextMenu(event, context = {}) {
  if (!projectViewContextMenu || !context.stateKey) return;
  event.preventDefault();
  pendingProjectViewContext = context;
  const isNestedNode = context.kind === "node" && context.sectionId && context.nodePath;
  projectViewContextMenu.querySelectorAll("[data-project-view-node-action]").forEach((button) => {
    button.hidden = !isNestedNode;
  });
  projectViewContextMenu.hidden = false;
  const width = 190;
  const height = isNestedNode ? 152 : 92;
  projectViewContextMenu.style.left = `${Math.min(event.clientX, window.innerWidth - width - 8)}px`;
  projectViewContextMenu.style.top = `${Math.min(event.clientY, window.innerHeight - height - 8)}px`;
}

function renderTextArray(project, key, label) {
  const items = project[key] || [];
  return `
    <div class="section-actions">
      <button class="button primary" type="button" data-open-editor="text-array" data-key="${key}" data-mode="add">Add ${label}</button>
    </div>
    <div class="builder-items">
      ${items.map((item, index) => `
        <article class="builder-item">
          <div>
            <strong>${typeof item === "string" ? item : item.title || item.name || item.label || ""}</strong>
          </div>
          <button type="button" data-open-editor="text-array" data-key="${key}" data-mode="edit" data-index="${index}">Edit</button>
          <button class="danger-icon" type="button" data-delete-array="${key}" data-index="${index}">Delete</button>
        </article>
      `).join("") || `<p class="evidence-empty">No ${label.toLowerCase()} added yet.</p>`}
    </div>
  `;
}

function toolName(item) {
  return typeof item === "string" ? item : item.name || item.title || item.label || "";
}

function toolDescription(item) {
  return typeof item === "string" ? "" : item.description || item.usedFor || "";
}

function renderToolsSection(project) {
  const items = project.tools || [];
  return `
    <div class="section-actions">
      <button class="button primary" type="button" data-open-editor="tool" data-mode="add">Add tool</button>
    </div>
    <div class="builder-items tool-items">
      ${items.map((item, index) => `
        <article class="builder-item tool-item">
          <div>
            <strong>${toolName(item) || "Untitled tool"}</strong>
          </div>
          ${richHasContent(item?.richDescription)
            ? renderRichContent(item.richDescription, toolDescription(item))
            : `<p>${toolDescription(item) || "No usage description added yet."}</p>`}
          <button type="button" data-open-editor="tool" data-mode="edit" data-index="${index}">Edit</button>
          <button class="danger-icon" type="button" data-delete-array="tools" data-index="${index}">Delete</button>
        </article>
      `).join("") || `<p class="evidence-empty">No tools added yet.</p>`}
    </div>
  `;
}

function renderObjectSection(project, key, folder, label) {
  const items = project[key] || [];
  return `
    <div class="section-actions">
      <button class="button primary" type="button" data-open-editor="object" data-key="${key}" data-mode="add">Add text item</button>
      ${folder ? `<button class="button secondary" type="button" data-upload="${key}" data-folder="${folder}">Add file or image</button>` : ""}
    </div>
    <div class="builder-items">
      ${items.map((item, index) => {
        const title = item.title || item.name || item.label || "Untitled item";
        const url = item.url || item.artifact || "";
        const description = item.description || item.caption || item.result || item.method || "";
        return `
          <article class="builder-item">
            <div>
              <strong>${title}</strong>
              <span>${url || "No file attached"}</span>
              ${richHasContent(item.richDescription)
                ? renderRichContent(item.richDescription, description)
                : description ? `<p>${renderMultilineInlineText(description)}</p>` : ""}
            </div>
            <button type="button" data-open-editor="object" data-key="${key}" data-mode="edit" data-index="${index}">Edit</button>
            <button class="danger-icon" type="button" data-delete-item="${key}" data-index="${index}">Delete</button>
          </article>
        `;
      }).join("") || `<p class="evidence-empty">No ${label.toLowerCase()} added yet.</p>`}
    </div>
  `;
}

function designArray(project, pathValue) {
  ensureDesignModel(project);
  const items = getByPath(project, pathValue);
  if (Array.isArray(items)) return items;
  setByPath(project, pathValue, []);
  return getByPath(project, pathValue);
}

function makeDesignItem(kind, title, description = "", url = "") {
  if (kind === "reference") return { title, description, url, type: "Reference", status: url ? "linked" : "draft" };
  if (kind === "analysis") return { title, description, type: "Math / Analysis", status: "draft" };
  if (kind === "simulation-file") return { title, description, url, type: "Simulation file", status: url ? "uploaded" : "draft" };
  if (kind === "simulation-result") return { title, description, url, type: "Simulation result", status: url ? "uploaded" : "draft" };
  return { title, description, url, type: "Document", status: url ? "uploaded" : "draft" };
}

function renderDesignObjectSection(project, pathValue, folder, label, kind = "document") {
  const items = designArray(project, pathValue);
  return `
    <div class="section-actions">
      <button class="button primary" type="button" data-open-editor="design-object" data-design-path="${pathValue}" data-design-kind="${kind}" data-mode="add">Add ${label}</button>
      ${folder ? `<button class="button secondary" type="button" data-upload-design="${pathValue}" data-folder="${folder}" data-design-kind="${kind}">Add file</button>` : ""}
    </div>
    <div class="builder-items">
      ${items.map((item, index) => {
        const title = item.title || item.name || item.label || "Untitled item";
        const url = item.url || item.artifact || "";
        const description = item.description || item.caption || item.result || item.method || "";
        return `
          <article class="builder-item">
            <div>
              <strong>${title}</strong>
              <span>${url || "No file attached"}</span>
              ${richHasContent(item.richDescription)
                ? renderRichContent(item.richDescription, description)
                : description ? `<p>${renderMultilineInlineText(description)}</p>` : ""}
            </div>
            <button type="button" data-open-editor="design-object" data-design-path="${pathValue}" data-design-kind="${kind}" data-mode="edit" data-index="${index}">Edit</button>
            <button class="danger-icon" type="button" data-delete-design-item="${pathValue}" data-index="${index}">Delete</button>
          </article>
        `;
      }).join("") || `<p class="evidence-empty">No ${label.toLowerCase()} added yet.</p>`}
    </div>
  `;
}

function renderDesignSummaryField(project, pathValue, label, placeholder) {
    const textValue = getByPath(project, pathValue) || "";
    const richPath = summaryRichPathFromTextPath(pathValue);
    const richValue = getByPath(project, richPath);
    const hasValue = Boolean(textValue || richValue?.blocks?.length);

    return `
    <div class="wide-field design-summary-field rich-design-summary-field">
      <div class="summary-builder-heading">
        <span>
          ${label}
          ${hasValue ? `<button class="inline-danger-button" type="button" data-clear-design-summary="${pathValue}">Clear overview</button>` : ""}
        </span>
      </div>

      <div class="rich-summary-panel">
        <p class="rich-editor-hint">Right-click to add images, code blocks, apply bold, color, font, numeric size, alignment, or formulas.</p>

        <div
          class="rich-summary-editor"
          data-rich-editor="section-overview"
          data-rich-text-path="${escapeHtml(pathValue)}"
          data-rich-path="${escapeHtml(richPath)}"
          data-rich-folder="${escapeHtml(overviewFolderFromPath(pathValue))}"
          data-placeholder="${escapeHtml(placeholder || "")}"
          contenteditable="true"
          spellcheck="true"
          aria-label="${escapeHtml(label)} rich editor"
        ></div>
      </div>
    </div>
  `;
}

function designPathHasContent(project, pathValue) {
  const value = getByPath(project, pathValue);
  if (Array.isArray(value)) return value.some((item) => itemTitle(item) || item?.description || item?.url || item?.artifact || richHasContent(item?.richDescription));
  return Boolean(value || richHasContent(getByPath(project, summaryRichPathFromTextPath(pathValue))));
}

function renderEmptyDynamicSectionPrompt(label = "section") {
  return `
    <div class="compile-code-empty">
      <h3>No ${escapeHtml(label)} content added yet</h3>
      <p>Create your own sections and subsections with the Add section button. Empty predefined groups stay hidden so the project structure is controlled by you.</p>
      <div class="section-actions">
        <button class="button primary" type="button" data-add-section="true">Add section</button>
      </div>
    </div>
  `;
}

function renderAnalogDesignWorkspace(project) {
  ensureDesignModel(project);
  const cards = [];
  if (designPathHasContent(project, "design.brief.summary") || designPathHasContent(project, "design.brief.files")) {
    cards.push(`
      <section class="design-workspace-card">
        <h3>Design Overview</h3>
        ${renderDesignSummaryField(project, "design.brief.summary", "Design overview", "State the analog design objective, topology, constraints, and design decisions.")}
        ${renderDesignObjectSection(project, "design.brief.files", "design-brief", "brief file", "document")}
      </section>
    `);
  }
  if (
    designPathHasContent(project, "design.documentation.summary") ||
    designPathHasContent(project, "design.documentation.files") ||
    designPathHasContent(project, "design.documentation.references") ||
    designPathHasContent(project, "design.documentation.mathAnalysis")
  ) {
    cards.push(`
      <section class="design-workspace-card">
        <h3>Documentation</h3>
        ${renderDesignSummaryField(project, "design.documentation.summary", "Documentation overview", "Summarize schematics, notes, datasheets, calculations, and supporting documents.")}
        ${renderDesignObjectSection(project, "design.documentation.files", "documentation", "document", "document")}
        ${designPathHasContent(project, "design.documentation.references") ? `<h4>References</h4>${renderDesignObjectSection(project, "design.documentation.references", "", "reference", "reference")}` : ""}
        ${designPathHasContent(project, "design.documentation.mathAnalysis") ? `<h4>Math / Analysis</h4>${renderDesignObjectSection(project, "design.documentation.mathAnalysis", "", "analysis item", "analysis")}` : ""}
      </section>
    `);
  }
  if ((project.pcbs || []).length || (project.media || []).length) {
    cards.push(`
      <section class="design-workspace-card">
        <h3>PCB and Visual Evidence</h3>
        ${(project.pcbs || []).length ? renderObjectSection(project, "pcbs", "pcbs", "PCBs") : ""}
        ${(project.media || []).length ? renderObjectSection(project, "media", "images", "Images") : ""}
      </section>
    `);
  }
  return `
    <div class="section-stack analog-design-workspace">
      ${cards.join("") || renderEmptyDynamicSectionPrompt("design")}
      ${renderPendingEditor()}
    </div>
  `;
}

function renderAnalogSimulationWorkspace(project) {
  ensureDesignModel(project);
  const cards = [];
  if (designPathHasContent(project, "design.simulation.summary")) {
    cards.push(`
      <section class="design-workspace-card">
        <h3>Simulation Overview</h3>
        ${renderDesignSummaryField(project, "design.simulation.summary", "Simulation overview", "Explain what was simulated, why it mattered, and what the results proved.")}
      </section>
    `);
  }
  if (designPathHasContent(project, "design.simulation.files")) {
    cards.push(`
      <section class="design-workspace-card">
        <h3>Simulation Files</h3>
        ${renderDesignObjectSection(project, "design.simulation.files", "simulations", "simulation file", "simulation-file")}
      </section>
    `);
  }
  if (designPathHasContent(project, "design.simulation.results")) {
    cards.push(`
      <section class="design-workspace-card">
        <h3>Simulation Results</h3>
        ${renderDesignObjectSection(project, "design.simulation.results", "simulation-results", "simulation result", "simulation-result")}
      </section>
    `);
  }
  return `
    <div class="section-stack analog-design-workspace">
      ${cards.join("") || renderEmptyDynamicSectionPrompt("simulation")}
      ${renderPendingEditor()}
    </div>
  `;
}

function pendingEditorUsesRichDescription(editor = pendingEditor) {
  return Boolean(editor && editor.type !== "text-array");
}

function pendingEditorFolder(editor = pendingEditor) {
  if (!editor) return "content";
  if (editor.type === "custom-section") return `custom-${slugify(editor.sectionId || "section")}-overview`;
  if (editor.type === "custom") return `custom-${slugify(editor.sectionId || "section")}-${slugify(editor.nodePath || editor.parentPath || "subsection")}`;
  if (editor.type === "design-object") return `design-${slugify(editor.kind || "content")}`;
  if (editor.type === "object") return slugify(editor.key || "content");
  return slugify(editor.type || "content");
}

function renderPendingRichDescriptionEditor(editor = pendingEditor) {
  const label = editor?.type === "tool"
    ? "What it was used for"
    : editor?.type === "custom-section"
      ? "Section content"
      : "Content";
  return `
    <div class="pending-rich-description rich-design-summary-field">
      <div class="summary-builder-heading"><span>${escapeHtml(label)}</span></div>
      <div class="rich-summary-panel">
        <p class="rich-editor-hint">Right-click to add images, code blocks, apply bold, color, font, numeric size, alignment, or formulas.</p>
        <div
          class="rich-summary-editor"
          data-rich-editor="pending-description"
          data-rich-folder="${escapeHtml(pendingEditorFolder(editor))}"
          data-placeholder="Type or paste the complete content here."
          contenteditable="true"
          spellcheck="true"
          aria-label="${escapeHtml(label)} rich editor"
        ></div>
      </div>
    </div>
  `;
}

function renderPendingEditor() {
  if (!pendingEditor) return "";
  const title = pendingEditor.title || "";
  const isTool = pendingEditor.type === "tool";
  const isSimpleText = pendingEditor.type === "text-array";
  const isSectionDetails = pendingEditor.type === "custom-section";
  return `
    <form class="pending-editor" id="pending-editor">
      <div>
        <h3>${pendingEditor.mode === "edit" ? "Edit" : "Add"} ${isTool ? "tool" : isSimpleText ? "item" : isSectionDetails ? "section" : "subsection"}</h3>
      </div>
      <div class="${isTool ? "tool-editor-grid" : "pending-editor-grid"}">
        <label>
          <span>${isTool ? "Tool name" : "Title"}</span>
          <input name="title" type="text" value="${title}" required>
        </label>
        ${isSimpleText ? "" : renderPendingRichDescriptionEditor(pendingEditor)}
      </div>
      <div class="pending-editor-actions">
        <button class="button primary" type="submit">Save</button>
        <button class="button secondary" type="button" data-cancel-pending="true">Cancel</button>
      </div>
    </form>
  `;
}

function openPendingEditor(config) {
  pendingEditor = config;
  renderSectionContent(selectedProject());
  requestAnimationFrame(() => {
    populateRichEditors(sectionContent);
    document.querySelector("#pending-editor")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function savePendingEditor(form) {
  const project = selectedProject();
  if (!project || !pendingEditor) return;
  const title = form.elements.title.value.trim();
  const richEditor = form.querySelector("[data-rich-editor='pending-description']");
  const richDescription = richEditor ? extractRichSummary(richEditor) : null;
  const description = richEditor ? plainTextFromRich(richDescription) : "";
  if (!title) {
    setStatus("Type a title before saving.");
    return;
  }

  if (pendingEditor.type === "tool") {
    project.tools = project.tools || [];
    const nextTool = { name: title, description, richDescription };
    if (pendingEditor.mode === "edit") {
      project.tools[Number(pendingEditor.index)] = nextTool;
    } else {
      project.tools.push(nextTool);
    }
  }

  if (pendingEditor.type === "object") {
    const key = pendingEditor.key;
    project[key] = project[key] || [];
    if (pendingEditor.mode === "edit") {
      const existing = project[key][Number(pendingEditor.index)] || {};
      const existingUrl = existing.url || existing.artifact || "";
      const nextItem = makeItemForSection(key, title, description, existingUrl);
      project[key][Number(pendingEditor.index)] = { ...existing, ...nextItem, richDescription };
    } else {
      const nextItem = makeItemForSection(key, title, description);
      project[key].push({ ...nextItem, richDescription });
    }
  }

  if (pendingEditor.type === "design-object") {
    const items = designArray(project, pendingEditor.path);
    const kind = pendingEditor.kind || "document";
    if (pendingEditor.mode === "edit") {
      const existing = items[Number(pendingEditor.index)] || {};
      const existingUrl = existing.url || existing.artifact || "";
      items[Number(pendingEditor.index)] = { ...existing, ...makeDesignItem(kind, title, description, existingUrl), richDescription };
    } else {
      items.push({ ...makeDesignItem(kind, title, description), richDescription });
    }
  }

  if (pendingEditor.type === "text-array") {
    const key = pendingEditor.key;
    project[key] = project[key] || [];
    if (pendingEditor.mode === "edit") {
      project[key][Number(pendingEditor.index)] = title;
    } else {
      project[key].push(title);
    }
  }

  if (pendingEditor.type === "custom") {
    const section = (project.sections || []).find((item) => item.id === pendingEditor.sectionId);
    if (!section) return;
    const nextItem = { title, description, richDescription, type: "Text", status: "draft" };
    if (pendingEditor.mode === "edit") {
      const path = nodePathFromString(pendingEditor.nodePath || pendingEditor.index || "");
      const parent = findBuilderNodeParent(section, path);
      const existing = parent.children[parent.index] || {};
      parent.children[parent.index] = { ...existing, ...nextItem };
    } else {
      const parentPath = nodePathFromString(pendingEditor.parentPath || "");
      const parentNode = parentPath.length ? findBuilderNode(section, parentPath) : null;
      const children = parentNode ? builderNodeChildren(parentNode) : sectionRootChildren(section);
      const nextPath = [...parentPath, children.length];
      children.push({
        id: slugify(`${title}-${Date.now()}`),
        ...nextItem,
        children: []
      });
      setActiveCustomSectionPath(section.id, nextPath);
    }
  }

  if (pendingEditor.type === "custom-section") {
    const section = (project.sections || []).find((item) => item.id === pendingEditor.sectionId);
    if (!section) return;
    section.title = title;
    section.description = description;
    section.richDescription = richDescription;
  }

  pendingEditor = null;
  setStatus("Saved in the project editor. Click Save project to include this version in the portfolio preview.");
  scheduleAutosave();
  renderAll();
}

function openEditorFromButton(button) {
  const project = selectedProject();
  if (!project) return;
  const type = button.dataset.openEditor;
  const mode = button.dataset.mode || "add";
  const index = button.dataset.index;

  if (type === "tool") {
    const item = mode === "edit" ? project.tools?.[Number(index)] : {};
    openPendingEditor({
      type,
      mode,
      index,
      title: toolName(item),
      description: toolDescription(item),
      richDescription: item?.richDescription || null
    });
    return;
  }

  if (type === "object") {
    const key = button.dataset.key;
    const item = mode === "edit" ? project[key]?.[Number(index)] : {};
    openPendingEditor({
      type,
      mode,
      key,
      index,
      title: item?.title || item?.name || item?.label || "",
      description: item?.description || item?.caption || item?.result || item?.method || "",
      richDescription: item?.richDescription || null
    });
    return;
  }

  if (type === "design-object") {
    const pathValue = button.dataset.designPath;
    const items = designArray(project, pathValue);
    const item = mode === "edit" ? items?.[Number(index)] : {};
    openPendingEditor({
      type,
      mode,
      path: pathValue,
      kind: button.dataset.designKind || "document",
      index,
      title: item?.title || item?.name || item?.label || "",
      description: item?.description || item?.caption || item?.result || item?.method || "",
      richDescription: item?.richDescription || null
    });
    return;
  }


  if (type === "custom") {
    const section = (project.sections || []).find((item) => item.id === button.dataset.sectionId);
    const nodePath = button.dataset.nodePath || index || "";
    const item = mode === "edit" ? findBuilderNode(section, nodePathFromString(nodePath)) : {};
    openPendingEditor({
      type,
      mode,
      sectionId: button.dataset.sectionId,
      index,
      nodePath,
      parentPath: button.dataset.parentPath || "",
      title: item?.title || "",
      description: item?.description || "",
      richDescription: item?.richDescription || null
    });
    return;
  }

  if (type === "text-array") {
    const key = button.dataset.key;
    const item = mode === "edit" ? project[key]?.[Number(index)] : "";
    openPendingEditor({
      type,
      mode,
      key,
      index,
      title: typeof item === "string" ? item : item?.title || item?.name || item?.label || ""
    });
    return;
  }

  if (type === "custom-section") {
    const sectionId = button.dataset.editSectionId || button.dataset.sectionId;
    const section = (project.sections || []).find((item) => item.id === sectionId);
    openPendingEditor({
      type,
      mode: "edit",
      sectionId,
      title: section?.title || "",
      description: section?.description || "",
      richDescription: section?.richDescription || null
    });
  }
}

function builderPreviewContent(rich, text = "", emptyText = "No content has been added yet.") {
  const content = richHasContent(rich)
    ? renderRichContent(rich, text || "")
    : text
      ? `<p class="rich-paragraph">${renderMultilineInlineText(text)}</p>`
      : `<p class="evidence-empty">${escapeHtml(emptyText)}</p>`;
  return `<div class="builder-item-preview section-text-preview">${content}</div>`;
}

function nodePathFromString(value = "") {
  if (!value) return [];
  return String(value).split(".").map((part) => Number(part)).filter((part) => Number.isInteger(part) && part >= 0);
}

function nodePathToString(path = []) {
  return path.join(".");
}

function mergeBuilderNodeArrays(...arrays) {
  const merged = [];
  const seen = new Set();
  arrays.flatMap((items) => Array.isArray(items) ? items : []).forEach((item) => {
    if (!item) return;
    const key = item.id
      ? `id:${item.id}`
      : `${item.title || item.name || item.label || ""}|${item.url || item.artifact || ""}|${item.description || item.caption || ""}`;
    if (seen.has(key)) return;
    seen.add(key);
    merged.push(item);
  });
  return merged;
}

function normalizeBuilderNodeStorage(node) {
  if (!node) return node;
  const children = mergeBuilderNodeArrays(node.children, node.items).map(normalizeBuilderNodeStorage);
  node.children = children;
  if (Object.prototype.hasOwnProperty.call(node, "items")) delete node.items;
  return node;
}

function normalizeBuilderSectionStorage(section) {
  if (!section) return section;
  section.items = mergeBuilderNodeArrays(section.items, section.children).map(normalizeBuilderNodeStorage);
  if (Object.prototype.hasOwnProperty.call(section, "children")) delete section.children;
  return section;
}

function sectionRootChildren(section) {
  if (!section) return [];
  normalizeBuilderSectionStorage(section);
  section.items = section.items || [];
  return section.items;
}

function builderNodeChildren(node) {
  if (!node) return [];
  normalizeBuilderNodeStorage(node);
  node.children = node.children || [];
  return node.children;
}

function findBuilderNode(section, path = []) {
  let children = sectionRootChildren(section);
  let node = null;
  for (const index of path) {
    node = children[index];
    if (!node) return null;
    children = builderNodeChildren(node);
  }
  return node;
}

function findBuilderNodeParent(section, path = []) {
  if (!path.length) return { children: sectionRootChildren(section), index: -1, node: null };
  const parentPath = path.slice(0, -1);
  const parentNode = parentPath.length ? findBuilderNode(section, parentPath) : null;
  const children = parentNode ? builderNodeChildren(parentNode) : sectionRootChildren(section);
  return { children, index: path[path.length - 1], node: parentNode };
}

function builderNodeTitle(node) {
  return itemTitle(node) || (node?.url || node?.artifact ? "Untitled file" : "Untitled subsection");
}

function builderNodeKindLabel(node) {
  if (node?.url || node?.artifact) return node.type || node.status || labelForUrlAssetKind(inferUrlAssetKind(node.url || node.artifact || ""));
  return "Section";
}

function renderBuilderExplorerRows(section, items = sectionRootChildren(section), path = [], depth = 0) {
  const visibleItems = (items || []).filter(Boolean);
  if (!visibleItems.length) {
    return `<p class="evidence-empty explorer-empty">No subsections or files added yet.</p>`;
  }
  return `
    <div class="builder-explorer-list" role="list" data-depth="${depth}">
      ${visibleItems.map((item, index) => {
        const itemPath = [...path, index];
        const pathValue = nodePathToString(itemPath);
        const hasUrl = Boolean(item.url || item.artifact);
        const children = hasUrl ? [] : builderNodeChildren(item);
        return `
          <div class="builder-explorer-entry" role="listitem">
            <div class="builder-explorer-row ${hasUrl ? "is-file" : "is-section"}" style="--builder-depth: ${depth}">
              <button class="builder-explorer-main" type="button" ${hasUrl
                ? `data-open-file-view="true" data-section-id="${escapeHtml(section.id)}" data-node-path="${escapeHtml(pathValue)}"`
                : `data-open-node-view="true" data-section-id="${escapeHtml(section.id)}" data-node-path="${escapeHtml(pathValue)}"`}>
                <span class="builder-explorer-icon" aria-hidden="true">${hasUrl ? "file" : "section"}</span>
                <span class="builder-explorer-title">${escapeHtml(builderNodeTitle(item))}</span>
                <small>${escapeHtml(builderNodeKindLabel(item))}</small>
              </button>
              <div class="builder-explorer-actions">
                ${hasUrl ? "" : `<button type="button" data-add-node-subsection="${escapeHtml(section.id)}" data-node-path="${escapeHtml(pathValue)}">Add subsection</button>`}
                ${hasUrl ? "" : `<button type="button" data-upload-node="${escapeHtml(section.id)}" data-node-path="${escapeHtml(pathValue)}">Add file</button>`}
                ${hasUrl ? "" : `<button type="button" data-open-editor="custom" data-mode="edit" data-section-id="${escapeHtml(section.id)}" data-node-path="${escapeHtml(pathValue)}">Edit</button>`}
                <button class="danger-icon" type="button" data-delete-node="${escapeHtml(section.id)}" data-node-path="${escapeHtml(pathValue)}">Delete</button>
              </div>
            </div>
            ${!hasUrl && children.length ? renderBuilderExplorerRows(section, children, itemPath, depth + 1) : ""}
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function customViewPathValue(path = []) {
  return nodePathToString(path);
}

function pendingEditorMatchesCustomView(sectionId, path = []) {
  if (!pendingEditor || pendingEditor.sectionId !== sectionId) return false;
  const pathValue = customViewPathValue(path);
  if (pendingEditor.type === "custom-section") return !pathValue;
  if (pendingEditor.type !== "custom") return false;
  if (pendingEditor.mode === "add") return (pendingEditor.parentPath || "") === pathValue;
  const editPath = nodePathFromString(pendingEditor.nodePath || pendingEditor.index || "");
  const editPathValue = customViewPathValue(editPath);
  const parentPathValue = customViewPathValue(editPath.slice(0, -1));
  return editPathValue === pathValue || parentPathValue === pathValue;
}

function renderNestedSectionNav(section, currentChildren = [], currentPath = [], extraClass = "") {
  const childRows = (currentChildren || [])
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item && !item.url && !item.artifact);

  if (!childRows.length) return "";

  return `
    <nav class="nested-section-link-strip ${escapeHtml(extraClass)}" aria-label="Subsections in this section">
      ${childRows.map(({ item, index }) => {
        const pathValue = customViewPathValue([...currentPath, index]);
        return `
          <button
            class="nested-section-link"
            type="button"
            data-open-node-view="true"
            data-section-id="${escapeHtml(section.id)}"
            data-node-path="${escapeHtml(pathValue)}"
          >
            ${escapeHtml(builderNodeTitle(item))}
          </button>
        `;
      }).join("")}
    </nav>
  `;
}

function renderCustomFilesList(section, currentChildren = [], currentPath = []) {
  const fileRows = (currentChildren || [])
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item && (item.url || item.artifact));

  if (!fileRows.length) return "";

  return `
    <div class="builder-explorer-list custom-file-list" role="list" aria-label="Files and images">
      ${fileRows.map(({ item, index }) => {
        const pathValue = customViewPathValue([...currentPath, index]);
        return `
          <div class="builder-explorer-entry" role="listitem">
            <div class="builder-explorer-row is-file" style="--builder-depth: 0">
              <button class="builder-explorer-main" type="button" data-open-file-view="true" data-section-id="${escapeHtml(section.id)}" data-node-path="${escapeHtml(pathValue)}">
                <span class="builder-explorer-title">${escapeHtml(builderNodeTitle(item))}</span>
              </button>
              <div class="builder-explorer-actions">
                <button class="danger-icon" type="button" data-delete-node="${escapeHtml(section.id)}" data-node-path="${escapeHtml(pathValue)}">Delete</button>
              </div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderCustomSection(project, sectionId) {
  const section = (project.sections || []).find((item) => item.id === sectionId);
  if (!section) return `<p class="evidence-empty">Section not found.</p>`;
  normalizeBuilderSectionStorage(section);
  const currentPath = activeCustomSectionPath(sectionId);
  const currentNode = currentPath.length ? findBuilderNode(section, currentPath) : section;
  if (currentPath.length && !currentNode) {
    setActiveCustomSectionPath(sectionId, []);
    return renderCustomSection(project, sectionId);
  }
  const currentChildren = currentPath.length ? builderNodeChildren(currentNode) : sectionRootChildren(section);
  const pathValue = customViewPathValue(currentPath);
  const description = currentPath.length ? currentNode?.description || "" : section.description || "";
  const richDescription = currentPath.length ? currentNode?.richDescription : section.richDescription;
  const editingCurrentView = pendingEditorMatchesCustomView(sectionId, currentPath);
  const hasViewContent = richHasContent(richDescription) || Boolean(String(description || "").trim());
  const fileListHtml = renderCustomFilesList(section, currentChildren, currentPath);
  const hasChildSections = (currentChildren || []).some((item) => item && !item.url && !item.artifact);
  const emptyMetadata = !hasChildSections && !fileListHtml
    ? `<p class="evidence-empty explorer-empty section-window-bottom-metadata">No subsections or files added yet.</p>`
    : "";

  return `
    ${editingCurrentView ? renderPendingEditor() : `
      <div class="section-window-view-canvas${hasViewContent || fileListHtml ? "" : " is-empty"}">
        <div class="section-window-content-stack">
          ${hasViewContent ? builderPreviewContent(richDescription, description, "") : ""}
          ${fileListHtml}
        </div>
        ${emptyMetadata}
      </div>
    `}
  `;
}

function compileLanguageOptions(selected = "javascript") {
  const normalized = normalizeCodeLanguage(selected);
  return supportedCodeLanguages.map((language) => `
    <option value="${escapeHtml(language.id)}"${language.id === normalized ? " selected" : ""}>${escapeHtml(language.label)}</option>
  `).join("");
}

function compileRoleOptions(selected = "design") {
  const normalized = normalizeCompileFileRole(selected, "verilog");
  return ["design", "testbench"].map((role) => `
    <option value="${escapeHtml(role)}"${role === normalized ? " selected" : ""}>${escapeHtml(compileFileRoleLabel(role))}</option>
  `).join("");
}

function hdlTestbenchTemplate(language = "systemverilog", designName = "design") {
  const tbName = `tb_${slugify(designName || "design").replace(/-/g, "_") || "design"}`;
  const dutName = slugify(designName || "design").replace(/-/g, "_") || "design";
  const commentPrefix = language === "verilog" ? "//" : "//";
  return [
    "`timescale 1ns/1ps",
    "",
    `module ${tbName};`,
    `  ${commentPrefix} Declare testbench signals here.`,
    `  ${commentPrefix} Example: reg clk = 0; reg reset_n = 0; wire done;`,
    "",
    `  ${commentPrefix} Instantiate the design under test and connect the signals.`,
    `  ${commentPrefix} Example: ${dutName} dut (.clk(clk), .reset_n(reset_n), .done(done));`,
    "",
    "  initial begin",
    '    $dumpfile("waveform.vcd");',
    `    $dumpvars(0, ${tbName});`,
    "",
    `    ${commentPrefix} Drive stimulus over time here.`,
    "    #100;",
    "    $finish;",
    "  end",
    "endmodule"
  ].join("\n");
}

function hdlUvmStyleTestbenchTemplate(designName = "design") {
  const tbName = `tb_${slugify(designName || "design").replace(/-/g, "_") || "design"}`;
  const dutName = slugify(designName || "design").replace(/-/g, "_") || "design";
  return [
    "`timescale 1ns/1ps",
    "",
    `module ${tbName};`,
    "  logic clk = 0;",
    "  logic reset_n = 0;",
    "  logic done;",
    "",
    "  always #5 clk = ~clk;",
    "",
    `  // Connect this instance to the real design ports before simulating.`,
    `  // ${dutName} dut (.clk(clk), .reset_n(reset_n), .done(done));`,
    "",
    "  task build_phase();",
    "    // Allocate scoreboards, monitors, or interfaces here in a fuller UVM environment.",
    "  endtask",
    "",
    "  task run_phase();",
    "    reset_n = 0;",
    "    repeat (4) @(posedge clk);",
    "    reset_n = 1;",
    "    repeat (20) @(posedge clk);",
    "  endtask",
    "",
    "  always @(posedge clk) begin",
    '    if (reset_n) assert (!$isunknown(done)) else $error("done became X/Z after reset was released");',
    "  end",
    "",
    "  initial begin",
    '    $dumpfile("waveform.vcd");',
    `    $dumpvars(0, ${tbName});`,
    "    build_phase();",
    "    run_phase();",
    "    $finish;",
  "  end",
    "endmodule"
  ].join("\n");
}

function firstHdlModuleName(code = "") {
  const match = String(code || "").match(/\bmodule\s+([A-Za-z_$][\w$]*)/);
  return match?.[1] || "design";
}

function compileAppendDestinations(project) {
  if (!project) return [];
  const destinations = [{
    id: "project-overview",
    label: "Project overview",
    title: "Project overview",
    kind: "Project",
    depth: 0,
    richPath: "summaryRich",
    textPath: "summary"
  }];

  (project.sections || []).forEach((section, index) => {
    normalizeBuilderSectionStorage(section);
    destinations.push({
      id: `custom-${section.id || index}`,
      label: `${section.title || `Custom section ${index + 1}`} overview`,
      title: section.title || `Custom section ${index + 1}`,
      kind: "Section",
      depth: 0,
      sectionId: section.id || "",
      sectionRef: section,
      richPath: `sections.${index}.richDescription`,
      textPath: `sections.${index}.description`
    });
    const walkItems = (items = [], prefix = `sections.${index}.items`, labelPrefix = section.title || `Custom section ${index + 1}`) => {
      (items || []).forEach((item, itemIndex) => {
        normalizeBuilderNodeStorage(item);
        const itemPath = `${prefix}.${itemIndex}`;
        const itemTitle = item.title || `Subsection ${itemIndex + 1}`;
        if (!item.url) {
          destinations.push({
            id: `custom-${section.id || index}-${itemPath}`,
            label: `${labelPrefix} / ${itemTitle} overview`,
            title: itemTitle,
            kind: "Subsection",
            depth: itemPath.split(".children.").length,
            sectionId: section.id || "",
            nodePath: itemPath,
            nodeRef: item,
            richPath: `${itemPath}.richDescription`,
            textPath: `${itemPath}.description`
          });
        }
        walkItems(builderNodeChildren(item), `${itemPath}.children`, `${labelPrefix} / ${itemTitle}`);
      });
    };
    walkItems(sectionRootChildren(section));
  });

  return destinations;
}

function compileAppendDestinationOptions(project, selectedId = "") {
  const destinations = compileAppendDestinations(project);
  const selected = destinations.some((destination) => destination.id === selectedId)
    ? selectedId
    : destinations[0]?.id || "";
  return destinations.map((destination) => `
    <option value="${escapeHtml(destination.id)}"${destination.id === selected ? " selected" : ""}>${escapeHtml(destination.label)}</option>
  `).join("");
}

function compileAppendDestinationById(project, id = "") {
  const destinations = compileAppendDestinations(project);
  return destinations.find((destination) => destination.id === id) || destinations[0] || null;
}

function compileAppendTargetButton(destination, selectedId = "", labelOverride = "") {
  if (!destination) return "";
  const active = destination.id === selectedId;
  return `
    <button
      class="compile-append-target${active ? " is-active" : ""}"
      type="button"
      data-compile-append-target-id="${escapeHtml(destination.id)}"
      aria-pressed="${active ? "true" : "false"}"
    >
      <span class="compile-append-target-title">${escapeHtml(labelOverride || destination.title || destination.label)}</span>
      <small>${escapeHtml(destination.kind || "Destination")}</small>
    </button>
  `;
}

function compileAppendNodeDestinationId(section, sectionIndex, itemPath = "") {
  return `custom-${section.id || sectionIndex}-${itemPath}`;
}

function renderCompileAppendNode(project, section, sectionIndex, item, itemPath, pathPrefix, labelPrefix, selectedId, depth = 1) {
  if (!item || item.url || item.artifact) return "";
  normalizeBuilderNodeStorage(item);
  const childSections = builderNodeChildren(item).filter((child) => child && !child.url && !child.artifact);
  const destination = compileAppendDestinationById(project, compileAppendNodeDestinationId(section, sectionIndex, itemPath));
  const title = item.title || `Subsection ${depth}`;
  const children = childSections.map((child, childIndex) => {
    const childItemPath = `${itemPath}.children.${childIndex}`;
    return renderCompileAppendNode(project, section, sectionIndex, child, childItemPath, `${pathPrefix}.${childIndex}`, `${labelPrefix} / ${title}`, selectedId, depth + 1);
  }).join("");

  return `
    <details class="compile-append-folder" open style="--append-depth: ${depth}">
      <summary>
        <span class="compile-tree-folder-icon" aria-hidden="true"></span>
        <span>${escapeHtml(title)}</span>
        <small>${childSections.length} child section${childSections.length === 1 ? "" : "s"}</small>
      </summary>
      <div class="compile-append-children">
        ${compileAppendTargetButton(destination, selectedId, "Overview")}
        ${children}
      </div>
    </details>
  `;
}

function renderCompileAppendTree(project, selectedId = "") {
  const selected = compileAppendDestinationById(project, selectedId);
  const currentId = selected?.id || "";
  const sections = (project?.sections || []).filter((section) => !isCompileCodeBuilderSection(section));
  const projectDestination = compileAppendDestinationById(project, "project-overview");
  const sectionTrees = sections.map((section, sectionIndex) => {
    normalizeBuilderSectionStorage(section);
    const destination = compileAppendDestinationById(project, `custom-${section.id || sectionIndex}`);
    const childSections = sectionRootChildren(section).filter((child) => child && !child.url && !child.artifact);
    const children = childSections.map((child, childIndex) => (
      renderCompileAppendNode(
        project,
        section,
        sectionIndex,
        child,
        `sections.${sectionIndex}.items.${childIndex}`,
        String(childIndex),
        section.title || `Section ${sectionIndex + 1}`,
        currentId,
        1
      )
    )).join("");
    return `
      <details class="compile-append-folder" open style="--append-depth: 0">
        <summary>
          <span class="compile-tree-folder-icon" aria-hidden="true"></span>
          <span>${escapeHtml(section.title || `Section ${sectionIndex + 1}`)}</span>
          <small>${childSections.length} subsection${childSections.length === 1 ? "" : "s"}</small>
        </summary>
        <div class="compile-append-children">
          ${compileAppendTargetButton(destination, currentId, "Overview")}
          ${children || `<p class="compile-append-empty">No subsections under this section yet.</p>`}
        </div>
      </details>
    `;
  }).join("");

  return `
    <div class="compile-append-tree" role="tree" aria-label="Append destination tree">
      ${compileAppendTargetButton(projectDestination, currentId)}
      ${sectionTrees || `<p class="compile-append-empty">Create project sections before choosing a section destination.</p>`}
    </div>
  `;
}

function compileEditorTabs(project, file = activeCompileFile(project)) {
  const workspace = ensureCompileCode(project);
  const files = workspace.files || [];
  const openFileIds = Array.isArray(workspace.openFileIds) ? workspace.openFileIds : files.map((sourceFile) => sourceFile.id);
  const openFiles = openFileIds.map((id) => files.find((sourceFile) => sourceFile.id === id)).filter(Boolean);
  if (!openFiles.length) {
    return `
      <div class="compile-editor-tabs is-empty" role="tablist" aria-label="Open source files">
        <span>Select a source file from Solution Explorer to open it.</span>
      </div>
    `;
  }
  return `
    <div class="compile-editor-tabs" role="tablist" aria-label="Open source files">
      ${openFiles.map((sourceFile) => `
        <div class="compile-editor-tab${sourceFile.id === file?.id ? " active" : ""}${sourceFile.dirty ? " is-dirty" : ""}" role="presentation">
          <button
            class="compile-editor-tab-label"
            type="button"
            role="tab"
            aria-selected="${sourceFile.id === file?.id ? "true" : "false"}"
            data-compile-select="${escapeHtml(sourceFile.id)}"
            title="${escapeHtml(compileFilePath(sourceFile))}"
          >
            <span>${escapeHtml(sourceFile.fileName || "source")}</span>
          </button>
          <button
            class="compile-editor-tab-close"
            type="button"
            data-compile-close-tab="${escapeHtml(sourceFile.id)}"
            aria-label="Close ${escapeHtml(sourceFile.fileName || "source")} view"
            title="${sourceFile.dirty ? "Close view with unsaved changes" : "Close file view"}"
          >&times;</button>
        </div>
      `).join("")}
      <span class="compile-editor-tab-tools" aria-label="Active source save actions">
        <button type="button" data-compile-save title="Save active source" aria-label="Save active source">S</button>
        <button type="button" data-compile-save-as title="Save active source as" aria-label="Save active source as">As</button>
      </span>
    </div>
  `;
}

function compileFileBreadcrumbs(file) {
  const segments = compilePathSegments(compileFilePath(file));
  if (!segments.length) return "";
  return `
    <nav class="compile-breadcrumbs" aria-label="Active file path">
      ${segments.map((segment, index) => `
        <span>${escapeHtml(segment)}</span>${index < segments.length - 1 ? `<b aria-hidden="true">/</b>` : ""}
      `).join("")}
    </nav>
  `;
}

function compileIdeStatusBar(project, file = activeCompileFile(project)) {
  const workspace = ensureCompileCode(project);
  const code = String(file?.code || "");
  const lineCount = code ? code.split(/\r\n|\r|\n/).length : 0;
  const selectedDestination = selectedCompileAppendDestination(project);
  return `
    <div class="compile-ide-status-bar" aria-label="Compile workspace status">
      <span>${escapeHtml(file ? codeLanguageLabel(file.language) : "No language")}</span>
      <span>${file?.dirty ? "Unsaved changes" : "Saved state ready"}</span>
      <span>${lineCount} line${lineCount === 1 ? "" : "s"}</span>
      <span>${workspace.files.length} file${workspace.files.length === 1 ? "" : "s"}</span>
      <span>Append: ${escapeHtml(selectedDestination?.label || "Project overview")}</span>
    </div>
  `;
}

function activeCompileFile(project) {
  const workspace = ensureCompileCode(project);
  const openFileIds = Array.isArray(workspace.openFileIds) ? workspace.openFileIds : workspace.files.map((file) => file.id);
  return workspace.files.find((file) => file.id === workspace.activeFileId) ||
    workspace.files.find((file) => openFileIds.includes(file.id)) ||
    null;
}

function compileLogTimestamp(value = new Date().toISOString()) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function addCompileMessage(project, text, level = "info") {
  const workspace = ensureCompileCode(project);
  if (!workspace || !text) return;
  workspace.messages = [
    {
      id: slugify(`message-${Date.now()}-${Math.random().toString(16).slice(2)}`),
      at: new Date().toISOString(),
      level: ["info", "success", "warning", "error"].includes(level) ? level : "info",
      text: String(text)
    },
    ...(workspace.messages || [])
  ].slice(0, 80);
  updateCompileMessagesPanel(project);
}

function renderCompileMessages(workspace) {
  const messages = Array.isArray(workspace?.messages) ? workspace.messages : [];
  if (!messages.length) return `<p class="compile-message-empty">No messages yet.</p>`;
  return messages.map((message) => `
    <div class="compile-message compile-message-${escapeHtml(message.level || "info")}">
      <time>${escapeHtml(compileLogTimestamp(message.at))}</time>
      <span>${escapeHtml(message.text)}</span>
    </div>
  `).join("");
}

function normalizeCompilePanel(panel = "console", file = activeCompileFile(selectedProject())) {
  const value = String(panel || "console").toLowerCase();
  if (value === "scope" && !isHdlLanguage(file?.language)) return "console";
  return ["console", "messages", "terminal", "scope"].includes(value) ? value : "console";
}

function activeCompilePanel(project, file = activeCompileFile(project)) {
  const workspace = ensureCompileCode(project);
  const panel = normalizeCompilePanel(workspace.activePanel, file);
  workspace.activePanel = panel;
  return panel;
}

function setCompilePanel(project, panel) {
  const workspace = ensureCompileCode(project);
  workspace.activePanel = normalizeCompilePanel(panel, activeCompileFile(project));
  scheduleAutosave(900);
}

function compileWorkspaceTree(workspace = {}) {
  const rootNode = {
    children: new Map(),
    files: [],
    name: "",
    path: "",
    type: "folder"
  };
  const ensureFolder = (folderPath = "") => {
    let node = rootNode;
    let currentPath = "";
    compilePathSegments(folderPath).forEach((segment) => {
      const safeSegmentName = safeClientCodeDirectorySegment(segment);
      currentPath = currentPath ? `${currentPath}/${safeSegmentName}` : safeSegmentName;
      if (!node.children.has(safeSegmentName)) {
        node.children.set(safeSegmentName, {
          children: new Map(),
          files: [],
          name: safeSegmentName,
          path: currentPath,
          type: "folder"
        });
      }
      node = node.children.get(safeSegmentName);
    });
    return node;
  };

  (workspace.directories || []).forEach((directory) => ensureFolder(directory));
  (workspace.files || []).forEach((file) => {
    const relativePath = compileFilePath(file);
    const segments = compilePathSegments(relativePath);
    const fileName = segments.pop() || file.fileName || "source";
    ensureFolder(segments.join("/")).files.push({ ...file, fileName, relativePath });
  });
  return rootNode;
}

function renderCompileTreeFolder(node, activeId = "", selectedIds = new Set()) {
  const folders = [...node.children.values()].sort((left, right) => left.name.localeCompare(right.name));
  const files = [...node.files].sort((left, right) => compileFilePath(left).localeCompare(compileFilePath(right)));
  const folderHtml = folders.map((folder) => `
    <details class="compile-code-tree-folder" open data-compile-folder-path="${escapeHtml(folder.path)}">
      <summary>
        <span class="compile-tree-folder-icon" aria-hidden="true"></span>
        <span>${escapeHtml(folder.name)}</span>
      </summary>
      <div class="compile-code-tree-children">
        ${renderCompileTreeFolder(folder, activeId, selectedIds)}
      </div>
    </details>
  `).join("");
  const fileHtml = files.map((file) => `
    <button
      class="compile-code-tree-file${file.id === activeId ? " is-active" : ""}${selectedIds.has(file.id) ? " is-selected" : ""}"
      type="button"
      aria-pressed="${selectedIds.has(file.id) ? "true" : "false"}"
      data-compile-select="${escapeHtml(file.id)}"
      data-compile-tree-file-id="${escapeHtml(file.id)}"
      data-compile-tree-file-path="${escapeHtml(compileFilePath(file))}"
    >
      <span class="compile-file-extension">${escapeHtml((file.fileName.match(/\.[^.]+$/)?.[0] || "src").replace(".", ""))}</span>
      <span title="${escapeHtml(compileFilePath(file))}">${escapeHtml(file.fileName)}</span>
      <small>${escapeHtml(compileFileDirtyLabel(file))}</small>
    </button>
  `).join("");
  return `${folderHtml}${fileHtml}`;
}

function renderCompileWorkspaceTree(workspace = {}, projectTitle = "Project workspace") {
  const tree = compileWorkspaceTree(workspace);
  const selectedIds = new Set(Array.isArray(workspace.selectedFileIds) ? workspace.selectedFileIds : []);
  const contents = renderCompileTreeFolder(tree, workspace.activeFileId || "", selectedIds);
  return `
    <details class="compile-code-root-folder" open>
      <summary>
        <span class="compile-tree-folder-icon" aria-hidden="true"></span>
        <span>${escapeHtml(projectTitle || "Project workspace")}</span>
      </summary>
      <div class="compile-code-tree-files">
        ${contents || `<p>No source files or folders yet.</p>`}
      </div>
    </details>
  `;
}

function updateCompileTerminalPanel(project, file = activeCompileFile(project)) {
  const workspace = ensureCompileCode(project);
  const terminal = file?.lastResult?.terminal || workspace?.terminal || compileTerminalStatus || "Compiler output will appear here after you save or run a source file.";
  const terminalElement = sectionContent.querySelector("[data-compile-terminal]");
  if (!terminalElement) return;
  terminalElement.textContent = terminal;
  requestAnimationFrame(() => {
    terminalElement.scrollTop = terminalElement.scrollHeight;
  });
}

function updateCompileMessagesPanel(project) {
  const workspace = ensureCompileCode(project);
  const log = sectionContent.querySelector("[data-compile-messages]");
  if (!log) return;
  log.innerHTML = renderCompileMessages(workspace);
}

function updateCompileSystemTerminalPanel(project) {
  const workspace = ensureCompileCode(project);
  const terminal = workspace?.systemTerminal || {};
  const outputElement = sectionContent.querySelector("[data-compile-system-terminal]");
  const promptElement = sectionContent.querySelector("[data-compile-terminal-prompt]");
  const commandInput = sectionContent.querySelector("[data-compile-terminal-command]");
  if (promptElement) promptElement.textContent = compileTerminalPromptText(terminal, project);
  if (commandInput && commandInput.value !== String(terminal.command || "")) {
    commandInput.value = terminal.command || "";
  }
  if (outputElement) {
    outputElement.textContent = compileTerminalDisplayText(terminal);
    requestAnimationFrame(() => {
      outputElement.scrollTop = outputElement.scrollHeight;
    });
  }
}

function focusTerminalCommandLine() {
  const commandLine = sectionContent.querySelector("[data-compile-terminal-command]");
  if (!commandLine) return;
  commandLine.focus?.({ preventScroll: true });
  if (typeof commandLine.setSelectionRange === "function") {
    const end = commandLine.value.length;
    commandLine.setSelectionRange(end, end);
  }
}

function compileTerminalPromptPath(terminal = {}, project = selectedProject()) {
  if (terminal.promptPath) return terminal.promptPath;
  if (terminal.cwdAbsolute) return terminal.cwdAbsolute;
  const rootPath = terminal.rootPath || compileProjectRootPath(project);
  const relativePath = compileDirectoryPath(terminal.cwd || "");
  if (!relativePath) return rootPath;
  return `${rootPath}\\${relativePath.replace(/\//g, "\\")}`;
}

function compileTerminalPromptText(terminal = {}, project = selectedProject()) {
  return `PS ${compileTerminalPromptPath(terminal, project)}>`;
}

function compileTerminalDisplayText(terminal = {}) {
  return String(terminal.output || "").trimEnd();
}

function appendCompileTerminalOutput(existing = "", next = "") {
  const previous = String(existing || "").trimEnd();
  const addition = String(next || "").trimEnd();
  return [previous, addition].filter(Boolean).join("\n");
}

function renderCompileSystemTerminal(workspace = {}, project = selectedProject()) {
  const terminal = workspace.systemTerminal || {};
  return `
    <section class="compile-system-terminal-panel" data-compile-output-panel="terminal" aria-label="Real terminal">
      <div class="compile-terminal-heading">
        <span class="compile-terminal-title"><span aria-hidden="true" class="terminal-dot"></span> Terminal</span>
        <span class="compile-terminal-controls">
          <button type="button" data-compile-terminal-clear>Clear terminal</button>
        </span>
      </div>
      <div class="compile-terminal-screen" data-compile-terminal-screen>
        <pre class="compile-terminal compile-system-terminal" data-compile-system-terminal tabindex="0" role="log" aria-live="polite">${escapeHtml(compileTerminalDisplayText(terminal))}</pre>
        <div class="compile-terminal-prompt-line">
          <span class="compile-terminal-prompt" data-compile-terminal-prompt>${escapeHtml(compileTerminalPromptText(terminal, project))}</span>
          <input class="compile-terminal-command-input" data-compile-terminal-command type="text" spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="Terminal command" value="${escapeHtml(terminal.command || "")}" />
        </div>
      </div>
    </section>
  `;
}

function showCompileOutput(project, file = activeCompileFile(project)) {
  setCompilePanel(project, "console");
  renderSectionContent(project);
  requestAnimationFrame(() => {
    updateCompileTerminalPanel(project, file);
    sectionContent.querySelector("[data-compile-terminal]")?.focus?.({ preventScroll: true });
  });
}

function activeCompileWaveform(project, file = activeCompileFile(project)) {
  const workspace = ensureCompileCode(project);
  return file?.lastResult?.waveform || file?.waveform || workspace?.waveform || null;
}

const scopeSignalDefaultColors = ["#38bdf8", "#facc15", "#34d399", "#f472b6", "#a78bfa", "#fb923c", "#60a5fa", "#f87171"];
const scopeRadixOptions = [
  { id: "bin", label: "Binary" },
  { id: "dec", label: "Decimal" },
  { id: "hex", label: "Hex" },
  { id: "unsigned", label: "Unsigned" },
  { id: "signed", label: "Signed" },
  { id: "oct", label: "Octal" },
  { id: "state", label: "State names" },
  { id: "ascii", label: "ASCII" }
];
const scopeZoomOptions = [1, 2, 4, 8];
const scopeViewOptions = [
  { id: "fit", label: "Fit width" },
  { id: "natural", label: "Natural width" }
];
const scopeForcedValueColors = {
  x: "#ef4444",
  z: "#3b82f6"
};

function scopeDefaultColorForIndex(index = 0) {
  return scopeSignalDefaultColors[Math.abs(Number(index) || 0) % scopeSignalDefaultColors.length];
}

function normalizeScopeColor(value = "", fallback = "#38bdf8") {
  const clean = String(value || "").trim();
  return /^#[0-9a-f]{6}$/i.test(clean) ? clean.toLowerCase() : fallback;
}

function scopeValueKind(value = "") {
  const clean = String(value ?? "").toLowerCase();
  if (clean.includes("x")) return "x";
  if (clean.includes("z")) return "z";
  return "known";
}

function scopeStrokeForValue(value = "", fallback = "#38bdf8") {
  const kind = scopeValueKind(value);
  return scopeForcedValueColors[kind] || fallback;
}

function normalizeScopeChanges(changes = []) {
  return (Array.isArray(changes) && changes.length ? changes : [{ time: 0, value: "x" }])
    .map((change) => ({
      time: Number(change.time) || 0,
      value: String(change.value ?? "x").toLowerCase()
    }))
    .sort((a, b) => a.time - b.time);
}

function normalizeScopeRadix(value = "bin") {
  const clean = String(value || "").trim().toLowerCase();
  return scopeRadixOptions.some((option) => option.id === clean) ? clean : "bin";
}

function normalizeScopeStateMap(value = {}) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return Object.fromEntries(Object.entries(value)
      .map(([key, label]) => [String(key).trim(), String(label || "").trim()])
      .filter(([key, label]) => key && label));
  }
  return {};
}

function parseScopeStateMapText(text = "") {
  const map = {};
  String(text || "")
    .split(/[\n,;]+/)
    .map((entry) => entry.trim())
    .filter(Boolean)
    .forEach((entry) => {
      const match = entry.match(/^([^:=]+)\s*(?::|=)\s*(.+)$/);
      if (!match) return;
      map[match[1].trim()] = match[2].trim();
    });
  return normalizeScopeStateMap(map);
}

function scopeStateMapText(map = {}) {
  return Object.entries(normalizeScopeStateMap(map))
    .map(([key, label]) => `${key}=${label}`)
    .join(", ");
}

function normalizeScopeZoom(value = 1) {
  const clean = Number(value);
  return scopeZoomOptions.includes(clean) ? clean : 1;
}

function normalizeScopeView(value = "fit") {
  const clean = String(value || "").trim().toLowerCase();
  return scopeViewOptions.some((option) => option.id === clean) ? clean : "fit";
}

function scopeSignalKey(signal = {}, index = 0) {
  return slugify(String(signal.name || signal.reference || signal.code || `signal-${index + 1}`)) || `signal-${index + 1}`;
}

function scopeSignalSettings(project, signal, index = 0) {
  const workspace = ensureCompileCode(project);
  const key = scopeSignalKey(signal, index);
  workspace.scopeSettings[key] = {
    color: normalizeScopeColor(workspace.scopeSettings[key]?.color, scopeDefaultColorForIndex(index)),
    radix: normalizeScopeRadix(workspace.scopeSettings[key]?.radix),
    stateMap: normalizeScopeStateMap(workspace.scopeSettings[key]?.stateMap)
  };
  return { key, ...workspace.scopeSettings[key] };
}

function vcdBitsForValue(value = "", width = 1) {
  const clean = String(value || "x").toLowerCase().replace(/[^01xz]/g, "");
  if (!clean || /[xz]/.test(clean)) return "";
  return clean.padStart(Math.max(1, Number(width) || clean.length), "0");
}

function formatScopeValue(value = "", width = 1, radix = "bin", stateMap = {}) {
  const clean = String(value || "x").toLowerCase();
  const bits = vcdBitsForValue(clean, width);
  if (!bits) return clean;
  const unsigned = BigInt(`0b${bits}`);
  if (radix === "state") {
    const candidates = [
      bits,
      `0b${bits}`,
      unsigned.toString(10),
      `0x${unsigned.toString(16).toUpperCase()}`,
      `0x${unsigned.toString(16).toLowerCase()}`
    ];
    const normalizedMap = normalizeScopeStateMap(stateMap);
    const named = candidates.map((candidate) => normalizedMap[candidate]).find(Boolean);
    return named || unsigned.toString(10);
  }
  if (radix === "hex") return `0x${unsigned.toString(16).toUpperCase()}`;
  if (radix === "oct") return `0o${unsigned.toString(8)}`;
  if (radix === "dec") return unsigned.toString(10);
  if (radix === "unsigned") return unsigned.toString(10);
  if (radix === "signed") {
    const signBit = bits[0] === "1";
    const signed = signBit ? unsigned - (1n << BigInt(bits.length)) : unsigned;
    return signed.toString(10);
  }
  if (radix === "ascii") {
    const chars = bits.match(/.{1,8}/g)?.map((byte) => {
      const code = Number.parseInt(byte.padStart(8, "0"), 2);
      return code >= 32 && code <= 126 ? String.fromCharCode(code) : ".";
    }).join("") || "";
    return chars ? `"${chars}"` : clean;
  }
  return bits.length > 1 ? `0b${bits}` : bits;
}

function scopeSignalValueAt(changes = [], index = 0) {
  const value = String(changes[index]?.value ?? "x").toLowerCase();
  if (value === "1") return "1";
  if (value === "0") return "0";
  return "x";
}

function renderScalarWaveSegments(changes = [], maxTime = 1, rowY = 0, left = 150, width = 680, signalColor = "#38bdf8") {
  const normalized = normalizeScopeChanges(changes);
  const top = rowY + 5;
  const bottom = rowY + 23;
  const middle = rowY + 14;
  const yFor = (value) => value === "1" ? top : value === "0" ? bottom : middle;
  const xFor = (time) => left + Math.max(0, Math.min(1, (Number(time) || 0) / Math.max(1, maxTime))) * width;
  return normalized.map((change, index) => {
    const next = normalized[index + 1];
    const x1 = xFor(change.time);
    const x2 = next ? xFor(next.time) : left + width;
    const y1 = yFor(scopeSignalValueAt(normalized, index));
    const color = scopeStrokeForValue(change.value, signalColor);
    const kind = scopeValueKind(change.value);
    const segment = `<line x1="${x1.toFixed(1)}" x2="${x2.toFixed(1)}" y1="${y1.toFixed(1)}" y2="${y1.toFixed(1)}" class="scope-wave scope-wave-segment scope-wave-${kind}" style="stroke:${escapeHtml(color)}" />`;
    if (!next) return segment;
    const y2 = yFor(scopeSignalValueAt(normalized, index + 1));
    const transitionColor = scopeStrokeForValue(next.value, signalColor);
    return `${segment}<line x1="${x2.toFixed(1)}" x2="${x2.toFixed(1)}" y1="${y1.toFixed(1)}" y2="${y2.toFixed(1)}" class="scope-wave scope-wave-edge scope-wave-${scopeValueKind(next.value)}" style="stroke:${escapeHtml(transitionColor)}" />`;
  }).join("");
}

function renderBusWaveSegments(changes = [], maxTime = 1, rowY = 0, left = 150, width = 680, signalColor = "#38bdf8") {
  const normalized = normalizeScopeChanges(changes);
  const y = rowY + 15;
  const xFor = (time) => left + Math.max(0, Math.min(1, (Number(time) || 0) / Math.max(1, maxTime))) * width;
  return normalized.map((change, index) => {
    const next = normalized[index + 1];
    const x1 = xFor(change.time);
    const x2 = next ? xFor(next.time) : left + width;
    const color = scopeStrokeForValue(change.value, signalColor);
    const kind = scopeValueKind(change.value);
    return `<line x1="${x1.toFixed(1)}" x2="${x2.toFixed(1)}" y1="${y.toFixed(1)}" y2="${y.toFixed(1)}" class="scope-bus scope-bus-segment scope-wave-${kind}" style="stroke:${escapeHtml(color)}" />`;
  }).join("");
}

function renderBusWaveLabels(changes = [], maxTime = 1, rowY = 0, left = 150, width = 680, radix = "bin", signalWidth = 1, stateMap = {}) {
  const normalized = normalizeScopeChanges(changes)
    .slice(0, 12);
  return normalized.map((change, index) => {
    const x = left + Math.max(0, Math.min(1, change.time / Math.max(1, maxTime))) * width;
    const formatted = formatScopeValue(change.value, signalWidth, radix, stateMap);
    const value = formatted.length > 14 ? `${formatted.slice(0, 14)}...` : formatted;
    const kind = scopeValueKind(change.value);
    return `<text x="${Math.min(left + width - 70, x + 4).toFixed(1)}" y="${rowY + 19}" class="scope-value-label scope-value-${kind}">${escapeHtml(value)}</text>${index ? `<line x1="${x.toFixed(1)}" x2="${x.toFixed(1)}" y1="${rowY + 5}" y2="${rowY + 25}" class="scope-transition" />` : ""}`;
  }).join("");
}

function renderScopeSignalControls(project, signals = []) {
  const workspace = ensureCompileCode(project);
  return `
    <div class="compile-scope-controls" aria-label="Scope signal display controls">
      <label class="scope-general-control">
        <span>Simulation timeout</span>
        <select data-scope-timeout>
          ${[10000, 20000, 30000, 60000, 120000].map((value) => `<option value="${value}"${workspace.hdlSimulationTimeoutMs === value ? " selected" : ""}>${Math.round(value / 1000)} s</option>`).join("")}
        </select>
      </label>
      <label class="scope-general-control">
        <span>Time zoom</span>
        <select data-scope-zoom>
          ${scopeZoomOptions.map((value) => `<option value="${value}"${workspace.scopeZoom === value ? " selected" : ""}>${value}x</option>`).join("")}
        </select>
      </label>
      <label class="scope-general-control">
        <span>Scope width</span>
        <select data-scope-view>
          ${scopeViewOptions.map((option) => `<option value="${escapeHtml(option.id)}"${workspace.scopeView === option.id ? " selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </label>
      <label class="scope-general-control scope-filter-control">
        <span>Signal filter</span>
        <input type="search" data-scope-filter value="${escapeHtml(workspace.scopeFilter || "")}" placeholder="clk, reset, data..." />
      </label>
    </div>
  `;
}

function renderScopeSignalContextMenu() {
  return `
    <div class="scope-signal-context-menu" data-scope-signal-context-menu hidden>
      <label>
        <span>Color</span>
        <input type="color" data-scope-context-color />
      </label>
      <label>
        <span>Radix</span>
        <select data-scope-context-radix>
          ${scopeRadixOptions.map((option) => `<option value="${escapeHtml(option.id)}">${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </label>
      <label class="scope-state-map-field">
        <span>State names</span>
        <input type="text" data-scope-context-state-map placeholder="0=IDLE, 1=RUN" />
      </label>
      <button type="button" data-scope-apply-context>Apply</button>
    </div>
  `;
}

function renderHdlScope(waveform, project = selectedProject()) {
  const workspace = ensureCompileCode(project);
  const allSignals = Array.isArray(waveform?.signals) ? waveform.signals : [];
  const filter = String(workspace.scopeFilter || "").trim().toLowerCase();
  const matchedSignals = filter
    ? allSignals.filter((signal) => String(signal.name || signal.reference || "").toLowerCase().includes(filter))
    : allSignals;
  const signals = matchedSignals.slice(0, 48);
  if (!allSignals.length) {
    return `
      <div class="compile-scope-empty">
        <strong>No waveform scope yet.</strong>
        <span>Run a Verilog/SystemVerilog design with a testbench that calls <code>$dumpfile</code> and <code>$dumpvars</code>.</span>
      </div>
    `;
  }
  if (!signals.length) {
    return `
      <div class="compile-scope-meta">
        <span>${escapeHtml(waveform.source || "waveform.vcd")}</span>
        <span>${allSignals.length} total signal${allSignals.length === 1 ? "" : "s"}</span>
      </div>
      ${renderScopeSignalControls(project, [])}
      <div class="compile-scope-empty">
        <strong>No matching signals.</strong>
        <span>Clear or change the signal filter to show waveform traces.</span>
      </div>
    `;
  }
  const left = 165;
  const zoom = normalizeScopeZoom(workspace.scopeZoom);
  const scopeView = normalizeScopeView(workspace.scopeView);
  const width = 760 * zoom;
  const rowHeight = 34;
  const top = 28;
  const height = top + signals.length * rowHeight + 28;
  const maxTime = Math.max(1, Number(waveform.maxTime) || Math.max(...signals.flatMap((signal) => (signal.changes || []).map((change) => Number(change.time) || 0)), 1));
  const unknownSignalCount = allSignals.filter((signal) =>
    (signal.changes || []).some((change) => /[xz]/i.test(String(change.value ?? "")))
  ).length;
  const transitionCount = allSignals.reduce((count, signal) => count + Math.max(0, (signal.changes || []).length - 1), 0);
  const gridRatios = zoom >= 4
    ? [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1]
    : [0, 0.25, 0.5, 0.75, 1];
  const grid = gridRatios.map((ratio) => {
    const x = left + ratio * width;
    const label = Math.round(maxTime * ratio);
    return `<line x1="${x.toFixed(1)}" x2="${x.toFixed(1)}" y1="18" y2="${height - 18}" class="scope-grid" /><text x="${x.toFixed(1)}" y="14" class="scope-time-label">${label}</text>`;
  }).join("");
  const rows = signals.map((signal, index) => {
    const y = top + index * rowHeight;
    const name = String(signal.name || signal.reference || `signal_${index + 1}`);
    const changes = Array.isArray(signal.changes) ? signal.changes : [];
    const scalar = Number(signal.width || 1) <= 1;
    const settings = scopeSignalSettings(project, signal, index);
    return `
      <g class="scope-row" data-scope-signal-key="${escapeHtml(settings.key)}">
        <text x="12" y="${y + 20}" class="scope-signal-label">${escapeHtml(name.length > 24 ? `${name.slice(0, 24)}...` : name)}</text>
        <line x1="${left}" x2="${left + width}" y1="${y + 27}" y2="${y + 27}" class="scope-row-line" />
        ${scalar
          ? renderScalarWaveSegments(changes, maxTime, y, left, width, settings.color)
          : `${renderBusWaveSegments(changes, maxTime, y, left, width, settings.color)}${renderBusWaveLabels(changes, maxTime, y, left, width, settings.radix, signal.width, settings.stateMap)}`}
      </g>
    `;
  }).join("");
  return `
    <div class="compile-scope-meta">
      <span>${escapeHtml(waveform.source || "waveform.vcd")}</span>
      <span>${signals.length}${signals.length !== allSignals.length ? ` of ${allSignals.length}` : ""} signal${allSignals.length === 1 ? "" : "s"}</span>
      <span>0 to ${escapeHtml(maxTime)} ${escapeHtml(waveform.timeScale || "ticks")}</span>
      <span>${transitionCount} transition${transitionCount === 1 ? "" : "s"}</span>
      ${unknownSignalCount ? `<span class="scope-unknown-badge">${unknownSignalCount} signal${unknownSignalCount === 1 ? "" : "s"} with X/Z</span>` : ""}
    </div>
    ${renderScopeSignalControls(project, signals)}
    <div class="compile-scope-scroll" data-scope-scroll>
      <svg class="compile-scope-svg ${scopeView === "fit" ? "is-scope-fit-width" : "is-scope-natural-width"}" style="${scopeView === "fit" ? "width:100%; min-width:0; max-width:none;" : `width:${left + width + 20}px; max-width:none;`}" viewBox="0 0 ${left + width + 20} ${height}" role="img" aria-label="HDL waveform scope">
        ${grid}
        ${rows}
      </svg>
    </div>
    ${renderScopeSignalContextMenu()}
  `;
}

function renderCompileScopePanel(project, file = activeCompileFile(project)) {
  if (!isHdlLanguage(file?.language)) return "";
  const waveform = activeCompileWaveform(project, file);
  return `
    <section class="compile-scope-panel" data-compile-scope-panel data-compile-output-panel="scope" aria-label="HDL signal scope">
      ${renderHdlScope(waveform, project)}
    </section>
  `;
}

function showCompileScope(project, file = activeCompileFile(project)) {
  if (!isHdlLanguage(file?.language)) {
    addCompileMessage(project, "No HDL scope is available for the active source yet.", "warning");
    return;
  }
  setCompilePanel(project, "scope");
  renderSectionContent(project);
}

async function copyCompileOutput(project, file = activeCompileFile(project)) {
  const workspace = ensureCompileCode(project);
  const text = file?.lastResult?.terminal || workspace?.terminal || compileTerminalStatus || "";
  if (!text.trim()) {
    addCompileMessage(project, "There is no terminal output to copy yet.", "warning");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    addCompileMessage(project, "Terminal output copied to the clipboard.", "success");
    setStatus("Terminal output copied.");
  } catch {
    addCompileMessage(project, "Terminal output could not be copied by this browser.", "warning");
    setStatus("Terminal output could not be copied.");
  }
}

function clearCompileOutput(project, file = activeCompileFile(project)) {
  const workspace = ensureCompileCode(project);
  if (file?.lastResult) file.lastResult.terminal = "";
  if (workspace) workspace.terminal = "";
  compileTerminalStatus = "";
  updateCompileTerminalPanel(project, file);
  addCompileMessage(project, "Terminal output cleared.", "info");
  setStatus("Terminal output cleared.");
  scheduleAutosave();
}

function richBlocksForCompileAppend(project, destination) {
  const source = destination.nodeRef || destination.sectionRef || project;
  const existingRich = destination.nodeRef || destination.sectionRef
    ? source.richDescription
    : source.summaryRich;
  const existingText = destination.nodeRef || destination.sectionRef
    ? source.description || ""
    : source.summary || "";
  return richBlocksFromValue(existingRich, existingText).filter((block) => {
    if (block.type !== "paragraph") return true;
    return Boolean(String(block.text || "").trim() || block.html);
  });
}

function codeBlockForCompileFile(file) {
  return {
    code: normalizeCodeText(file?.code || "", "source"),
    language: normalizeCodeLanguage(file?.language || detectCodeLanguage(file?.code || "", file?.fileName || "")),
    pasteMode: "source",
    type: "code"
  };
}

function compileFileDirtyLabel(file) {
  if (!file) return "";
  return file.dirty ? "*" : "\u2713";
}

function renderCompileConsolePanel(project, file = activeCompileFile(project)) {
  const workspace = ensureCompileCode(project);
  const terminal = file?.lastResult?.terminal || workspace.terminal || compileTerminalStatus || "Compiler output will appear here after you save or run a source file.";
  return `
    <section class="compile-terminal-panel" data-compile-terminal-panel data-compile-output-panel="console" aria-label="Compiler console output">
      <div class="compile-terminal-heading">
        <span class="compile-terminal-title"><span aria-hidden="true" class="terminal-dot"></span> Console</span>
        <span class="compile-terminal-controls">
          <button type="button" data-compile-copy-output>Copy output</button>
          <button type="button" data-compile-clear-output>Clear output</button>
        </span>
      </div>
      <pre class="compile-terminal" data-compile-terminal tabindex="0" role="log" aria-live="polite">${escapeHtml(terminal)}</pre>
    </section>
  `;
}

function renderCompileMessagesPanel(workspace = {}) {
  return `
    <section class="compile-messages-panel" data-compile-output-panel="messages" aria-label="Compile messages log">
      <div class="compile-terminal-heading">
        <span class="compile-terminal-title">Messages log</span>
        <button type="button" data-compile-clear-messages>Clear log</button>
      </div>
      <div class="compile-messages-log" data-compile-messages>${renderCompileMessages(workspace)}</div>
    </section>
  `;
}

function compilePanelTabs(project, file = activeCompileFile(project)) {
  const workspace = ensureCompileCode(project);
  const activePanel = activeCompilePanel(project, file);
  const dockUnlocked = Boolean(workspace.outputDockUnlocked);
  const messageCount = Array.isArray(workspace.messages) ? workspace.messages.length : 0;
  const tabs = [
    { id: "console", label: "Console" },
    { id: "messages", label: messageCount ? `Messages (${messageCount})` : "Messages" },
    { id: "terminal", label: "Terminal" },
    ...(isHdlLanguage(file?.language) ? [{ id: "scope", label: "Scope" }] : [])
  ];
  return `
    <div
      class="compile-panel-tabs"
      role="tablist"
      aria-label="Compile output views"
      data-compile-output-drag
      title="${dockUnlocked ? "Drag this strip to move the output panel" : "Unlock the output panel to move it"}"
    >
      <button
        class="compile-output-dock-toggle compile-output-dock-toggle-inline"
        type="button"
        data-compile-toggle-output-dock
        aria-pressed="${dockUnlocked ? "true" : "false"}"
        title="${dockUnlocked ? "Lock output panel" : "Unlock output panel"}"
      ><span aria-hidden="true">${dockUnlocked ? "L" : "M"}</span></button>
      ${tabs.map((tab) => `
        <button
          class="${tab.id === activePanel ? "active" : ""}"
          type="button"
          role="tab"
          aria-selected="${tab.id === activePanel ? "true" : "false"}"
          data-compile-open-panel="${tab.id}"
        >${escapeHtml(tab.label)}</button>
      `).join("")}
      <button
        class="compile-panel-tool-button${workspace.stdinWindowOpen ? " is-active" : ""}"
        type="button"
        data-compile-toggle-stdin
        title="Open Program input for the active source"
        aria-pressed="${workspace.stdinWindowOpen ? "true" : "false"}"
        ${file ? "" : "disabled"}
      >Input</button>
    </div>
  `;
}

function renderCompileStdinWindow(project, file = activeCompileFile(project)) {
  const workspace = ensureCompileCode(project);
  if (!workspace.stdinWindowOpen || !file) return "";
  const position = workspace.stdinWindowPosition || {};
  const hasPosition = Number.isFinite(Number(position.x)) && Number.isFinite(Number(position.y));
  const style = hasPosition
    ? ` style="left:${Math.max(8, Number(position.x))}px; top:${Math.max(8, Number(position.y))}px; right:auto;"`
    : "";
  return `
    <section class="compile-stdin-window" aria-label="Program input window"${style}>
      <div class="compile-stdin-window-heading" data-compile-stdin-drag title="Drag to move Program input">
        <div>
          <strong>Program input</strong>
          <span>${escapeHtml(file.fileName || "Active source")}</span>
        </div>
        <button class="compile-mini-window-close" type="button" data-compile-toggle-stdin aria-label="Close Program input">&times;</button>
      </div>
      <textarea
        data-compile-field="stdin"
        spellcheck="false"
        rows="10"
        placeholder="Input passed to stdin when this source runs"
      >${escapeHtml(file.stdin || "")}</textarea>
    </section>
  `;
}

function compileFileTypeOptions(file = {}) {
  const selected = normalizeCompileFileType(file.fileType || file.type, file);
  const options = isHdlLanguage(file.language)
    ? [
      ["design", "HDL design"],
      ["testbench", "HDL testbench"],
      ["include", "HDL include"],
      ["support", "Support file"]
    ]
    : [
      ["source", "Program source"],
      ["header", "Header / include"],
      ["include", "Include file"],
      ["support", "Support file"]
    ];
  return options.map(([value, label]) => `
    <option value="${escapeHtml(value)}"${value === selected ? " selected" : ""}>${escapeHtml(label)}</option>
  `).join("");
}

function renderCompileFileDetailsWindow(project, file = activeCompileFile(project)) {
  if (!file) return "";
  const workspace = ensureCompileCode(project);
  if (!workspace.showFileDetails) return "";
  const position = workspace.fileDetailsPosition || {};
  const hasPosition = Number.isFinite(Number(position.x)) && Number.isFinite(Number(position.y));
  const style = hasPosition
    ? ` style="left:${Math.max(8, Number(position.x))}px; top:${Math.max(8, Number(position.y))}px; right:auto;"`
    : "";
  const status = file.dirty ? "Unsaved changes" : file.savedAt ? "Saved" : "Not saved to disk yet";
  return `
    <section class="compile-file-details-window" aria-label="Source file details"${style}>
      <div class="compile-file-details-heading" data-compile-file-details-drag title="Drag to move file details">
        <div>
          <strong>File details</strong>
          <span>${escapeHtml(file.fileName || "Active source")}</span>
        </div>
        <button class="compile-mini-window-close" type="button" data-compile-toggle-file-details aria-label="Close file details">&times;</button>
      </div>
      <div class="compile-file-details-grid">
        <label>
          <span>Name</span>
          <input type="text" data-compile-field="fileNameOnly" value="${escapeHtml(file.fileName || "")}" />
        </label>
        <label>
          <span>Type</span>
          <select data-compile-field="fileType">${compileFileTypeOptions(file)}</select>
        </label>
        <label class="wide-field">
          <span>Workspace path</span>
          <input type="text" data-compile-field="fileName" value="${escapeHtml(compileFileAbsolutePath(project, file))}" placeholder="${escapeHtml(compileFileAbsolutePath(project, { ...file, relativePath: defaultCodeFileName(file.language) }))}" />
        </label>
        <label>
          <span>Language</span>
          <select data-compile-field="language">${compileLanguageOptions(file.language)}</select>
        </label>
        <label>
          <span>${isHdlLanguage(file.language) ? "HDL role" : "Source role"}</span>
          ${isHdlLanguage(file.language)
            ? `<select data-compile-field="role">${compileRoleOptions(file.role)}</select>`
            : `<input type="text" value="Program source" disabled />`}
        </label>
        <label class="wide-field">
          <span>Save status</span>
          <input type="text" value="${escapeHtml(status)}${file.savedAt ? ` - ${escapeHtml(new Date(file.savedAt).toLocaleString())}` : ""}" disabled />
        </label>
      </div>
    </section>
  `;
}

function renderCompileActiveOutputPanel(project, file = activeCompileFile(project)) {
  const workspace = ensureCompileCode(project);
  const activePanel = activeCompilePanel(project, file);
  if (activePanel === "messages") return renderCompileMessagesPanel(workspace);
  if (activePanel === "terminal") return renderCompileSystemTerminal(workspace, project);
  if (activePanel === "scope") return renderCompileScopePanel(project, file);
  return renderCompileConsolePanel(project, file);
}

function renderCompileMenuItems(items = []) {
  return items.map((item) => {
    if (item.separator) return `<span class="compile-ide-menu-separator" role="separator"></span>`;
    return `
      <button type="button" data-compile-menu-action="${escapeHtml(item.action)}"${item.disabled ? " disabled" : ""}>
        <span>${escapeHtml(item.label)}</span>
        ${item.shortcut ? `<small>${escapeHtml(item.shortcut)}</small>` : ""}
      </button>
    `;
  }).join("");
}

function renderCompileIdeMenuBar(project, file = activeCompileFile(project)) {
  const hasFile = Boolean(file);
  const hdlFile = isHdlLanguage(file?.language);
  const menus = [
    {
      label: "File",
      items: [
        { label: "New code file", action: "new-file" },
        { label: "New folder", action: "new-folder" },
        { label: "Add testbench", action: "add-testbench" },
        { label: "Add UVM-style testbench", action: "add-uvm-testbench" },
        { separator: true },
        { label: "Import files", action: "import-files" },
        { label: "Import directory", action: "import-directory" },
        { separator: true },
        { label: "Save source", action: "save-source", shortcut: "Ctrl+S", disabled: !hasFile },
        { label: "Save source as...", action: "save-source-as", disabled: !hasFile },
        { label: "Save project", action: "save-project" }
      ]
    },
    {
      label: "Edit",
      items: [
        { label: "Beautify source", action: "beautify", disabled: !hasFile },
        { label: "Append code to section", action: "append-code", disabled: !hasFile },
        { separator: true },
        { label: "Copy console output", action: "copy-output", disabled: !hasFile },
        { label: "Clear console output", action: "clear-output", disabled: !hasFile },
        { label: "Clear messages", action: "clear-messages" },
        { label: "Clear terminal", action: "clear-terminal" }
      ]
    },
    {
      label: "View",
      items: [
        { label: "Console", action: "view-console" },
        { label: "Messages", action: "view-messages" },
        { label: "Terminal", action: "view-terminal" },
        { label: "Scope", action: "view-scope", disabled: !hdlFile },
        { separator: true },
        { label: "Preferences", action: "preferences" },
        { separator: true },
        { label: "Project preview", action: "project-preview" },
        { label: "Portfolio preview", action: "portfolio-preview" }
      ]
    },
    {
      label: "Project",
      items: [
        { label: "Save project", action: "save-project" },
        { label: "View project preview", action: "project-preview" },
        { label: "Append code to selected section", action: "append-code", disabled: !hasFile }
      ]
    },
    {
      label: "Build",
      items: [
        { label: "Compile", action: "compile", disabled: !hasFile },
        { label: "Build project", action: "build", disabled: !hasFile },
        { label: "Run", action: "run", disabled: !hasFile || hdlFile },
        { label: "Simulate", action: "simulate", disabled: !hasFile || !hdlFile }
      ]
    },
    {
      label: "Debug",
      items: [
        { label: "Show output", action: "show-output", disabled: !hasFile },
        { label: "Show scope", action: "show-scope", disabled: !hasFile || !hdlFile },
        { label: "Open terminal", action: "view-terminal" },
        { label: "Open messages", action: "view-messages" }
      ]
    },
    {
      label: "Tools",
      items: [
        { label: "Check compilers", action: "check-tools" },
        { label: "Install active toolchain", action: "install-tools", disabled: !hasFile },
        { label: "Preferences", action: "preferences" }
      ]
    },
    {
      label: "Help",
      items: [
        { label: "Builder guide", action: "builder-guide" },
        { label: "Check updates", action: "check-updates" }
      ]
    }
  ];

  return `
    <div class="compile-ide-menu-bar" aria-label="Compile code menu bar">
      ${menus.map((menu) => `
        <div class="compile-ide-menu">
          <button class="compile-ide-menu-button" type="button" aria-haspopup="true">
            ${escapeHtml(menu.label)}
          </button>
          <div class="compile-ide-dropdown" role="menu">
            ${renderCompileMenuItems(menu.items)}
          </div>
        </div>
      `).join("")}
      <strong>${escapeHtml(project.title || "Project workspace")}</strong>
    </div>
  `;
}

function renderCompileTreeContextMenu() {
  const items = [
    { label: "New code file", action: "new-file" },
    { label: "New folder", action: "new-folder" },
    { label: "Add testbench", action: "add-testbench" },
    { label: "Add UVM-style testbench", action: "add-uvm-testbench" },
    { label: "Import files", action: "import-files" },
    { label: "Import directory", action: "import-directory" },
    { separator: true },
    { label: "Move selected file", action: "move-tree-file" },
    { label: "Delete selected", action: "delete-tree-target" }
  ];
  return `
    <div class="compile-tree-context-menu" data-compile-tree-context-menu hidden>
      ${items.map((item) => item.separator
        ? `<span class="compile-ide-menu-separator" role="separator"></span>`
        : `<button type="button" data-compile-menu-action="${escapeHtml(item.action)}">${escapeHtml(item.label)}</button>`).join("")}
    </div>
  `;
}

function renderCompileAppendChooser(project, workspace = {}) {
  if (!workspace.appendPanelOpen) return "";
  const selectedDestination = selectedCompileAppendDestination(project);
  return `
    <section class="compile-append-panel" aria-label="Append code to project section">
      <div class="compile-append-window-title">
        <div>
          <strong>Append code to project</strong>
          <span>${escapeHtml(selectedDestination?.label || "Choose a destination")}</span>
        </div>
        <button class="compile-mini-window-close" type="button" data-compile-toggle-append aria-label="Close append chooser">&times;</button>
      </div>
      <div class="compile-append-target-browser">
        ${renderCompileAppendTree(project, workspace.appendTargetId)}
      </div>
      <div class="compile-append-actions">
        <button type="button" data-compile-append-code>Append code</button>
        <button type="button" data-compile-toggle-append>Close</button>
      </div>
    </section>
  `;
}

function renderCompileCodeSection(project) {
  const workspace = ensureCompileCode(project);
  const activeFile = activeCompileFile(project);
  const activePanel = activeCompilePanel(project, activeFile);
  const showSourceCommandBar = activePanel !== "scope";
  const dockUnlocked = Boolean(workspace.outputDockUnlocked);
  const dockPosition = workspace.outputDockPosition || { x: 72, y: 120 };
  const dockSize = workspace.outputDockSize || { width: 900, height: 430 };
  const outputHeight = normalizeCompileOutputHeight(workspace.outputDockHeight);
  const sidebarWidth = normalizeCompileSidebarWidth(workspace.sidebarWidth);
  const compileTheme = compileThemeIds.includes(builderPreferences.compileTheme)
    ? builderPreferences.compileTheme
    : defaultBuilderPreferences.compileTheme;
  const dockStyle = dockUnlocked
    ? ` style="left:${Math.max(8, Number(dockPosition.x) || 72)}px; top:${Math.max(8, Number(dockPosition.y) || 120)}px; width:${normalizeCompileFloatingWidth(dockSize.width)}px; height:${normalizeCompileFloatingHeight(dockSize.height)}px;"`
    : ` style="--compile-output-height:${outputHeight}px;"`;
  return `
    <div class="compile-code-workspace" data-compile-workspace data-compile-theme="${escapeHtml(compileTheme)}" style="--compile-sidebar-width:${sidebarWidth}px;">
      ${renderCompileIdeMenuBar(project, activeFile)}
      <aside class="compile-code-sidebar" aria-label="Compile code files">
        <div class="compile-code-sidebar-heading">
          <div>
            <h3>Solution Explorer</h3>
            <small>${workspace.files.length} source file${workspace.files.length === 1 ? "" : "s"}</small>
          </div>
          <div class="compile-code-mini-actions" aria-label="Solution Explorer quick actions">
            <button type="button" data-compile-add title="Add code file" aria-label="Add code file">+</button>
            <button type="button" data-compile-add-directory title="Add folder" aria-label="Add folder">F</button>
            <button type="button" data-compile-import title="Import files" aria-label="Import files">I</button>
          </div>
        </div>
        <div class="compile-code-workspace-tree" aria-label="Project workspace tree">
          ${renderCompileWorkspaceTree(workspace, project.title || "Project workspace")}
        </div>
        ${renderCompileTreeContextMenu()}
      </aside>
      <div class="compile-sidebar-resize-handle" data-compile-sidebar-resize title="Drag to resize Solution Explorer"></div>

      <section class="compile-code-main" aria-label="Compile code editor">
        ${compileEditorTabs(project, activeFile)}
        ${activeFile ? `
          ${compileFileBreadcrumbs(activeFile)}
          <div class="compile-code-editor-grid compile-code-editor-grid-single">
            <section class="compile-code-preview-panel compile-code-active-panel" aria-label="Active syntax highlighted code editor">
              <div class="compile-code-active-editor">
                <pre class="compile-code-preview" aria-label="Code editor"><code data-compile-preview data-compile-active-editor data-compile-field="code" contenteditable="true" spellcheck="false" role="textbox" aria-multiline="true">${tokenizedCodeHtml(activeFile.code || "", activeFile.language)}</code></pre>
              </div>
            </section>
          </div>
          <div class="compile-code-command-bar${showSourceCommandBar ? "" : " is-hidden-in-scope"}">
            <button type="button" data-compile-save>Save source</button>
            <button type="button" data-compile-beautify>Beautify</button>
            <button type="button" data-compile-toggle-file-details aria-pressed="${workspace.showFileDetails ? "true" : "false"}">${workspace.showFileDetails ? "Hide details" : "File details"}</button>
            <button type="button" data-compile-compile>Compile</button>
            <button type="button" data-compile-build>Build project</button>
            ${isHdlLanguage(activeFile.language)
              ? `<button type="button" data-compile-simulate>Simulate</button>`
              : `<button type="button" data-compile-run>Run</button>`}
            <button class="compile-output-button" type="button" data-compile-show-output title="Open the terminal output for this source"><span class="compile-command-icon" aria-hidden="true">&gt;_</span><span>Show output</span></button>
            ${isHdlLanguage(activeFile.language) ? `<button class="compile-output-button" type="button" data-compile-show-scope title="Open the HDL waveform scope"><span class="compile-command-icon" aria-hidden="true">~</span><span>Show scope</span></button>` : ""}
            <button class="compile-output-button compile-append-icon-button" type="button" data-compile-toggle-append title="Append this source to a project section" aria-label="Append this source to a project section"><span class="compile-command-icon" aria-hidden="true">&gt;&gt;</span></button>
            <button class="danger-icon" type="button" data-compile-delete>Delete source</button>
          </div>
          ${renderCompileAppendChooser(project, workspace)}
        ` : `
          <div class="compile-code-empty">
            <h3>No compile file selected</h3>
            <p>Add a source file for C, C++, SystemVerilog, LTspice, Java, JavaScript, Python, or HTML.</p>
          </div>
        `}
        <section class="compile-output-workbench ${dockUnlocked ? "is-output-dock-unlocked" : "is-output-dock-locked"}" aria-label="Compile output workbench"${dockStyle}>
          <div class="compile-output-resize-handle" data-compile-output-resize title="Drag to resize output panel"></div>
          ${compilePanelTabs(project, activeFile)}
          <div class="compile-output-dock">
            ${renderCompileActiveOutputPanel(project, activeFile)}
          </div>
          ${compileIdeStatusBar(project, activeFile)}
        </section>
      </section>
      ${renderCompileStdinWindow(project, activeFile)}
      ${renderCompileFileDetailsWindow(project, activeFile)}
    </div>
  `;
}

function isCompileCodeBuilderSection(section = {}) {
  const label = projectSearchText(`${section.id || ""} ${section.title || ""}`);
  return /\bcompile\s+code\b/.test(label) || label.includes("compile-code");
}

function activeSectionIsCompileCode(project = selectedProject()) {
  if (activeSectionId === "compile-code") return true;
  if (!String(activeSectionId || "").startsWith("custom:")) return false;
  const sectionId = activeSectionId.slice("custom:".length);
  const section = (project?.sections || []).find((item) => item.id === sectionId);
  return Boolean(section && isCompileCodeBuilderSection(section));
}

function renderSectionContent(project) {
  if (!project) {
    projectDialog?.classList.remove("is-compile-code-active");
    sectionContent.hidden = true;
    sectionContent.innerHTML = "";
    return;
  }

  const section = sectionOptions(project).find((item) => item.id === activeSectionId) || standardSections[0];
  const customSection = section.id.startsWith("custom:")
    ? (project.sections || []).find((item) => item.id === section.id.replace("custom:", ""))
    : null;
  const isCompileSection = section.id === "compile-code" || Boolean(customSection && isCompileCodeBuilderSection(customSection));
  projectDialog?.classList.toggle("is-compile-code-active", isCompileSection);
  const isOverview = section.id === "brief";
  projectFields.hidden = !isOverview;
  sectionContent.hidden = isOverview;
  if (isOverview) {
    sectionContent.innerHTML = "";
    return;
  }

  if (section.id === "compile-code") {
    sectionContent.innerHTML = renderCompileCodeSection(project);
    return;
  }

  if (section.id.startsWith("custom:")) {
    const customSectionId = section.id.replace("custom:", "");
    sectionContent.innerHTML = isCompileCodeBuilderSection(customSection)
      ? renderCompileCodeSection(project)
      : renderCustomSection(project, customSectionId);
    requestAnimationFrame(() => populateRichEditors(sectionContent));
    return;
  }

  sectionContent.innerHTML = renderEmptyDynamicSectionPrompt("section");
}

function fullPortfolioPreviewHtml() {
  return fullPortfolioPreviewHtmlExact();
}

function previewValue(source, key, fallback) {
  return source && Object.prototype.hasOwnProperty.call(source, key) ? source[key] : fallback;
}

function fullPortfolioPreviewHtmlExact(dataOverride = null) {
  const baseHref = `${window.location.origin}/`;
  const parsedGlobals = dataOverride ? null : parsedPortfolioGlobals();
  const siteContent = normalizeSiteContent(previewValue(dataOverride, "siteContent", parsedGlobals?.siteContent || {}));
  const profile = normalizeProfile(previewValue(dataOverride, "profile", parsedGlobals?.profile || {}));
  const fieldStyles = normalizeFieldStyles(previewValue(dataOverride, "fieldStyles", parsedGlobals?.fieldStyles || {}));
  const profileRich = previewValue(dataOverride, "profileRich", parsedGlobals?.profileRich || {});
  const siteContentRich = previewValue(dataOverride, "siteContentRich", parsedGlobals?.siteContentRich || {});
  const ownerName = profile.displayName || "Portfolio";
  const portfolioLabel = profile.portfolioLabel || "Portfolio";
  const previewDataObject = {
    categories: previewValue(dataOverride, "categories", parsedGlobals?.categories || []),
    fieldStyles,
    funFacts: previewValue(dataOverride, "funFacts", parsedGlobals?.funFacts || []),
    funFactsRich: previewValue(dataOverride, "funFactsRich", parsedGlobals?.funFactsRich || null),
    profile,
    profileRich,
    projects: previewValue(dataOverride, "projects", savedPortfolioCatalog.projects || []),
    siteContent,
    siteContentRich,
    siteSections: previewValue(dataOverride, "siteSections", parsedGlobals?.siteSections || [])
  };
  const previewData = JSON.stringify(previewDataObject).replaceAll("</", "<\\/");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="${baseHref}" />
    <meta name="description" content="A portfolio website built with OMB Portfolio Builder for projects, documents, diagrams, source code, tests, links, and profile information." />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="${escapeHtml(ownerName)}" />
    <meta name="portfolio-ai-endpoint" content="https://omb-portfolio-ai.maurice-baraza-otieno.workers.dev/api/portfolio-ai" />
    <title>${escapeHtml(ownerName)} | ${escapeHtml(portfolioLabel)}</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header" id="top">
      <a class="brand" href="#top" aria-label="Go to top">
        <span class="brand-lockup" aria-hidden="true">
          <img class="brand-icon" alt="" hidden />
          <span class="omb-engraving">${escapeHtml(profile.brandText || "Portfolio")}</span>
        </span>
        <span>
          <strong${plainFieldStyleAttribute(fieldStyles, "profile-display-name")}>${renderRichFieldContent(profileRich.displayName, ownerName)}</strong>
          <small${plainFieldStyleAttribute(fieldStyles, "profile-portfolio-label")}>${renderRichFieldContent(profileRich.portfolioLabel, portfolioLabel)}</small>
        </span>
      </a>

      <div class="header-right">
        <nav class="site-nav" aria-label="Primary navigation">
          <a href="#ask-ai">Ask AI</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a class="header-avatar" href="#contact" aria-label="Go to contact information" hidden>
          <img alt="" />
        </a>
      </div>
    </header>

    <main>
      <section class="hero" aria-labelledby="hero-title">
        <img class="hero-image" alt="" hidden />
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="eyebrow"${plainFieldStyleAttribute(fieldStyles, "site-hero-eyebrow")}>${renderRichFieldContent(siteContentRich.heroEyebrow, siteContent.heroEyebrow)}</p>
          <h1 id="hero-title"${plainFieldStyleAttribute(fieldStyles, "site-hero-title")}>${renderRichFieldContent(siteContentRich.heroTitle, siteContent.heroTitle)}</h1>
          <p class="hero-copy"${plainFieldStyleAttribute(fieldStyles, "site-hero-copy")}>${renderRichFieldContent(siteContentRich.heroCopy, siteContent.heroCopy)}</p>
          <div class="hero-actions">
            <a class="button primary" href="#projects">View projects</a>
            <a class="button secondary" href="#resume" hidden>View resume</a>
            <a class="button secondary" href="#" target="_blank" rel="noreferrer" hidden>GitHub profile</a>
            <a class="ai-jump-link" href="#ask-ai" aria-label="Jump to the portfolio AI assistant">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v3m-5 7H4m16 0h-3M7.5 7.5 5.4 5.4m11.1 2.1 2.1-2.1M8 10h8v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" />
                <path d="M10 13h.01M14 13h.01M10 16h4" />
              </svg>
              <span>Ask AI</span>
            </a>
          </div>
        </div>
      </section>

      <section class="fun-facts-section" id="fun-facts-callout" aria-label="Fun facts" hidden></section>

      <section class="builder-download-section" aria-label="Download portfolio builder">
        <a class="builder-download-link" href="https://github.com/otienomaurice/omb-portfolio-builder/releases/latest/download/OMB-Portfolio-Builder-Setup-latest-x64.exe" download>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3v11m0 0 4-4m-4 4-4-4" />
            <path d="M5 17v2h14v-2" />
          </svg>
          <span>Download builder application</span>
        </a>
      </section>

      <section class="summary-band" aria-label="Portfolio highlights">
        <div class="metric">
          <strong id="project-count">0</strong>
          <span>presented projects</span>
        </div>
        <div class="metric">
          <strong id="project-track-count">0 Tracks</strong>
          <span id="project-track-labels">project categories</span>
        </div>
        <div class="metric">
          <strong>Artifacts</strong>
          <span>source, diagrams, and reports</span>
        </div>
      </section>

      <section class="section" id="projects" aria-labelledby="projects-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Selected work</p>
            <h2 id="projects-title">Engineering Projects</h2>
          </div>
          <label class="search-wrap" for="project-search">
            <span>Search</span>
            <input id="project-search" type="search" placeholder="LTspice, PCB, frequency response, Verilog..." />
          </label>
        </div>

        <div class="filters" id="project-filters" aria-label="Project filters">
          <button class="filter-button active" type="button" data-filter="all">All</button>
        </div>

        <div class="project-grid" id="project-grid" aria-live="polite"></div>
      </section>

      <section class="section resume-section" id="resume" aria-labelledby="resume-title" hidden>
        <div class="section-heading">
          <div>
            <p class="eyebrow">Professional profile</p>
            <h2 id="resume-title">Resume</h2>
          </div>
          <div class="resume-actions">
            <a class="button primary" href="#" target="_blank" rel="noreferrer">Open PDF</a>
            <a class="button secondary" href="#" download>Download</a>
          </div>
        </div>

        <div class="resume-viewer">
          <object data="" type="application/pdf">
            <p>
              View the resume as a PDF:
              <a href="#" target="_blank" rel="noreferrer">open resume</a>.
            </p>
          </object>
        </div>
      </section>

      <div id="dynamic-sections"></div>

      <section class="section process" id="process" aria-labelledby="process-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Engineering approach</p>
            <h2 id="process-title">Built To Be Reviewed</h2>
          </div>
        </div>
        <div class="process-grid">
          <article>
            <span class="step">01</span>
            <h3>Problem and constraints</h3>
            <p>Each project begins with the design objective, constraints, technical tradeoffs, and success criteria.</p>
          </article>
          <article>
            <span class="step">02</span>
            <h3>Build artifacts</h3>
            <p>Repositories, schematics, diagrams, documents, test notes, and demonstrations are organized for review.</p>
          </article>
          <article>
            <span class="step">03</span>
            <h3>Results and reflection</h3>
            <p>Results, lessons learned, and next design iterations show how each project developed technically.</p>
          </article>
        </div>
      </section>

      <section class="contact-band" id="contact" aria-labelledby="contact-title" hidden>
        <img class="profile-photo" alt="" hidden />
        <div class="contact-content">
          <div>
            <p class="eyebrow">Contact</p>
            <h2 id="contact-title"${plainFieldStyleAttribute(fieldStyles, "profile-display-name")}>${renderRichFieldContent(profileRich.displayName, ownerName)}</h2>
            <p class="contact-intro"${plainFieldStyleAttribute(fieldStyles, "profile-contact-intro")}>Add contact details in the builder.</p>
            <div class="contact-details"></div>
          </div>
          <div class="contact-links"></div>
        </div>
        <div class="ai-assistant-panel" id="ask-ai" aria-labelledby="ai-assistant-title">
          <div class="ai-assistant-console" aria-label="AI portfolio assistant">
            <h2 id="ai-assistant-title">Ask My Portfolio</h2>
            <div class="ai-assistant-status sr-only" id="ai-assistant-status" aria-live="polite"></div>
            <div class="ai-assistant-log" id="ai-assistant-log" aria-live="polite" aria-label="AI chat messages"></div>
            <form class="ai-assistant-form" id="ai-assistant-form">
              <label class="sr-only" for="ai-assistant-input">Ask the portfolio assistant</label>
              <input id="ai-assistant-input" type="text" autocomplete="off" placeholder="Ask about projects, files, links, tools, or engineering concepts..." />
              <button type="submit">Ask</button>
            </form>
            <button class="ai-clear-chat" id="ai-clear-chat" type="button">Clear chat</button>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span>&copy; <span id="year">${new Date().getFullYear()}</span> ${escapeHtml(ownerName)}</span>
      <a href="#top">Back to top</a>
    </footer>

    <script>window.__PORTFOLIO_CATALOG__ = ${previewData};<\/script>
    <script src="electronics-search.js"><\/script>
    <script src="script.js"><\/script>
  </body>
</html>`;
}

function renderPreview() {
  portfolioPreviewFrame.srcdoc = fullPortfolioPreviewHtmlExact();
}

async function openPortfolioPreview() {
  if (!(await saveAllSections({ refreshOpenPreviews: false }))) return;
  renderPreview();
  document.body.classList.add("full-window-open");
  portfolioPreviewDialog.showModal();
}

function renderAll() {
  ensureSiteSections();
  if (!selectedProjectId && catalog.projects.length) selectedProjectId = catalog.projects[0].id;
  const project = selectedProject();
  if (project && !sectionOptions(project).some((section) => section.id === activeSectionId)) {
    activeSectionId = "brief";
  }
  renderFunFactsEditor();
  renderSiteContentEditor();
  renderProfileEditor();
  renderSiteSectionList();
  renderTree();
  renderFields(project);
  renderSectionTabs(project);
  renderProjectViewTabs(project);
  renderSectionContent(project);
  renderDetachedProjectViewWindows();
  if (portfolioPreviewDialog?.open) renderPreview();
  updateBuilderWorkflow();
}

function updateProjectField(field, value) {
  const project = selectedProject();
  if (!project) return;

  let needsChromeRender = false;
  let statusMessage = "Unsaved local changes.";
  if (field === "focus") {
    project.focus = value.split(",").map((item) => item.trim()).filter(Boolean);
  } else if (field === "summary") {
    const limited = limitWords(value, 1000);
    project.summary = limited;
    if (limited !== value && document.activeElement?.dataset?.field === "summary") {
      document.activeElement.value = limited;
      statusMessage = "Project overview is limited to 1000 words.";
    }
  } else if (field === "id") {
    const nextId = slugify(value);
    if (!nextId) return;
    project.id = nextId;
    selectedProjectId = nextId;
    needsChromeRender = true;
  } else if (field === "status") {
    project.status = normalizeProjectStatus(value);
    needsChromeRender = true;
  } else if (field === "showStatusOnPortfolio") {
    project.showStatusOnPortfolio = Boolean(value);
    needsChromeRender = true;
  } else {
    project[field] = value;
    needsChromeRender = ["title", "category", "status"].includes(field);
  }

  if (field === "title") projectWindowTitle.textContent = value || "Untitled project";
  setStatus(statusMessage);
  scheduleAutosave();
  if (needsChromeRender) {
    scheduleChromeRender();
  } else {
    schedulePreviewRender();
  }
}

function renameSelectedProject() {
  const project = selectedProject();
  if (!project) return;
  projectTitleMenu.hidden = true;
  beginTitleRename();
}

function projectMetaRows(project) {
  if (!project) return [];
  const category = categoryById(project.category);
  const template = projectTemplateFor(project);
  const savedProject = (savedPortfolioCatalog.projects || []).find((item) => item.id === project.id);
  const design = project.design || {};
  const designFileCount = [
    ...(design.brief?.files || []),
    ...(design.documentation?.files || []),
    ...(design.documentation?.references || []),
    ...(design.documentation?.mathAnalysis || []),
    ...(design.simulation?.files || []),
    ...(design.simulation?.results || [])
  ].length;
  const uploadedFileCount = [
    ...(project.documents || []),
    ...(project.tests || []),
    ...(project.pcbs || []),
    ...(project.media || []),
    ...(project.links || []),
    ...(project.sections || []).flatMap((section) => section.items || [])
  ].filter((item) => item.url || item.artifact).length + designFileCount;
  return [
    ["Title", project.title || "Untitled project"],
    ["Project ID / folder", project.id || "Not assigned"],
    ["Category", category.label || project.category || "Not assigned"],
    ["Status", project.status || "Draft"],
    ["Status visibility", project.showStatusOnPortfolio === false ? "Hidden from portfolio" : "Visible on portfolio"],
    ["Appearance", template.label || project.templateLabel || "No appearance - white project layout"],
    ["Appearance ID", project.templateId || "None"],
    ["Portfolio preview", savedProject ? "Saved into parsed portfolio preview" : "Not yet saved into portfolio preview"],
    ["Custom sections", String((project.sections || []).length)],
    ["Project files / links", String(uploadedFileCount)],
    ["Tools", String((project.tools || []).length)],
    ["Languages", String((project.languages || []).length)],
    ["Last parsed", savedProject?.portfolioView?.builtAt ? new Date(savedProject.portfolioView.builtAt).toLocaleString() : "Not parsed yet"]
  ];
}

function openProjectMetaDetails() {
  const project = selectedProject();
  if (!project) return;
  projectTitleMenu.hidden = true;
  projectMetaTitle.textContent = project.title || "Project details";
  projectMetaGrid.innerHTML = projectMetaRows(project).map(([label, value]) => `
    <article${label === "Status" ? ' class="project-meta-status-card"' : ""}>
      <span>${label}</span>
      ${label === "Status" ? `
        <select data-meta-status>
          ${projectStatusOptions.map((option) => `<option value="${escapeHtml(option)}"${option === normalizeProjectStatus(project.status) ? " selected" : ""}>${escapeHtml(option)}</option>`).join("")}
        </select>
      ` : label === "Status visibility" ? `
        <label class="project-meta-status-toggle">
          <input type="checkbox" data-meta-status-visible${project.showStatusOnPortfolio === false ? "" : " checked"}>
          <strong>${project.showStatusOnPortfolio === false ? "Hidden from portfolio" : "Visible on portfolio"}</strong>
        </label>
      ` : `<strong>${value}</strong>`}
    </article>
  `).join("");
  if (!projectMetaDialog.open) projectMetaDialog.showModal();
}

function selectTitleText() {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(projectWindowTitle);
  selection.removeAllRanges();
  selection.addRange(range);
}

function beginTitleRename() {
  const project = selectedProject();
  if (!project) return;
  originalTitleDraft = project.title || "";
  projectWindowTitle.contentEditable = "true";
  projectWindowTitle.focus();
  selectTitleText();
  titleRenameActions.hidden = false;
  setStatus("Edit the title, then click Save title.");
}

function endTitleRename(saveChanges) {
  const project = selectedProject();
  if (!project) return;
  const nextTitle = projectWindowTitle.textContent.trim();
  projectWindowTitle.contentEditable = "false";
  titleRenameActions.hidden = true;
  window.getSelection()?.removeAllRanges();
  if (saveChanges && nextTitle) {
    project.title = nextTitle;
    projectWindowTitle.textContent = nextTitle;
    setStatus("Project title saved in the editor. Click Save project to include this version in the portfolio preview.");
    scheduleAutosave();
    scheduleChromeRender();
  } else {
    projectWindowTitle.textContent = originalTitleDraft || project.title || "Untitled project";
    setStatus("Title edit canceled.");
  }
}

function activeRichEditorFromTarget(target = document.activeElement) {
  return target?.closest?.("[data-rich-editor]") || activeSummaryEditor || null;
}

function activePlainTextControlFromTarget(target = document.activeElement) {
  return plainTextControlFromContextEvent({ target });
}

async function saveCurrentBuilderContext() {
  saveVisibleRichEditors();
  if (projectWindowTitle?.isContentEditable) endTitleRename(true);
  if (projectDialog?.open && selectedProject()) {
    await saveSelectedProjectToPortfolio();
    return;
  }
  if (preferencesDialog?.open) {
    saveBuilderPreferencesFromDialog();
    closeDialogElement(preferencesDialog, "save");
    return;
  }
  syncSiteContentFromInputs();
  syncProfileFromInputs();
  syncFunFactsFromInput();
  await saveCatalog("/api/save-draft", "Draft saved");
}

async function handleGlobalKeyboardShortcuts(event) {
  const key = String(event.key || "").toLowerCase();
  const modifier = event.ctrlKey || event.metaKey;
  if (!modifier || event.altKey) return;

  if (["+", "=", "-", "_", "0"].includes(key)) {
    event.preventDefault();
    if (key === "0") {
      setBuilderZoom(1);
    } else {
      const direction = key === "-" || key === "_" ? -1 : 1;
      setBuilderZoom(normalizeBuilderZoom(builderPreferences.zoom) + direction * 0.05);
    }
    return;
  }

  if (key === "s") {
    event.preventDefault();
    const project = selectedProject();
    if (projectDialog?.open && activeSectionIsCompileCode(project) && project) {
      const file = activeCompileFile(project);
      if (file) {
        try {
          await saveCompileFile(project, file);
          setStatus("Compile source saved.");
          scheduleAutosave();
          renderSectionContent(project);
        } catch (error) {
          setStatus(error.message || "Compile source could not be saved.");
        }
        return;
      }
    }
    await saveCurrentBuilderContext();
    return;
  }

  const target = event.target;
  const richEditor = activeRichEditorFromTarget(target);
  const plainControl = activePlainTextControlFromTarget(target);

  if (richEditor && ["b", "i", "u"].includes(key)) {
    event.preventDefault();
    const action = key === "b" ? "toggle-bold" : key === "i" ? "toggle-italic" : "toggle-underline";
    await handleRichAction(action, richEditor);
    return;
  }

  if (richEditor && ["a", "c", "v", "x"].includes(key)) return;
  if (target?.matches?.("input, textarea, [contenteditable='true']") && ["a", "c", "v", "x"].includes(key)) return;

  if (plainControl && ["b", "i", "u"].includes(key)) {
    event.preventDefault();
    activePlainTextControl = plainControl;
    const action = key === "b" ? "toggle-bold" : key === "i" ? "toggle-italic" : "toggle-underline";
    await handlePlainTextAction(action);
    return;
  }
}

function handleBuilderZoomWheel(event) {
  if (!(event.ctrlKey || event.metaKey)) return;
  event.preventDefault();
  const direction = event.deltaY < 0 ? 1 : -1;
  setBuilderZoom(normalizeBuilderZoom(builderPreferences.zoom) + direction * 0.05);
}

function compileScrollableOwner(element) {
  const activeEditor = element?.closest?.("[data-compile-active-editor]");
  if (activeEditor) return activeEditor.closest(".compile-code-preview") || activeEditor;
  return element?.closest?.([
    ".compile-editor-tabs",
    ".compile-code-workspace-tree",
    ".compile-code-preview",
    ".compile-terminal",
    ".compile-system-terminal",
    ".compile-terminal-screen",
    ".compile-messages-log",
    ".compile-scope-scroll"
  ].join(", "));
}

sectionContent.addEventListener("pointerdown", (event) => {
  const scrollable = compileScrollableOwner(event.target);
  if (scrollable) activeCompileScrollElement = scrollable;
}, true);

sectionContent.addEventListener("wheel", (event) => {
  if (event.ctrlKey || event.metaKey) return;
  const scrollable = compileScrollableOwner(event.target);
  if (!scrollable) return;
  if (activeCompileScrollElement !== scrollable) {
    event.preventDefault();
    return;
  }
  if (scrollable.classList.contains("compile-editor-tabs") && Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
    event.preventDefault();
    scrollable.scrollLeft += event.deltaY;
  }
}, { passive: false, capture: true });

function makeItemForSection(key, title, description = "", url = "") {
  if (key === "documents") return { title, type: "Document", url, status: url ? "uploaded" : "draft" };
  if (key === "tests") return { name: title, method: description || "Validation notes", status: url ? "uploaded" : "draft", artifact: url, result: description };
  if (key === "pcbs") return { name: title, revision: "Rev A", status: url ? "uploaded" : "draft", artifact: url };
  if (key === "media") return { title, url, status: url ? "uploaded" : "draft", caption: description };
  if (key === "links") return { label: title, url };
  return { title, description, url, status: url ? "uploaded" : "draft" };
}

function addTextItem(key) {
  const project = selectedProject();
  const title = prompt("Type a title for this item.");
  if (!project || !title) return;

  project[key] = project[key] || [];
  if (["highlights", "tools", "languages"].includes(key)) {
    project[key].push(title);
  } else {
    const description = prompt("Add a short description if you want.") || "";
    project[key].push(makeItemForSection(key, title, description));
  }
  setStatus("Item added in the editor. Click Save project to include this version in the portfolio preview.");
  scheduleAutosave();
  renderAll();
}

function editObjectItem(key, index) {
  const project = selectedProject();
  const item = project?.[key]?.[index];
  if (!item) return;

  const currentTitle = item.title || item.name || item.label || "";
  const nextTitle = prompt("Edit title.", currentTitle);
  if (!nextTitle) return;
  const nextDescription = prompt("Edit description.", item.description || item.caption || item.result || item.method || "") || "";

  if ("title" in item) item.title = nextTitle;
  if ("name" in item) item.name = nextTitle;
  if ("label" in item) item.label = nextTitle;
  if ("caption" in item) item.caption = nextDescription;
  if ("result" in item) item.result = nextDescription;
  if ("description" in item) item.description = nextDescription;
  if (!("caption" in item) && !("result" in item) && !("description" in item)) item.description = nextDescription;

  setStatus("Item edited in the editor. Click Save project to include this version in the portfolio preview.");
  scheduleAutosave();
  renderAll();
}

function chooseFile() {
  return new Promise((resolve) => {
    filePicker.value = "";
    filePicker.multiple = false;
    filePicker.accept = "";
    filePicker.removeAttribute("webkitdirectory");
    filePicker.removeAttribute("directory");
    filePicker.onchange = () => resolve(filePicker.files[0] || null);
    filePicker.click();
  });
}

async function chooseFiles(options = {}) {
  if (!options.directory && options.preferNativePicker && typeof window.showOpenFilePicker === "function") {
    try {
      const handles = await window.showOpenFilePicker({
        multiple: options.multiple !== false,
        excludeAcceptAllOption: false
      });
      return Promise.all(handles.map((handle) => handle.getFile()));
    } catch (error) {
      if (error?.name === "AbortError") return [];
    }
  }

  return new Promise((resolve) => {
    let settled = false;
    const finish = (files = []) => {
      if (settled) return;
      settled = true;
      filePicker.onchange = null;
      filePicker.oncancel = null;
      filePicker.multiple = false;
      filePicker.accept = "";
      filePicker.webkitdirectory = false;
      filePicker.directory = false;
      filePicker.removeAttribute("webkitdirectory");
      filePicker.removeAttribute("directory");
      resolve(files);
    };
    filePicker.value = "";
    filePicker.multiple = options.multiple !== false;
    filePicker.accept = "";
    if (options.directory) {
      filePicker.webkitdirectory = true;
      filePicker.directory = true;
      filePicker.setAttribute("webkitdirectory", "");
      filePicker.setAttribute("directory", "");
    } else {
      filePicker.webkitdirectory = false;
      filePicker.directory = false;
      filePicker.removeAttribute("webkitdirectory");
      filePicker.removeAttribute("directory");
    }
    filePicker.onchange = () => {
      const files = [...(filePicker.files || [])];
      finish(files);
    };
    filePicker.oncancel = () => finish([]);
    filePicker.click();
  });
}

async function readCompileDirectoryHandle(directoryHandle, basePath = "", result = { files: [], directories: [] }) {
  if (!directoryHandle?.entries) return result;
  for await (const [entryName, handle] of directoryHandle.entries()) {
    const cleanName = String(entryName || "").trim();
    if (!cleanName) continue;
    const relativePath = [basePath, cleanName].filter(Boolean).join("/");
    if (handle.kind === "directory") {
      const directoryPath = compileDirectoryPath(relativePath);
      if (directoryPath && !result.directories.includes(directoryPath)) result.directories.push(directoryPath);
      await readCompileDirectoryHandle(handle, relativePath, result);
    } else if (handle.kind === "file") {
      const file = await handle.getFile();
      result.files.push({ file, relativePath });
    }
  }
  return result;
}

async function chooseCompileDirectoryEntries() {
  if (typeof window.showDirectoryPicker !== "function") return null;
  try {
    const directoryHandle = await window.showDirectoryPicker({ mode: "read" });
    const rootName = safeClientCodeDirectorySegment(directoryHandle.name || "imported-directory");
    const result = await readCompileDirectoryHandle(directoryHandle, rootName);
    return { ...result, rootName };
  } catch (error) {
    if (error?.name === "AbortError") return { files: [], directories: [], cancelled: true };
    return null;
  }
}

function fileInputDirectoryEntries(files = []) {
  return [...files].map((file) => ({
    file,
    relativePath: file.webkitRelativePath || file.relativePath || file.name || "source"
  }));
}

function newCompileFile(language = "javascript", seed = {}) {
  const normalized = normalizeCodeLanguage(language);
  const relativePath = safeClientCodeRelativePath(seed.relativePath || seed.fileName || defaultCodeFileName(normalized), normalized);
  const fileName = compileFileNameFromPath(relativePath, normalized);
  const role = normalizeCompileFileRole(seed.role || inferCompileFileRole(fileName, seed.code || "", normalized), normalized);
  const fileType = normalizeCompileFileType(seed.fileType || seed.type || role, { fileName, relativePath, language: normalized, role, code: seed.code || "" });
  return {
    id: slugify(`${fileName}-${Date.now()}-${Math.random().toString(16).slice(2)}`),
    title: fileName,
    fileName,
    relativePath,
    language: normalized,
    role,
    fileType,
    code: String(seed.code || ""),
    stdin: "",
    savedPath: "",
    savedAt: "",
    waveform: null,
    lastResult: null,
    dirty: true
  };
}

function activeCompileWorkspaceAndFile(project = selectedProject()) {
  const workspace = ensureCompileCode(project);
  return { workspace, file: activeCompileFile(project) };
}

function reconcileSavedCompileFile(project, file) {
  const workspace = ensureCompileCode(project);
  if (!workspace || !file?.id) return file || null;
  const index = (workspace.files || []).findIndex((item) => item.id === file.id);
  if (index >= 0 && workspace.files[index] !== file) {
    Object.assign(workspace.files[index], file);
  } else if (index === -1) {
    workspace.files.push(file);
  }
  const savedFile = workspace.files.find((item) => item.id === file.id) || file;
  savedFile.dirty = false;
  workspace.openFileIds = Array.isArray(workspace.openFileIds) ? workspace.openFileIds : [];
  if (!workspace.openFileIds.includes(savedFile.id)) workspace.openFileIds.push(savedFile.id);
  workspace.activeFileId = savedFile.id;
  setCompileSelectedFileIds(workspace, [savedFile.id]);
  return savedFile;
}

function openCompileFileView(workspace, fileId = "") {
  if (!workspace || !fileId) return;
  workspace.openFileIds = Array.isArray(workspace.openFileIds) ? workspace.openFileIds : [];
  if (!workspace.openFileIds.includes(fileId)) workspace.openFileIds.push(fileId);
  workspace.activeFileId = fileId;
}

function compileSelectedFileIds(workspace = {}) {
  const validIds = new Set((workspace.files || []).map((file) => file.id));
  return new Set((workspace.selectedFileIds || []).filter((id) => validIds.has(id)));
}

function setCompileSelectedFileIds(workspace = {}, ids = []) {
  const validIds = new Set((workspace.files || []).map((file) => file.id));
  workspace.selectedFileIds = [...new Set(ids)].filter((id) => validIds.has(id));
}

function toggleCompileFileSelection(project, fileId = "") {
  const workspace = ensureCompileCode(project);
  if (!fileId || !workspace.files.some((file) => file.id === fileId)) return;
  const selected = compileSelectedFileIds(workspace);
  if (selected.has(fileId)) selected.delete(fileId);
  else selected.add(fileId);
  setCompileSelectedFileIds(workspace, [...selected]);
  setStatus(`${workspace.selectedFileIds.length} compile file${workspace.selectedFileIds.length === 1 ? "" : "s"} selected.`);
  scheduleAutosave(900);
}

function closeCompileFileView(project, fileId = "") {
  const workspace = ensureCompileCode(project);
  if (!fileId) return;
  workspace.openFileIds = (workspace.openFileIds || []).filter((id) => id !== fileId);
  if (workspace.activeFileId === fileId) {
    workspace.activeFileId = workspace.openFileIds.find((id) => workspace.files.some((file) => file.id === id)) || "";
  }
  setStatus("Closed source file view. The file remains in the project tree.");
  scheduleAutosave();
  renderSectionContent(project);
}

function addCompileSourceFile(project, file = null, options = {}) {
  const workspace = ensureCompileCode(project);
  const language = normalizeCodeLanguage(options.language || file?.language || "javascript");
  const targetDirectory = compileDirectoryPath(options.directory || "");
  const sourceFile = file || newCompileFile(language, {
    relativePath: uniqueCompileFilePath(
      workspace,
      targetDirectory ? `${targetDirectory}/${defaultCodeFileName(language)}` : defaultCodeFileName(language),
      language
    )
  });
  addCompileDirectoryPath(workspace, compileFileDirectory(sourceFile.relativePath));
  workspace.files.push(sourceFile);
  openCompileFileView(workspace, sourceFile.id);
  setStatus("New compile source created. Type or paste code, then save source.");
  scheduleAutosave();
  renderSectionContent(project);
}

function addCompileTestbenchFile(project, options = {}) {
  const workspace = ensureCompileCode(project);
  const activeFile = activeCompileFile(project);
  const language = isHdlLanguage(activeFile?.language) ? normalizeCodeLanguage(activeFile.language) : "systemverilog";
  const designName = firstHdlModuleName(activeFile?.code || "") || "design";
  const extension = language === "verilog" ? ".v" : ".sv";
  const targetDirectory = compileDirectoryPath(options.directory || compileFileDirectory(activeFile?.relativePath || ""));
  const file = newCompileFile(language, {
    relativePath: uniqueCompileFilePath(
      workspace,
      `${targetDirectory ? `${targetDirectory}/` : ""}tb_${slugify(designName).replace(/-/g, "_") || "design"}${extension}`,
      language
    ),
    role: "testbench",
    code: hdlTestbenchTemplate(language, designName)
  });
  addCompileDirectoryPath(workspace, compileFileDirectory(file.relativePath));
  workspace.files.push(file);
  openCompileFileView(workspace, file.id);
  setStatus("Testbench created. Connect it to the design, keep the waveform dump calls, then run the simulation.");
  addCompileMessage(project, "Created an HDL testbench with $dumpfile and $dumpvars for the signal scope.", "info");
  scheduleAutosave();
  renderSectionContent(project);
}

function addCompileUvmStyleTestbenchFile(project, options = {}) {
  const workspace = ensureCompileCode(project);
  const activeFile = activeCompileFile(project);
  const designName = firstHdlModuleName(activeFile?.code || "") || "design";
  const targetDirectory = compileDirectoryPath(options.directory || compileFileDirectory(activeFile?.relativePath || ""));
  const file = newCompileFile("systemverilog", {
    relativePath: uniqueCompileFilePath(
      workspace,
      `${targetDirectory ? `${targetDirectory}/` : ""}tb_${slugify(designName).replace(/-/g, "_") || "design"}_uvm_style.sv`,
      "systemverilog"
    ),
    role: "testbench",
    code: hdlUvmStyleTestbenchTemplate(designName)
  });
  addCompileDirectoryPath(workspace, compileFileDirectory(file.relativePath));
  workspace.files.push(file);
  openCompileFileView(workspace, file.id);
  setStatus("UVM-style SystemVerilog testbench created. Connect the DUT ports, then simulate.");
  addCompileMessage(project, "Created a UVM-style testbench skeleton with build/run phases, an immediate assertion, $dumpfile, and $dumpvars.", "info");
  scheduleAutosave();
  renderSectionContent(project);
}

function updateCompilePreview(file, sourceElement = null) {
  const editor = sourceElement?.closest?.(".compile-code-active-editor");
  const preview = editor?.querySelector("[data-compile-preview]") || sectionContent.querySelector("[data-compile-preview]");
  if (!preview || !file) return;
  const preserveCaret = preview === sourceElement || preview.contains?.(sourceElement);
  const caretOffset = preserveCaret ? compileEditorSelectionOffset(preview) : null;
  preview.innerHTML = tokenizedCodeHtml(file.code || "", file.language);
  if (preserveCaret && caretOffset !== null) restoreCompileEditorSelection(preview, caretOffset);
}

function syncCompileEditorScroll(textarea) {
  const editor = textarea?.closest?.(".compile-code-active-editor");
  const preview = editor?.querySelector?.(".compile-code-preview");
  if (!preview || !textarea) return;
  preview.scrollTop = textarea.scrollTop || 0;
  preview.scrollLeft = textarea.scrollLeft || 0;
}

function compileEditorText(editorElement) {
  if (!editorElement) return "";
  const raw = "value" in editorElement
    ? editorElement.value
    : editorElement.innerText ?? editorElement.textContent ?? "";
  return String(raw || "")
    .replace(/\u00a0/g, " ")
    .replace(/\r\n?/g, "\n");
}

function compileEditorSelectionOffset(root) {
  const selection = window.getSelection?.();
  if (!root || !selection?.rangeCount) return null;
  const range = selection.getRangeAt(0);
  if (!root.contains(range.startContainer)) return null;
  const prefix = range.cloneRange();
  prefix.selectNodeContents(root);
  prefix.setEnd(range.startContainer, range.startOffset);
  return prefix.toString().length;
}

function restoreCompileEditorSelection(root, offset = 0) {
  if (!root || !Number.isFinite(Number(offset))) return;
  const targetOffset = Math.max(0, Number(offset));
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let remaining = targetOffset;
  let node = walker.nextNode();
  while (node) {
    const length = node.nodeValue.length;
    if (remaining <= length) {
      const range = document.createRange();
      range.setStart(node, remaining);
      range.collapse(true);
      const selection = window.getSelection?.();
      selection?.removeAllRanges();
      selection?.addRange(range);
      return;
    }
    remaining -= length;
    node = walker.nextNode();
  }
  const range = document.createRange();
  range.selectNodeContents(root);
  range.collapse(false);
  const selection = window.getSelection?.();
  selection?.removeAllRanges();
  selection?.addRange(range);
}

function insertCompileEditorText(text = "") {
  const selection = window.getSelection?.();
  if (!selection?.rangeCount) return false;
  const range = selection.getRangeAt(0);
  range.deleteContents();
  const node = document.createTextNode(String(text || ""));
  range.insertNode(node);
  range.setStartAfter(node);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
  return true;
}

function syncActiveCompileEditorToFile(project = selectedProject()) {
  const { file } = activeCompileWorkspaceAndFile(project);
  if (!file) return null;
  const codeInput = sectionContent.querySelector("[data-compile-active-editor]");
  const nextCode = compileEditorText(codeInput);
  if (codeInput && file.code !== nextCode) {
    file.code = nextCode;
    file.dirty = true;
    file.lastResult = null;
    if (isHdlLanguage(file.language) && (!file.role || file.role === "source")) {
      file.role = inferCompileFileRole(file.fileName, file.code, file.language);
    }
    updateCompilePreview(file, codeInput);
  }
  const stdinInput = sectionContent.querySelector(".compile-stdin-window [data-compile-field='stdin']");
  if (stdinInput && typeof stdinInput.value === "string" && file.stdin !== stdinInput.value) {
    file.stdin = stdinInput.value;
    file.dirty = true;
  }
  return file;
}

function compilePayload(project, file, options = {}) {
  const workspace = ensureCompileCode(project);
  return {
    projectId: project.id,
    fileId: file.id,
    title: file.fileName,
    fileName: file.fileName,
    relativePath: compileFilePath(file),
    language: file.language,
    role: file.role || inferCompileFileRole(file.fileName, file.code, file.language),
    fileType: normalizeCompileFileType(file.fileType || file.type || file.role, file),
    code: file.code,
    stdin: file.stdin || "",
    workspaceFiles: (workspace.files || []).map((workspaceFile) => ({
      id: workspaceFile.id,
      title: workspaceFile.fileName,
      fileName: workspaceFile.fileName,
      relativePath: compileFilePath(workspaceFile),
      language: workspaceFile.language,
      role: workspaceFile.role || inferCompileFileRole(workspaceFile.fileName, workspaceFile.code, workspaceFile.language),
      fileType: normalizeCompileFileType(workspaceFile.fileType || workspaceFile.type || workspaceFile.role, workspaceFile),
      code: workspaceFile.code || ""
    })),
    action: options.action || "",
    forceRebuild: options.forceRebuild === true,
    hdlSimulationTimeoutMs: workspace.hdlSimulationTimeoutMs || 30000
  };
}

function selectedCompileAppendDestination(project) {
  const workspace = ensureCompileCode(project);
  const destinations = compileAppendDestinations(project);
  return destinations.find((destination) => destination.id === workspace.appendTargetId) || destinations[0] || null;
}

function appendCompileCodeToProject(project, file) {
  file = syncActiveCompileEditorToFile(project) || file;
  const block = codeBlockForCompileFile(file);
  if (!block.code.trim()) {
    setStatus("Type or import code before appending it to the project.");
    addCompileMessage(project, "Append stopped because the active source is empty.", "warning");
    return false;
  }

  const destination = selectedCompileAppendDestination(project);
  if (!destination) {
    setStatus("No project destination is available for this code block.");
    addCompileMessage(project, "Append stopped because no destination section is available.", "warning");
    return false;
  }

  const blocks = richBlocksForCompileAppend(project, destination);
  blocks.push(block);
  const rich = { blocks };
  const plain = plainTextFromRich(rich);
  if (destination.nodeRef) {
    destination.nodeRef.richDescription = rich;
    destination.nodeRef.description = plain;
  } else if (destination.sectionRef) {
    destination.sectionRef.richDescription = rich;
    destination.sectionRef.description = plain;
  } else {
    project.summaryRich = rich;
    project.summary = plain;
  }

  file.lastAppendedAt = new Date().toISOString();
  addCompileMessage(project, `${file.fileName || file.title || "Source code"} appended to ${destination.label}.`, "success");
  setStatus(`Code appended to ${destination.label}. Save project to include it in the portfolio preview.`);
  scheduleAutosave();
  schedulePreviewRender();
  updateCompileMessagesPanel(project);
  return true;
}

async function saveCompileFile(project, file) {
  if (!project || !file) return null;
  syncActiveCompileEditorToFile(project);
  const response = await fetch(`/api/code/save?t=${Date.now()}`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(compilePayload(project, file))
  });
  const result = await response.json();
  if (!response.ok || !result.ok) throw new Error(result.error || "Code could not be saved.");
  file.savedPath = result.saved?.sourcePath || "";
  file.savedAt = result.saved?.savedAt || new Date().toISOString();
  file.fileName = result.saved?.fileName || file.fileName;
  file.relativePath = result.saved?.relativePath || file.relativePath || file.fileName;
  file.title = file.fileName;
  file.language = result.saved?.language || file.language;
  file.fileType = result.saved?.fileType || normalizeCompileFileType(file.fileType || file.role, file);
  file.dirty = false;
  addCompileDirectoryPath(ensureCompileCode(project), compileFileDirectory(file.relativePath));
  reconcileSavedCompileFile(project, file);
  addCompileMessage(project, `Saved ${file.fileName || "source file"}.`, "info");
  updateCompilePreview(file);
  return result.saved;
}

async function saveCompileFileAs(project, file) {
  if (!project || !file) return null;
  syncActiveCompileEditorToFile(project);
  const suggestedName = file.fileName || defaultCodeFileName(file.language);
  if (window.showSaveFilePicker) {
    const handle = await window.showSaveFilePicker({
      suggestedName,
      types: [{
        description: `${codeLanguageLabel(file.language)} source`,
        accept: { "text/plain": [`.${suggestedName.split(".").pop() || "txt"}`] }
      }]
    });
    const writable = await handle.createWritable();
    await writable.write(file.code || "");
    await writable.close();
    file.externalSavedAt = new Date().toISOString();
    file.dirty = false;
    addCompileMessage(project, `Saved external copy: ${handle.name || suggestedName}.`, "success");
    setStatus("Saved source copy to the selected location. Save Source still writes the project workspace copy.");
    scheduleAutosave();
    renderSectionContent(project);
    return { external: true, fileName: handle.name || suggestedName };
  }

  const blob = new Blob([file.code || ""], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = suggestedName;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  file.externalSavedAt = new Date().toISOString();
  addCompileMessage(project, `Downloaded external copy: ${suggestedName}.`, "success");
  setStatus("The browser saved a copy using its download/save dialog.");
  scheduleAutosave();
  renderSectionContent(project);
  return { external: true, fileName: suggestedName };
}

async function importCompileFiles(project, options = {}) {
  const workspace = ensureCompileCode(project);
  hideCompileTreeContextMenus();
  const directoryImport = options.directory === true;
  let entries = [];
  let importedDirectories = [];
  if (directoryImport) {
    const directoryResult = await chooseCompileDirectoryEntries();
    if (directoryResult?.cancelled) return;
    if (directoryResult) {
      entries = directoryResult.files || [];
      importedDirectories = directoryResult.directories || [];
    }
  }
  if (!entries.length && !importedDirectories.length) {
    const files = await chooseFiles({ multiple: true, directory: directoryImport, preferNativePicker: false });
    entries = fileInputDirectoryEntries(files);
  }
  if (!entries.length && !importedDirectories.length) {
    hideCompileTreeContextMenus();
    return;
  }
  const allowedExtensions = supportedCodeLanguages.flatMap((item) => item.extensions || []);
  let targetDirectory = compileDirectoryPath(options.targetDirectory || "");
  if (!targetDirectory && !directoryImport && options.promptForDirectory !== false) {
    targetDirectory = compileDirectoryPath(window.prompt("Folder inside this project workspace for imported files (blank keeps the project root).", "") || "");
    if (targetDirectory) addCompileDirectoryPath(workspace, targetDirectory);
  }
  importedDirectories.forEach((directory) => {
    const targetPath = [targetDirectory, directory].filter(Boolean).join("/");
    addCompileDirectoryPath(workspace, targetPath);
  });
  let imported = 0;
  let skipped = 0;
  for (const entry of entries) {
    const file = entry.file || entry;
    const extension = `.${String(file.name || "").split(".").pop().toLowerCase()}`;
    if (!file?.text || (file.size && file.size > 5 * 1024 * 1024)) {
      skipped += 1;
      continue;
    }
    let code = "";
    try {
      code = await file.text();
    } catch {
      skipped += 1;
      continue;
    }
    const pickedPath = directoryImport
      ? entry.relativePath || file.webkitRelativePath || file.name
      : file.name;
    const incomingPath = [targetDirectory, pickedPath].filter(Boolean).join("/");
    const language = allowedExtensions.includes(extension) ? detectCodeLanguage(code, incomingPath) : "text";
    const profile = codeLanguageProfile(language);
    const relativePath = uniqueCompileFilePath(workspace, incomingPath, profile.id);
    const sourceFile = newCompileFile(profile.id, {
      relativePath,
      fileName: relativePath,
      code
    });
    addCompileDirectoryPath(workspace, compileFileDirectory(relativePath));
    workspace.files.push(sourceFile);
    imported += 1;
  }
  if (!imported && !importedDirectories.length) {
    setStatus("No readable source or support files were found in that selection.");
    hideCompileTreeContextMenus();
    return;
  }
  const folderText = importedDirectories.length ? ` and ${importedDirectories.length} folder${importedDirectories.length === 1 ? "" : "s"}` : "";
  addCompileMessage(project, `Imported ${imported} file${imported === 1 ? "" : "s"}${folderText}. Open imported sources from Solution Explorer when you want to edit them.`, "success");
  setStatus(`Imported ${imported} source/support file${imported === 1 ? "" : "s"}${folderText}${targetDirectory ? ` into ${targetDirectory}` : ""}${skipped ? ` and skipped ${skipped} unreadable or oversized file${skipped === 1 ? "" : "s"}` : ""}. Imported files are in Solution Explorer, not editor tabs.`);
  hideCompileTreeContextMenus();
  scheduleAutosave();
  renderSectionContent(project);
}

async function addCompileDirectory(project, options = {}) {
  const workspace = ensureCompileCode(project);
  const baseDirectory = compileDirectoryPath(options.baseDirectory || "");
  const defaultFolder = baseDirectory ? `${baseDirectory}/new-folder` : "src";
  const folder = compileDirectoryPath(window.prompt("Folder path inside this project workspace", defaultFolder) || "");
  if (!folder) return;
  addCompileDirectoryPath(workspace, folder);
  addCompileMessage(project, `Folder created: ${folder}`, "success");
  setStatus(`Created compile folder ${folder}.`);
  scheduleAutosave();
  renderSectionContent(project);
}

function deleteCompileTreeTarget(project, context = activeCompileTreeContext) {
  const workspace = ensureCompileCode(project);
  if (!context?.type) {
    setStatus("Right-click a compile file or folder before deleting.");
    return;
  }
  if (context.type === "file" || context.type === "workspace") {
    const selectedIds = compileSelectedFileIds(workspace);
    const deleteIds = context.type === "file" && selectedIds.has(context.fileId)
      ? selectedIds
      : context.type === "workspace" && selectedIds.size
        ? selectedIds
        : new Set(context.fileId ? [context.fileId] : []);
    const filesToDelete = workspace.files.filter((item) => deleteIds.has(item.id));
    if (!filesToDelete.length) {
      setStatus("Select or right-click a compile file before deleting.");
      return;
    }
    const singleFile = filesToDelete.length === 1 ? filesToDelete[0] : null;
    openDeleteConfirm({
      title: filesToDelete.length === 1 ? "Delete source file" : "Delete selected source files",
      message: filesToDelete.length === 1
        ? `Are you sure you want to delete "${singleFile.fileName || compileFilePath(singleFile)}"?`
        : `Delete ${filesToDelete.length} selected source file${filesToDelete.length === 1 ? "" : "s"} from this compile workspace?`,
      onConfirm: () => {
        const removedIds = new Set(filesToDelete.map((file) => file.id));
        workspace.files = workspace.files.filter((item) => !removedIds.has(item.id));
        workspace.openFileIds = (workspace.openFileIds || []).filter((id) => !removedIds.has(id));
        setCompileSelectedFileIds(workspace, []);
        workspace.activeFileId = workspace.openFileIds.find((id) => workspace.files.some((item) => item.id === id)) || "";
        activeCompileTreeContext = null;
        addCompileMessage(project, filesToDelete.length === 1
          ? `Deleted ${singleFile.fileName || "source file"}.`
          : `Deleted ${filesToDelete.length} selected source files.`, "warning");
        scheduleAutosave();
        renderSectionContent(project);
      }
    });
    return;
  }

  const folder = compileDirectoryPath(context.path || "");
  if (!folder) return;
  const filesInFolder = workspace.files.filter((file) => compileFilePath(file).startsWith(`${folder}/`));
  const childFolders = workspace.directories.filter((directory) => directory === folder || directory.startsWith(`${folder}/`));
  openDeleteConfirm({
    title: "Delete compile folder",
    message: `Delete "${folder}" and ${filesInFolder.length} source file${filesInFolder.length === 1 ? "" : "s"} from this local compile workspace?`,
    onConfirm: () => {
      const removedIds = new Set(filesInFolder.map((file) => file.id));
      workspace.files = workspace.files.filter((file) => !removedIds.has(file.id));
      workspace.directories = workspace.directories.filter((directory) => !childFolders.includes(directory));
      workspace.openFileIds = (workspace.openFileIds || []).filter((id) => !removedIds.has(id));
      setCompileSelectedFileIds(workspace, (workspace.selectedFileIds || []).filter((id) => !removedIds.has(id)));
      if (!workspace.files.some((file) => file.id === workspace.activeFileId)) {
        workspace.activeFileId = workspace.openFileIds.find((id) => workspace.files.some((file) => file.id === id)) || "";
      }
      activeCompileTreeContext = null;
      addCompileMessage(project, `Deleted compile folder ${folder}.`, "warning");
      scheduleAutosave();
      renderSectionContent(project);
    }
  });
}

function moveCompileTreeFile(project, context = activeCompileTreeContext) {
  const workspace = ensureCompileCode(project);
  const file = context?.type === "file"
    ? workspace.files.find((item) => item.id === context.fileId)
    : activeCompileFile(project);
  if (!file) {
    setStatus("Right-click a source file before moving it.");
    return;
  }
  const currentPath = compileFilePath(file);
  const nextPath = compileRelativePathFromInput(window.prompt("Save this source file as", compileFileAbsolutePath(project, file)) || "", file, project);
  if (!nextPath || nextPath === currentPath) return;
  file.relativePath = nextPath;
  file.fileName = compileFileNameFromPath(nextPath, file.language);
  file.title = file.fileName;
  file.role = normalizeCompileFileRole(file.role || inferCompileFileRole(file.fileName, file.code, file.language), file.language);
  file.dirty = true;
  addCompileDirectoryPath(workspace, compileFileDirectory(file.relativePath));
  addCompileMessage(project, `Moved source to ${nextPath}. Click Save source to write it to disk.`, "info");
  setStatus(`Source path changed to ${nextPath}.`);
  scheduleAutosave();
  renderSectionContent(project);
}

async function beautifyCompileFile(project, file) {
  if (!file) return;
  syncActiveCompileEditorToFile(project);
  try {
    const response = await fetch(`/api/code/beautify?t=${Date.now()}`, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(compilePayload(project, file))
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Beautifier failed.");
    file.code = result.code || file.code;
    file.language = result.language || file.language;
    file.dirty = true;
    setStatus("Code beautified. Review it, then save source.");
    scheduleAutosave();
    renderSectionContent(project);
  } catch (error) {
    file.code = beautifyCodeClient(file.code || "", file.language);
    file.dirty = true;
    updateCompilePreview(file);
    addCompileMessage(project, `Used local ${codeLanguageLabel(file.language)} beautifier because the server formatter did not respond.`, "warning");
    setStatus(error.message ? `Server beautifier failed; local beautifier ran. ${error.message}` : "Server beautifier failed; local beautifier ran.");
    scheduleAutosave();
    renderSectionContent(project);
  }
}

async function compileActiveFile(project, file, options = {}) {
  if (!file) return;
  syncActiveCompileEditorToFile(project);
  const workspace = ensureCompileCode(project);
  const action = options.action || (isHdlLanguage(file.language) ? "simulate" : "run");
  const actionLabel = action === "compile" ? "Compile" : action === "build" ? "Build project" : action === "simulate" ? "Simulate" : "Run";
  workspace.activePanel = "console";
  file.lastResult = {
    ok: null,
    terminal: `${actionLabel} started. Please wait...`
  };
  workspace.terminal = file.lastResult.terminal;
  addCompileMessage(project, `${actionLabel} started for ${file.fileName || file.title || "source file"}.`, "info");
  renderSectionContent(project);
  try {
    await saveCompileFile(project, file);
    const response = await fetch(`/api/code/compile?t=${Date.now()}`, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(compilePayload(project, file, {
        action,
        forceRebuild: options.forceRebuild === true || action === "build"
      }))
    });
    const result = await response.json();
    const compileResult = result.result || {};
    file.lastResult = {
      ok: Boolean(result.ok),
      language: compileResult.language || file.language,
      terminal: compileResult.terminal || result.error || "No compiler output was returned.",
      waveform: compileResult.waveform || null,
      finishedAt: new Date().toISOString()
    };
    file.waveform = compileResult.waveform || null;
    ensureCompileCode(project).waveform = compileResult.waveform || null;
    if (compileResult.saved) {
      file.savedPath = compileResult.saved.sourcePath || file.savedPath;
      file.savedAt = compileResult.saved.savedAt || file.savedAt;
    }
    file.dirty = false;
    const refreshedWorkspace = ensureCompileCode(project);
    refreshedWorkspace.terminal = file.lastResult.terminal;
    if (action === "simulate" && compileResult.waveform?.signals?.length) {
      refreshedWorkspace.activePanel = "scope";
    }
    addCompileMessage(project, result.ok ? `${actionLabel} succeeded for ${file.fileName}.` : `${actionLabel} completed with errors for ${file.fileName}.`, result.ok ? "success" : "error");
    if (compileResult.waveform?.signals?.length) {
      addCompileMessage(project, `Scope updated with ${compileResult.waveform.signals.length} signal${compileResult.waveform.signals.length === 1 ? "" : "s"} from ${compileResult.waveform.source || "waveform.vcd"}.`, "success");
    }
    if (/HDL debug tools:/i.test(file.lastResult.terminal || "")) {
      addCompileMessage(project, "HDL debug tool availability was checked. Details are in Console output.", "info");
    }
    setStatus(result.ok ? `${actionLabel} succeeded.` : `${actionLabel} completed with errors.`);
    scheduleAutosave();
    renderSectionContent(project);
  } catch (error) {
    file.lastResult = {
      ok: false,
      terminal: error.message || "Compile/run failed.",
      finishedAt: new Date().toISOString()
    };
    ensureCompileCode(project).terminal = file.lastResult.terminal;
    addCompileMessage(project, `${actionLabel} failed for ${file.fileName || "source file"}.`, "error");
    setStatus(error.message || `${actionLabel} failed.`);
    renderSectionContent(project);
  }
}

async function runCompileTerminalCommand(project) {
  const workspace = ensureCompileCode(project);
  const terminal = workspace.systemTerminal;
  const commandInput = sectionContent.querySelector("[data-compile-terminal-command]");
  const command = String(commandInput?.value || terminal.command || "").trim();
  if (!command) {
    addCompileMessage(project, "Type a terminal command before running it.", "warning");
    requestAnimationFrame(focusTerminalCommandLine);
    return;
  }
  const prompt = compileTerminalPromptText(terminal, project);
  if (/^(?:cls|clear)$/i.test(command)) {
    terminal.output = "";
    terminal.command = "";
    workspace.activePanel = "terminal";
    scheduleAutosave();
    renderSectionContent(project);
    requestAnimationFrame(focusTerminalCommandLine);
    return;
  }
  const cwd = compileDirectoryPath(terminal.cwd || "");
  terminal.command = command;
  terminal.cwd = cwd;
  workspace.activePanel = "terminal";
  const previousOutput = terminal.output || "";
  terminal.output = appendCompileTerminalOutput(previousOutput, `${prompt} ${command}`);
  renderSectionContent(project);
  requestAnimationFrame(focusTerminalCommandLine);
  try {
    const response = await fetch(`/api/code/terminal?t=${Date.now()}`, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        command,
        cwd,
        cwdAbsolute: terminal.cwdAbsolute || "",
        projectId: project.id
      })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Terminal command failed.");
    terminal.output = appendCompileTerminalOutput(previousOutput, `${prompt} ${command}\n${result.output || "Command completed with no output."}`);
    terminal.cwd = result.cwd || cwd;
    terminal.rootPath = result.rootPath || terminal.rootPath || compileTerminalBasePath();
    terminal.cwdAbsolute = result.cwdAbsolute || terminal.cwdAbsolute || "";
    terminal.promptPath = result.promptPath || terminal.cwdAbsolute || "";
    terminal.command = "";
    terminal.history = [
      { at: new Date().toISOString(), command, output: result.output || "" },
      ...(terminal.history || [])
    ].slice(0, 40);
    setStatus(result.exitCode === 0 ? "Terminal command completed." : `Terminal command exited with code ${result.exitCode}.`);
  } catch (error) {
    terminal.output = appendCompileTerminalOutput(previousOutput, `${prompt} ${command}\n${error.message || "Terminal command failed."}`);
    terminal.command = "";
    setStatus(error.message || "Terminal command failed.");
  }
  scheduleAutosave();
  renderSectionContent(project);
  requestAnimationFrame(focusTerminalCommandLine);
}

async function checkCompileTools(project) {
  try {
    const response = await fetch(`/api/code/tools?t=${Date.now()}`, { cache: "no-store" });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Compiler status failed.");
    const lines = Object.entries(result.tools?.languages || {}).map(([id, status]) => {
      const toolText = Object.entries(status.tools || {}).map(([tool, value]) => `${tool}: ${value}`).join(", ") || "no compiler required";
      const optionalText = Object.entries(status.optionalTools || {}).map(([tool, value]) => `${tool}: ${value}`).join(", ");
      return `${status.ready ? "READY" : "MISSING"} ${status.label} (${id}) - ${toolText}${optionalText ? ` | optional: ${optionalText}` : ""}`;
    });
    compileTerminalStatus = [`Compile workspace: ${result.tools?.compileRoot || ""}`, ...lines].join("\n");
    const workspace = ensureCompileCode(project);
    workspace.terminal = compileTerminalStatus;
    workspace.activePanel = "console";
    renderSectionContent(project);
  } catch (error) {
    setStatus(error.message || "Compiler status failed.");
  }
}

async function installCompileTools(project, file) {
  if (!file) return;
  ensureCompileCode(project).activePanel = "console";
  file.lastResult = { ok: null, terminal: `Installing tools for ${codeLanguageLabel(file.language)}. This can take several minutes...` };
  renderSectionContent(project);
  try {
    const response = await fetch(`/api/code/install-tools?t=${Date.now()}`, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language: file.language })
    });
    const result = await response.json();
    file.lastResult = {
      ok: Boolean(result.ok),
      terminal: result.terminal || result.error || "Tool installation finished.",
      finishedAt: new Date().toISOString()
    };
    setStatus(result.ok ? "Compiler tool installation finished." : "Compiler tool installation could not complete.");
    renderSectionContent(project);
  } catch (error) {
    file.lastResult = { ok: false, terminal: error.message || "Tool installation failed." };
    renderSectionContent(project);
  }
}

async function runCompileIdeAction(project, action = "") {
  if (!project || !action) return;
  const workspace = ensureCompileCode(project);
  const file = activeCompileFile(project);
  const contextDirectory = compileContextBaseDirectory(activeCompileTreeContext);
  if (action === "new-file") return addCompileSourceFile(project, null, { directory: contextDirectory });
  if (action === "new-folder") return addCompileDirectory(project, { baseDirectory: contextDirectory });
  if (action === "add-testbench") return addCompileTestbenchFile(project, { directory: contextDirectory });
  if (action === "add-uvm-testbench") return addCompileUvmStyleTestbenchFile(project, { directory: contextDirectory });
  if (action === "import-files") return importCompileFiles(project, { targetDirectory: contextDirectory });
  if (action === "import-directory") return importCompileFiles(project, { directory: true, targetDirectory: contextDirectory });
  if (action === "save-project") return saveSelectedProjectToPortfolio();
  if (action === "project-preview") return openProjectPortfolioPreview();
  if (action === "portfolio-preview") return openPortfolioPreview();
  if (action === "builder-guide") return builderGuideOpen?.click();
  if (action === "preferences") return openPreferencesDialog();
  if (action === "check-updates") return checkForAppUpdates({ force: true, manual: true });
  if (action === "check-tools") return checkCompileTools(project);
  if (action === "delete-tree-target") return deleteCompileTreeTarget(project);
  if (action === "move-tree-file") return moveCompileTreeFile(project);
  if (action === "clear-messages") {
    workspace.messages = [];
    updateCompileMessagesPanel(project);
    setStatus("Compile messages log cleared.");
    scheduleAutosave();
    return;
  }
  if (action === "clear-terminal") {
    workspace.systemTerminal.output = "";
    workspace.systemTerminal.command = "";
    workspace.activePanel = "terminal";
    scheduleAutosave();
    renderSectionContent(project);
    return;
  }
  if (action.startsWith("view-")) {
    setCompilePanel(project, action.replace("view-", ""));
    renderSectionContent(project);
    return;
  }
  if (!file) {
    setStatus("Add or select a source file first.");
    return;
  }
  if (action === "save-source") {
    try {
      await saveCompileFile(project, file);
      setStatus("Compile source saved.");
      scheduleAutosave();
      renderSectionContent(project);
    } catch (error) {
      setStatus(error.message || "Compile source could not be saved.");
    }
    return;
  }
  if (action === "save-source-as") {
    try {
      await saveCompileFileAs(project, file);
    } catch (error) {
      setStatus(error.message || "Compile source could not be saved to another location.");
    }
    return;
  }
  if (action === "beautify") return beautifyCompileFile(project, file);
  if (action === "compile") return compileActiveFile(project, file, { action: "compile" });
  if (action === "build") return compileActiveFile(project, file, { action: "build", forceRebuild: true });
  if (action === "run") return compileActiveFile(project, file, { action: "run" });
  if (action === "simulate") return compileActiveFile(project, file, { action: "simulate" });
  if (action === "install-tools") return installCompileTools(project, file);
  if (action === "show-output") {
    showCompileOutput(project, file);
    addCompileMessage(project, `Displayed terminal output for ${file?.fileName || "the active source"}.`, "info");
    return;
  }
  if (action === "show-scope") {
    showCompileScope(project, file);
    if (isHdlLanguage(file?.language)) addCompileMessage(project, `Displayed HDL scope for ${file?.fileName || "the active source"}.`, "info");
    return;
  }
  if (action === "copy-output") {
    await copyCompileOutput(project, file);
    updateCompileMessagesPanel(project);
    return;
  }
  if (action === "clear-output") {
    clearCompileOutput(project, file);
    updateCompileMessagesPanel(project);
    return;
  }
  if (action === "append-code") {
    workspace.appendPanelOpen = !workspace.appendPanelOpen;
    setStatus(workspace.appendPanelOpen ? "Choose where to append the active source." : "Append chooser closed.");
    scheduleAutosave();
    renderSectionContent(project);
  }
}

const profileAssetDefinitions = {
  profileImage: {
    label: "Profile photo",
    description: "This image appears with your contact/profile information.",
    type: "image"
  },
  heroImage: {
    label: "Main background",
    description: "This image controls the main website background near the top of the portfolio.",
    type: "image"
  },
  resumeUrl: {
    label: "Resume",
    description: "This document opens from the resume area and recruiter-facing links.",
    type: "document"
  },
  brandImage: {
    label: "Brand icon",
    description: "This is the small trademark/brand icon used by the portfolio and builder.",
    type: "image"
  }
};

function profileAssetDefinition(kind = "") {
  return profileAssetDefinitions[kind] || {
    label: "Profile asset",
    description: "Portfolio profile asset.",
    type: "file"
  };
}

function profileAssetValue(kind = "") {
  const profile = normalizeProfile(catalog.profile || {});
  return String(profile[kind] || "").trim();
}

function profileAssetDisplayName(url = "") {
  const clean = String(url || "").trim();
  if (!clean) return "No file selected";
  if (/^data:/i.test(clean)) return "Embedded file";
  const withoutQuery = clean.split(/[?#]/)[0];
  const segment = withoutQuery.split(/[\\/]/).filter(Boolean).pop() || clean;
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

function isProfileAssetImage(kind = "", url = "") {
  return profileAssetDefinition(kind).type === "image" || urlLooksLikeDirectImage(url);
}

function profileAssetPreviewHtml(kind = "", options = {}) {
  const definition = profileAssetDefinition(kind);
  const url = profileAssetValue(kind);
  const large = options.large === true;
  if (!url) {
    return `
      <div class="profile-asset-empty">
        <strong>No ${escapeHtml(definition.label.toLowerCase())} has been added yet.</strong>
        <span>Use Change to choose a file from this machine.</span>
      </div>
    `;
  }
  const target = normalizeLinkTarget(url);
  const displayName = profileAssetDisplayName(url);
  const extension = extensionFromUrl(url);
  if (isProfileAssetImage(kind, url)) {
    return `
      <figure class="profile-asset-preview ${large ? "is-large-preview" : ""}">
        <img src="${escapeHtml(target)}" alt="${escapeHtml(definition.label)} preview" />
      </figure>
    `;
  }
  if (extension === ".pdf") {
    return `
      <div class="profile-asset-document ${large ? "is-large-preview" : ""}">
        <iframe title="${escapeHtml(definition.label)} preview" src="${escapeHtml(target)}"></iframe>
      </div>
    `;
  }
  return `
    <div class="profile-asset-file-card">
      <strong>${escapeHtml(displayName)}</strong>
      <a href="${escapeHtml(target)}" target="_blank" rel="noreferrer">Open file</a>
    </div>
  `;
}

function renderProfileAssetManager(kind = activeProfileAssetKind) {
  const definition = profileAssetDefinition(kind);
  const url = profileAssetValue(kind);
  if (profileAssetTitle) profileAssetTitle.textContent = definition.label;
  if (profileAssetBody) {
    profileAssetBody.innerHTML = `
      ${profileAssetPreviewHtml(kind)}
    `;
  }
  if (profileAssetView) profileAssetView.disabled = !url;
  if (profileAssetRemove) profileAssetRemove.disabled = !url;
}

function openProfileAssetManager(kind) {
  activeProfileAssetKind = kind;
  syncProfileFromInputs();
  renderProfileAssetManager(kind);
  if (!profileAssetDialog?.open) profileAssetDialog.showModal();
}

function openProfileAssetViewer(kind = activeProfileAssetKind) {
  const definition = profileAssetDefinition(kind);
  const url = profileAssetValue(kind);
  if (!url) {
    setStatus(`No ${definition.label.toLowerCase()} has been added yet.`);
    return;
  }
  if (profileAssetViewTitle) profileAssetViewTitle.textContent = definition.label;
  if (profileAssetViewBody) profileAssetViewBody.innerHTML = profileAssetPreviewHtml(kind, { large: true });
  if (profileAssetOpenLink) {
    profileAssetOpenLink.href = normalizeLinkTarget(url);
    profileAssetOpenLink.hidden = false;
  }
  if (!profileAssetViewDialog?.open) profileAssetViewDialog.showModal();
}

function openProfileAssetDirect(kind = activeProfileAssetKind) {
  const definition = profileAssetDefinition(kind);
  const url = profileAssetValue(kind);
  if (!url) {
    setStatus(`No ${definition.label.toLowerCase()} has been added yet.`);
    return;
  }
  const target = normalizeLinkTarget(url);
  const anchor = document.createElement("a");
  anchor.href = target;
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  setStatus(`Opened ${definition.label}.`);
}

function removeProfileAsset(kind = activeProfileAssetKind) {
  const definition = profileAssetDefinition(kind);
  const url = profileAssetValue(kind);
  if (!url) {
    renderProfileAssetManager(kind);
    return;
  }
  openDeleteConfirm({
    title: `Remove ${definition.label.toLowerCase()}`,
    message: `Remove the current ${definition.label.toLowerCase()} from the local portfolio draft? The uploaded file may still exist in the assets folder until cleanup.`,
    onConfirm: () => {
      const profile = normalizeProfile({
        ...(catalog.profile || {}),
        [kind]: ""
      });
      catalog.profile = profile;
      markDraftNeedsSave();
      setStatus(`${definition.label} removed locally. Click Save draft before applying to site.`);
      scheduleAutosave();
      schedulePreviewRender();
      renderProfileEditor();
      renderProfileAssetManager(kind);
    }
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function uploadProfileAsset(kind) {
  const profile = syncProfileFromInputs();
  const file = await chooseFile();
  if (!file) return false;

  const imageKinds = new Set(["profileImage", "heroImage", "brandImage"]);
  if (imageKinds.has(kind) && !file.type.startsWith("image/")) {
    setStatus("Choose an image file for this profile asset.");
    return false;
  }

  if (kind === "resumeUrl") {
    const allowedResume = [".pdf", ".doc", ".docx"].includes(extensionFor(file.name).toLowerCase());
    if (!allowedResume) {
      setStatus("Choose a PDF, DOC, or DOCX resume file.");
      return false;
    }
  }

  const data = await readFileAsDataUrl(file);
  const response = await fetch(`/api/upload?t=${Date.now()}`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      projectId: "_site-profile",
      section: kind,
      fileName: file.name,
      data
    })
  });
  const result = await response.json();
  if (!response.ok) {
    setStatus(result.error || "Profile asset upload failed.");
    return false;
  }

  profile[kind] = result.url;
  catalog.profile = normalizeProfile(profile);
  markDraftNeedsSave();
  setStatus("Profile asset saved locally. Click Save draft before applying to site.");
  scheduleAutosave();
  schedulePreviewRender();
  renderProfileEditor();
  return true;
}

function extensionFor(fileName) {
  const match = String(fileName || "").match(/(\.[a-z0-9]+)$/i);
  return match ? match[1] : "";
}

function withExtension(name, fallbackFileName) {
  const trimmed = String(name || "").trim();
  if (!trimmed) return fallbackFileName;
  return /\.[a-z0-9]+$/i.test(trimmed) ? trimmed : `${trimmed}${extensionFor(fallbackFileName)}`;
}

function uploadProfile(key) {
  const anyProjectFile = {
    label: "project file",
    accept: "",
    extensions: [],
    mimeStarts: [],
    allFiles: true
  };
  const profiles = {
    media: {
      ...anyProjectFile,
      label: "image or file"
    },
    pcbs: {
      ...anyProjectFile,
      label: "PCB artifact"
    },
    tests: {
      ...anyProjectFile,
      label: "test artifact"
    },
    documents: {
      ...anyProjectFile,
      label: "document"
    },
    sections: {
      ...anyProjectFile,
      label: "section file"
    }
  };
  return profiles[key] || profiles.sections;
}

function allowedFileMessage(profile) {
  if (profile.allFiles) return `Add any local file type for this ${profile.label}.`;
  return `Add a ${profile.label}: ${profile.extensions.join(", ")}`;
}

function isAllowedUpload(key, fileName, mimeType = "") {
  const profile = uploadProfile(key);
  if (profile.allFiles) return { ok: true, message: "" };
  const extension = extensionFor(fileName).toLowerCase();
  if (key === "media" && !profile.extensions.includes(extension) && !mimeType.startsWith("image/")) {
    return { ok: false, message: "Images can only accept image files. Add PDFs under Documents, Tests, or a custom section instead." };
  }
  const allowedByExtension = profile.extensions.includes(extension);
  const allowedByMime = profile.mimeStarts.some((prefix) => mimeType.startsWith(prefix));
  return {
    ok: allowedByExtension || allowedByMime,
    message: `${fileName || "This file"} is not a supported ${profile.label}. ${allowedFileMessage(profile)}.`
  };
}

function validateAssetForSection(key, asset) {
  if (asset.source === "local") {
    return isAllowedUpload(key, asset.fileName || asset.file?.name || "", asset.file?.type || "");
  }
  const url = normalizeLinkTarget(asset.url || "", { assumeWeb: true });
  if (!extensionFromUrl(url) && !extensionFor(asset.title || "")) {
    return { ok: true, message: "" };
  }
  return isAllowedUpload(key, url || asset.title || "", "");
}

function dialogValue(dialog) {
  return new Promise((resolve) => {
    const onClose = () => {
      dialog.removeEventListener("close", onClose);
      resolve(dialog.returnValue === "save");
    };
    dialog.addEventListener("close", onClose);
    dialog.showModal();
  });
}

async function openAssetDialog(key, options = {}) {
  const profile = uploadProfile(key);
  assetDialogTitle.textContent = `Add ${profile.label}`;
  assetSource.value = "local";
  assetFile.value = "";
  assetFile.accept = profile.accept;
  assetFile.multiple = options.multiple === true;
  assetUrl.value = "";
  assetTitle.value = "";
  assetCaption.value = "";
  captionSource.value = "text";
  captionFile.value = "";
  updateAssetDialogVisibility();

  const saved = await dialogValue(assetDialog);
  if (!saved) return null;

  let file = null;
  let files = [];
  let url = assetUrl.value.trim();
  let fileName = "";
  let title = assetTitle.value.trim();

  if (assetSource.value === "local") {
    files = [...(assetFile.files || [])];
    file = files[0] || null;
    if (!files.length) {
      setStatus("Choose a local file first.");
      return null;
    }
    if (files.length > 1) {
      const invalid = files.find((selectedFile) => {
        const validation = isAllowedUpload(key, selectedFile.name, selectedFile.type);
        return !validation.ok;
      });
      if (invalid) {
        const validation = isAllowedUpload(key, invalid.name, invalid.type);
        setStatus(validation.message);
        return null;
      }
    } else {
      fileName = withExtension(title, file.name);
      title = title || file.name;
      const validation = isAllowedUpload(key, fileName, file.type);
      if (!validation.ok) {
        setStatus(validation.message);
        return null;
      }
    }
  } else {
    if (!url) {
      setStatus("Paste a web or Google Drive link first.");
      return null;
    }
    url = normalizeLinkTarget(url, { assumeWeb: true });
    title = title || displayNameFromUrl(url, "Linked asset");
    const validation = validateAssetForSection(key, { source: assetSource.value, url, title });
    if (!validation.ok) {
      setStatus(validation.message);
      return null;
    }
  }

  let caption = assetCaption.value.trim();
  if (captionSource.value === "file" && captionFile.files[0]) {
    caption = await captionFile.files[0].text();
  }

  if (assetSource.value === "local" && files.length > 1) {
    return files.map((selectedFile) => ({
      caption,
      file: selectedFile,
      fileName: selectedFile.name,
      kind: "file",
      source: "local",
      title: selectedFile.name,
      url: ""
    }));
  }

  return {
    caption,
    file,
    fileName,
    kind: file ? "file" : inferUrlAssetKind(url, assetSource.value),
    source: assetSource.value,
    title,
    url
  };
}

async function uploadToSection(key, folder, customSectionId = "", customItemIndex = null, customNodePath = "") {
  const project = selectedProject();
  if (!project) return;

  const assetResult = await openAssetDialog(key, { multiple: true });
  if (!assetResult) return;
  const assets = Array.isArray(assetResult) ? assetResult : [assetResult];
  let savedCount = 0;
  let lastUrl = "";

  for (const asset of assets) {
    const validation = validateAssetForSection(key, asset);
    if (!validation.ok) {
      setStatus(validation.message);
      return;
    }

    const sectionFolder = customSectionId || folder || key;
    let url = asset.url;
    let type = asset.source === "local" ? "File" : labelForUrlAssetKind(asset.kind);

    if (asset.file) {
      const data = await readFileAsDataUrl(asset.file);
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId: project.id,
          section: sectionFolder,
          fileName: asset.fileName,
          data
        })
      });
      const result = await response.json();
      if (!response.ok) {
        setStatus(result.error || "Upload failed.");
        return;
      }
      url = result.url;
      type = asset.file.type || "File";
    }
    lastUrl = url;

    if (customSectionId) {
      const section = (project.sections || []).find((item) => item.id === customSectionId);
      normalizeBuilderSectionStorage(section);
      const uploadedItem = { title: asset.title, description: asset.caption, type, url, status: asset.source === "local" ? "uploaded" : "linked" };
      if (customNodePath !== null && customNodePath !== "") {
        const parent = findBuilderNode(section, nodePathFromString(customNodePath));
        if (!parent || parent.url || parent.artifact) return;
        builderNodeChildren(parent).push(uploadedItem);
      } else if (customItemIndex !== null && customItemIndex !== "") {
        const parent = sectionRootChildren(section)?.[Number(customItemIndex)];
        if (!parent || parent.url) return;
        builderNodeChildren(parent).push(uploadedItem);
      } else {
        sectionRootChildren(section).push(uploadedItem);
      }
    } else {
      project[key] = project[key] || [];
      project[key].push(makeItemForSection(key, asset.title, asset.caption, url));
    }
    savedCount += 1;
  }

  setStatus(savedCount > 1
    ? `Saved ${savedCount} files. Click Save project to include them in the portfolio preview.`
    : `Saved ${assets[0].fileName || assets[0].title} to ${lastUrl}. Click Save project to include it in the portfolio preview.`);
  scheduleAutosave();
  renderAll();
}

async function uploadToDesignSection(pathValue, folder, kind = "document") {
  const project = selectedProject();
  if (!project) return;

  const assetResult = await openAssetDialog(kind === "simulation-result" ? "tests" : "sections", { multiple: true });
  if (!assetResult) return;
  const assets = Array.isArray(assetResult) ? assetResult : [assetResult];
  let savedCount = 0;
  let lastAsset = null;

  for (const asset of assets) {
    const validation = validateAssetForSection(kind === "simulation-result" ? "tests" : "sections", asset);
    if (!validation.ok) {
      setStatus(validation.message);
      return;
    }

    let url = asset.url;
    let type = asset.source === "local" ? "File" : labelForUrlAssetKind(asset.kind);
    if (asset.file) {
      const data = await readFileAsDataUrl(asset.file);
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId: project.id,
          section: folder || "design",
          fileName: asset.fileName,
          data
        })
      });
      const result = await response.json();
      if (!response.ok) {
        setStatus(result.error || "Upload failed.");
        return;
      }
      url = result.url;
      type = asset.file.type || "File";
    }

    const items = designArray(project, pathValue);
    items.push({
      ...makeDesignItem(kind, asset.title, asset.caption, url),
      type
    });
    savedCount += 1;
    lastAsset = { ...asset, url };
  }

  setStatus(savedCount > 1
    ? `Saved ${savedCount} design files. Click Save project to include them in the portfolio preview.`
    : lastAsset?.source === "local"
      ? `Saved ${lastAsset.fileName} to ${lastAsset.url}. Click Save project to include it in the portfolio preview.`
      : `Linked ${lastAsset?.title || "asset"}. Click Save project to include it in the portfolio preview.`);
  scheduleAutosave();
  renderAll();
}

async function openSectionDialog() {
  sectionDialogTitle.textContent = "Create a section";
  sectionTitle.placeholder = "Design, Measurements, Firmware...";
  sectionDescription.placeholder = "Optional description shown to recruiters";
  sectionTitle.value = "";
  sectionDescription.value = "";
  const saved = await dialogValue(sectionDialog);
  if (!saved) return null;

  const title = sectionTitle.value.trim();
  if (!title) {
    setStatus("Type a section title before saving.");
    return null;
  }

  return {
    description: sectionDescription.value.trim(),
    title
  };
}

function openCategoryDialog(categoryId = "") {
  const category = categoryId ? categoryById(categoryId) : {};
  editingCategoryId = category?.id || "";
  if (categoryDialogTitle) categoryDialogTitle.textContent = editingCategoryId ? "Edit category" : "Add category";
  categoryTitle.value = category?.label || "";
  categoryDescription.value = category?.description || "";
  categoryAccent.value = category?.accent || "#1677a8";
  categoryDialog.showModal();
  setTimeout(() => categoryTitle.focus(), 0);
}

function saveCategoryFromDialog() {
  const label = categoryTitle.value.trim();
  if (!label) {
    setStatus("Type a category name before saving.");
    return;
  }
  if (editingCategoryId) {
    const category = (catalog.categories || []).find((item) => item.id === editingCategoryId);
    if (!category) {
      editingCategoryId = "";
      setStatus("That category no longer exists.");
      return;
    }
    category.label = label;
    category.description = categoryDescription.value.trim();
    category.accent = normalizeTextColor(categoryAccent.value || "") || category.accent || "#1677a8";
    savedPortfolioCatalog.categories = clone(catalog.categories || []);
    refreshCategoryControls();
    renderAll();
    scheduleAutosave();
    setStatus(`Category "${category.label}" updated locally.`);
    editingCategoryId = "";
    return;
  }
  const baseId = slugify(label);
  const ids = new Set((catalog.categories || []).map((category) => category.id));
  let id = baseId;
  let suffix = 2;
  while (ids.has(id)) {
    id = `${baseId}-${suffix}`;
    suffix += 1;
  }
  const category = normalizeCategory({
    accent: categoryAccent.value,
    description: categoryDescription.value,
    id,
    label
  });
  catalog.categories = [...(catalog.categories || []), category];
  expandedCategories.add(category.id);
  refreshCategoryControls();
  renderAll();
  scheduleAutosave();
  setStatus(`Category "${category.label}" added locally. It is now available under Add new project.`);
}

async function addCustomSection() {
  const project = selectedProject();
  if (!project) return;

  const sectionInput = await openSectionDialog();
  if (!sectionInput) return;

  let id = slugify(sectionInput.title);
  const existingIds = new Set((project.sections || []).map((section) => section.id));
  let suffix = 2;
  while (existingIds.has(id)) {
    id = `${slugify(sectionInput.title)}-${suffix}`;
    suffix += 1;
  }

  project.sections = project.sections || [];
  project.sections.push({ id, title: sectionInput.title, description: sectionInput.description, items: [] });
  project.sectionModelVersion = 3;
  activeSectionId = `custom:${id}`;
  setStatus("New section added in the editor. Click Save project to include this version in the portfolio preview.");
  scheduleAutosave();
  renderAll();
}

function deleteProjectSectionById(project, sectionId) {
  if (!project || !sectionId) return;
  const section = (project.sections || []).find((item) => item.id === sectionId);
  if (!section) return;
  openDeleteConfirm({
    title: "Delete section",
    message: `Are you sure you want to delete "${section.title || sectionId}"?`,
    onConfirm: () => {
      project.sections = (project.sections || []).filter((item) => item.id !== sectionId);
      project.sectionModelVersion = 3;
      if (activeSectionId === `custom:${sectionId}`) activeSectionId = "brief";
      if (pendingEditor?.sectionId === sectionId) pendingEditor = null;
      setStatus("Section deleted locally. Click Save project to rebuild the project preview.");
      scheduleAutosave();
      renderAll();
    }
  });
}

function addCustomItem(sectionId) {
  const project = selectedProject();
  const section = (project.sections || []).find((item) => item.id === sectionId);
  const title = prompt("Type a subsection title.");
  if (!section || !title) return;
  const description = prompt("Paste or type a text description if you want.") || "";

  sectionRootChildren(section).push({ title, description, type: "Text", status: "draft", children: [] });
  setStatus("Subsection added locally.");
  scheduleAutosave();
  renderAll();
}

function editCustomItem(sectionId, index) {
  const project = selectedProject();
  const item = (project.sections || []).find((section) => section.id === sectionId)?.items?.[index];
  if (!item) return;
  const title = prompt("Edit subsection title.", item.title || "");
  if (!title) return;
  item.title = title;
  item.description = prompt("Edit description.", item.description || "") || "";
  setStatus("Subsection edited locally.");
  scheduleAutosave();
  renderAll();
}

function catalogForSave(endpoint) {
  const parsedGlobals = parsedPortfolioGlobals();
  if (endpoint === "/api/apply-catalog") {
    return {
      ...savedPortfolioCatalog,
      ...parsedGlobals,
      projects: clone(savedPortfolioCatalog.projects || [])
    };
  }
  return {
    ...catalog,
    categories: parsedGlobals.categories,
    fieldStyles: parsedGlobals.fieldStyles,
    funFacts: parsedGlobals.funFacts,
    funFactsRich: parsedGlobals.funFactsRich,
    profile: parsedGlobals.profile,
    profileRich: parsedGlobals.profileRich,
    siteContent: parsedGlobals.siteContent,
    siteContentRich: parsedGlobals.siteContentRich,
    siteSections: clone(catalog.siteSections || []),
    projects: clone(catalog.projects || [])
  };
}

async function saveCatalog(endpoint, message) {
  const targetCatalog = catalogForSave(endpoint);
  if (endpoint === "/api/apply-catalog" && !draftSavedSinceChanges) {
    showBuilderError(
      "Save draft required",
      "Please click Save draft before applying this portfolio to the live site.",
      "Apply to site was stopped before commit and push. Save the draft, then click Apply to site again."
    );
    setStatus("Apply to site stopped. Save draft first.");
    setSaveState("dirty", "Save draft needed");
    return;
  }
  if (endpoint === "/api/apply-catalog" && !(targetCatalog.projects || []).length) {
    showBuilderError(
      "No saved project preview",
      "Save a project or use Save all sections before applying to the live site.",
      "Apply to site was stopped before commit and push."
    );
    setStatus("Apply to site stopped. Save a project or use Save all sections first.");
    setSaveState("dirty", "Preview needs projects");
    return;
  }

  try {
    clearTimeout(autosaveTimer);
    saveDraftButton.disabled = true;
    applyCatalogButton.disabled = true;
    const applying = endpoint === "/api/apply-catalog";
    setStatus(applying ? "Applying site changes..." : "Saving draft...");
    setSaveState(applying ? "publishing" : "saving", applying ? "Publishing..." : "Saving...");
    const response = await fetch(`${endpoint}?t=${Date.now()}`, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ catalog: targetCatalog })
    });
    const result = await response.json();
    if (!response.ok) {
      setStatus(result.error || "Save failed.");
      setSaveState("error", endpoint === "/api/apply-catalog" ? "Publish failed" : "Save failed");
      return;
    }
    if (result.publish) {
      setStatus(result.publish.pushed
        ? `${message}: ${result.file}. Pushed to ${result.publish.branch}.`
        : `${message}: ${result.file}. Git push failed: ${result.publish.error}`);
      setSaveState(result.publish.pushed ? "published" : "error", result.publish.pushed ? "Site applied" : "Push failed");
      showPublishResult(result);
      return;
    }
    if (endpoint === "/api/save-draft") {
      draftSavedSinceChanges = true;
      setSaveState("saved", "Draft saved");
    }
    setStatus(`${message}: ${result.file}`);
  } catch {
    setStatus("Save failed. Make sure the local server window is still running.");
    setSaveState("error", "Save failed");
  } finally {
    saveDraftButton.disabled = false;
    applyCatalogButton.disabled = false;
  }
}

async function loadData() {
  const [catalogResponse, templateResponse] = await Promise.all([
    fetch(`/api/catalog?t=${Date.now()}`, { cache: "no-store" }),
    fetch(`/api/templates?t=${Date.now()}`, { cache: "no-store" })
  ]);
  const catalogData = await catalogResponse.json();
  const templateData = await templateResponse.json();

  catalog = catalogData.catalog;
  catalog.funFacts = Object.prototype.hasOwnProperty.call(catalog, "funFacts")
    ? normalizeFunFacts(catalog.funFacts)
    : clone(defaultFunFacts);
  catalog.funFactsRich = catalog.funFactsRich || null;
  catalog.fieldStyles = normalizeFieldStyles(catalog.fieldStyles || {});
  catalog.siteContentRich = catalog.siteContentRich || {};
  catalog.profileRich = catalog.profileRich || {};
  catalog.profile = normalizeProfile(catalog.profile || {});
  catalog.siteContent = normalizeSiteContent(catalog.siteContent || {});
  catalog.siteSections = catalog.siteSections || [];
  templates = templateData.templates || [];
  catalog.projects = (catalog.projects || []).filter((project) => !starterProjectIds.has(project.id));
  catalog.projects.forEach((project) => {
    migrateLegacyProjectSections(project);
    ensureCompileCode(project);
  });
  savedPortfolioCatalog = {
    categories: clone(catalog.categories || []),
    fieldStyles: clone(catalog.fieldStyles || {}),
    funFacts: clone(catalog.funFacts || []),
    funFactsRich: clone(catalog.funFactsRich || null),
    profile: clone(normalizeProfile(catalog.profile || {})),
    profileRich: clone(catalog.profileRich || {}),
    siteContent: clone(catalog.siteContent || defaultSiteContent),
    siteContentRich: clone(catalog.siteContentRich || {}),
    projects: (catalog.projects || []).map((project) => parseProjectForPortfolio(project)),
    siteSections: clone(catalog.siteSections || [])
  };
  setStatus(`Loaded ${catalogData.source} catalog. Builder controls are local-only.`);
  draftSavedSinceChanges = true;
  setSaveState("loaded", "Loaded");

  templateSelect.innerHTML = groupedTemplateOptions();
  refreshCategoryControls();
  selectedProjectId = catalog.projects[0]?.id || "";
  expandedCategories = new Set(catalog.categories.map((category) => category.id));
  renderAll();
}

templateSelect.addEventListener("change", () => {
  const template = templates.find((item) => item.id === templateSelect.value);
  showTemplatePreview(template);
});

templatePreviewClose.addEventListener("click", () => {
  closeDialogElement(templateDialog);
});

let activeBuilderGuideTopic = "all";

function prepareBuilderGuideTopicLinks() {
  builderGuideSections?.querySelectorAll("[data-guide-section]").forEach((section) => {
    const summary = section.querySelector("summary");
    if (!summary) return;
    summary.setAttribute("role", "link");
    summary.setAttribute("tabindex", "0");
    const title = summary.querySelector(".guide-card-title")?.textContent?.trim() || summary.textContent.trim();
    summary.setAttribute("aria-label", `Open ${title}`);
    summary.title = "Open this guide topic";
    section.open = false;
  });
}

function updateBuilderGuideStats() {
  if (!builderGuideDialog) return;
  const projectCount = catalog.projects?.length || 0;
  const categoryCount = catalog.categories?.length || 0;
  const parsedCount = savedPortfolioCatalog.projects?.length || 0;
  const targetLabel = currentPublishTarget?.remote
    ? `Target: ${currentPublishTarget.remote.replace(/^https:\/\/github\.com\//i, "")}`
    : "Target: not connected";
  const values = {
    projects: `Projects: ${projectCount} (${parsedCount} parsed)`,
    categories: `Categories: ${categoryCount}`,
    draft: draftSavedSinceChanges ? "Draft: saved" : "Draft: unsaved changes",
    target: targetLabel
  };
  Object.entries(values).forEach(([key, value]) => {
    const node = builderGuideDialog.querySelector(`[data-guide-stat='${key}']`);
    if (node) node.textContent = value;
  });
}

function guideSectionText(section) {
  return [
    section.querySelector("summary")?.textContent || "",
    section.textContent || "",
    section.dataset.guideSection || ""
  ].join(" ").toLowerCase();
}

function filterBuilderGuide() {
  if (!builderGuideSections) return;
  const query = String(builderGuideSearch?.value || "").trim().toLowerCase();
  const sections = [...builderGuideSections.querySelectorAll("[data-guide-section]")];
  let visibleCount = 0;
  sections.forEach((section) => {
    const topicMatch = activeBuilderGuideTopic === "all" || (section.dataset.guideSection || "").split(/\s+/).includes(activeBuilderGuideTopic);
    const queryMatch = !query || guideSectionText(section).includes(query);
    const visible = topicMatch && queryMatch;
    section.hidden = !visible;
    if (visible) {
      visibleCount += 1;
      section.open = false;
    }
  });
  if (builderGuideResults) {
    const topicText = activeBuilderGuideTopic === "all" ? "all guide topics" : `${activeBuilderGuideTopic} guides`;
    builderGuideResults.textContent = visibleCount
      ? `${visibleCount} ${visibleCount === 1 ? "topic" : "topics"} available in ${topicText}${query ? ` matching "${query}"` : ""}. Click a card to open the guide.`
      : `No guide topics match "${query}".`;
  }
}

function setBuilderGuideTopic(topic = "all") {
  activeBuilderGuideTopic = topic || "all";
  builderGuideDialog?.querySelectorAll("[data-guide-topic]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.guideTopic === activeBuilderGuideTopic ? "true" : "false");
  });
  filterBuilderGuide();
}

function openBuilderGuideTopic(section) {
  if (!section || !builderGuideTopicDialog || !builderGuideTopicTitle || !builderGuideTopicBody) return;
  const summary = section.querySelector("summary");
  const source = section.querySelector(":scope > div");
  const title = summary?.querySelector(".guide-card-title")?.textContent?.trim() || summary?.textContent?.trim() || "Builder guide topic";
  builderGuideTopicTitle.textContent = title;
  builderGuideTopicBody.replaceChildren();
  if (source) {
    const copy = source.cloneNode(true);
    copy.classList.add("builder-guide-topic-copy");
    builderGuideTopicBody.append(copy);
  } else {
    const empty = document.createElement("p");
    empty.textContent = "This guide topic does not have written instructions yet.";
    builderGuideTopicBody.append(empty);
  }
  if (!builderGuideTopicDialog.open) builderGuideTopicDialog.showModal();
  requestAnimationFrame(() => {
    builderGuideTopicBody.scrollTop = 0;
    builderGuideTopicBody.focus({ preventScroll: true });
    updateDialogWindowButtons(builderGuideTopicDialog);
  });
}

builderGuideOpen.addEventListener("click", () => {
  updateBuilderGuideStats();
  prepareBuilderGuideTopicLinks();
  filterBuilderGuide();
  builderGuideDialog.showModal();
});

builderGuideClose.addEventListener("click", () => {
  closeDialogElement(builderGuideDialog);
});

builderGuideTopicClose?.addEventListener("click", () => {
  closeDialogElement(builderGuideTopicDialog);
});

builderGuideTopicDialog?.addEventListener("close", () => {
  builderGuideTopicBody?.replaceChildren();
});

builderGuideSearch?.addEventListener("input", filterBuilderGuide);
builderGuideDialog?.addEventListener("click", (event) => {
  const topic = event.target.closest("[data-guide-topic]");
  if (topic) {
    setBuilderGuideTopic(topic.dataset.guideTopic || "all");
    return;
  }
  const guideSummary = event.target.closest(".builder-guide-section > summary");
  if (guideSummary && builderGuideSections?.contains(guideSummary)) {
    event.preventDefault();
    openBuilderGuideTopic(guideSummary.parentElement);
  }
});

builderGuideDialog?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const guideSummary = event.target.closest(".builder-guide-section > summary");
  if (!guideSummary || !builderGuideSections?.contains(guideSummary)) return;
  event.preventDefault();
  openBuilderGuideTopic(guideSummary.parentElement);
});

projectWindowTitle.addEventListener("dblclick", (event) => {
  event.preventDefault();
  clearTimeout(titleClickTimer);
  beginTitleRename();
});

projectWindowTitle.addEventListener("keydown", (event) => {
  if (projectWindowTitle.isContentEditable) {
    if (event.key === "Enter") {
      event.preventDefault();
      endTitleRename(true);
    }
    if (event.key === "Escape") {
      event.preventDefault();
      endTitleRename(false);
    }
    return;
  }
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  beginTitleRename();
});

projectWindowTitle.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const dialogBounds = projectDialog.getBoundingClientRect();
  projectTitleMenu.style.left = `${event.clientX - dialogBounds.left}px`;
  projectTitleMenu.style.top = `${event.clientY - dialogBounds.top}px`;
  projectTitleMenu.hidden = false;
});

projectTitleMenu.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-title-action]");
  if (!button) return;
  const action = button.dataset.titleAction;
  if (action === "close") {
    projectTitleMenu.hidden = true;
    return;
  }
  if (action === "copy") {
    const text = projectWindowTitle.textContent?.trim() || "";
    if (text) await navigator.clipboard.writeText(text);
    projectTitleMenu.hidden = true;
    return;
  }
  if (action === "paste") {
    const text = (await navigator.clipboard.readText()).trim();
    if (text) {
      beginTitleRename();
      projectWindowTitle.textContent = text;
      endTitleRename(true);
    }
    projectTitleMenu.hidden = true;
    return;
  }
  if (action === "select") {
    const range = document.createRange();
    range.selectNodeContents(projectWindowTitle);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    projectTitleMenu.hidden = true;
    return;
  }
  if (action === "rename") renameSelectedProject();
  if (action === "details") openProjectMetaDetails();
});

titleRenameSave.addEventListener("click", () => endTitleRename(true));
titleRenameCancel.addEventListener("click", () => endTitleRename(false));
projectMetaClose.addEventListener("click", () => closeDialogElement(projectMetaDialog));
projectMetaGrid?.addEventListener("change", (event) => {
  if (event.target.matches("[data-meta-status]")) {
    updateProjectField("status", event.target.value);
    openProjectMetaDetails();
    return;
  }
  if (event.target.matches("[data-meta-status-visible]")) {
    updateProjectField("showStatusOnPortfolio", event.target.checked);
    openProjectMetaDetails();
  }
});

viewProjectPreviewButton.addEventListener("click", openProjectPortfolioPreview);
projectPreviewClose.addEventListener("click", closeProjectPreviewWindow);
builderFileViewClose?.addEventListener("click", () => closeDialogElement(builderFileViewDialog, "close"));
projectPreviewDialog.addEventListener("close", () => {
  document.body.classList.remove("full-window-open");
});

projectPreviewBack.addEventListener("click", projectPreviewBackStep);
projectPreviewForward.addEventListener("click", projectPreviewForwardStep);

projectPreviewContent.addEventListener("click", (event) => {
  const sectionButton = event.target.closest("[data-preview-section-index]");
  if (!sectionButton || !activeProjectPreviewProject?.portfolioView) return;
  openProjectPreviewNode(
    Number(sectionButton.dataset.previewSectionIndex),
    previewPathFromString(sectionButton.dataset.previewResourcePath || "")
  );
});
saveProjectButton.addEventListener("click", () => {
  void saveSelectedProjectToPortfolio();
});
saveProjectCloseButton.addEventListener("click", () => {
  void saveSelectedProjectAndClose();
});
openPortfolioPreviewButton.addEventListener("click", openPortfolioPreview);
saveAllSectionsButton.addEventListener("click", saveAllSections);
portfolioPreviewClose.addEventListener("click", () => {
  closeDialogElement(portfolioPreviewDialog);
});
portfolioPreviewDialog.addEventListener("close", () => {
  document.body.classList.remove("full-window-open");
});
publishTargetOpen?.addEventListener("click", openPublishTargetDialog);
publishTargetClose?.addEventListener("click", () => {
  closeDialogElement(publishTargetDialog);
});
publishTargetCancel?.addEventListener("click", () => {
  closeDialogElement(publishTargetDialog);
});
publishTargetForm?.addEventListener("submit", savePublishTarget);
publishTargetSync?.addEventListener("click", syncFromPublishTarget);
publishTargetCheck?.addEventListener("click", loadSystemReadiness);
publishTargetInstallGit?.addEventListener("click", installGitForPublishing);
publishTargetRepository?.addEventListener("input", () => {
  markPublishTargetNeedsAuthentication();
});
publishTargetDomain?.addEventListener("input", () => {
  markPublishTargetNeedsAuthentication();
  publishTargetDomain.dataset.autofilled = "false";
});
publishTargetUsername?.addEventListener("input", markPublishTargetNeedsAuthentication);
publishTargetPassword?.addEventListener("input", markPublishTargetNeedsAuthentication);
publishResultClose.addEventListener("click", () => {
  closeDialogElement(publishResultDialog);
});

appUpdateClose?.addEventListener("click", () => {
  closeDialogElement(appUpdateDialog, "close");
});

appUpdateLater?.addEventListener("click", () => {
  if (pendingAppUpdate?.latestVersion) {
    localStorage.setItem("omb-snoozed-update-version", pendingAppUpdate.latestVersion);
    localStorage.setItem("omb-snoozed-update-at", String(Date.now()));
  }
  closeDialogElement(appUpdateDialog, "later");
});

appUpdateSkip?.addEventListener("click", () => {
  if (pendingAppUpdate?.latestVersion) {
    localStorage.setItem("omb-skipped-update-version", pendingAppUpdate.latestVersion);
  }
  closeDialogElement(appUpdateDialog, "skip");
});

appUpdateApply?.addEventListener("click", () => {
  startAppUpdateInstall();
});

appUpdateCheckButton?.addEventListener("click", () => {
  checkForAppUpdates({ force: true, manual: true });
});

securityReportOpen?.addEventListener("click", openSecurityReport);
securityReportRefresh?.addEventListener("click", openSecurityReport);
securityReportClose?.addEventListener("click", () => {
  closeDialogElement(securityReportDialog, "close");
});
securityReportOk?.addEventListener("click", () => {
  closeDialogElement(securityReportDialog, "close");
});

addProjectButton.addEventListener("click", () => {
  toggleCategoryDropdown();
});

projectSearchInput?.addEventListener("input", () => {
  projectSearchQuery = projectSearchInput.value || "";
  renderTree();
});

projectSearchClear?.addEventListener("click", () => {
  projectSearchQuery = "";
  if (projectSearchInput) {
    projectSearchInput.value = "";
    projectSearchInput.focus();
  }
  renderTree();
});

quickOpenSelected?.addEventListener("click", () => {
  const project = selectedProject();
  if (!project) return;
  openProjectWindow(project.id, activeSectionId || "brief");
});

quickPreviewSelected?.addEventListener("click", () => {
  const project = selectedProject();
  if (!project) return;
  openProjectPortfolioPreview();
});

addCategoryButton?.addEventListener("click", () => openCategoryDialog());
categoryCancel?.addEventListener("click", () => closeDialogElement(categoryDialog, "cancel"));
categoryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  saveCategoryFromDialog();
  closeDialogElement(categoryDialog, "save");
});
categoryDialog?.addEventListener("close", () => {
  editingCategoryId = "";
  hideCategoryTitleMenu();
  if (categoryDialogTitle) categoryDialogTitle.textContent = "Add category";
});

addSiteSectionButton.addEventListener("click", addSiteSection);

funFactsInput?.addEventListener("input", () => {
  syncFunFactsFromInput();
  scheduleAutosave();
  schedulePreviewRender();
});

saveFunFactsButton?.addEventListener("click", () => {
  const facts = syncFunFactsFromInput();
  setStatus(`Saved ${facts.length} fun fact${facts.length === 1 ? "" : "s"} locally. Click Save draft before applying to site.`);
  scheduleAutosave(100);
  schedulePreviewRender();
});

clearFunFactsButton?.addEventListener("click", () => {
  catalog.funFacts = [];
  catalog.funFactsRich = { blocks: [] };
  populateStandaloneRichEditor(funFactsInput, null, "");
  syncFunFactsFromInput();
  setStatus("Fun facts cleared locally. Click Save draft before applying to site.");
  scheduleAutosave(100);
  schedulePreviewRender();
});

[siteHeroEyebrowInput, siteHeroTitleInput, siteHeroCopyInput].filter(Boolean).forEach((input) => {
  input.addEventListener("input", () => {
    syncSiteContentFromInputs();
    setStatus("Front page text updated locally. Click Save draft before applying to site.");
    scheduleAutosave();
    schedulePreviewRender();
  });
});

saveSiteContentButton?.addEventListener("click", () => {
  syncSiteContentFromInputs();
  setStatus("Front page text saved locally. Click Save draft before applying to site.");
  scheduleAutosave(100);
  schedulePreviewRender();
});

[
  profileDisplayNameInput,
  profilePortfolioLabelInput,
  profileContactIntroInput,
  profileEmailInput,
  profilePhoneInput,
  profileGithubInput,
  profileLinkedinInput,
  profileWebsiteInput
].filter(Boolean).forEach((input) => {
  input.addEventListener("input", () => {
    syncProfileFromInputs();
    setStatus("Profile and contact details updated locally. Click Save draft before applying to site.");
    scheduleAutosave();
    schedulePreviewRender();
  });
});

saveProfileContentButton?.addEventListener("click", () => {
  syncProfileFromInputs();
  setStatus("Profile and contact details saved locally. Click Save draft before applying to site.");
  scheduleAutosave(100);
  schedulePreviewRender();
});

profileImageUploadButton?.addEventListener("click", () => openProfileAssetManager("profileImage"));
profileHeroUploadButton?.addEventListener("click", () => openProfileAssetManager("heroImage"));
profileResumeUploadButton?.addEventListener("click", () => openProfileAssetManager("resumeUrl"));
profileBrandUploadButton?.addEventListener("click", () => openProfileAssetManager("brandImage"));

profileAssetClose?.addEventListener("click", () => closeDialogElement(profileAssetDialog, "close"));
profileAssetDone?.addEventListener("click", () => closeDialogElement(profileAssetDialog, "close"));
profileAssetView?.addEventListener("click", () => openProfileAssetDirect(activeProfileAssetKind));
profileAssetRemove?.addEventListener("click", () => removeProfileAsset(activeProfileAssetKind));
profileAssetChange?.addEventListener("click", async () => {
  const kind = activeProfileAssetKind;
  const changed = await uploadProfileAsset(kind);
  if (changed && profileAssetDialog?.open) renderProfileAssetManager(kind);
});
profileAssetViewClose?.addEventListener("click", () => closeDialogElement(profileAssetViewDialog, "close"));
profileAssetViewDone?.addEventListener("click", () => closeDialogElement(profileAssetViewDialog, "close"));

siteSectionList.addEventListener("click", (event) => {
  const toggleButton = event.target.closest("[data-site-section-toggle]");
  const editButton = event.target.closest("[data-site-section-edit]");
  const backgroundButton = event.target.closest("[data-site-section-bg]");
  const clearBackgroundButton = event.target.closest("[data-site-section-bg-clear]");
  const deleteButton = event.target.closest("[data-site-section-delete]");
  const addSubsectionButton = event.target.closest("[data-site-subsection-add]");
  const editSubsectionButton = event.target.closest("[data-site-subsection-edit]");
  const deleteSubsectionButton = event.target.closest("[data-site-subsection-delete]");
  const addLinkButton = event.target.closest("[data-site-link-add]");
  const editLinkButton = event.target.closest("[data-site-link-edit]");
  const deleteLinkButton = event.target.closest("[data-site-link-delete]");
  if (toggleButton) toggleSiteSectionVisibility(toggleButton.dataset.siteSectionToggle);
  if (editButton) editSiteSection(editButton.dataset.siteSectionEdit);
  if (addSubsectionButton) addSiteSubsection(addSubsectionButton.dataset.siteSubsectionAdd);
  if (editSubsectionButton) editSiteSubsection(editSubsectionButton.dataset.siteSubsectionEdit, editSubsectionButton.dataset.index);
  if (deleteSubsectionButton) deleteSiteSubsection(deleteSubsectionButton.dataset.siteSubsectionDelete, deleteSubsectionButton.dataset.index);
  if (addLinkButton) addSiteSectionLink(addLinkButton.dataset.siteLinkAdd);
  if (editLinkButton) editSiteSectionLink(editLinkButton.dataset.siteLinkEdit, editLinkButton.dataset.index);
  if (deleteLinkButton) deleteSiteSectionLink(deleteLinkButton.dataset.siteLinkDelete, deleteLinkButton.dataset.index);
  if (backgroundButton) setSiteSectionBackground(backgroundButton.dataset.siteSectionBg);
  if (clearBackgroundButton) clearSiteSectionBackground(clearBackgroundButton.dataset.siteSectionBgClear);
  if (deleteButton) deleteSiteSection(deleteButton.dataset.siteSectionDelete);
});

categoryDropdown.addEventListener("click", (event) => {
  const button = event.target.closest("[data-create-category]");
  if (!button) return;
  openProjectCreateDialog(button.dataset.createCategory);
});

projectCreateCancel.addEventListener("click", () => {
  closeDialogElement(projectCreateDialog, "cancel");
});

projectCreateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!pendingCreateCategoryId) return;
  createProjectInCategory(pendingCreateCategoryId);
  closeDialogElement(projectCreateDialog, "save");
});

projectTree.addEventListener("click", (event) => {
  hideCategoryTitleMenu();
  const categoryToggle = event.target.closest("[data-toggle-category]");
  const deleteCategoryButton = event.target.closest("[data-delete-category]");
  const deleteProjectButton = event.target.closest("[data-delete-project]");
  const projectButton = event.target.closest("[data-project-id]");
  if (deleteCategoryButton) {
    event.stopPropagation();
    requestCategoryDelete(deleteCategoryButton.dataset.deleteCategory);
    return;
  }
  if (deleteProjectButton) {
    event.stopPropagation();
    requestProjectDelete(deleteProjectButton.dataset.deleteProject);
    return;
  }
  if (categoryToggle) {
    const categoryId = categoryToggle.dataset.toggleCategory;
    if (expandedCategories.has(categoryId)) {
      expandedCategories.delete(categoryId);
    } else {
      expandedCategories.add(categoryId);
    }
    renderAll();
    return;
  }
  if (projectButton) {
    openProjectWindow(projectButton.dataset.projectId, "brief");
  }
});

projectTree.addEventListener("contextmenu", (event) => {
  const categoryTarget = event.target.closest("[data-category-heading], [data-category-title-target]");
  if (!categoryTarget) return;
  const categoryId = categoryTarget.dataset.categoryHeading || categoryTarget.dataset.categoryTitleTarget || "";
  if (!categoryId) return;
  event.preventDefault();
  event.stopPropagation();
  showCategoryTitleMenu(categoryId, event.clientX, event.clientY);
});

categoryTitleMenu?.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-category-action]");
  if (!button) return;
  await handleCategoryTitleAction(button.dataset.categoryAction, categoryTitleMenu.dataset.categoryId || "");
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".add-project-wrap")) toggleCategoryDropdown(false);
  if (!event.target.closest("#summary-context-menu")) hideSummaryContextMenu();
  if (!event.target.closest("#project-title-menu") && !event.target.closest("#project-window-title")) {
    projectTitleMenu.hidden = true;
  }
  if (!event.target.closest("#category-title-menu") && !event.target.closest("[data-category-heading], [data-category-title-target]")) {
    hideCategoryTitleMenu();
  }
});

projectFields.addEventListener("click", async (event) => {
  if (handleRichCaretClick(event)) return;
  const createSummary = event.target.closest("[data-summary-create]");
  const saveSummary = event.target.closest("[data-summary-save]");
  const cancelSummary = event.target.closest("[data-summary-cancel]");
  const deleteSummary = event.target.closest("[data-summary-delete]");
  const blockAction = event.target.closest("[data-rich-block-action]");
  const richAction = event.target.closest("[data-rich-action]");
  const richBlock = event.target.closest(".rich-block");
  if (richBlock) selectRichBlock(richBlock);
  if (blockAction) {
    const editor = blockAction.closest("[data-rich-editor='summary']");
    const block = blockAction.closest(".rich-block");
    selectRichBlock(block);
    if (blockAction.dataset.richBlockAction === "copy-code") {
      await copyRichCodeBlock(block);
      return;
    }
    if (blockAction.dataset.richBlockAction === "edit") await editSelectedRichBlock(editor);
    if (blockAction.dataset.richBlockAction === "delete") deleteSelectedRichBlock(editor);
    return;
  }
  if (createSummary) {
    const project = selectedProject();
    summaryEditorProjectId = project?.id || "";
    renderFields(project);
    return;
  }
  if (saveSummary) {
    await saveRichSummary();
    return;
  }
  if (cancelSummary) {
    summaryEditorProjectId = "";
    activeSummaryEditor = null;
    renderFields(selectedProject());
    return;
  }
  if (deleteSummary) {
    deleteProjectSummary(selectedProject());
    return;
  }
  if (richAction) {
    await handleRichAction(richAction.dataset.richAction, projectFields.querySelector("[data-rich-editor='summary']"));
  }
});

function handleRichEditorContextMenu(event) {
    const editor = richEditorFromContextEvent(event);
    const textBlock = event.target.closest?.(".rich-text-block");

    if (!editor && !textBlock) return;

    event.preventDefault();
    event.stopPropagation();
    const nextEditor = editor || textBlock.closest("[data-rich-editor]");
    if (activeSummaryEditor && nextEditor && activeSummaryEditor !== nextEditor) {
      activeRichSelectionRange = null;
      activeTextSelectionRange = null;
      clearPersistentTextSelection(true);
      summaryContextMenu.hidden = true;
    }
    hideTextSelectionInspector();

    activePlainTextControl = null;
    activePlainTextSelection = null;
    activeSummaryEditor = nextEditor;
    configureSummaryContextMenu("rich", { textOnly: activeSummaryEditor.dataset.richTextOnly === "true" });
    const liveRange = selectionRangeInsideEditor(activeSummaryEditor);
    const savedRange = activeTextSelectionRange && !activeTextSelectionRange.collapsed
      ? activeTextSelectionRange.cloneRange()
      : null;
    const savedContainer = savedRange?.commonAncestorContainer?.nodeType === Node.TEXT_NODE
      ? savedRange.commonAncestorContainer.parentElement
      : savedRange?.commonAncestorContainer;
    if (liveRange && !liveRange.collapsed) {
      activeRichSelectionRange = liveRange.cloneRange();
      activeTextSelectionRange = liveRange.cloneRange();
    } else if (savedRange && savedContainer && activeSummaryEditor.contains(savedContainer)) {
      activeRichSelectionRange = savedRange.cloneRange();
      restoreRichSelection(activeSummaryEditor);
    } else {
      captureRichSelection(activeSummaryEditor);
    }
    selectRichBlock(event.target.closest?.(".rich-block") || currentRichBlock(activeSummaryEditor));
    syncRichContextMenuControls(activeSummaryBlock);

    const menuHost = activeSummaryEditor.closest("dialog") || document.body;
    if (summaryContextMenu.parentElement !== menuHost) menuHost.append(summaryContextMenu);

    summaryContextMenu.style.left = `${event.clientX}px`;
    summaryContextMenu.style.top = `${event.clientY}px`;
    summaryContextMenu.style.maxHeight = "";
    summaryContextMenu.hidden = false;
    positionCompactContextMenu(summaryContextMenu, event, menuHost, { minHeight: 180, maxHeight: 340 });
}

projectFields.addEventListener("contextmenu", handleRichEditorContextMenu);
sectionContent.addEventListener("contextmenu", handleRichEditorContextMenu);
funFactsInput?.addEventListener("contextmenu", handleRichEditorContextMenu);
sectionDescription?.addEventListener("contextmenu", handleRichEditorContextMenu);
[
  siteHeroEyebrowInput,
  siteHeroTitleInput,
  siteHeroCopyInput,
  profileDisplayNameInput,
  profilePortfolioLabelInput,
  profileContactIntroInput,
  profileEmailInput,
  profilePhoneInput,
  profileGithubInput,
  profileLinkedinInput,
  profileWebsiteInput
].filter(Boolean).forEach((editor) => {
  editor.addEventListener("contextmenu", handleRichEditorContextMenu);
});
document.addEventListener("contextmenu", (event) => {
  if (!richEditorFromContextEvent(event) && !event.target.closest?.(".rich-text-block")) return;
  handleRichEditorContextMenu(event);
}, true);

function handlePlainTextContextMenu(event) {
  const control = plainTextControlFromContextEvent(event);
  if (!control) return;

  event.preventDefault();
  hideTextSelectionInspector();
  activeSummaryEditor = null;
  activeSummaryBlock = null;
  activePlainTextControl = control;
  activePlainTextSelection = {
    start: control.selectionStart ?? 0,
    end: control.selectionEnd ?? control.value.length
  };
  configureSummaryContextMenu("plain");
  syncPlainContextMenuControls(control);

  const menuHost = control.closest("dialog") || document.body;
  if (summaryContextMenu.parentElement !== menuHost) menuHost.append(summaryContextMenu);
  summaryContextMenu.style.left = `${event.clientX}px`;
  summaryContextMenu.style.top = `${event.clientY}px`;
  summaryContextMenu.style.maxHeight = "";
  summaryContextMenu.hidden = false;
  positionCompactContextMenu(summaryContextMenu, event, menuHost, { minHeight: 140, maxHeight: 300 });
}

function selectedDocumentText() {
  const selection = window.getSelection();
  return selection && !selection.isCollapsed ? String(selection.toString() || "").trim() : "";
}

function showStaticSelectionContextMenu(event, selectedText) {
  if (!summaryContextMenu || !selectedText) return;
  event.preventDefault();
  event.stopPropagation();
  hideTextSelectionInspector();
  activeStaticSelectionText = selectedText;
  activePlainTextControl = null;
  activePlainTextSelection = null;
  activeSummaryEditor = null;
  activeSummaryBlock = null;
  configureSummaryContextMenu("selection");
  const menuHost = event.target.closest?.("dialog") || document.body;
  if (summaryContextMenu.parentElement !== menuHost) menuHost.append(summaryContextMenu);
  summaryContextMenu.style.left = `${event.clientX}px`;
  summaryContextMenu.style.top = `${event.clientY}px`;
  summaryContextMenu.style.maxHeight = "";
  summaryContextMenu.hidden = false;
  positionCompactContextMenu(summaryContextMenu, event, menuHost, { minHeight: 48, maxHeight: 120 });
}

document.addEventListener("contextmenu", (event) => {
  if (event.target.closest?.("#summary-context-menu")) return;
  const selectedText = selectedDocumentText();
  if (!selectedText) return;
  if (richEditorFromContextEvent(event) || plainTextControlFromContextEvent(event)) return;
  showStaticSelectionContextMenu(event, selectedText);
}, true);

document.addEventListener("contextmenu", handlePlainTextContextMenu);

async function handleRichEditorPaste(event) {
    const editor = event.target.closest("[data-rich-editor]");
    if (!editor) return;

    const imageItem = [...(event.clipboardData?.items || [])].find((item) => item.type.startsWith("image/"));

    if (imageItem) {
        event.preventDefault();
        if (editor.dataset.richTextOnly === "true") {
          setStatus("Images can only be pasted into overview editors, not title, profile, or contact fields.");
          return;
        }

        const imageBlock = await uploadSummaryImageFile(imageItem.getAsFile(), {
            align: "center",
            display: "show",
            folder: editor.dataset.richFolder || "summary",
            projectId: editor.dataset.richProjectId || "",
            title: ""
        });

        if (imageBlock) {
            insertRichBlockAtCursor(editor, createRichImageBlock(imageBlock));
            saveRichEditorToProject(editor);
        }

        return;
    }

    const pastedHtml = event.clipboardData?.getData("text/html") || "";
    if (pastedHtml) {
      event.preventDefault();
      insertHtmlIntoRichEditor(editor, pastedHtml);
      saveRichEditorToProject(editor);
      return;
    }

    const pastedText = event.clipboardData?.getData("text/plain") || "";
    if (!pastedText) return;

    event.preventDefault();
    insertPlainTextIntoRichEditor(editor, pastedText);
    saveRichEditorToProject(editor);
}
document.addEventListener("paste", (event) => {
    const hasImage = [...(event.clipboardData?.items || [])].some((item) => item.type.startsWith("image/"));
    if (!hasImage) return;

    const isRichEditor = event.target.closest("[data-rich-editor]");
    if (isRichEditor) return;

    const isTextField = event.target.matches("input, textarea, [contenteditable='true']");
    if (!isTextField) return;

    event.preventDefault();
    setStatus("Images can only be pasted into overview editors, not title or name fields.");
}, true);
function restoreRichInsertionPoint(editor) {
    if (!restoreRichSelection(editor)) focusTextBlock(selectedRichBlock(editor) || editor.querySelector(".rich-text-block"));
    editor.focus({ preventScroll: true });

    const range = selectionRangeInsideEditor(editor);
    if (!range) return null;

    range.deleteContents();
    return range;
}

function insertFragmentIntoRichEditor(editor, fragment) {
    const range = restoreRichInsertionPoint(editor);
    if (!range || !fragment) return;

    const lastInsertedNode = fragment.lastChild;
    range.insertNode(fragment);

    const nextRange = document.createRange();
    if (lastInsertedNode) nextRange.setStartAfter(lastInsertedNode);
    else nextRange.setStart(range.startContainer, range.startOffset);
    nextRange.collapse(true);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(nextRange);
    captureRichSelection(editor);
}

function insertPlainTextIntoRichEditor(editor, pastedText) {
    const textToInsert = String(pastedText || "").replace(/\r\n?/g, "\n");
    if (!textToInsert) return;

    const fragment = document.createDocumentFragment();
    textToInsert.split("\n").forEach((line, index) => {
        if (index > 0) fragment.append(document.createElement("br"));
        if (line) fragment.append(document.createTextNode(line));
    });
    insertFragmentIntoRichEditor(editor, fragment);
}

function insertHtmlIntoRichEditor(editor, pastedHtml) {
    const normalizedHtml = String(pastedHtml || "")
      .replace(/<\/(?:p|div|li|h[1-6]|tr)>/gi, "<br>")
      .replace(/<(?:p|div|li|h[1-6]|tr|td|th)[^>]*>/gi, "")
      .replace(/<br\s*\/?>\s*(<br\s*\/?>\s*){2,}/gi, "<br><br>");
    const template = document.createElement("template");
    template.innerHTML = sanitizeRichInlineHtml(normalizedHtml);
    insertFragmentIntoRichEditor(editor, template.content.cloneNode(true));
}

projectFields.addEventListener("paste", handleRichEditorPaste);
sectionContent.addEventListener("paste", handleRichEditorPaste);
funFactsInput?.addEventListener("paste", handleRichEditorPaste);
sectionDescription?.addEventListener("paste", handleRichEditorPaste);
[
  siteHeroEyebrowInput,
  siteHeroTitleInput,
  siteHeroCopyInput,
  profileDisplayNameInput,
  profilePortfolioLabelInput,
  profileContactIntroInput,
  profileEmailInput,
  profilePhoneInput,
  profileGithubInput,
  profileLinkedinInput,
  profileWebsiteInput
].filter(Boolean).forEach((editor) => {
  editor.addEventListener("paste", handleRichEditorPaste);
});

function handleRichEditorKeydown(event) {
    const editor = event.target.closest("[data-rich-editor]");
    if (!editor) return;

    if ((event.ctrlKey || event.metaKey) && ["b", "i", "u"].includes(event.key.toLowerCase())) {
      event.preventDefault();
      const command = event.key.toLowerCase() === "b"
        ? "bold"
        : event.key.toLowerCase() === "i"
          ? "italic"
          : "underline";
      applyRichInlineCommand(editor, command);
      return;
    }

    if (event.key !== "Enter") return;

    const block = event.target.closest(".rich-text-block");
    if (!block) return;

    event.preventDefault();
    if (event.shiftKey) {
      document.execCommand("insertLineBreak", false);
      captureRichSelection(editor);
      return;
    }

    const range = selectionRangeInsideEditor(editor);
    if (!range || !block.contains(range.startContainer)) return;
    range.deleteContents();
    const tail = document.createRange();
    tail.setStart(range.startContainer, range.startOffset);
    tail.setEnd(block, block.childNodes.length);
    const trailingContent = tail.extractContents();
    const nextBlock = matchingTextBlock(block, "");
    nextBlock.append(trailingContent);
    block.after(nextBlock);
    const nextRange = document.createRange();
    nextRange.selectNodeContents(nextBlock);
    nextRange.collapse(true);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(nextRange);
    captureRichSelection(editor);
    setStatus("Unsaved local changes.");
}

projectFields.addEventListener("keydown", handleRichEditorKeydown);
sectionContent.addEventListener("keydown", handleRichEditorKeydown);
funFactsInput?.addEventListener("keydown", handleRichEditorKeydown);
sectionDescription?.addEventListener("keydown", handleRichEditorKeydown);
[
  siteHeroEyebrowInput,
  siteHeroTitleInput,
  siteHeroCopyInput,
  profileDisplayNameInput,
  profilePortfolioLabelInput,
  profileContactIntroInput,
  profileEmailInput,
  profilePhoneInput,
  profileGithubInput,
  profileLinkedinInput,
  profileWebsiteInput
].filter(Boolean).forEach((editor) => {
  editor.addEventListener("keydown", handleRichEditorKeydown);
});

function handleRichEditorFocus(event) {
  const editor = event.target.closest("[data-rich-editor]");
  if (!editor) return;
  document.execCommand("defaultParagraphSeparator", false, "p");
  captureRichSelection(editor);
}

function handleRichEditorInput(event) {
  const editor = event.target.closest("[data-rich-editor]");
  if (!editor) return;
  captureRichSelection(editor);
  setStatus("Unsaved local changes.");
}

function handleRichEditorBeforeInput(event) {
  const editor = event.target.closest("[data-rich-editor]");
  if (!editor) return;
  const inputType = event.inputType || "";
  if (!/insertFromPaste|insertFromDrop/i.test(inputType) && /^(insert|delete|history)/i.test(inputType)) {
    clearPersistentTextSelection(true);
  }
}

[projectFields, sectionContent, funFactsInput, sectionDescription,
  siteHeroEyebrowInput,
  siteHeroTitleInput,
  siteHeroCopyInput,
  profileDisplayNameInput,
  profilePortfolioLabelInput,
  profileContactIntroInput,
  profileEmailInput,
  profilePhoneInput,
  profileGithubInput,
  profileLinkedinInput,
  profileWebsiteInput
].filter(Boolean).forEach((root) => {
  root.addEventListener("beforeinput", handleRichEditorBeforeInput);
  root.addEventListener("focusin", handleRichEditorFocus);
  root.addEventListener("input", handleRichEditorInput);
});

document.addEventListener("selectionchange", () => {
  const selection = window.getSelection();
  let node = selection?.anchorNode;
  if (node?.nodeType === Node.TEXT_NODE) node = node.parentElement;
  const editor = node?.closest?.("[data-rich-editor]");
  if (editor) {
    activeSummaryEditor = editor;
    const range = captureRichSelection(editor);
    if (range && !range.collapsed) {
      activeTextSelectionRange = range.cloneRange();
      selectionGestureProducedRange = true;
      showPersistentTextSelection(range);
    }
  }
  if (!selectionGestureActive) scheduleTextSelectionInspectorRefresh(20);
});

document.addEventListener("pointerdown", (event) => {
  if (event.target.closest("#text-selection-inspector, #summary-context-menu")) return;

  const editor = event.button === 2
    ? richEditorFromContextEvent(event)
    : event.target.closest("[data-rich-editor]");
  if (event.button === 2 && editor) {
    const savedRange = rangeBelongsToEditor(activeTextSelectionRange, editor)
      ? activeTextSelectionRange.cloneRange()
      : null;
    const range = selectionRangeInsideEditor(editor) || savedRange;
    activeSummaryEditor = editor;
    if (range && !range.collapsed) {
      activeRichSelectionRange = range.cloneRange();
      activeTextSelectionRange = range.cloneRange();
      selectionGestureProducedRange = true;
      showPersistentTextSelection(range);
    }
    if (!textSelectionInspector?.hidden) hideTextSelectionInspector();
    selectionGestureActive = false;
    return;
  }

  clearPersistentTextSelection(true);
  if (!textSelectionInspector?.hidden) hideTextSelectionInspector();
  if (!editor) {
    selectionGestureActive = false;
    selectionGestureProducedRange = false;
    return;
  }
  if (!event.target.closest("button, input, select, textarea, [contenteditable='false']")) {
    editor.focus({ preventScroll: true });
  }
  activeSummaryEditor = editor;
  selectionGestureActive = true;
  selectionGestureProducedRange = false;
}, true);

function finishTextSelectionGesture(event) {
  if (event?.button === 2 || event?.target?.closest?.("#text-selection-inspector, #summary-context-menu")) return;
  selectionGestureActive = false;
  clearTimeout(selectionGestureFinishTimer);
  selectionGestureFinishTimer = setTimeout(() => {
    const selection = window.getSelection();
    let node = selection?.anchorNode;
    if (node?.nodeType === Node.TEXT_NODE) node = node.parentElement;
    const editor = node?.closest?.("[data-rich-editor]");
    const range = editor ? selectionRangeInsideEditor(editor) : null;
  if (editor && range && !range.collapsed) {
      activeSummaryEditor = editor;
      activeRichSelectionRange = range.cloneRange();
      activeTextSelectionRange = range.cloneRange();
      selectionGestureProducedRange = true;
      showPersistentTextSelection(range);
    } else if (!selectionGestureProducedRange) {
      if (editor && rangeBelongsToEditor(activeTextSelectionRange, editor)) {
        showPersistentTextSelection(activeTextSelectionRange);
      } else {
        clearPersistentTextSelection(true);
      }
    }
    refreshTextSelectionInspector();
  }, 40);
}

document.addEventListener("pointerup", finishTextSelectionGesture, true);
document.addEventListener("pointercancel", () => {
  selectionGestureActive = false;
}, true);
document.addEventListener("scroll", refreshPersistentSelectionHighlight, true);
window.addEventListener("resize", refreshPersistentSelectionHighlight);
document.addEventListener("mouseup", finishTextSelectionGesture);
document.addEventListener("keyup", (event) => {
  if (event.target.closest?.("#text-selection-inspector")) {
    if (activeTextSelectionRange && activeSummaryEditor) showPersistentTextSelection(activeTextSelectionRange);
    return;
  }
  if (event.key === "Escape") {
    clearPersistentTextSelection(true);
    hideTextSelectionInspector();
    return;
  }
  if (!event.shiftKey && window.getSelection()?.isCollapsed) {
    clearPersistentTextSelection(true);
    hideTextSelectionInspector();
    return;
  }
  if (event.key.startsWith("Arrow") || event.shiftKey) scheduleTextSelectionInspectorRefresh(20);
});

textSelectionInspector?.addEventListener("pointerenter", () => {
  selectionInspectorPointerInside = true;
});
textSelectionInspector?.addEventListener("pointerleave", () => {
  selectionInspectorPointerInside = false;
});

textSelectionInspector?.addEventListener("pointerdown", (event) => {
  selectionInspectorPointerInside = true;
  const handle = event.target.closest("[data-selection-inspector-drag]");
  if (!handle || event.target.closest("button, input, select, label")) return;
  const rect = textSelectionInspector.getBoundingClientRect();
  activeSelectionInspectorDrag = {
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
    pointerId: event.pointerId,
    target: event.target
  };
  event.target.setPointerCapture?.(event.pointerId);
  textSelectionInspector.classList.add("is-dragging");
  event.preventDefault();
});

document.addEventListener("pointermove", (event) => {
  if (!activeSelectionInspectorDrag || !textSelectionInspector) return;
  const rect = textSelectionInspector.getBoundingClientRect();
  const margin = 8;
  const left = Math.max(margin, Math.min(event.clientX - activeSelectionInspectorDrag.offsetX, window.innerWidth - rect.width - margin));
  const top = Math.max(margin, Math.min(event.clientY - activeSelectionInspectorDrag.offsetY, window.innerHeight - rect.height - margin));
  textSelectionInspector.style.left = `${left}px`;
  textSelectionInspector.style.top = `${top}px`;
  selectionInspectorWasMoved = true;
});

function endSelectionInspectorDrag() {
  if (!activeSelectionInspectorDrag) return;
  activeSelectionInspectorDrag.target?.releasePointerCapture?.(activeSelectionInspectorDrag.pointerId);
  textSelectionInspector?.classList.remove("is-dragging");
  activeSelectionInspectorDrag = null;
}

document.addEventListener("pointerup", endSelectionInspectorDrag);
document.addEventListener("pointercancel", endSelectionInspectorDrag);

textSelectionInspector?.addEventListener("click", (event) => {
  if (event.target.closest("[data-selection-inspector-close]")) {
    if (summaryContextMenu && !summaryContextMenu.hidden) {
      hideTextSelectionInspector();
      return;
    }
    clearPersistentTextSelection(true);
    hideTextSelectionInspector();
    return;
  }
  const toggle = event.target.closest("[data-selection-options-toggle]");
  if (toggle) {
    const kind = toggle.dataset.selectionOptionsToggle;
    const options = textSelectionInspector.querySelector(`[data-selection-options='${kind}']`);
    const willOpen = options?.hidden;
    closeSelectionInspectorOptions(kind);
    if (options) options.hidden = !willOpen;
    return;
  }
  const option = event.target.closest("[data-selection-value]");
  if (option) applySelectionInspectorFormat(option.dataset.selectionValue, option.dataset.value);
});

function handleSelectionInspectorTextField(event) {
  if (event.type === "keydown" && event.key !== "Enter") return;
  if (event.type === "keydown") event.preventDefault();
  if (event.target === selectionFontInput) applySelectionInspectorFormat("font", event.target.value);
  if (event.target === selectionColorInput) applySelectionInspectorFormat("color", event.target.value);
  if (event.target === selectionSizeInput) applySelectionInspectorFormat("size", event.target.value);
}

function scheduleSelectionInspectorTextField(event) {
  clearTimeout(selectionInspectorInputTimer);
  const target = event.target;
  selectionInspectorInputTimer = setTimeout(() => {
    if (target === selectionFontInput && cleanFontFamily(target.value)) applySelectionInspectorFormat("font", target.value);
    if (target === selectionColorInput && normalizeTextColor(target.value)) applySelectionInspectorFormat("color", target.value);
    if (target === selectionSizeInput && normalizeFontPx(target.value)) applySelectionInspectorFormat("size", target.value);
  }, 350);
}

[selectionFontInput, selectionColorInput, selectionSizeInput].forEach((input) => {
  input?.addEventListener("input", scheduleSelectionInspectorTextField);
  input?.addEventListener("change", handleSelectionInspectorTextField);
  input?.addEventListener("keydown", handleSelectionInspectorTextField);
});

selectionColorPicker?.addEventListener("input", (event) => {
  applySelectionInspectorFormat("color", event.target.value);
});

function focusAdjacentRichBlockText(block, direction) {
  const editor = block?.closest("[data-rich-editor]");
  if (!editor) return;
  const sibling = direction === "before" ? block.previousElementSibling : block.nextElementSibling;
  const textBlock = sibling?.matches(".rich-text-block") ? sibling : matchingTextBlock(block, "");
  if (textBlock !== sibling) {
    if (direction === "before") block.before(textBlock);
    else block.after(textBlock);
  }
  focusTextBlock(textBlock);
  saveRichEditorToProject(editor);
}

function handleRichCaretClick(event) {
  const caretButton = event.target.closest("[data-rich-caret]");
  if (!caretButton) return false;
  focusAdjacentRichBlockText(caretButton.closest(".rich-block"), caretButton.dataset.richCaret);
  return true;
}

function handleRichDragStart(event) {
  const handle = event.target.closest("[data-rich-drag-handle]");
  const imageBlock = event.target.closest(".rich-image-block");
  const isControl = event.target.closest("button, input, select, textarea, a, .rich-block-actions, [data-rich-caret]");
  const block = handle?.closest(".rich-block") || (!isControl ? imageBlock : null);
  if (!block) {
    if (imageBlock) event.preventDefault();
    return;
  }
  activeRichDragBlock = block;
  selectRichBlock(activeRichDragBlock);
  activeRichDragBlock.classList.add("is-dragging");
  if (event.dataTransfer) {
    event.dataTransfer.clearData();
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text/x-rich-block", "move");
    event.dataTransfer.setData("text/plain", activeRichDragBlock.dataset.title || activeRichDragBlock.dataset.type || "image");
  }
}

function handleRichDragOver(event) {
  if (!activeRichDragBlock) return;
  const editor = event.target.closest("[data-rich-editor]");
  if (!editor || editor !== activeRichDragBlock.closest("[data-rich-editor]")) return;
  event.preventDefault();
  if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
  updateRichDropMarker(editor, activeRichDragBlock, event.clientX, event.clientY, event.target);
}

function richRangeFromPoint(x, y) {
  if (document.caretRangeFromPoint) return document.caretRangeFromPoint(x, y);
  if (document.caretPositionFromPoint) {
    const position = document.caretPositionFromPoint(x, y);
    if (position) {
      const range = document.createRange();
      range.setStart(position.offsetNode, position.offset);
      range.collapse(true);
      return range;
    }
  }
  return null;
}

function richDropLocation(editor, movingBlock, x, y, eventTarget = null) {
  const previousPointerEvents = movingBlock?.style.pointerEvents || "";
  if (movingBlock) movingBlock.style.pointerEvents = "none";
  try {
    const dropRange = validDropRangeForEditor(editor, movingBlock, richRangeFromPoint(x, y));
    const pointTarget = eventTarget && !movingBlock?.contains(eventTarget)
      ? eventTarget
      : document.elementFromPoint(x, y);
    return {
      dropRange,
      target: pointTarget?.closest?.(".rich-block") || null
    };
  } finally {
    if (movingBlock) movingBlock.style.pointerEvents = previousPointerEvents;
  }
}

function validDropRangeForEditor(editor, movingBlock, range) {
  const rangeNode = range?.startContainer?.nodeType === Node.TEXT_NODE
    ? range.startContainer.parentElement
    : range?.startContainer;
  if (!range || !rangeNode || !editor.contains(rangeNode)) return null;
  if (movingBlock?.contains(rangeNode)) return null;
  if (rangeNode.closest("[contenteditable='false']")) return null;
  return range;
}

function ensureRichDropMarker() {
  if (!activeRichDropMarker) {
    activeRichDropMarker = document.createElement("div");
    activeRichDropMarker.className = "rich-drop-marker";
    activeRichDropMarker.setAttribute("aria-hidden", "true");
    document.body.append(activeRichDropMarker);
  }
  activeRichDropMarker.hidden = false;
  return activeRichDropMarker;
}

function hideRichDropMarker() {
  if (activeRichDropMarker) activeRichDropMarker.hidden = true;
}

function updateRichDropMarker(editor, movingBlock, x, y, eventTarget = null) {
  if (!editor || !movingBlock) return;
  const marker = ensureRichDropMarker();
  const { dropRange, target } = richDropLocation(editor, movingBlock, x, y, eventTarget);
  if (dropRange) {
    const rangeRect = dropRange.getClientRects()[0];
    const anchor = dropRange.startContainer.nodeType === Node.TEXT_NODE
      ? dropRange.startContainer.parentElement
      : dropRange.startContainer;
    const anchorRect = anchor?.getBoundingClientRect?.();
    const rect = rangeRect || anchorRect || editor.getBoundingClientRect();
    marker.className = "rich-drop-marker caret";
    marker.style.left = `${Math.max(rect.left, Math.min(x, rect.right || rect.left))}px`;
    marker.style.top = `${rect.top}px`;
    marker.style.width = "2px";
    marker.style.height = `${Math.max(22, rect.height || 22)}px`;
    return;
  }

  const targetRect = (target && editor.contains(target) && target !== movingBlock)
    ? target.getBoundingClientRect()
    : editor.getBoundingClientRect();
  const imageRect = movingBlock.getBoundingClientRect();
  const beforeTarget = !target || y < targetRect.top + targetRect.height / 2;
  marker.className = "rich-drop-marker block";
  marker.style.left = `${targetRect.left}px`;
  marker.style.top = `${beforeTarget ? targetRect.top : targetRect.bottom}px`;
  marker.style.width = `${Math.min(targetRect.width, Math.max(160, imageRect.width || targetRect.width))}px`;
  marker.style.height = "3px";
}

function moveRichBlockToPoint(editor, movingBlock, x, y, eventTarget = null, options = {}) {
  if (!editor || !movingBlock) return;
  const { dropRange, target } = richDropLocation(editor, movingBlock, x, y, eventTarget);

  movingBlock.classList.remove("is-dragging");
  if (target === movingBlock) return;

  if (dropRange) {
    insertRichBlockAtCursor(editor, movingBlock, dropRange);
  } else if (!target || !editor.contains(target)) {
    editor.append(movingBlock);
  } else if (y < target.getBoundingClientRect().top + target.getBoundingClientRect().height / 2) {
    target.before(movingBlock);
  } else {
    target.after(movingBlock);
  }

  cleanupEmptyRichTextBlocks(editor);
  if (options.focusAfter !== false) focusAdjacentRichBlockText(movingBlock, "after");
  if (options.commit !== false) saveRichEditorToProject(editor);
  if (options.focusAfter === false) selectRichBlock(movingBlock);
}

function handleRichDrop(event) {
  if (!activeRichDragBlock) return;
  const editor = event.target.closest("[data-rich-editor]");
  if (!editor || editor !== activeRichDragBlock.closest("[data-rich-editor]")) return;
  event.preventDefault();
  moveRichBlockToPoint(editor, activeRichDragBlock, event.clientX, event.clientY, event.target);
  hideRichDropMarker();
  activeRichDragBlock = null;
}

function imageMoveDragControl(target) {
  return target.closest("button, input, select, textarea, a, .rich-block-actions, [data-rich-caret]");
}

function beginRichImageMoveDrag(event) {
  if (event.button !== 0) return;
  const block = event.target.closest(".rich-image-block");
  if (!block || imageMoveDragControl(event.target)) return;
  if (event.target.closest(".rich-image-viewport.crop-active")) return;
  const editor = block.closest("[data-rich-editor]");
  if (!editor) return;
  activeRichImageMoveDrag = {
    block,
    editor,
    moved: false,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY
  };
  block.setPointerCapture?.(event.pointerId);
}

function moveRichImageMoveDrag(event) {
  if (!activeRichImageMoveDrag) return;
  const drag = activeRichImageMoveDrag;
  const distance = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY);
  if (!drag.moved && distance < 6) return;
  if (!drag.moved) {
    drag.moved = true;
    activeRichDragBlock = drag.block;
    selectRichBlock(drag.block);
    drag.block.classList.add("is-dragging");
    document.body.classList.add("rich-image-dragging");
  }
  updateRichDropMarker(drag.editor, drag.block, event.clientX, event.clientY, event.target);
  event.preventDefault();
}

function endRichImageMoveDrag(event) {
  if (!activeRichImageMoveDrag) return;
  const drag = activeRichImageMoveDrag;
  drag.block.releasePointerCapture?.(drag.pointerId);
  if (drag.moved) {
    moveRichBlockToPoint(drag.editor, drag.block, event.clientX, event.clientY);
    hideRichDropMarker();
    event.preventDefault();
  }
  drag.block.classList.remove("is-dragging");
  document.body.classList.remove("rich-image-dragging");
  activeRichImageMoveDrag = null;
  activeRichDragBlock = null;
}

function beginImageCropDrag(event) {
  const viewport = event.target.closest(".rich-image-viewport.crop-active");
  if (!viewport || event.button !== 0) return;
  const block = viewport.closest(".rich-image-block");
  activeImageCropDrag = {
    block,
    editor: block.closest("[data-rich-editor]"),
    startX: event.clientX,
    startY: event.clientY,
    cropX: normalizeCropPosition(block.dataset.cropX),
    cropY: normalizeCropPosition(block.dataset.cropY),
    width: Math.max(1, viewport.getBoundingClientRect().width),
    height: Math.max(1, viewport.getBoundingClientRect().height)
  };
  event.preventDefault();
}

function moveImageCropDrag(event) {
  if (!activeImageCropDrag) return;
  const { block, startX, startY, cropX, cropY, width, height } = activeImageCropDrag;
  const nextX = normalizeCropPosition(cropX - ((event.clientX - startX) / width) * 100);
  const nextY = normalizeCropPosition(cropY - ((event.clientY - startY) / height) * 100);
  block.dataset.cropX = String(nextX);
  block.dataset.cropY = String(nextY);
  const viewport = block.querySelector(".rich-image-viewport");
  viewport?.style.setProperty("--crop-x", `${nextX}%`);
  viewport?.style.setProperty("--crop-y", `${nextY}%`);
}

function endImageCropDrag() {
  if (!activeImageCropDrag) return;
  saveRichEditorToProject(activeImageCropDrag.editor);
  activeImageCropDrag = null;
}

[projectFields, sectionContent, sectionDescription].filter(Boolean).forEach((root) => {
  root.addEventListener("dragstart", handleRichDragStart);
  root.addEventListener("dragover", handleRichDragOver);
  root.addEventListener("drop", handleRichDrop);
  root.addEventListener("dragend", () => {
    activeRichDragBlock?.classList.remove("is-dragging");
    hideRichDropMarker();
    activeRichDragBlock = null;
  });
  root.addEventListener("pointerdown", beginRichImageMoveDrag);
  root.addEventListener("pointerdown", beginImageCropDrag);
});
document.addEventListener("pointermove", moveImageCropDrag);
document.addEventListener("pointermove", moveRichImageMoveDrag);
document.addEventListener("pointerup", endImageCropDrag);
document.addEventListener("pointerup", endRichImageMoveDrag);
document.addEventListener("pointercancel", endImageCropDrag);
document.addEventListener("pointercancel", endRichImageMoveDrag);

summaryContextMenu.addEventListener("click", async (event) => {
  const colorButton = event.target.closest("[data-rich-color-value]");
  if (colorButton) {
    const color = colorButton.dataset.richColorValue;
    if (richColorInput) richColorInput.value = color;
    if (activePlainTextControl) {
      applyPlainTextControlFormat(activePlainTextControl, { color });
      hideSummaryContextMenu();
    } else if (activeSummaryEditor) {
      rememberRichFormattingSelection(activeSummaryEditor);
      applyRichInlineCommand(activeSummaryEditor, "foreColor", color);
    }
    return;
  }
  if (event.target === richColorInput && richContextColorSwatches) {
    richContextColorSwatches.hidden = !richContextColorSwatches.hidden;
    return;
  }
  const actionButton = event.target.closest("[data-rich-action]");
  if (!actionButton) return;
  const action = actionButton.dataset.richAction;
  if (activeStaticSelectionText) {
    if (action === "copy-text") await navigator.clipboard.writeText(activeStaticSelectionText);
    hideSummaryContextMenu();
    return;
  }
  if (activePlainTextControl) {
    await handlePlainTextAction(action);
    if (["copy-text", "paste-text", "cut-text", "select-all-text"].includes(action)) {
      hideSummaryContextMenu();
    }
    return;
  }
  await handleRichAction(action, activeSummaryEditor);
  if (["add-image", "add-formula", "add-code", "paste-code", "copy-text", "paste-text", "cut-text", "select-all-text", "edit-block", "delete-block"].includes(action)) {
    hideSummaryContextMenu();
  }
});

summaryContextMenu.addEventListener("pointerdown", () => {
  if (!activePlainTextControl) rememberRichFormattingSelection(activeSummaryEditor);
}, true);

sectionContent.addEventListener("click", async (event) => {
    if (handleRichCaretClick(event)) return;
    const blockAction = event.target.closest("[data-rich-block-action]");
    const richAction = event.target.closest("[data-rich-action]");
    const richBlock = event.target.closest(".rich-block");

    if (richBlock) selectRichBlock(richBlock);

    if (blockAction) {
        const editor = blockAction.closest("[data-rich-editor]");
        const block = blockAction.closest(".rich-block");
        selectRichBlock(block);

        if (blockAction.dataset.richBlockAction === "copy-code") {
            await copyRichCodeBlock(block);
            return;
        }
        if (blockAction.dataset.richBlockAction === "edit") await editSelectedRichBlock(editor);
        if (blockAction.dataset.richBlockAction === "delete") deleteSelectedRichBlock(editor);

        saveRichEditorToProject(editor);
        return;
    }

    if (richAction) {
        await handleRichAction(richAction.dataset.richAction, richAction.closest(".rich-summary-panel")?.querySelector("[data-rich-editor]"));
    }
});

async function handleStandaloneRichClick(event) {
  if (handleRichCaretClick(event)) return;
  const blockAction = event.target.closest("[data-rich-block-action]");
  const richBlock = event.target.closest(".rich-block");
  if (richBlock) selectRichBlock(richBlock);
  if (!blockAction) return;
  const editor = blockAction.closest("[data-rich-editor]");
  selectRichBlock(blockAction.closest(".rich-block"));
  if (blockAction.dataset.richBlockAction === "copy-code") {
    await copyRichCodeBlock(blockAction.closest(".rich-block"));
    return;
  }
  if (blockAction.dataset.richBlockAction === "edit") await editSelectedRichBlock(editor);
  if (blockAction.dataset.richBlockAction === "delete") deleteSelectedRichBlock(editor);
  saveRichEditorToProject(editor);
}

funFactsInput?.addEventListener("click", handleStandaloneRichClick);
sectionDescription?.addEventListener("click", handleStandaloneRichClick);
[
  siteHeroEyebrowInput,
  siteHeroTitleInput,
  siteHeroCopyInput,
  profileDisplayNameInput,
  profilePortfolioLabelInput,
  profileContactIntroInput,
  profileEmailInput,
  profilePhoneInput,
  profileGithubInput,
  profileLinkedinInput,
  profileWebsiteInput
].filter(Boolean).forEach((editor) => {
  editor.addEventListener("click", handleStandaloneRichClick);
});
summaryContextMenu.addEventListener("change", (event) => {
    if (activePlainTextControl) {
        if (event.target.matches("[data-rich-font-select]")) {
            applyPlainTextControlFormat(activePlainTextControl, { fontFamily: event.target.value });
        }
        if (event.target.matches("[data-rich-font-size]")) {
            applyPlainTextControlFormat(activePlainTextControl, { fontPx: event.target.value });
        }
        if (event.target.matches("[data-rich-color-input]")) {
            applyPlainTextControlFormat(activePlainTextControl, { color: event.target.value });
        }
        return;
    }
    if (!activeSummaryEditor) return;
    rememberRichFormattingSelection(activeSummaryEditor);

    if (event.target.matches("[data-rich-font-select]")) {
        const value = event.target.value;
        if (value) applyRichInlineCommand(activeSummaryEditor, "fontName", value);
    }

    if (event.target.matches("[data-rich-font-size]")) {
        applyRichInlineCommand(activeSummaryEditor, "fontSize", event.target.value);
    }

    if (event.target.matches("[data-rich-color-input]")) {
        applyRichInlineCommand(activeSummaryEditor, "foreColor", event.target.value);
    }
});

summaryContextMenu.addEventListener("input", (event) => {
    if (activePlainTextControl) {
        if (event.target.matches("[data-rich-color-input]")) {
            applyPlainTextControlFormat(activePlainTextControl, { color: event.target.value });
        }
        return;
    }
    if (!activeSummaryEditor) return;
    rememberRichFormattingSelection(activeSummaryEditor);

    if (event.target.matches("[data-rich-color-input]")) {
        applyRichInlineCommand(activeSummaryEditor, "foreColor", event.target.value);
    }
});

projectFields.addEventListener("input", (event) => {
  const field = event.target.dataset.field;
  if (field === "summary") {
    const countLabel = event.target.closest("label")?.querySelector("small");
    if (countLabel) countLabel.textContent = `${Math.min(wordCount(event.target.value), 1000)}/1000 words`;
  }
  if (field) updateProjectField(field, event.target.type === "checkbox" ? event.target.checked : event.target.value);
});

projectFields.addEventListener("change", (event) => {
  const field = event.target.dataset.field;
  if (!field) return;
  updateProjectField(field, event.target.type === "checkbox" ? event.target.checked : event.target.value);
});

sectionTabs.addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const project = selectedProject();
  if (!project) return;
  if (button.dataset.addSection) {
    await addCustomSection();
    return;
  }
  if (button.dataset.openEditor) {
    openEditorFromButton(button);
    return;
  }
  if (button.dataset.deleteSection) {
    deleteProjectSectionById(project, button.dataset.deleteSection);
    return;
  }
  if (button.dataset.addNodeSubsection !== undefined) {
    openPendingEditor({
      type: "custom",
      mode: "add",
      sectionId: button.dataset.addNodeSubsection,
      parentPath: button.dataset.nodePath || "",
      title: "",
      description: ""
    });
    return;
  }
  if (button.dataset.uploadNode !== undefined) {
    await uploadToSection("sections", button.dataset.uploadNode, button.dataset.uploadNode, null, button.dataset.nodePath || "");
    return;
  }
  if (button.dataset.deleteNode !== undefined) {
    deleteProjectNodeByPath(project, button.dataset.deleteNode, nodePathFromString(button.dataset.nodePath || ""));
    return;
  }
  const nextSectionId = button.dataset.sectionId;
  if (!nextSectionId) return;
  if (nextSectionId && nextSectionId !== activeSectionId && !suppressProjectWindowHistory) {
    projectWindowBackStack.push(projectWindowStateKey());
    projectWindowForwardStack = [];
  }
  activeSectionId = nextSectionId;
  if (activeSectionId.startsWith("custom:")) {
    setActiveCustomSectionPath(activeSectionId.replace("custom:", ""), []);
  }
  pendingEditor = null;
  renderAll();
  resetProjectWindowScroll();
  updateDialogWindowButtons(projectDialog);
});

sectionTabs.addEventListener("contextmenu", (event) => {
  const button = event.target.closest("[data-section-id]");
  const project = selectedProject();
  if (!button || !project) return;
  const sectionId = button.dataset.sectionId || "brief";
  const title = sectionOptions(project).find((section) => section.id === sectionId)?.label || "Project view";
  showProjectViewContextMenu(event, { stateKey: sectionId, title });
});

projectViewTabsBar?.addEventListener("click", (event) => {
  const closeButton = event.target.closest("[data-close-project-view-tab]");
  if (closeButton) {
    closeProjectViewTab(closeButton.dataset.closeProjectViewTab || "");
    return;
  }
  const tab = event.target.closest("[data-project-view-tab]");
  if (!tab) return;
  activateProjectViewTab(tab.dataset.projectViewTab || "");
});

projectViewContextMenu?.addEventListener("click", (event) => {
  const action = event.target.closest("[data-project-view-action]")?.dataset.projectViewAction;
  if (!action) return;
  if (action === "open-window" && pendingProjectViewContext) {
    openDetachedProjectViewWindow(pendingProjectViewContext.stateKey, { title: pendingProjectViewContext.title });
  }
  if (action === "edit-node" && pendingProjectViewContext) {
    openPendingEditor({
      type: "custom",
      mode: "edit",
      sectionId: pendingProjectViewContext.sectionId,
      nodePath: pendingProjectViewContext.nodePath
    });
  }
  if (action === "delete-node" && pendingProjectViewContext) {
    const project = selectedProject();
    if (project) {
      deleteProjectNodeByPath(project, pendingProjectViewContext.sectionId, nodePathFromString(pendingProjectViewContext.nodePath || ""));
    }
  }
  hideProjectViewContextMenu();
});

document.addEventListener("click", (event) => {
  const closeButton = event.target.closest("[data-close-detached-project-view]");
  if (closeButton) {
    detachedProjectViewWindows = detachedProjectViewWindows.filter((win) => win.id !== closeButton.dataset.closeDetachedProjectView);
    renderDetachedProjectViewWindows();
    return;
  }

  const nodeButton = event.target.closest("[data-detached-window-node]");
  if (nodeButton) {
    const windowId = nodeButton.dataset.detachedWindowNode || "";
    const sectionId = nodeButton.dataset.sectionId || "";
    const pathValue = nodeButton.dataset.nodePath || "";
    const win = detachedProjectViewWindows.find((item) => item.id === windowId);
    if (!win || !sectionId) return;
    win.stateKey = `custom:${sectionId}|${pathValue}`;
    renderDetachedProjectViewWindows();
  }
});

function syncDetachedProjectViewGeometry(windowId = "") {
  const element = detachedProjectViewElement(windowId);
  const win = detachedProjectViewWindows.find((item) => item.id === windowId);
  if (!element || !win) return;
  const rect = element.getBoundingClientRect();
  const hostRect = detachedProjectViewHost().getBoundingClientRect();
  win.x = Math.max(8, Math.round(rect.left - hostRect.left));
  win.y = Math.max(8, Math.round(rect.top - hostRect.top));
  win.width = Math.max(360, Math.round(rect.width));
  win.height = Math.max(240, Math.round(rect.height));
}

document.addEventListener("pointerdown", (event) => {
  const handle = event.target.closest("[data-detached-project-view-drag]");
  if (!handle || event.button !== 0) return;
  if (event.target.closest("button, a, input, select, textarea")) return;
  const windowId = handle.dataset.detachedProjectViewDrag || "";
  const element = detachedProjectViewElement(windowId);
  const win = detachedProjectViewWindows.find((item) => item.id === windowId);
  if (!element || !win) return;
  const rect = element.getBoundingClientRect();
  activeDetachedProjectViewDrag = {
    element,
    pointerId: event.pointerId,
    windowId,
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top
  };
  handle.setPointerCapture?.(event.pointerId);
  element.classList.add("is-detached-project-view-dragging");
  event.preventDefault();
});

document.addEventListener("pointermove", (event) => {
  if (!activeDetachedProjectViewDrag) return;
  const { element, offsetX, offsetY, windowId } = activeDetachedProjectViewDrag;
  const rect = element.getBoundingClientRect();
  const hostRect = detachedProjectViewHost().getBoundingClientRect();
  const margin = 8;
  const maxX = Math.max(margin, hostRect.width - rect.width - margin);
  const maxY = Math.max(margin, hostRect.height - rect.height - margin);
  const x = Math.max(margin, Math.min(event.clientX - hostRect.left - offsetX, maxX));
  const y = Math.max(margin, Math.min(event.clientY - hostRect.top - offsetY, maxY));
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
  const win = detachedProjectViewWindows.find((item) => item.id === windowId);
  if (win) {
    win.x = Math.round(x);
    win.y = Math.round(y);
  }
});

document.addEventListener("pointerup", (event) => {
  const resizedWindow = event.target.closest?.("[data-detached-project-view]");
  if (resizedWindow?.dataset.detachedProjectView) {
    syncDetachedProjectViewGeometry(resizedWindow.dataset.detachedProjectView);
  }
  if (!activeDetachedProjectViewDrag) return;
  activeDetachedProjectViewDrag.element.classList.remove("is-detached-project-view-dragging");
  detachedProjectViewElement(activeDetachedProjectViewDrag.windowId)
    ?.querySelector("[data-detached-project-view-drag]")
    ?.releasePointerCapture?.(activeDetachedProjectViewDrag.pointerId);
  syncDetachedProjectViewGeometry(activeDetachedProjectViewDrag.windowId);
  activeDetachedProjectViewDrag = null;
});

function deleteProjectNodeByPath(project, sectionId, path = []) {
  const section = (project.sections || []).find((item) => item.id === sectionId);
  const parent = section ? findBuilderNodeParent(section, path) : null;
  const item = parent?.children?.[parent.index];
  if (!section || !item) return;
  openDeleteConfirm({
    title: item?.url || item?.artifact ? "Delete file" : "Delete subsection",
    message: `Are you sure you want to delete "${itemTitle(item) || "this item"}"?`,
    onConfirm: () => {
      parent.children.splice(parent.index, 1);
      if (!item.url && !item.artifact && activeCustomSectionView.sectionId === section.id) {
        const activePath = activeCustomSectionPath(section.id);
        const deletedPathValue = nodePathToString(path);
        if (nodePathToString(activePath).startsWith(deletedPathValue)) {
          setActiveCustomSectionPath(section.id, path.slice(0, -1));
        }
      }
      scheduleAutosave();
      renderAll();
    }
  });
}

sectionContent.addEventListener("contextmenu", (event) => {
  if (event.target.closest(".compile-code-sidebar")) return;
  const nodeButton = event.target.closest("[data-open-node-view]");
  const project = selectedProject();
  if (!nodeButton || !project) return;
  const sectionId = nodeButton.dataset.sectionId || "";
  if (!sectionId) return;
  const path = nodePathFromString(nodeButton.dataset.nodePath || "");
  const section = (project.sections || []).find((item) => item.id === sectionId);
  const node = section && path.length ? findBuilderNode(section, path) : null;
  const title = node ? builderNodeTitle(node) : section?.title || "Project view";
  const pathValue = nodePathToString(path);
  const stateKey = pathValue ? `custom:${sectionId}|${pathValue}` : `custom:${sectionId}`;
  showProjectViewContextMenu(event, { stateKey, title, kind: path.length ? "node" : "section", sectionId, nodePath: pathValue });
});

sectionContent.addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  const project = selectedProject();
  if (!button || !project) return;

  const hasDataset = (key) => Object.prototype.hasOwnProperty.call(button.dataset, key);
  if (button.dataset.compileMenuAction) {
    hideCompileTreeContextMenus();
    await runCompileIdeAction(project, button.dataset.compileMenuAction);
    hideCompileTreeContextMenus();
    return;
  }
  if (hasDataset("scopeApplyContext")) {
    if (!activeScopeSignalContext?.signalKey) return;
    const menu = button.closest("[data-scope-signal-context-menu]");
    const settings = currentScopeSignalContextSettings(project, activeScopeSignalContext.signalKey);
    settings.color = normalizeScopeColor(menu?.querySelector("[data-scope-context-color]")?.value, settings.color);
    settings.radix = normalizeScopeRadix(menu?.querySelector("[data-scope-context-radix]")?.value);
    settings.stateMap = parseScopeStateMapText(menu?.querySelector("[data-scope-context-state-map]")?.value || "");
    addCompileMessage(project, `Scope signal display updated (${settings.radix}).`, "info");
    hideScopeSignalContextMenu();
    scheduleAutosave(900);
    renderSectionContent(project);
    return;
  }
  if (button.dataset.addSection) {
    await addCustomSection();
    return;
  }
  if (button.dataset.compileOpenPanel) {
    setCompilePanel(project, button.dataset.compileOpenPanel);
    renderSectionContent(project);
    return;
  }
  if (hasDataset("compileToggleStdin")) {
    const workspace = ensureCompileCode(project);
    workspace.stdinWindowOpen = !workspace.stdinWindowOpen;
    setStatus(workspace.stdinWindowOpen ? "Program input window opened." : "Program input window closed.");
    scheduleAutosave();
    renderSectionContent(project);
    return;
  }
  if (button.dataset.compileAppendTargetId) {
    const workspace = ensureCompileCode(project);
    workspace.appendTargetId = button.dataset.compileAppendTargetId;
    addCompileMessage(project, `Append destination set to ${selectedCompileAppendDestination(project)?.label || "project overview"}.`, "info");
    setStatus("Compile append destination updated.");
    scheduleAutosave();
    renderSectionContent(project);
    return;
  }
  if (hasDataset("compileToggleAppend")) {
    const workspace = ensureCompileCode(project);
    workspace.appendPanelOpen = !workspace.appendPanelOpen;
    setStatus(workspace.appendPanelOpen ? "Choose where to append the active source." : "Append chooser closed.");
    scheduleAutosave();
    renderSectionContent(project);
    return;
  }
  if (hasDataset("compileAdd")) {
    addCompileSourceFile(project);
    return;
  }
  if (hasDataset("compileAddDirectory")) {
    await addCompileDirectory(project);
    return;
  }
  if (hasDataset("compileAddTestbench")) {
    addCompileTestbenchFile(project);
    return;
  }
  if (hasDataset("compileImport")) {
    hideCompileTreeContextMenus();
    await importCompileFiles(project);
    return;
  }
  if (hasDataset("compileImportDirectory")) {
    hideCompileTreeContextMenus();
    await importCompileFiles(project, { directory: true });
    return;
  }
  if (button.dataset.compileCloseTab) {
    closeCompileFileView(project, button.dataset.compileCloseTab);
    return;
  }
  if (button.dataset.compileSelect) {
    const workspace = ensureCompileCode(project);
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
      event.stopPropagation();
      toggleCompileFileSelection(project, button.dataset.compileSelect);
      renderSectionContent(project);
      return;
    }
    event.preventDefault();
    setCompileSelectedFileIds(workspace, [button.dataset.compileSelect]);
    openCompileFileView(workspace, button.dataset.compileSelect);
    renderSectionContent(project);
    return;
  }
  if (hasDataset("compileTools")) {
    await checkCompileTools(project);
    return;
  }
  const { workspace: compileWorkspace, file: compileFile } = activeCompileWorkspaceAndFile(project);
  if (hasDataset("compileSave")) {
    try {
      await saveCompileFile(project, compileFile);
      setStatus("Compile source saved.");
      scheduleAutosave();
      renderSectionContent(project);
    } catch (error) {
      setStatus(error.message || "Compile source could not be saved.");
    }
    return;
  }
  if (hasDataset("compileSaveAs")) {
    try {
      await saveCompileFileAs(project, compileFile);
    } catch (error) {
      setStatus(error.message || "Compile source could not be saved to another location.");
    }
    return;
  }
  if (hasDataset("compileBeautify")) {
    await beautifyCompileFile(project, compileFile);
    return;
  }
  if (hasDataset("compileToggleFileDetails")) {
    compileWorkspace.showFileDetails = !compileWorkspace.showFileDetails;
    setStatus(compileWorkspace.showFileDetails ? "Compile file details shown." : "Compile file details hidden.");
    scheduleAutosave();
    renderSectionContent(project);
    return;
  }
  if (hasDataset("compileCompile")) {
    await compileActiveFile(project, compileFile, { action: "compile" });
    return;
  }
  if (hasDataset("compileBuild")) {
    await compileActiveFile(project, compileFile, { action: "build", forceRebuild: true });
    return;
  }
  if (hasDataset("compileRun")) {
    await compileActiveFile(project, compileFile, { action: "run" });
    return;
  }
  if (hasDataset("compileSimulate")) {
    await compileActiveFile(project, compileFile, { action: "simulate" });
    return;
  }
  if (hasDataset("compileShowOutput")) {
    showCompileOutput(project, compileFile);
    addCompileMessage(project, `Displayed terminal output for ${compileFile?.fileName || "the active source"}.`, "info");
    return;
  }
  if (hasDataset("compileShowScope")) {
    showCompileScope(project, compileFile);
    if (isHdlLanguage(compileFile?.language)) {
      addCompileMessage(project, `Displayed HDL scope for ${compileFile?.fileName || "the active source"}.`, "info");
    }
    return;
  }
  if (hasDataset("compileCopyOutput")) {
    await copyCompileOutput(project, compileFile);
    updateCompileMessagesPanel(project);
    return;
  }
  if (hasDataset("compileClearOutput")) {
    clearCompileOutput(project, compileFile);
    updateCompileMessagesPanel(project);
    return;
  }
  if (hasDataset("compileAppendCode")) {
    appendCompileCodeToProject(project, compileFile);
    compileWorkspace.appendPanelOpen = false;
    renderSectionContent(project);
    updateCompileMessagesPanel(project);
    return;
  }
  if (hasDataset("compileClearMessages")) {
    compileWorkspace.messages = [];
    updateCompileMessagesPanel(project);
    setStatus("Compile messages log cleared.");
    scheduleAutosave();
    return;
  }
  if (hasDataset("compileTerminalClear")) {
    compileWorkspace.systemTerminal.output = "";
    updateCompileSystemTerminalPanel(project);
    addCompileMessage(project, "Terminal output cleared.", "info");
    scheduleAutosave();
    return;
  }
  if (button.dataset.compileTerminalHistory !== undefined) {
    const input = sectionContent.querySelector("[data-compile-terminal-command]");
    if (input) {
      const command = button.dataset.compileTerminalHistory || "";
      if ("value" in input) input.value = command;
      input.textContent = command;
      compileWorkspace.systemTerminal.command = command;
    }
    return;
  }
  if (hasDataset("compileToggleOutputDock")) {
    compileWorkspace.outputDockUnlocked = !compileWorkspace.outputDockUnlocked;
    if (compileWorkspace.outputDockUnlocked) {
      compileWorkspace.outputDockPosition = compileWorkspace.outputDockPosition || { x: 72, y: 120 };
      setStatus("Compile output panel unlocked.");
    } else {
      setStatus("Compile output panel locked back into the workspace.");
    }
    scheduleAutosave();
    renderSectionContent(project);
    return;
  }
  if (event.target.closest("[data-compile-terminal-screen]")) {
    focusTerminalCommandLine();
    return;
  }
  if (hasDataset("compileInstall")) {
    await installCompileTools(project, compileFile);
    return;
  }
  if (hasDataset("compileDelete")) {
    openDeleteConfirm({
      title: "Delete source file",
      message: `Are you sure you want to delete "${compileFile?.title || compileFile?.fileName || "this source file"}"?`,
      onConfirm: () => {
        compileWorkspace.files = compileWorkspace.files.filter((file) => file.id !== compileFile?.id);
        compileWorkspace.openFileIds = (compileWorkspace.openFileIds || []).filter((id) => id !== compileFile?.id);
        compileWorkspace.activeFileId = compileWorkspace.openFileIds.find((id) => compileWorkspace.files.some((file) => file.id === id)) || "";
        scheduleAutosave();
        renderSectionContent(project);
      }
    });
    return;
  }

  if (button.dataset.openEditor) {
    openEditorFromButton(button);
    return;
  }
  if (button.dataset.upload) {
    await uploadToSection(button.dataset.upload, button.dataset.folder);
    return;
  }
  if (button.dataset.uploadDesign) {
    await uploadToDesignSection(button.dataset.uploadDesign, button.dataset.folder, button.dataset.designKind);
    return;
  }
  if (button.dataset.openNodeView) {
    const sectionId = button.dataset.sectionId || "";
    const path = nodePathFromString(button.dataset.nodePath || "");
    if (!sectionId) return;
    projectWindowBackStack.push(projectWindowStateKey());
    projectWindowForwardStack = [];
    activeSectionId = `custom:${sectionId}`;
    setActiveCustomSectionPath(sectionId, path);
    pendingEditor = null;
    renderAll();
    resetProjectWindowScroll();
    updateDialogWindowButtons(projectDialog);
    return;
  }
  if (button.dataset.openFileView) {
    const section = (project.sections || []).find((item) => item.id === button.dataset.sectionId);
    const item = section ? findBuilderNode(section, nodePathFromString(button.dataset.nodePath || "")) : null;
    if (item) await openBuilderFileWindow(item);
    return;
  }
  if (button.dataset.addNodeSubsection !== undefined) {
    openPendingEditor({
      type: "custom",
      mode: "add",
      sectionId: button.dataset.addNodeSubsection,
      parentPath: button.dataset.nodePath || "",
      title: "",
      description: ""
    });
    return;
  }
  if (button.dataset.uploadNode !== undefined) {
    await uploadToSection("sections", button.dataset.uploadNode, button.dataset.uploadNode, null, button.dataset.nodePath || "");
    return;
  }
  if (button.dataset.deleteNode !== undefined) {
    deleteProjectNodeByPath(project, button.dataset.deleteNode, nodePathFromString(button.dataset.nodePath || ""));
    return;
  }
  if (button.dataset.clearDesignSummary) {
    const pathValue = button.dataset.clearDesignSummary;
    openDeleteConfirm({
      title: "Clear overview",
      message: "Are you sure you want to delete this overview text?",
      onConfirm: () => {
        setByPath(project, pathValue, "");
        scheduleAutosave();
        renderAll();
      }
    });
    return;
  }
  if (button.dataset.deleteItem) {
    const key = button.dataset.deleteItem;
    const item = project[key]?.[Number(button.dataset.index)];
    openDeleteConfirm({
      title: "Delete item",
      message: `Are you sure you want to delete "${itemTitle(item)}"?`,
      onConfirm: () => {
        project[key].splice(Number(button.dataset.index), 1);
        scheduleAutosave();
        renderAll();
      }
    });
    return;
  }
  if (button.dataset.deleteDesignItem) {
    const pathValue = button.dataset.deleteDesignItem;
    const items = designArray(project, pathValue);
    const item = items[Number(button.dataset.index)];
    openDeleteConfirm({
      title: "Delete design item",
      message: `Are you sure you want to delete "${itemTitle(item)}"?`,
      onConfirm: () => {
        items.splice(Number(button.dataset.index), 1);
        scheduleAutosave();
        renderAll();
      }
    });
    return;
  }
  if (button.dataset.deleteArray) {
    const key = button.dataset.deleteArray;
    const item = project[key]?.[Number(button.dataset.index)];
    openDeleteConfirm({
      title: "Delete item",
      message: `Are you sure you want to delete "${itemTitle(item)}"?`,
      onConfirm: () => {
        project[key].splice(Number(button.dataset.index), 1);
        scheduleAutosave();
        renderAll();
      }
    });
    return;
  }
  if (button.dataset.addCustomItem) {
    openPendingEditor({ type: "custom", mode: "add", sectionId: button.dataset.addCustomItem, title: "", description: "" });
    return;
  }
  if (button.dataset.uploadCustom) {
    await uploadToSection("sections", button.dataset.uploadCustom, button.dataset.uploadCustom);
    return;
  }
  if (button.dataset.uploadCustomSubsection) {
    await uploadToSection("sections", button.dataset.uploadCustomSubsection, button.dataset.uploadCustomSubsection, button.dataset.index);
    return;
  }
  if (button.dataset.deleteCustomChild) {
    const section = project.sections.find((item) => item.id === button.dataset.deleteCustomChild);
    const parent = sectionRootChildren(section)?.[Number(button.dataset.index)];
    const child = builderNodeChildren(parent)?.[Number(button.dataset.childIndex)];
    openDeleteConfirm({
      title: "Delete file",
      message: `Are you sure you want to delete "${itemTitle(child)}"?`,
      onConfirm: () => {
        builderNodeChildren(parent).splice(Number(button.dataset.childIndex), 1);
        scheduleAutosave();
        renderAll();
      }
    });
    return;
  }
  if (button.dataset.deleteCustomItem) {
    const section = project.sections.find((item) => item.id === button.dataset.deleteCustomItem);
    const item = sectionRootChildren(section)?.[Number(button.dataset.index)];
    openDeleteConfirm({
      title: "Delete subsection",
      message: `Are you sure you want to delete "${itemTitle(item)}"?`,
      onConfirm: () => {
        sectionRootChildren(section).splice(Number(button.dataset.index), 1);
        scheduleAutosave();
        renderAll();
      }
    });
    return;
  }
  if (button.dataset.deleteSection) {
    deleteProjectSectionById(project, button.dataset.deleteSection);
    return;
  }
  if (button.dataset.cancelPending) {
    pendingEditor = null;
    renderSectionContent(project);
    return;
  }
});

function hideCompileTreeContextMenus(options = {}) {
  sectionContent.querySelectorAll("[data-compile-tree-context-menu]").forEach((menu) => {
    menu.hidden = true;
  });
  if (options.clearContext !== false) activeCompileTreeContext = null;
}

function hideScopeSignalContextMenu(options = {}) {
  sectionContent.querySelectorAll("[data-scope-signal-context-menu]").forEach((menu) => {
    menu.hidden = true;
  });
  if (options.clearContext !== false) activeScopeSignalContext = null;
}

function currentScopeSignalContextSettings(project, signalKey = "") {
  const workspace = ensureCompileCode(project);
  workspace.scopeSettings[signalKey] = workspace.scopeSettings[signalKey] || {};
  const settings = workspace.scopeSettings[signalKey];
  settings.color = normalizeScopeColor(settings.color, "#38bdf8");
  settings.radix = normalizeScopeRadix(settings.radix);
  settings.stateMap = normalizeScopeStateMap(settings.stateMap);
  return settings;
}

sectionContent.addEventListener("contextmenu", (event) => {
  const scopeRow = event.target.closest("[data-scope-signal-key]");
  if (scopeRow) {
    const project = selectedProject();
    const menu = sectionContent.querySelector("[data-scope-signal-context-menu]");
    const signalKey = scopeRow.dataset.scopeSignalKey || "";
    if (!project || !menu || !signalKey) return;
    event.preventDefault();
    hideCompileTreeContextMenus();
    hideScopeSignalContextMenu({ clearContext: false });
    const settings = currentScopeSignalContextSettings(project, signalKey);
    const color = menu.querySelector("[data-scope-context-color]");
    const radix = menu.querySelector("[data-scope-context-radix]");
    const stateMap = menu.querySelector("[data-scope-context-state-map]");
    if (color) color.value = settings.color;
    if (radix) radix.value = settings.radix;
    if (stateMap) stateMap.value = scopeStateMapText(settings.stateMap);
    activeScopeSignalContext = { signalKey };
    menu.hidden = false;
    const width = 220;
    const height = 150;
    menu.style.left = `${Math.min(event.clientX, window.innerWidth - width - 8)}px`;
    menu.style.top = `${Math.min(event.clientY, window.innerHeight - height - 8)}px`;
    return;
  }

  const sidebar = event.target.closest(".compile-code-sidebar");
  if (!sidebar) return;
  const project = selectedProject();
  const workspace = project ? ensureCompileCode(project) : null;
  const menu = sidebar.querySelector("[data-compile-tree-context-menu]");
  if (!menu) return;
  event.preventDefault();
  hideCompileTreeContextMenus({ clearContext: false });
  const fileButton = event.target.closest("[data-compile-tree-file-id]");
  const folderNode = event.target.closest("[data-compile-folder-path]");
  if (workspace && fileButton) {
    const fileId = fileButton.dataset.compileTreeFileId || "";
    const selected = compileSelectedFileIds(workspace);
    if (!selected.has(fileId)) setCompileSelectedFileIds(workspace, [fileId]);
  }
  activeCompileTreeContext = fileButton
    ? {
      type: "file",
      fileId: fileButton.dataset.compileTreeFileId || "",
      path: fileButton.dataset.compileTreeFilePath || ""
    }
    : folderNode
      ? {
        type: "folder",
        path: folderNode.dataset.compileFolderPath || ""
      }
      : { type: "workspace", path: "" };
  menu.dataset.contextType = activeCompileTreeContext.type;
  menu.dataset.contextFileId = activeCompileTreeContext.fileId || "";
  menu.dataset.contextPath = activeCompileTreeContext.path || "";
  menu.hidden = false;
  const width = 190;
  const height = 210;
  menu.style.left = `${Math.min(event.clientX, window.innerWidth - width - 8)}px`;
  menu.style.top = `${Math.min(event.clientY, window.innerHeight - height - 8)}px`;
});

sectionContent.addEventListener("pointerdown", (event) => {
  const sidebarResizeHandle = event.target.closest("[data-compile-sidebar-resize]");
  const compileWorkspaceElement = sidebarResizeHandle?.closest("[data-compile-workspace]");
  if (sidebarResizeHandle && compileWorkspaceElement && event.button === 0) {
    const project = selectedProject();
    if (!project) return;
    const workspace = ensureCompileCode(project);
    activeCompileSidebarResize = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startWidth: normalizeCompileSidebarWidth(workspace.sidebarWidth)
    };
    sidebarResizeHandle.setPointerCapture?.(event.pointerId);
    compileWorkspaceElement.classList.add("is-sidebar-resizing");
    event.preventDefault();
    return;
  }

  const resizeHandle = event.target.closest("[data-compile-output-resize]");
  const lockedDock = resizeHandle?.closest(".compile-output-workbench.is-output-dock-locked");
  const unlockedDock = resizeHandle?.closest(".compile-output-workbench.is-output-dock-unlocked");
  if (unlockedDock && event.button === 0) {
    const rect = unlockedDock.getBoundingClientRect();
    activeOutputDockResize = {
      mode: "floating",
      startX: event.clientX,
      startY: event.clientY,
      startWidth: rect.width,
      startHeight: rect.height,
      startLeft: rect.left,
      startTop: rect.top,
      pointerId: event.pointerId
    };
    resizeHandle.setPointerCapture?.(event.pointerId);
    unlockedDock.classList.add("is-resizing");
    event.preventDefault();
    return;
  }
  if (lockedDock && event.button === 0) {
    activeOutputDockResize = {
      mode: "locked",
      startY: event.clientY,
      startHeight: lockedDock.getBoundingClientRect().height,
      pointerId: event.pointerId
    };
    resizeHandle.setPointerCapture?.(event.pointerId);
    lockedDock.classList.add("is-resizing");
    event.preventDefault();
    return;
  }

  const dragHandle = event.target.closest("[data-compile-output-drag]");
  const dock = dragHandle?.closest(".compile-output-workbench.is-output-dock-unlocked");
  const stdinHandle = event.target.closest("[data-compile-stdin-drag]");
  const stdinWindow = stdinHandle?.closest(".compile-stdin-window");
  if (stdinWindow && event.button === 0) {
    if (event.target.closest("button, a, input, select, textarea")) return;
    const rect = stdinWindow.getBoundingClientRect();
    activeCompileStdinDrag = {
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      pointerId: event.pointerId
    };
    stdinHandle.setPointerCapture?.(event.pointerId);
    stdinWindow.classList.add("is-dragging");
    event.preventDefault();
    return;
  }

  const detailsHandle = event.target.closest("[data-compile-file-details-drag]");
  const detailsWindow = detailsHandle?.closest(".compile-file-details-window");
  if (detailsWindow && event.button === 0) {
    if (event.target.closest("button, a, input, select, textarea")) return;
    const rect = detailsWindow.getBoundingClientRect();
    activeCompileFileDetailsDrag = {
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      pointerId: event.pointerId
    };
    detailsHandle.setPointerCapture?.(event.pointerId);
    detailsWindow.classList.add("is-dragging");
    event.preventDefault();
    return;
  }

  if (!dock || event.button !== 0) return;
  if (event.target.closest("button, a, input, select, textarea, [contenteditable='true']")) return;
  const rect = dock.getBoundingClientRect();
  activeOutputDockDrag = {
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
    pointerId: event.pointerId
  };
  dragHandle.setPointerCapture?.(event.pointerId);
  dock.classList.add("is-dragging");
  event.preventDefault();
});

document.addEventListener("pointermove", (event) => {
  if (activeCompileSidebarResize) {
    const project = selectedProject();
    if (!project) return;
    const workspace = ensureCompileCode(project);
    const nextWidth = normalizeCompileSidebarWidth(activeCompileSidebarResize.startWidth + event.clientX - activeCompileSidebarResize.startX);
    workspace.sidebarWidth = nextWidth;
    sectionContent.querySelector("[data-compile-workspace]")?.style.setProperty("--compile-sidebar-width", `${nextWidth}px`);
    event.preventDefault();
    return;
  }

  if (activeOutputDockResize) {
    const project = selectedProject();
    if (!project) return;
    const workspace = ensureCompileCode(project);
    if (activeOutputDockResize.mode === "floating") {
      const dock = sectionContent.querySelector(".compile-output-workbench.is-output-dock-unlocked");
      if (!dock) return;
      const maxWidth = Math.max(420, window.innerWidth - activeOutputDockResize.startLeft - 8);
      const maxHeight = Math.max(180, window.innerHeight - activeOutputDockResize.startTop - 8);
      const nextWidth = Math.max(420, Math.min(maxWidth, activeOutputDockResize.startWidth + event.clientX - activeOutputDockResize.startX));
      const nextHeight = Math.max(180, Math.min(maxHeight, activeOutputDockResize.startHeight + event.clientY - activeOutputDockResize.startY));
      workspace.outputDockSize = {
        width: normalizeCompileFloatingWidth(nextWidth),
        height: normalizeCompileFloatingHeight(nextHeight)
      };
      dock.style.width = `${workspace.outputDockSize.width}px`;
      dock.style.height = `${workspace.outputDockSize.height}px`;
    } else {
      const dock = sectionContent.querySelector(".compile-output-workbench.is-output-dock-locked");
      if (!dock) return;
      const nextHeight = normalizeCompileOutputHeight(activeOutputDockResize.startHeight + activeOutputDockResize.startY - event.clientY);
      workspace.outputDockHeight = nextHeight;
      dock.style.setProperty("--compile-output-height", `${nextHeight}px`);
    }
    event.preventDefault();
    return;
  }

  if (activeCompileStdinDrag) {
    const project = selectedProject();
    if (!project) return;
    const workspace = ensureCompileCode(project);
    const panel = sectionContent.querySelector(".compile-stdin-window");
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    const margin = 8;
    const x = Math.max(margin, Math.min(event.clientX - activeCompileStdinDrag.offsetX, window.innerWidth - rect.width - margin));
    const y = Math.max(margin, Math.min(event.clientY - activeCompileStdinDrag.offsetY, window.innerHeight - rect.height - margin));
    workspace.stdinWindowPosition = { x, y };
    panel.style.left = `${x}px`;
    panel.style.top = `${y}px`;
    panel.style.right = "auto";
    event.preventDefault();
    return;
  }

  if (activeCompileFileDetailsDrag) {
    const project = selectedProject();
    if (!project) return;
    const workspace = ensureCompileCode(project);
    const panel = sectionContent.querySelector(".compile-file-details-window");
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    const margin = 8;
    const x = Math.max(margin, Math.min(event.clientX - activeCompileFileDetailsDrag.offsetX, window.innerWidth - rect.width - margin));
    const y = Math.max(margin, Math.min(event.clientY - activeCompileFileDetailsDrag.offsetY, window.innerHeight - rect.height - margin));
    workspace.fileDetailsPosition = { x, y };
    panel.style.left = `${x}px`;
    panel.style.top = `${y}px`;
    panel.style.right = "auto";
    event.preventDefault();
    return;
  }

  if (!activeOutputDockDrag) return;
  const project = selectedProject();
  if (!project) return;
  const workspace = ensureCompileCode(project);
  const dock = sectionContent.querySelector(".compile-output-workbench.is-output-dock-unlocked");
  if (!dock) return;
  const rect = dock.getBoundingClientRect();
  const margin = 8;
  const x = Math.max(margin, Math.min(event.clientX - activeOutputDockDrag.offsetX, window.innerWidth - rect.width - margin));
  const y = Math.max(margin, Math.min(event.clientY - activeOutputDockDrag.offsetY, window.innerHeight - rect.height - margin));
  workspace.outputDockPosition = { x, y };
  dock.style.left = `${x}px`;
  dock.style.top = `${y}px`;
});

function endOutputDockDrag(event) {
  if (activeCompileSidebarResize) {
    sectionContent.querySelector("[data-compile-sidebar-resize]")?.releasePointerCapture?.(activeCompileSidebarResize.pointerId);
    sectionContent.querySelector("[data-compile-workspace]")?.classList.remove("is-sidebar-resizing");
    activeCompileSidebarResize = null;
    scheduleAutosave(900);
  }
  if (activeOutputDockResize) {
    sectionContent.querySelector("[data-compile-output-resize]")?.releasePointerCapture?.(activeOutputDockResize.pointerId);
    sectionContent.querySelector(".compile-output-workbench.is-output-dock-locked, .compile-output-workbench.is-output-dock-unlocked")?.classList.remove("is-resizing");
    activeOutputDockResize = null;
    scheduleAutosave(900);
  }
  if (!activeOutputDockDrag) return;
  sectionContent.querySelector("[data-compile-output-drag]")?.releasePointerCapture?.(activeOutputDockDrag.pointerId);
  sectionContent.querySelector(".compile-output-workbench.is-output-dock-unlocked")?.classList.remove("is-dragging");
  activeOutputDockDrag = null;
  scheduleAutosave(900);
}

function endCompileFloatingWindowDrag() {
  if (activeCompileStdinDrag) {
    sectionContent.querySelector("[data-compile-stdin-drag]")?.releasePointerCapture?.(activeCompileStdinDrag.pointerId);
    sectionContent.querySelector(".compile-stdin-window")?.classList.remove("is-dragging");
    activeCompileStdinDrag = null;
    scheduleAutosave(900);
  }
  if (activeCompileFileDetailsDrag) {
    sectionContent.querySelector("[data-compile-file-details-drag]")?.releasePointerCapture?.(activeCompileFileDetailsDrag.pointerId);
    sectionContent.querySelector(".compile-file-details-window")?.classList.remove("is-dragging");
    activeCompileFileDetailsDrag = null;
    scheduleAutosave(900);
  }
}

document.addEventListener("pointerup", endOutputDockDrag);
document.addEventListener("pointercancel", endOutputDockDrag);
document.addEventListener("pointerup", endCompileFloatingWindowDrag);
document.addEventListener("pointercancel", endCompileFloatingWindowDrag);

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-compile-tree-context-menu]")) return;
  if (event.target.closest("[data-scope-signal-context-menu]")) return;
  if (event.target.closest("#project-view-context-menu")) return;
  hideCompileTreeContextMenus();
  hideScopeSignalContextMenu();
  hideProjectViewContextMenu();
});

sectionContent.addEventListener("submit", (event) => {
  if (event.target.id !== "pending-editor") return;
  event.preventDefault();
  savePendingEditor(event.target);
});

sectionContent.addEventListener("change", (event) => {
  const project = selectedProject();
  if (!project) return;
  if (event.target.dataset.compileField) {
    event.target.dispatchEvent(new Event("input", { bubbles: true }));
    return;
  }
  if (event.target.dataset.scopeControl) {
    const workspace = ensureCompileCode(project);
    const key = event.target.dataset.scopeSignal || "";
    if (key) {
      workspace.scopeSettings[key] = workspace.scopeSettings[key] || {};
      if (event.target.dataset.scopeControl === "color") {
        workspace.scopeSettings[key].color = normalizeScopeColor(event.target.value, workspace.scopeSettings[key].color || "#38bdf8");
      }
      if (event.target.dataset.scopeControl === "radix") {
        workspace.scopeSettings[key].radix = normalizeScopeRadix(event.target.value);
      }
      scheduleAutosave(900);
      renderSectionContent(project);
      return;
    }
  }
  if (event.target.dataset.scopeTimeout !== undefined) {
    const workspace = ensureCompileCode(project);
    workspace.hdlSimulationTimeoutMs = Math.max(5000, Math.min(120000, Number(event.target.value) || 30000));
    addCompileMessage(project, `HDL simulation timeout set to ${Math.round(workspace.hdlSimulationTimeoutMs / 1000)} seconds.`, "info");
    scheduleAutosave(900);
    renderSectionContent(project);
    return;
  }
  if (event.target.dataset.scopeZoom !== undefined) {
    const workspace = ensureCompileCode(project);
    workspace.scopeZoom = normalizeScopeZoom(event.target.value);
    addCompileMessage(project, `HDL scope zoom set to ${workspace.scopeZoom}x.`, "info");
    scheduleAutosave(900);
    renderSectionContent(project);
    return;
  }
  if (event.target.dataset.scopeView !== undefined) {
    const workspace = ensureCompileCode(project);
    workspace.scopeView = normalizeScopeView(event.target.value);
    addCompileMessage(project, `HDL scope width set to ${workspace.scopeView === "fit" ? "fit width" : "natural width"}.`, "info");
    scheduleAutosave(900);
    renderSectionContent(project);
    return;
  }
  if (event.target.dataset.scopeFilter !== undefined) {
    const workspace = ensureCompileCode(project);
    workspace.scopeFilter = String(event.target.value || "").slice(0, 80);
    scheduleAutosave(900);
    renderSectionContent(project);
    return;
  }
  if (event.target.dataset.compileAppendTarget !== undefined) {
    const workspace = ensureCompileCode(project);
    workspace.appendTargetId = event.target.value;
    addCompileMessage(project, `Append destination set to ${selectedCompileAppendDestination(project)?.label || "project overview"}.`, "info");
    setStatus("Compile append destination updated.");
    scheduleAutosave();
  }
});

sectionContent.addEventListener("input", (event) => {
  const project = selectedProject();
  if (!project) return;

  const compileFieldTarget = event.target.closest?.("[data-compile-field]") || (event.target.dataset?.compileField ? event.target : null);
  if (compileFieldTarget?.dataset?.compileField) {
    const { file } = activeCompileWorkspaceAndFile(project);
    if (!file) return;
    const field = compileFieldTarget.dataset.compileField;
    if (field === "language") {
      const wasHdl = isHdlLanguage(file.language);
      file.language = normalizeCodeLanguage(compileFieldTarget.value);
      const isNowHdl = isHdlLanguage(file.language);
      file.relativePath = safeClientCodeRelativePath(file.relativePath || file.fileName || defaultCodeFileName(file.language), file.language);
      file.fileName = compileFileNameFromPath(file.relativePath, file.language);
      file.title = file.fileName;
      file.role = normalizeCompileFileRole(file.role || inferCompileFileRole(file.fileName, file.code, file.language), file.language);
      file.fileType = normalizeCompileFileType(file.fileType || file.role, file);
      const fileNameInput = sectionContent.querySelector("[data-compile-field='fileName']");
      if (fileNameInput) fileNameInput.value = compileFileAbsolutePath(project, file);
      const simpleNameInput = sectionContent.querySelector("[data-compile-field='fileNameOnly']");
      if (simpleNameInput) simpleNameInput.value = file.fileName;
      const heading = sectionContent.querySelector(".compile-code-preview-heading span");
      if (heading) heading.textContent = `${codeLanguageLabel(file.language)} preview`;
      updateCompilePreview(file, event.target);
      if (wasHdl !== isNowHdl) {
        file.dirty = true;
        file.lastResult = null;
        setStatus("Unsaved compile source changes.");
        scheduleAutosave(900);
        renderSectionContent(project);
        return;
      }
    } else if (field === "fileName") {
      file.relativePath = compileRelativePathFromInput(compileFieldTarget.value, file, project);
      file.fileName = compileFileNameFromPath(file.relativePath, file.language);
      file.title = file.fileName;
      file.role = normalizeCompileFileRole(file.role || inferCompileFileRole(file.fileName, file.code, file.language), file.language);
      file.fileType = normalizeCompileFileType(file.fileType || file.role, file);
      const simpleNameInput = sectionContent.querySelector("[data-compile-field='fileNameOnly']");
      if (simpleNameInput) simpleNameInput.value = file.fileName;
    } else if (field === "fileNameOnly") {
      const currentDirectory = compileFileDirectory(file.relativePath || "");
      const nextFileName = safeClientCodeFileName(compileFieldTarget.value || file.fileName || defaultCodeFileName(file.language), file.language);
      file.relativePath = safeClientCodeRelativePath([currentDirectory, nextFileName].filter(Boolean).join("/"), file.language);
      file.fileName = compileFileNameFromPath(file.relativePath, file.language);
      file.title = file.fileName;
      file.role = normalizeCompileFileRole(file.role || inferCompileFileRole(file.fileName, file.code, file.language), file.language);
      file.fileType = normalizeCompileFileType(file.fileType || file.role, file);
      compileFieldTarget.value = file.fileName;
      const fileNameInput = sectionContent.querySelector("[data-compile-field='fileName']");
      if (fileNameInput) fileNameInput.value = compileFileAbsolutePath(project, file);
    } else if (field === "fileType") {
      file.fileType = normalizeCompileFileType(compileFieldTarget.value, file);
      if (["design", "testbench"].includes(file.fileType)) {
        file.role = normalizeCompileFileRole(file.fileType, file.language);
      } else {
        file.role = normalizeCompileFileRole(file.role || inferCompileFileRole(file.fileName, file.code, file.language), file.language);
      }
    } else if (field === "role") {
      file.role = normalizeCompileFileRole(compileFieldTarget.value, file.language);
      file.fileType = normalizeCompileFileType(file.role, file);
    } else {
      file[field] = field === "code" ? compileEditorText(compileFieldTarget) : compileFieldTarget.value;
      if (field === "code" && isHdlLanguage(file.language) && (!file.role || file.role === "source")) {
        file.role = inferCompileFileRole(file.fileName, file.code, file.language);
      }
    }
    if (field === "code") {
      updateCompilePreview(file, compileFieldTarget);
      syncCompileEditorScroll(compileFieldTarget);
    }
    file.dirty = true;
    file.lastResult = ["code", "role", "language", "fileName", "fileNameOnly", "fileType"].includes(field) ? null : file.lastResult;
    setStatus("Unsaved compile source changes.");
    scheduleAutosave(field === "code" ? 1600 : 900);
    return;
  }

  if (event.target.dataset.compileTerminalCommand !== undefined) {
    const workspace = ensureCompileCode(project);
    workspace.systemTerminal.command = String(event.target.value || "");
    scheduleAutosave(900);
    return;
  }

  if (event.target.dataset.array) {
    project[event.target.dataset.array][Number(event.target.dataset.index)] = event.target.value;
    setStatus("Unsaved local changes.");
    scheduleAutosave();
    schedulePreviewRender();
  }

  if (event.target.dataset.customSectionField) {
    const section = project.sections.find((item) => item.id === event.target.dataset.sectionId);
    section[event.target.dataset.customSectionField] = event.target.value;
    setStatus("Unsaved local changes.");
    scheduleAutosave();
    if (event.target.dataset.customSectionField === "title") {
      scheduleChromeRender();
    } else {
      schedulePreviewRender();
    }
  }

  if (event.target.dataset.designSummaryPath) {
    setByPath(project, event.target.dataset.designSummaryPath, event.target.value);
    setStatus("Unsaved local changes.");
    scheduleAutosave();
    schedulePreviewRender();
  }
});

sectionContent.addEventListener("keydown", async (event) => {
  if (event.key !== "Enter" || !event.target.matches("[data-compile-terminal-command]")) return;
  event.preventDefault();
  const project = selectedProject();
  if (project) await runCompileTerminalCommand(project);
});

sectionContent.addEventListener("input", (event) => {
  if (!event.target.matches("[data-compile-terminal-command]")) return;
  const project = selectedProject();
  if (!project) return;
  const workspace = ensureCompileCode(project);
  workspace.systemTerminal.command = String(event.target.value || "");
});

sectionContent.addEventListener("paste", (event) => {
  if (!event.target.matches("[data-compile-terminal-command]")) return;
  event.preventDefault();
  const text = (event.clipboardData?.getData("text/plain") || "").replace(/\r?\n/g, " ");
  const input = event.target;
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  input.value = `${input.value.slice(0, start)}${text}${input.value.slice(end)}`;
  input.setSelectionRange?.(start + text.length, start + text.length);
  input.dispatchEvent(new Event("input", { bubbles: true }));
});

projectWindowClose.addEventListener("click", () => {
  closeDialogElement(projectDialog);
});

projectDialog.addEventListener("close", () => {
  document.body.classList.remove("project-window-open");
  detachedProjectViewWindows = [];
  renderDetachedProjectViewWindows();
});

projectWindowDelete.addEventListener("click", () => {
  const project = selectedProject();
  if (!project) return;
  requestProjectDelete(project.id);
});

deleteConfirmYes.addEventListener("click", () => {
  const action = pendingDeleteAction;
  pendingDeleteAction = null;
  closeDialogElement(deleteConfirmDialog, "yes");
  if (action) action();
});

deleteConfirmNo.addEventListener("click", () => {
  pendingDeleteAction = null;
  closeDialogElement(deleteConfirmDialog, "no");
});

deleteConfirmDialog.addEventListener("click", (event) => {
  if (!event.target.closest("[data-delete-cancel]")) return;
  pendingDeleteAction = null;
  closeDialogElement(deleteConfirmDialog, "no");
});

sectionContent.addEventListener("paste", (event) => {
  const compileEditor = event.target.closest?.("[data-compile-active-editor]");
  if (!compileEditor) return;
  const text = event.clipboardData?.getData("text/plain") || "";
  if (!text) return;
  event.preventDefault();
  insertCompileEditorText(text);
  compileEditor.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertFromPaste", data: text }));
});

sectionContent.addEventListener("keydown", (event) => {
  const compileEditor = event.target.closest?.("[data-compile-active-editor]");
  if (!compileEditor) return;
  if (event.key === "Tab") {
    event.preventDefault();
    insertCompileEditorText("  ");
    compileEditor.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertText", data: "  " }));
  }
});

sectionContent.addEventListener("scroll", (event) => {
  if (event.target?.dataset?.compileActiveEditor !== undefined) {
    syncCompileEditorScroll(event.target);
  }
}, true);

assetSource.addEventListener("change", updateAssetDialogVisibility);
assetUrl.addEventListener("input", updateAssetDialogVisibility);
captionSource.addEventListener("change", updateAssetDialogVisibility);
assetFile.addEventListener("change", () => {
  if (!assetTitle.value && assetFile.files.length === 1 && assetFile.files[0]) assetTitle.value = assetFile.files[0].name;
});
assetCancel.addEventListener("click", () => {
  closeDialogElement(assetDialog, "cancel");
});
assetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  closeDialogElement(assetDialog, "save");
});
sectionCancel.addEventListener("click", () => {
  closeDialogElement(sectionDialog, "cancel");
});
sectionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  closeDialogElement(sectionDialog, "save");
});
siteLinkCancel.addEventListener("click", () => {
  closeDialogElement(siteLinkDialog, "cancel");
});
siteLinkForm.addEventListener("submit", (event) => {
  event.preventDefault();
  closeDialogElement(siteLinkDialog, "save");
});
summaryImageCancel.addEventListener("click", () => {
  closeDialogElement(summaryImageDialog, "cancel");
});
summaryImageSource?.addEventListener("change", updateSummaryImageDialogVisibility);
summaryImageUrl?.addEventListener("input", () => {
  if (!summaryImageTitle.value && summaryImageUrl.value.trim()) {
    summaryImageTitle.value = displayNameFromUrl(summaryImageUrl.value.trim(), "Web image");
  }
});
summaryImageFile?.addEventListener("change", () => {
  if (!summaryImageTitle.value && summaryImageFile.files[0]) summaryImageTitle.value = summaryImageFile.files[0].name;
});
summaryImageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  closeDialogElement(summaryImageDialog, "save");
});
summaryFormulaCancel.addEventListener("click", () => {
  closeDialogElement(summaryFormulaDialog, "cancel");
});
summaryFormulaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  closeDialogElement(summaryFormulaDialog, "save");
});
summaryCodeCancel?.addEventListener("click", () => {
  closeDialogElement(summaryCodeDialog, "cancel");
});
summaryCodeInput?.addEventListener("input", refreshSummaryCodeDialogPreview);
summaryCodeLanguage?.addEventListener("change", refreshSummaryCodeDialogPreview);
summaryCodePasteMode?.addEventListener("change", refreshSummaryCodeDialogPreview);
summaryCodeBeautify?.addEventListener("click", beautifySummaryCodeDialog);
summaryCodeForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  closeDialogElement(summaryCodeDialog, "save");
});
preferencesClose?.addEventListener("click", () => {
  closeDialogElement(preferencesDialog, "cancel");
});
preferencesForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  saveBuilderPreferencesFromDialog();
  closeDialogElement(preferencesDialog, "save");
});
lightModeReturnButton?.addEventListener("click", () => {
  setBuilderTheme("light");
});

saveDraftButton.addEventListener("click", () => saveCatalog("/api/save-draft", "Draft saved"));
applyCatalogButton.addEventListener("click", () => {
  saveCatalog("/api/apply-catalog", "Catalog applied and pushed");
});

window.addEventListener("builder-menu-action", (event) => {
  const type = event.detail?.type || "";
  if (type === "new-project") addProjectButton?.click();
  if (type === "publishing-target") publishTargetOpen?.click();
  if (type === "save-draft") saveDraftButton?.click();
  if (type === "apply-site") applyCatalogButton?.click();
  if (type === "portfolio-preview") openPortfolioPreviewButton?.click();
  if (type === "builder-guide") builderGuideOpen?.click();
  if (type === "check-updates") checkForAppUpdates({ force: true, manual: true });
  if (type === "preferences") openPreferencesDialog();
  if (type === "set-theme") setBuilderTheme(event.detail?.theme || "light");
});

document.addEventListener("keydown", (event) => {
  void handleGlobalKeyboardShortcuts(event);
}, true);
document.addEventListener("wheel", handleBuilderZoomWheel, { passive: false });

loadBuilderPreferences();
renderSelectionInspectorOptions();
enableDraggableDialogs();

window.addEventListener("beforeunload", () => {
  clearTimeout(autosaveTimer);
  const payload = JSON.stringify({ catalog });
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/save-draft", new Blob([payload], { type: "application/json" }));
  }
});
// Legacy global hook kept inert; scoped editor listeners above own the context menu.
document.addEventListener("builder-disabled-contextmenu", (event) => {
    const editor = event.target.closest("[data-rich-editor]");
    const block = event.target.closest(".rich-block");
    if (!editor && !block) return;

    event.preventDefault();

    // Determine which editor and block are active.
    activeSummaryEditor = editor || block.closest("[data-rich-editor]");
    selectRichBlock(block || currentRichBlock(activeSummaryEditor));

    // Synchronize the context‑menu controls (font, size, color).
    syncRichContextMenuControls(activeSummaryBlock);

    // Position and show the context menu.
    summaryContextMenu.style.left = `${event.clientX}px`;
    summaryContextMenu.style.top = `${event.clientY}px`;
    summaryContextMenu.hidden = false;
}, true);
document.addEventListener("builder-disabled-click", () => {
    summaryContextMenu.hidden = true;
});

loadData().catch((error) => {
  setStatus(error.message || "Builder failed to load.");
});
scheduleAppUpdateChecks();
