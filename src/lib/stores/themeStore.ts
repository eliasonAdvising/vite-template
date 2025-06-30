// Theme store - client-side theme state
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  systemTheme: 'light' | 'dark';
}

interface ThemeStore extends ThemeState {
  setTheme: (theme: Theme) => void;
  setSystemTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}

const initialState: ThemeState = {
  theme: 'system',
  systemTheme: 'light',
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setTheme: (theme) => set({ theme }),
      setSystemTheme: (systemTheme) => set({ systemTheme }),
      toggleTheme: () => {
        const currentTheme = get().theme;
        if (currentTheme === 'system') {
          set({ theme: 'light' });
        } else if (currentTheme === 'light') {
          set({ theme: 'dark' });
        } else {
          set({ theme: 'light' });
        }
      },
    }),
    {
      name: 'theme-store',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);