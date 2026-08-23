import Window from "./Window";
import PortfolioWindow from "./PortfolioWindow";
import { useWindowStore } from "#store/windowStore";
import Finder from "#windows/Finder";
import Terminal from "#windows/Terminal";
import VSCode from "#windows/VSCode";
import Settings from "#windows/Settings";
import FaizAI from "#windows/FaizAI";
import { getApp } from "#constants/apps";

const WINDOW_CONTENT = {
  finder: Finder,
  terminal: Terminal,
  vscode: VSCode,
  settings: Settings,
  faizai: FaizAI,
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

          const config = getApp(id);

          if (!config) {
            return null;
          }

          const Content = WINDOW_CONTENT[config.view];

          return (
            <Window
              key={id}
              id={id}
              title={config.title}
            >
              {Content ? <Content /> : config.view === "portfolio" ? <PortfolioWindow type={id} /> : null}
            </Window>
          );
        }
      )}
    </>
  );
};

export default WindowManager;
