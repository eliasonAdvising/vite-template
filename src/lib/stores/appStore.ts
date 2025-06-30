// Application UI state store
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  sidebarOpen: boolean;
  sidebarCollapsed: boolean;
  mobileMenuOpen: boolean;
}

interface AppStore extends AppState {
  setSidebarOpen: (open: boolean) => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  toggleMobileMenu: () => void;
}

const initialState: AppState = {
  sidebarOpen: true,
  sidebarCollapsed: false,
  mobileMenuOpen: false,
};

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
    }),
    {
      name: 'app-store',
      partialize: (state) => ({
        sidebarOpen: state.sidebarOpen,
        sidebarCollapsed: state.sidebarCollapsed,
      }),
    }
  )
);