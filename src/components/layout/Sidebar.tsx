// Sidebar navigation component
import { Home, BarChart3, Users, Settings, ChevronLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils/cn';
import { useAppStore } from '@/lib/stores/appStore';
import { ROUTES } from '@/lib/constants/routes';

const navigation = [
  { name: 'Dashboard', href: ROUTES.DASHBOARD, icon: Home },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const location = useLocation();
  const { sidebarOpen, sidebarCollapsed, setSidebarCollapsed, setSidebarOpen } = useAppStore();

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div
      className={cn(
        'relative flex h-full flex-col border-r bg-background transition-all duration-300',
        sidebarCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        {!sidebarCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Home className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">Frontend Template</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className={cn(
            'h-8 w-8',
            sidebarCollapsed ? 'mx-auto' : 'ml-auto'
          )}
        >
          <ChevronLeft className={cn(
            'h-4 w-4 transition-transform',
            sidebarCollapsed && 'rotate-180'
          )} />
        </Button>
      </div>

      <ScrollArea className="flex-1 px-3 py-2">
        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} to={item.href}>
                <Button
                  variant={isCurrentPath(item.href) ? 'secondary' : 'ghost'}
                  className={cn(
                    'w-full justify-start',
                    sidebarCollapsed && 'px-2'
                  )}
                >
                  <Icon className={cn('h-4 w-4', !sidebarCollapsed && 'mr-2')} />
                  {!sidebarCollapsed && item.name}
                </Button>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
}