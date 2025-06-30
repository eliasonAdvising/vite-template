// Authentication related types
export interface User {
  id: string;
  email: string;
  email_confirmed_at?: string;
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  user: User | null;
  session: any | null;
  loading: boolean;
  initialized: boolean;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ResetPasswordData {
  email: string;
}

export interface UpdatePasswordData {
  password: string;
  confirmPassword: string;
}