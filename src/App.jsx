import { useMemo } from 'react';
import { BlogProvider } from 'src/context/Blog';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { Router } from 'src/router';
import './App.css';

export const App = () => {
  const endpoint =
    'https://late-wild-scion.solana-devnet.discover.quiknode.pro/a93715cc2505dae5b4b18e21f7c07f5d4e029978/';
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
