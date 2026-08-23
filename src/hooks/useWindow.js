import { useWindowStore } from "#store/windowStore";

export const useWindow = (id) => {
  const windowState = useWindowStore((state) => state.windows[id]);
  const openWindow = useWindowStore((state) => state.openWindow);
  const closeWindow = useWindowStore((state) => state.closeWindow);

  return { windowState, open: () => openWindow(id), close: () => closeWindow(id) };
};
