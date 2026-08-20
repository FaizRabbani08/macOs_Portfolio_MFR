import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSettingsStore = create(
  persist(
    (set) => ({
      wallpaper: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070",
      theme: "dark",
      dockSize: 60,
      setWallpaper: (wallpaper) => set({ wallpaper }),
      setTheme: (theme) => set({ theme }),
      setDockSize: (dockSize) => set({ dockSize }),
    }),
    { name: "macos-settings" }
  )
);