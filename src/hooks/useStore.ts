import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import create from "zustand";
import { Connection } from "../models/connection";
import { DEFAULT_TIMEOUT } from "../utils/connection";

type State = {
  connection: Connection;
  isMobile: boolean;
  network: WalletAdapterNetwork;
  setConnection: (data: Connection) => void;
  setIsMobile: (isMobile: boolean) => void;
  setNetwork: (network: string) => void;
};

const useStore = create<State>((set) => ({
  connection: {
    defaultNetwork: "devnet" as WalletAdapterNetwork,
    txTimeout: DEFAULT_TIMEOUT,
  },
  isMobile: false,
  network: (process.env.REACT_APP_SOLANA_NETWORK ??
    "devnet") as WalletAdapterNetwork,
  setConnection: (data: Connection) =>
    set((state) => ({ connection: (state.connection = data) })),
  setIsMobile: (isMobile: boolean) =>
    set((state) => ({ isMobile: (state.isMobile = isMobile) })),
  setNetwork: (network: string) =>
    set((state) => ({
      network: (state.network = network as WalletAdapterNetwork),
    })),
}));

export default useStore;
