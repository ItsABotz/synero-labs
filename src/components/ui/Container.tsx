import React from 'react';
import { cn } from '../../utils/cn';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export function Container({ className, children, size = 'lg' }: ContainerProps) {
  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6',
        {
          'max-w-screen-sm': size === 'sm',
          'max-w-screen-md': size === 'md',
          'max-w-screen-lg': size === 'lg',
          'max-w-screen-xl': size === 'xl',
          'max-w-full': size === 'full',
        },
        className
      )}
    >
      {children}
    </div>
  );
}