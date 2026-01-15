import { create } from "zustand";

export const useUIStore = create((set) => ({
  sidebarOpen: false,        // mobile open/close
  sidebarCollapsed: false,   // desktop collapse

  openSidebar: () => set({ sidebarOpen: true }),
  closeSidebar: () => set({ sidebarOpen: false }),
  toggleSidebar: () =>
    set((s) => ({ sidebarOpen: !s.sidebarOpen })),

  toggleCollapse: () =>
    set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
}));
