// src/main.tsx  – FULL FILE
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';                                // your tailwind + global styles
import '@solana/wallet-adapter-react-ui/styles.css'; // ← **add / keep this line**

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
