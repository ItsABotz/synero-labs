import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { NavLink } from './NavLink';
import { useWallet } from '@solana/wallet-adapter-react';
import { truncate } from '../../utils/truncate';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { publicKey, connect, disconnect } = useWallet();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const walletLabel = publicKey
    ? truncate(publicKey.toBase58())
    : 'Connect Wallet';

  const handleWalletAction = () => {
    if (publicKey) disconnect();
    else connect().catch(console.error);
  };

  return (
    <header
      className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${isScrolled
        ? 'bg-black/80 backdrop-blur-md py-3 shadow-xl shadow-violet-900/10'
        : 'bg-transparent py-5'}\`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* --- Desktop nav ------------------------------------------------ */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about.html">About</NavLink>
            <NavLink href="#" className="opacity-40 cursor-not-allowed">
              Dashboard
            </NavLink>

            <Button
              variant="outline"
              size="md"
              onClick={handleWalletAction}
              className="ml-4"
            >
              {walletLabel}
            </Button>
          </nav>

          {/* --- Mobile hamburger ----------------------------------------- */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* --- Mobile slide-down menu ------------------------------------- */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col gap-2">
              <NavLink href="/" className="py-2">
                Home
              </NavLink>
              <NavLink href="/about.html" className="py-2">
                About
              </NavLink>
              <NavLink href="#" className="py-2 opacity-40 cursor-not-allowed">
                Dashboard
              </NavLink>
              <Button
                variant="outline"
                size="md"
                className="mt-2"
                onClick={handleWalletAction}
              >
                {walletLabel}
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
