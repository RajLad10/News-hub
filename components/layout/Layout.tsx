import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn(
      'min-h-screen flex flex-col bg-background text-foreground',
      className
    )}>
      <Navbar />
      <main className="flex-1 pt-4 md:pt-6">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
