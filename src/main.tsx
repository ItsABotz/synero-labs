import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { clusterApiUrl } from '@solana/web3.js';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

import App from './App.tsx';
import './index.css';
import '@solana/wallet-adapter-react-ui/styles.css';

// ---------------------------------------------------------------------------
// Configure the Solana connection and the list of wallets you want to support
// ---------------------------------------------------------------------------
const endpoint = clusterApiUrl('mainnet-beta');           // or "devnet"
const wallets  = [new PhantomWalletAdapter()];            // add more if desired

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <App />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  </StrictMode>
);
