// Application routes constants
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  AUTH: {
    SIGN_IN: '/auth/sign-in',
    SIGN_UP: '/auth/sign-up',
    RESET_PASSWORD: '/auth/reset-password',
  },
  NOT_FOUND: '/404',
} as const;

export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.AUTH.SIGN_IN,
  ROUTES.AUTH.SIGN_UP,
  ROUTES.AUTH.RESET_PASSWORD,
  ROUTES.NOT_FOUND,
] as const;

export const PROTECTED_ROUTES = [
  ROUTES.DASHBOARD,
  ROUTES.PROFILE,
] as const;