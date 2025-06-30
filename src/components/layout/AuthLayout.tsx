// Authentication layout component
import { Outlet } from 'react-router-dom';
import { ThemeToggle } from '@/components/common/ThemeToggle';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Frontend Template</h1>
            <p className="mt-2 text-muted-foreground">
              Production-ready authentication and routing
            </p>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}