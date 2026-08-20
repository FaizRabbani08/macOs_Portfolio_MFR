import Window from "./Window";
import PortfolioWindow from "./PortfolioWindow";
import { useWindowStore } from "#store/windowStore";
import Finder from "#windows/Finder";
import Terminal from "#windows/Terminal";
import VSCode from "#windows/VSCode";
import Settings from "#windows/Settings";

const WINDOW_CONFIG = {
  finder: {
    title: "Portfolio",
  },

  safari: {
    title: "Articles",
  },

  photos: {
    title: "Gallery",
  },

  contact: {
    title: "Contact",
  },

  terminal: {
    title: "Skills",
  },

  search: {
    title: "Spotlight Search",
  },

  vscode: {
    title: "Visual Studio Code",
  },

  settings: {
    title: "System Settings",
  },
};

const WindowManager = () => {
  const windows = useWindowStore(
    (state) => state.windows
  );

  return (
    <>
      {Object.entries(windows).map(
        ([id, windowState]) => {
          if (!windowState?.isOpen) {
            return null;
          }

          const config = WINDOW_CONFIG[id];

          if (!config) {
            return null;
          }

          return (
            <Window
              key={id}
              id={id}
              title={config.title}
            >
              {id === "finder" ? <Finder /> : id === "terminal" ? <Terminal /> : id === "vscode" ? <VSCode /> : id === "settings" ? <Settings /> : <PortfolioWindow type={id} />}
            </Window>
          );
        }
      )}
    </>
  );
};

export default WindowManager;