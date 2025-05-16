import React from 'react';
import { Container } from '../ui/Container';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-40 flex items-center bg-transparent"
    >
      {/* glowing background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0,rgba(109,40,217,0.4)_0,rgba(12,12,28,0)_70%)]" />

      <Container className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-500 mb-6">
          Decentralized&nbsp;AI,<br className="hidden sm:block" />
          Accelerated&nbsp;by&nbsp;Solana
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Synero Labs is the on-chain marketplace where developers, researchers, and enterprises
          buy, sell&nbsp;and deploy AI models, datasets and APIs — all in seconds and without
          middlemen.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="#marketplace"
            className="relative inline-flex items-center justify-center rounded-lg px-8 py-3 font-medium bg-gradient-to-r from-violet-600 to-blue-500 text-white hover:from-violet-500 hover:to-blue-400 transition-all"
          >
            Launch&nbsp;Marketplace
          </a>
          <a
            href="/learn-more"
            className="relative inline-flex items-center justify-center rounded-lg px-8 py-3 font-medium border border-violet-600 text-violet-300 hover:bg-violet-600/10 transition-all"
          >
            Learn&nbsp;More
          </a>
        </div>
      </Container>
    </section>
  );
}
