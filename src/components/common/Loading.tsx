// Loading component with spinner
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export function Loading({ size = 'md', text, className }: LoadingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  return (
    <div className={cn('flex items-center justify-center space-x-2', className)}>
      <Loader2 className={cn('animate-spin', sizeClasses[size])} />
      {text && <span className="text-sm text-muted-foreground">{text}</span>}
    </div>
  );
}

// Full page loading component
export function PageLoading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loading size="lg" text="Loading..." />
    </div>
  );
}

// Inline loading component
export function InlineLoading({ text = 'Loading...' }: { text?: string }) {
  return <Loading size="sm" text={text} className="py-4" />;
}