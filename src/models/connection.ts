import * as anchor from "@project-serum/anchor";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { AlertState } from "../utils/candy-utils";

export type ConnectionProps = {
  network: WalletAdapterNetwork;
  txTimeout: number;
  connected?: boolean;
  candyMachineId?: anchor.web3.PublicKey | undefined;
  error?: AlertState;
};
