import React from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none overflow-hidden group',
        {
          'bg-gradient-to-r from-violet-600 to-blue-500 text-white hover:from-violet-500 hover:to-blue-400': variant === 'primary',
          'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white': variant === 'secondary',
          'border border-violet-500 bg-transparent text-white hover:bg-violet-950/30': variant === 'outline',
          'bg-transparent hover:bg-white/10 text-white': variant === 'ghost',
          'text-sm px-3 py-1.5 font-normal': size === 'sm',
          'text-base px-5 py-2.5': size === 'md',
          'text-lg px-6 py-3': size === 'lg',
        },
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-all duration-300">
          <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-shimmer" />
        </span>
      )}
    </button>
  );
}