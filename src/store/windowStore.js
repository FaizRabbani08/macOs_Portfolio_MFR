import { create } from "zustand";

export const useWindowStore = create((set) => ({
  windows: {},
  bootComplete: false,
  isSpotlightOpen: false,

  setBootComplete: (bootComplete) => set({ bootComplete }),

  toggleSpotlight: () =>
    set((state) => ({ isSpotlightOpen: !state.isSpotlightOpen })),

  closeSpotlight: () => set({ isSpotlightOpen: false }),

  openWindow: (id) =>
    set((state) => {
      const existing = state.windows[id];

      return {
        windows: {
          ...state.windows,
          [id]: {
            id,
            isOpen: true,
            isMinimized: false,
            isMaximized: existing?.isMaximized ?? false,
            x: existing?.x ?? 180,
            y: existing?.y ?? 100,
            width: existing?.width ?? 820,
            height: existing?.height ?? 560,
            minWidth: existing?.minWidth ?? 420,
            minHeight: existing?.minHeight ?? 280,
            zIndex: Date.now(),
          },
        },
      };
    }),

  closeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isOpen: false,
          isMinimized: false,
        },
      },
    })),

  minimizeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isMinimized: true,
        },
      },
    })),

  maximizeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isMaximized: !state.windows[id]?.isMaximized,
        },
      },
    })),

  focusWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          zIndex: Date.now(),
          isMinimized: false,
        },
      },
    })),

  moveWindow: (id, x, y) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          x,
          y,
        },
      },
    })),

  resizeWindow: (id, width, height) =>
    set((state) => {
      const windowState = state.windows[id];
      if (!windowState) return state;

      return {
        windows: {
          ...state.windows,
          [id]: {
            ...windowState,
            width: Math.max(windowState.minWidth, width),
            height: Math.max(windowState.minHeight, height),
          },
        },
      };
    }),
}));