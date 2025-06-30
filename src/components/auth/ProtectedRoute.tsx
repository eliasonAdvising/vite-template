// Protected route component
import { useAuth } from '@/hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { PageLoading } from '@/components/common/Loading';
import { ROUTES } from '@/lib/constants/routes';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading, initialized } = useAuth();
  const location = useLocation();

  // Show loading while auth is initializing
  if (!initialized || loading) {
    return <PageLoading />;
  }

  // Redirect to sign in if not authenticated
  if (!user) {
    return <Navigate to={ROUTES.AUTH.SIGN_IN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}