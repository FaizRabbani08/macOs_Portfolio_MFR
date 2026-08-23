import { useEffect, useState } from "react";

export const useContextMenu = () => {
  const [menu, setMenu] = useState({ x: 0, y: 0, show: false });

  const handleContext = (event) => {
    event.preventDefault();
    setMenu({ x: event.clientX, y: event.clientY, show: true });
  };

  useEffect(() => {
    const closeMenu = () => setMenu((current) => ({ ...current, show: false }));
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, []);

  return { menu, handleContext };
};