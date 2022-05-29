import { useCallback, useEffect, useMemo, useState } from "react";
import * as anchor from "@project-serum/anchor";
import { 
  CreateNftInput, 
  Metaplex, 
  MetaplexFile, 
  mockStorage, 
  Signer, 
  walletAdapterIdentity } from "@metaplex-foundation/js-next";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import Wallet from "@project-serum/sol-wallet-adapter";
// import { Keypair } from "@solana/web3.js";

interface MintButtonProps {
  width?: string;
  color?: string;
  bg?: string;
  children?: any;
}

const providerUrl = 'https://www.phantom.app';

const MintButton = ({children, width, color, bg}: MintButtonProps) => {
  const [solanaProvider, setSolanaProvider] = useState<any>(null);
  const [pubkey, setPubkey] = useState<PublicKey | null>(null);
  const web3 = anchor.web3;
  const network = clusterApiUrl('devnet');
  const wallet = new Wallet(providerUrl, network);
  const connection = useMemo(() => new Connection(network, "recent"), [network]);
  
  // Metaplex client
  // const metaplex = useMemo(() => {
  //   if (wallet.adapter) {
  //     const mplexCli = Metaplex.make(connection.connection)
  //       // .use(guestIdentity())
  //       .use(walletAdapterIdentity(wallet.adapter))
  //       .use(mockStorage());
  //       return mplexCli;
  //   }
  //   return null;
  // }, [connection.connection, wallet.adapter]);

  useEffect(() => {

    console.log('wallet ', wallet);
    
    const { solana } = window as any;
    if (typeof solana !== 'undefined') {
      console.log('solana provider ', solana);
      setSolanaProvider(solana);
    }
    
    // const keypair = Keypair.generate();

  }, [wallet]);

  const walletText = useCallback(() => {
    if (pubkey) {
      return 'Mint';
    } else if (solanaProvider) {
      return 'Solana Connect';
    }
    return 'Get Phantom Wallet';
  }, [pubkey, wallet, solanaProvider])

  
  return (
    <button style={{ color: color ??  'white', width:width ?? '120px', height: '40px', background: bg ?? '#FFFFFF42'}}>{walletText()}</button>
  )
}

export default MintButton;
