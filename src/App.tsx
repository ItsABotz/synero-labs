import React, { useMemo } from 'react';
import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { MarketplaceSection } from './components/sections/MarketplaceSection';

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

function App() {
  /* ------- Solana wallet config ------- */
  const endpoint = useMemo(() => clusterApiUrl('mainnet-beta'), []);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Layout>
            <HeroSection />
            <AboutSection />
            <MarketplaceSection />
          </Layout>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
