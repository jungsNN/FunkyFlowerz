import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Connection as Web3Connection, PublicKey } from "@solana/web3.js";

export type Connection = {
  defaultNetwork: WalletAdapterNetwork;
  candyMachineId?: PublicKey | undefined;
  connection?: Web3Connection | undefined;
  error?: string | undefined;
  network?: WalletAdapterNetwork | undefined;
  rpcHost?: string | undefined;
  txTimeout?: number;
};
