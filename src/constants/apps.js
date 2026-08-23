export const APP_REGISTRY = {
  finder: { title: "Portfolio", label: "Portfolio", icon: "finder.png", view: "finder", dock: true },
  safari: { title: "Articles", label: "Articles", icon: "safari.png", view: "portfolio", dock: true },
  photos: { title: "Gallery", label: "Gallery", icon: "photos.png", view: "portfolio", dock: true },
  contact: { title: "Contact", label: "Contact", icon: "contact.png", view: "portfolio", dock: true },
  terminal: { title: "Skills", label: "Skills", icon: "terminal.png", view: "terminal", dock: true },
  vscode: { title: "Visual Studio Code", label: "VS Code", icon: "vscode.webp", view: "vscode", dock: true },
  settings: { title: "System Settings", label: "Settings", iconPath: "/icons/mode.svg", view: "settings", dock: true },
  faizai: { title: "FaizAI", label: "FaizAI", iconPath: "/images/faizai.png", view: "faizai", dock: true },
  resume: { title: "Resume", label: "Resume", view: "external" },
  github: { title: "GitHub", label: "GitHub", view: "external" },
  trash: { title: "Archive", label: "Archive", icon: "trash.png", view: "none", dock: true, canOpen: false },
};

export const getApp = (id) => APP_REGISTRY[id];

export const dockApps = Object.entries(APP_REGISTRY)
  .filter(([, app]) => app.dock)
  .map(([id, app]) => ({ id, name: app.label, icon: app.icon, iconPath: app.iconPath, canOpen: app.canOpen ?? true }));

export const navLinks = [
  { id: 1, name: "Projects", type: "finder" },
  { id: 3, name: "Contact", type: "contact" },
  { id: 4, name: "Resume", type: "resume" },
];

export const navIcons = [
  { id: 1, img: "/icons/wifi.svg" },
  { id: 2, img: "/icons/search.svg" },
  { id: 3, img: "/icons/user.svg" },
  { id: 4, img: "/icons/mode.svg" },
];
