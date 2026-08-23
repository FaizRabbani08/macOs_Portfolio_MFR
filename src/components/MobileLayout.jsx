import dayjs from "dayjs";
import { Battery, Briefcase, Code2, FileText, Folder, Settings, Signal, Terminal, Wifi } from "lucide-react";
import { useWindowStore } from "#store/windowStore";
import WindowManager from "./WindowManager";

const APPS = [
  { id: "finder", label: "Finder", icon: Folder, color: "bg-blue-500" },
  { id: "terminal", label: "Terminal", icon: Terminal, color: "bg-zinc-800" },
  { id: "resume", label: "Resume", icon: FileText, color: "bg-orange-500" },
  { id: "projects", label: "Projects", icon: Briefcase, color: "bg-amber-600" },
  { id: "vscode", label: "VS Code", icon: Code2, color: "bg-sky-600" },
  { id: "settings", label: "Settings", icon: Settings, color: "bg-gray-500" },
];

const MobileLayout = () => {
  const openWindow = useWindowStore((state) => state.openWindow);

  const openApp = (id) => {
    if (id === "resume") {
      window.open("/files/resume.pdf", "_blank", "noopener,noreferrer");
      return;
    }

    openWindow(id === "projects" ? "finder" : id);
  };

  return (
    <main className="mobile-layout">
      <header className="mobile-status-bar">
        <span>{dayjs().format("h:mm")}</span>
        <div><Signal size={14} /><Wifi size={14} /><Battery size={18} /></div>
      </header>

      <div className="mobile-app-grid">
        {APPS.map(({ id, label, icon: Icon, color }) => (
          <button type="button" key={id} onClick={() => openApp(id)}>
            <span className={`mobile-app-icon ${color}`}><Icon size={28} /></span>
            <span>{label}</span>
          </button>
        ))}
      </div>

      <nav className="mobile-dock" aria-label="Mobile applications">
        {APPS.slice(0, 4).map(({ id, icon: Icon, color }) => (
          <button type="button" key={id} className={`mobile-app-icon ${color}`} aria-label={id} onClick={() => openApp(id)}>
            <Icon size={28} />
          </button>
        ))}
      </nav>

      <WindowManager />
    </main>
  );
};

export default MobileLayout;