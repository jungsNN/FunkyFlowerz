import * as anchor from "@project-serum/anchor";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useCallback, useEffect, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { clusterApiUrl } from "@solana/web3.js";
import {
  getLedgerWallet,
  getPhantomWallet,
  getSafePalWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
  getSolongWallet,
} from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { AppBar } from "./components";
import { DEFAULT_TIMEOUT } from "./utils/connection";
import { Home, Rarity, Team } from "./pages";
import GlobalStyles from "./theme/Global";
import { theme } from "./theme/Theme.styled";
import { useStore, useWindowSize } from "./hooks";
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
const network = (process.env.REACT_APP_SOLANA_NETWORK ??
  "devnet") as WalletAdapterNetwork;
const rpcHost =
  process.env.REACT_APP_SOLANA_RPC_HOST ?? anchor.web3.clusterApiUrl("devnet");
const connection = new anchor.web3.Connection(rpcHost);

const App = () => {
  const store = useStore();
  const windowWidth = useWindowSize();
  useEffect(() => {
    if (window && typeof window !== "undefined") {
      store.setIsMobile((windowWidth.width ?? window.innerWidth) <= 480);
    }
  }, [windowWidth.width]);

  const isMobile = useCallback(() => useStore.getState().isMobile, []);
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
      getSolongWallet(),
      getLedgerWallet(),
      getSafePalWallet(),
    ],
    [network]
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <AppBar
                candyMachineId={candyMachineId}
                connection={connection}
                isMobile={isMobile()}
                txTimeout={DEFAULT_TIMEOUT}
                rpcHost={rpcHost}
                network={network}
                error={
                  error
                    ? {
                        hideDuration: error ? 6000 : undefined,
                        message: error,
                        open: !!error,
                        severity: error ? "info" : undefined,
                      }
                    : undefined
                }
              />
              <Routes>
                <Route path="/" element={<Home isMobile={isMobile()} />} />
                <Route path="rarity" element={<Rarity />} />
                <Route path="team" element={<Team />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
