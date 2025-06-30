// Supabase client configuration
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG } from '@/lib/constants/config';
import type { Database } from '@/types/database';

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
  SUPABASE_CONFIG.url,
  SUPABASE_CONFIG.anonKey,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  }
);