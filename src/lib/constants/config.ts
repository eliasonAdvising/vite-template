// Application configuration constants
export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_NAME || 'Frontend Template',
  url: import.meta.env.VITE_APP_URL || 'http://localhost:3000',
  environment: import.meta.env.VITE_ENVIRONMENT || 'development',
  isDevelopment: import.meta.env.VITE_ENVIRONMENT === 'development',
  isProduction: import.meta.env.VITE_ENVIRONMENT === 'production',
} as const;

export const SUPABASE_CONFIG = {
  url: import.meta.env.VITE_SUPABASE_URL,
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
} as const;

// Validate required environment variables
if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) {
  throw new Error(
    'Missing required Supabase environment variables. Please check your .env file.'
  );
}