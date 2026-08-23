import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Briefcase, Code2, FileText, Folder, Search, Settings, Terminal } from "lucide-react";
import { useWindowStore } from "#store/windowStore";

const APPS = [
  { id: "finder", label: "Finder", icon: Folder, color: "bg-blue-500" },
  { id: "terminal", label: "Terminal", icon: Terminal, color: "bg-zinc-800" },
  { id: "resume", label: "Resume", icon: FileText, color: "bg-orange-500" },
  { id: "projects", label: "Projects", icon: Briefcase, color: "bg-amber-600" },
  { id: "vscode", label: "VS Code", icon: Code2, color: "bg-sky-600" },
  { id: "faizai", label: "FaizAI", icon: Bot, color: "bg-indigo-600" },
  { id: "settings", label: "Settings", icon: Settings, color: "bg-gray-500" },
];

const Launchpad = ({ onOpen }) => {
  const [search, setSearch] = useState("");
  const toggleLaunchpad = useWindowStore((state) => state.toggleLaunchpad);
  const filteredApps = APPS.filter((app) => app.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <motion.section
      className="launchpad-overlay"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      onClick={toggleLaunchpad}
      role="dialog"
      aria-label="Launchpad"
    >
      <div className="launchpad-search" onClick={(event) => event.stopPropagation()}>
        <Search size={18} aria-hidden="true" />
        <input autoFocus value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search" aria-label="Search Launchpad" />
      </div>
      <motion.div
        className="launchpad-grid"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.05 } } }}
      >
        <AnimatePresence>
          {filteredApps.map(({ id, label, icon: Icon, color }) => (
            <motion.button
              type="button"
              key={id}
              className="launchpad-app"
              variants={{ hidden: { opacity: 0, scale: 0.5, y: 20 }, show: { opacity: 1, scale: 1, y: 0 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(event) => {
                event.stopPropagation();
                onOpen(id);
                toggleLaunchpad();
              }}
            >
              <span className={`launchpad-icon ${color}`}><Icon size={40} /></span>
              <span>{label}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Launchpad;