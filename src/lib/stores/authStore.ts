// Authentication store - client-side auth state only
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthState } from '@/types/auth';

interface AuthStore extends AuthState {
  setUser: (user: AuthState['user']) => void;
  setSession: (session: AuthState['session']) => void;
  setLoading: (loading: boolean) => void;
  setInitialized: (initialized: boolean) => void;
  reset: () => void;
}

const initialState: AuthState = {
  user: null,
  session: null,
  loading: true,
  initialized: false,
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: (user) => set({ user }),
      setSession: (session) => set({ session }),
      setLoading: (loading) => set({ loading }),
      setInitialized: (initialized) => set({ initialized }),
      reset: () => set(initialState),
    }),
    {
      name: 'auth-store',
      partialize: (state) => ({
        user: state.user,
        session: state.session,
        initialized: state.initialized,
      }),
    }
  )
);