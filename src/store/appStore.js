import { create } from "zustand";

export const useAppStore = create((set) => ({
  activeAppId: null,
  setActiveAppId: (activeAppId) => set({ activeAppId }),
}));
