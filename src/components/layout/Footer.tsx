// src/components/layout/Footer.tsx
import React from 'react';
import { Container } from '../ui/Container';
import { Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0c0c1c]">
      <Container className="flex flex-col md:flex-row items-center justify-between py-8 gap-6">
        {/* copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Synero Labs. All rights reserved.
        </p>

        {/* single social link */}
        <a
          href="https://x.com/SyneroLabs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Synero Labs on X (Twitter)"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 text-white hover:brightness-110 transition-all"
        >
          <Twitter className="w-5 h-5" />
        </a>
      </Container>
    </footer>
  );
}
