// src/components/layout/Header.tsx  – FULL FILE
import React, { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { cn } from '../../utils/cn';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b border-white/10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* logo */}
        <a
          href="/"
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500"
        >
          Synero&nbsp;Labs
        </a>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#marketplace">Marketplace</NavLink>
          <NavLink href="/learn-more">Learn&nbsp;More</NavLink>
        </nav>

        {/* desktop wallet button */}
        <div className="hidden md:block">
          <WalletMultiButton
            className="!bg-gradient-to-r !from-violet-600 !to-blue-500 !text-white !px-8 !py-3 !rounded-lg !font-medium !hover:from-violet-500 !hover:to-blue-400 transition-all"
          >
            Connect&nbsp;Wallet
          </WalletMultiButton>
        </div>

        {/* mobile hamburger */}
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
        >
          {open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#0c0c1c]/90 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-6">
            <NavLink href="#home" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink href="#marketplace" onClick={() => setOpen(false)}>
              Marketplace
            </NavLink>
            <NavLink href="/learn-more" onClick={() => setOpen(false)}>
              Learn&nbsp;More
            </NavLink>

            {/* mobile wallet button */}
            <WalletMultiButton
              className="!bg-gradient-to-r !from-violet-600 !to-blue-500 !text-white !px-8 !py-3 !rounded-lg !font-medium !hover:from-violet-500 !hover:to-blue-400 transition-all"
            >
              Connect&nbsp;Wallet
            </WalletMultiButton>
          </div>
        </div>
      )}
    </header>
  );
}
