import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#0c0c1c]">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}