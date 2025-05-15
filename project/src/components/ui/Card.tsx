import React from 'react';
import { cn } from '../../utils/cn';

type CardProps = {
  className?: string;
  children: React.ReactNode;
  glow?: boolean;
  hover?: boolean;
};

export function Card({ className, children, glow = false, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 p-5 transition-all duration-300',
        { 
          'relative before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1.5px] before:bg-gradient-to-r before:from-transparent before:via-violet-500/50 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity': glow,
          'hover:translate-y-[-4px] hover:shadow-lg hover:shadow-violet-500/10': hover,
        },
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mb-3', className)}>{children}</div>;
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h3 className={cn('text-lg font-bold text-white', className)}>{children}</h3>;
}

export function CardDescription({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={cn('text-sm text-gray-400', className)}>{children}</p>;
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('', className)}>{children}</div>;
}

export function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mt-4 flex items-center', className)}>{children}</div>;
}