import create from "zustand";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProps } from "../models/connection";
import { DEFAULT_TIMEOUT } from "../utils/connection";

type State = {
  connection: ConnectionProps;
  isMobile: boolean;
  setConnection: (data: ConnectionProps) => void;
  setIsMobile: (isMobile: boolean) => void;
};

const useStore = create<State>((set) => ({
  connection: {
    network: (process.env.REACT_APP_SOLANA_NETWORK ??
      "devnet") as WalletAdapterNetwork,
    txTimeout: DEFAULT_TIMEOUT,
  },
  isMobile: false,
  setConnection: (data: ConnectionProps) =>
    set((state) => ({ connection: (state.connection = data) })),
  setIsMobile: (isMobile: boolean) =>
    set((state) => ({ isMobile: (state.isMobile = isMobile) })),
}));

export default useStore;
