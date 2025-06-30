// Router configuration with protected routes
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { PageLoading } from '@/components/common/Loading';
import { ROUTES } from '@/lib/constants/routes';

// Lazy load components for better performance
const Home = lazy(() => import('@/pages/Home').then(m => ({ default: m.Home })));
const Dashboard = lazy(() => import('@/pages/dashboard/Dashboard').then(m => ({ default: m.Dashboard })));
const Profile = lazy(() => import('@/pages/dashboard/Profile').then(m => ({ default: m.Profile })));
const SignIn = lazy(() => import('@/pages/auth/SignIn').then(m => ({ default: m.SignIn })));
const SignUp = lazy(() => import('@/pages/auth/SignUp').then(m => ({ default: m.SignUp })));
const ResetPassword = lazy(() => import('@/pages/auth/ResetPassword').then(m => ({ default: m.ResetPassword })));
const NotFound = lazy(() => import('@/components/common/NotFound').then(m => ({ default: m.NotFound })));

// Wrapper component for Suspense
function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageLoading />}>{children}</Suspense>;
}

export const router = createBrowserRouter([
  // Public routes
  {
    path: ROUTES.HOME,
    element: (
      <SuspenseWrapper>
        <Home />
      </SuspenseWrapper>
    ),
  },

  // Auth routes
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.AUTH.SIGN_IN,
        element: (
          <SuspenseWrapper>
            <SignIn />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.AUTH.SIGN_UP,
        element: (
          <SuspenseWrapper>
            <SignUp />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.AUTH.RESET_PASSWORD,
        element: (
          <SuspenseWrapper>
            <ResetPassword />
          </SuspenseWrapper>
        ),
      },
    ],
  },

  // Protected app routes
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: (
          <SuspenseWrapper>
            <Dashboard />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.PROFILE,
        element: (
          <SuspenseWrapper>
            <Profile />
          </SuspenseWrapper>
        ),
      },
    ],
  },

  // 404 route
  {
    path: '*',
    element: (
      <SuspenseWrapper>
        <NotFound />
      </SuspenseWrapper>
    ),
  },
]);