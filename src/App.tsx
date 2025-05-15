import React from 'react';
import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { MarketplaceSection } from './components/sections/MarketplaceSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <MarketplaceSection />
    </Layout>
  );
}

export default App;