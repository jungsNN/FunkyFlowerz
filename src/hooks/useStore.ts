import * as anchor from "@project-serum/anchor";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import create from "zustand";
import { ConnectionProps } from "../models/connection";
import { DEFAULT_TIMEOUT } from "../utils/connection";

const rpcHost =
  process.env.REACT_APP_SOLANA_RPC_HOST ?? anchor.web3.clusterApiUrl("devnet");

type State = {
  connection: ConnectionProps;
  isMobile: boolean;
  network: WalletAdapterNetwork;
  setConnection: (data: ConnectionProps) => void;
  setIsMobile: (isMobile: boolean) => void;
  setNetwork: (network: string) => void;
};

const useStore = create<State>((set) => ({
  connection: {
    connection: new anchor.web3.Connection(rpcHost),
    network: (process.env.REACT_APP_SOLANA_NETWORK ??
      "devnet") as WalletAdapterNetwork,
    rpcHost: rpcHost,
    txTimeout: DEFAULT_TIMEOUT,
  },
  isMobile: false,
  network: (process.env.REACT_APP_SOLANA_NETWORK ??
    "devnet") as WalletAdapterNetwork,
  setConnection: (data: ConnectionProps) =>
    set((state) => ({ connection: (state.connection = data) })),
  setIsMobile: (isMobile: boolean) =>
    set((state) => ({ isMobile: (state.isMobile = isMobile) })),
  setNetwork: (network: string) =>
    set((state) => ({
      network: (state.network = network as WalletAdapterNetwork),
    })),
}));

export default useStore;
