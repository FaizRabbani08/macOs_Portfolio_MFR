import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BootScreen, Desktop, DynamicNotch, Launchpad, LockScreen, MissionControl, MobileLayout } from "./components";
import { useWindowStore } from "#store/windowStore";
import { useSettingsStore } from "#store/settingsStore";
import { useMediaQuery } from "#hooks/useMediaQuery";

function App() {
  const toggleSpotlight = useWindowStore((state) => state.toggleSpotlight);
  const closeSpotlight = useWindowStore((state) => state.closeSpotlight);
  const isMissionControlOpen = useWindowStore((state) => state.isMissionControlOpen);
  const isLaunchpadOpen = useWindowStore((state) => state.isLaunchpadOpen);
  const toggleMissionControl = useWindowStore((state) => state.toggleMissionControl);
  const toggleLaunchpad = useWindowStore((state) => state.toggleLaunchpad);
  const closeSpecialViews = useWindowStore((state) => state.closeSpecialViews);
  const openWindow = useWindowStore((state) => state.openWindow);
  const wallpaper = useSettingsStore((state) => state.wallpaper);
  const theme = useSettingsStore((state) => state.theme);
  const bootComplete = useWindowStore((state) => state.bootComplete);
  const isLocked = useWindowStore((state) => state.isLocked);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        toggleSpotlight();
      }

      if (event.key === "F3" || (event.ctrlKey && event.key === "ArrowUp")) {
        event.preventDefault();
        toggleMissionControl();
      }

      if (event.key === "F4") {
        event.preventDefault();
        toggleLaunchpad();
      }

      if (event.key === "Escape") {
        closeSpotlight();
        closeSpecialViews();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeSpecialViews, closeSpotlight, toggleLaunchpad, toggleMissionControl, toggleSpotlight]);

  const handleLaunchpadOpen = (id) => {
    if (id === "resume") {
      window.open("/files/resume.pdf", "_blank", "noopener,noreferrer");
      return;
    }

    openWindow(id === "projects" ? "finder" : id);
  };

  return (
    <div
      className={`app-root theme-${theme}`}
      style={{
        backgroundImage: `url("${wallpaper}")`,
        transform: isLocked ? "scale(1.1)" : "scale(1)",
      }}
    >
      {!bootComplete ? (
        <BootScreen />
      ) : (
        <>
          <AnimatePresence>{isLocked && <LockScreen />}</AnimatePresence>
          <div className={`app-stage ${isLocked ? "app-stage-locked" : ""}`}>
            {!isMobile && <DynamicNotch />}
            {isMobile ? <MobileLayout /> : <Desktop wallpaper={wallpaper} theme={theme} />}
            {isMissionControlOpen && <MissionControl />}
            {isLaunchpadOpen && <Launchpad onOpen={handleLaunchpadOpen} />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;