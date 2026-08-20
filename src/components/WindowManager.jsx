import Window from "./Window";
import PortfolioWindow from "./PortfolioWindow";
import { useWindowStore } from "#store/windowStore";

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
              <PortfolioWindow
                type={id}
              />
            </Window>
          );
        }
      )}
    </>
  );
};

export default WindowManager;