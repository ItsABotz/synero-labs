import React from 'react';
import { cn } from '../../utils/cn';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function NavLink({ href, children, className, isActive = false, ...props }: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'relative font-medium text-sm transition-colors',
        {
          'text-white': isActive,
          'text-gray-400 hover:text-white': !isActive,
        },
        className
      )}
      {...props}
    >
      {children}
      <span
        className={cn('absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-violet-600 to-blue-500 transition-all duration-300', {
          'w-full': isActive,
          'w-0 group-hover:w-full': !isActive,
        })}
      />
    </a>
  );
}