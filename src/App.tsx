import "./App.css";
import { useMemo, useState } from "react";
import * as anchor from "@project-serum/anchor";
import { DEFAULT_TIMEOUT } from "./connection";
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
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

import { createTheme, ThemeProvider } from "@material-ui/core";
import AppBar from "./components/AppBar";
import Home from "./pages/Home";
import Rarity from "./pages/Rarity";
import Team from "./pages/Team";
import useStore from "./states";

const theme = createTheme({
  palette: {
    type: "dark",
  },
  typography: {
    fontFamily: "Raleway",
  },
});

const pages: { [key: string]: JSX.Element } = {
  home: <Home />,
  rarity: <Rarity />,
  team: <Team />,
};

const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    return new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID!);
  } catch (e) {
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
  const store = useStore();
  const [currentPage, setCurrentPage] = useState("home");
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet(),
      getSolletExtensionWallet(),
    ],
    []
  );

  const handleToggleNetwork = () => {
    store.setNetwork(defaultNetwork === "devnet" ? "mainnet-beta" : "devnet");
  };

  const togglePage = (newPage: string) => {
    setCurrentPage(newPage);
  };

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={rpcHost}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
            <AppBar
              candyMachineId={candyMachineId}
              connection={connection}
              txTimeout={DEFAULT_TIMEOUT}
              rpcHost={rpcHost}
              network={defaultNetwork}
              error={error}
              togglePage={togglePage}
              toggleNetwork={handleToggleNetwork}
            />
            {pages[currentPage]}
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

export default App;
