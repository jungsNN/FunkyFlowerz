import * as anchor from "@project-serum/anchor";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { DEFAULT_TIMEOUT } from "@/utils/connection";
import AppBar from "@/components/AppBar";
import { Home, Rarity, Team } from "@/pages";
import { theme } from "@/theme/Theme.styled";
import GlobalStyles from "@/theme/Global";
import "./App.css";

require("@solana/wallet-adapter-react-ui/styles.css");

const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    return new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID!);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("Failed to construct CandyMachineId", e);
    return undefined;
  }
};

let error: string | undefined = undefined;

if (process.env.REACT_APP_SOLANA_NETWORK === undefined) {
  error =
    "Your REACT_APP_SOLANA_NETWORK value in the .env file doesn't look right! The options are devnet and mainnet-beta!";
} else if (process.env.REACT_APP_SOLANA_RPC_HOST === undefined) {
  error =
    "Your REACT_APP_SOLANA_RPC_HOST value in the .env file doesn't look right! Make sure you enter it in as a plain-text url (i.e., https://metaplex.devnet.rpcpool.com/)";
}

const candyMachineId = getCandyMachineId();
const defaultNetwork = (process.env.REACT_APP_SOLANA_NETWORK ??
  "devnet") as WalletAdapterNetwork;
const rpcHost =
  process.env.REACT_APP_SOLANA_RPC_HOST ??
  anchor.web3.clusterApiUrl(defaultNetwork);
const connection = new anchor.web3.Connection(rpcHost);

const App = () => {
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet(),
      getSolletExtensionWallet(),
    ],
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ConnectionProvider endpoint={rpcHost}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <BrowserRouter>
              <AppBar
                candyMachineId={candyMachineId}
                connection={connection}
                txTimeout={DEFAULT_TIMEOUT}
                rpcHost={rpcHost}
                network={defaultNetwork}
                error={error}
              />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="rarity" element={<Rarity />} />
                <Route path="team" element={<Team />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </BrowserRouter>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

export default App;
