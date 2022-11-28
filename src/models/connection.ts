import * as anchor from "@project-serum/anchor";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Connection as Web3Connection } from "@solana/web3.js";
import { AlertState } from "../utils/candy-utils";

export type ConnectionProps = {
  connection: Web3Connection | undefined;
  network: WalletAdapterNetwork;
  rpcHost: string;
  txTimeout: number;
  connected?: boolean;
  candyMachineId?: anchor.web3.PublicKey | undefined;
  error?: AlertState;
};
