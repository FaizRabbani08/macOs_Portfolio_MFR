import { useEffect } from "react";

export const useKeyboardShortcuts = ({ openSpotlight, closeActiveWindow }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();

      if ((event.metaKey || event.ctrlKey) && key === " ") {
        event.preventDefault();
        openSpotlight();
      }

      if ((event.metaKey || event.ctrlKey) && key === "w") {
        event.preventDefault();
        closeActiveWindow?.();
      }

      if (key === "escape") {
        closeActiveWindow?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeActiveWindow, openSpotlight]);
};