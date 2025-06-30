// Footer component
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="flex h-14 items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">
          © 2024 Frontend Template. All rights reserved.
        </p>
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          <span>by the team</span>
        </div>
      </div>
    </footer>
  );
}