// 404 Not Found component
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ROUTES } from '@/lib/constants/routes';

export function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 text-6xl font-bold text-muted-foreground">404</div>
          <CardTitle>Page not found</CardTitle>
          <CardDescription>
            The page you're looking for doesn't exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link to={ROUTES.HOME}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go back
              </Link>
            </Button>
            <Button asChild className="w-full sm:w-auto">
              <Link to={ROUTES.DASHBOARD}>
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}