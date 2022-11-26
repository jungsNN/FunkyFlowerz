import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import create from "zustand";

type State = {
  isMobile: boolean;
  network: WalletAdapterNetwork;
  setIsMobile: (isMobile: boolean) => void;
  setNetwork: (network: string) => void;
};

const useStore = create<State>((set) => ({
  isMobile: false,
  network: (process.env.REACT_APP_SOLANA_NETWORK ??
    "devnet") as WalletAdapterNetwork,
  setIsMobile: (isMobile: boolean) =>
    set((state) => ({ isMobile: (state.isMobile = isMobile) })),
  setNetwork: (network: string) =>
    set((state) => ({
      network: (state.network = network as WalletAdapterNetwork),
    })),
}));

export default useStore;
