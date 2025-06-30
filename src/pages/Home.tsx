// Home page component
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ROUTES } from '@/lib/constants/routes';
import { useAuth } from '@/hooks/useAuth';

const features = [
  {
    icon: Shield,
    title: 'Secure Authentication',
    description: 'Built-in authentication with Supabase including sign-in, sign-up, and password reset flows.',
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Vite for lightning-fast development and optimized production builds with code splitting.',
  },
  {
    icon: Palette,
    title: 'Modern UI',
    description: 'Beautiful, accessible components with Shadcn/UI and Tailwind CSS, plus dark/light mode.',
  },
];

export function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between px-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Shield className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">Frontend Template</span>
          </div>
          <nav className="flex items-center space-x-4">
            {isAuthenticated ? (
              <Button asChild>
                <Link to={ROUTES.DASHBOARD}>
                  Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to={ROUTES.AUTH.SIGN_IN}>Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to={ROUTES.AUTH.SIGN_UP}>Get Started</Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto px-4">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Production-Ready Frontend Template
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A complete, production-ready frontend infrastructure template with authentication,
              routing, and state management built with modern React ecosystem.
            </p>
            <div className="space-x-4">
              {isAuthenticated ? (
                <Button size="lg" asChild>
                  <Link to={ROUTES.DASHBOARD}>
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <>
                  <Button size="lg" asChild>
                    <Link to={ROUTES.AUTH.SIGN_UP}>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to={ROUTES.AUTH.SIGN_IN}>Sign In</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="space-y-6 py-8 md:py-12 lg:py-24 px-4">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Everything you need to build modern web applications with confidence.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 px-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 max-w-7xl mx-auto">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with React, TypeScript, Tailwind CSS, and Supabase.
          </p>
        </div>
      </footer>
    </div>
  );
}