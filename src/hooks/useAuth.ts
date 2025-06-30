// Authentication hook
import { useEffect } from 'react';
import { useAuthStore } from '@/lib/stores/authStore';
import { authService } from '@/lib/supabase/auth';
import { toast } from 'react-hot-toast';

export function useAuth() {
  const { user, session, loading, initialized, setUser, setSession, setLoading, setInitialized, reset } = useAuthStore();

  useEffect(() => {
    let mounted = true;

    // Initialize auth state
    const initializeAuth = async () => {
      try {
        const session = await authService.getSession();
        
        if (mounted) {
          setSession(session);
          setUser(session?.user ?? null);
          setInitialized(true);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        if (mounted) {
          setInitialized(true);
          setLoading(false);
        }
      }
    };

    // Listen for auth changes
    const { data: { subscription } } = authService.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;

        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);

        if (event === 'SIGNED_OUT') {
          reset();
        }
      }
    );

    initializeAuth();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [setUser, setSession, setLoading, setInitialized, reset]);

  const signIn = async (data: { email: string; password: string }) => {
    try {
      setLoading(true);
      await authService.signIn(data);
      toast.success('Signed in successfully');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (data: { email: string; password: string }) => {
    try {
      setLoading(true);
      await authService.signUp(data);
      toast.success('Account created successfully! Please check your email to verify your account.');
    } catch (error: any) {
      toast.error(error.message || 'Failed to create account');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await authService.signOut();
      toast.success('Signed out successfully');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign out');
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (data: { email: string }) => {
    try {
      setLoading(true);
      await authService.resetPassword(data);
      toast.success('Password reset email sent');
    } catch (error: any) {
      toast.error(error.message || 'Failed to send reset email');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    session,
    loading,
    initialized,
    isAuthenticated: !!user,
    signIn,
    signUp,
    signOut,
    resetPassword,
  };
}