import { useEffect } from "react";
import { BootScreen, Desktop, MobileLayout } from "./components";
import { useWindowStore } from "#store/windowStore";
import { useSettingsStore } from "#store/settingsStore";
import { useMediaQuery } from "#hooks/useMediaQuery";

function App() {
  const toggleSpotlight = useWindowStore((state) => state.toggleSpotlight);
  const closeSpotlight = useWindowStore((state) => state.closeSpotlight);
  const wallpaper = useSettingsStore((state) => state.wallpaper);
  const theme = useSettingsStore((state) => state.theme);
  const bootComplete = useWindowStore((state) => state.bootComplete);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        toggleSpotlight();
      }

      if (event.key === "Escape") closeSpotlight();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeSpotlight, toggleSpotlight]);

  return (
    <div
      className={`app-root theme-${theme}`}
      style={{ backgroundImage: `url("${wallpaper}")` }}
    >
      {!bootComplete ? (
        <BootScreen />
      ) : isMobile ? (
        <MobileLayout />
      ) : (
        <Desktop wallpaper={wallpaper} theme={theme} />
      )}
    </div>
  );
}

export default App;