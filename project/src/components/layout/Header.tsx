import React, { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { NavLink } from './NavLink';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-xl shadow-violet-900/10' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500" />
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
              Synero Labs
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#" isActive>
              Home
            </NavLink>
            <NavLink href="#">Marketplace</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Dashboard</NavLink>
          </nav>

          <div className="hidden md:block">
            <Button variant="outline" size="md">
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <NavLink href="#" className="py-2" isActive>
                Home
              </NavLink>
              <NavLink href="#" className="py-2">
                Marketplace
              </NavLink>
              <NavLink href="#" className="py-2">
                About
              </NavLink>
              <NavLink href="#" className="py-2">
                Dashboard
              </NavLink>
              <Button variant="outline" size="md" className="mt-2">
                Connect Wallet
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}