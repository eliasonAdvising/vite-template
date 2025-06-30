// Main application layout component
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { useAppStore } from '@/lib/stores/appStore';
import { cn } from '@/lib/utils/cn';
import { useEffect } from 'react';

export function AppLayout() {
  const { sidebarOpen, sidebarCollapsed, mobileMenuOpen, setMobileMenuOpen } = useAppStore();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setMobileMenuOpen]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Desktop */}
      <aside
        className={cn(
          'hidden md:flex md:flex-shrink-0 transition-all duration-300',
          !sidebarOpen && 'md:hidden'
        )}
      >
        <Sidebar />
      </aside>

      {/* Sidebar - Mobile */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-64 flex-shrink-0 transform transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}