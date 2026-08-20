import { useState } from "react";

import {
  Navbar,
  Welcome,
  Dock,
  WindowManager,
  Spotlight,
} from "./components";

import { useWindowStore } from "#store/windowStore";
import { useKeyboardShortcuts } from "#hooks/useKeyboardShortcuts";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);

  const openWindow = useWindowStore(
    (state) => state.openWindow
  );
  const windows = useWindowStore((state) => state.windows);
  const closeWindow = useWindowStore((state) => state.closeWindow);

  const openSpotlight = () => setIsSpotlightOpen(true);

  const handleOpenWindow = (id) => {
    if (id === "search") {
      openSpotlight();
      return;
    }

    if (id === "resume") {
      window.open("/files/resume.pdf", "_blank", "noopener,noreferrer");
      return;
    }

    openWindow(id);
  };

  const closeActiveWindow = () => {
    if (isSpotlightOpen) {
      setIsSpotlightOpen(false);
      return;
    }

    const activeWindow = Object.values(windows)
      .filter((windowState) => windowState?.isOpen)
      .sort((first, second) => second.zIndex - first.zIndex)[0];

    if (activeWindow) closeWindow(activeWindow.id);
  };

  useKeyboardShortcuts({ openSpotlight, closeActiveWindow });

  return (
    <main
      className={`desktop-shell ${
        isDark ? "theme-dark" : ""
      }`}
    >
      <Navbar
        onOpen={handleOpenWindow}
        onToggleTheme={() =>
          setIsDark((current) => !current)
        }
      />

      <Welcome />

      <WindowManager />

      <Spotlight
        isOpen={isSpotlightOpen}
        onClose={() => setIsSpotlightOpen(false)}
        onOpen={handleOpenWindow}
      />

      <Dock onOpen={handleOpenWindow} />
    </main>
  );
}

export default App;