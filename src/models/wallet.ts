import {
  MessageSignerWalletAdapter,
  SignerWalletAdapter,
  WalletAdapter,
} from "@solana/wallet-adapter-base";

export type Adapter =
  | WalletAdapter
  | SignerWalletAdapter
  | MessageSignerWalletAdapter;

export enum WalletAdapterNetwork {
  Mainnet = "mainnet-beta",
  Testnet = "testnet",
  Devnet = "devnet",
  Local = "localhost",
}

export type WalletSigner = Pick<
  WalletAdapter,
  any
  //'sign' | 'signMessage' | 'signTransaction'
  // 'publicKey' | 'signTransaction' | 'signAllTransactions'
>;
