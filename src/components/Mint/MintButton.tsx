import { useCallback, useEffect, useMemo, useState } from "react";
// import * as anchor from "@project-serum/anchor";
import { 
  Metaplex, 
  mockStorage, 
  keypairIdentity,
  // CreateNftInput, 
  // MetaplexFile, 
  // Signer, 
 } from "@metaplex-foundation/js-next";
import { clusterApiUrl,  Connection,  Keypair,  PublicKey } from "@solana/web3.js";
import Wallet from "@project-serum/sol-wallet-adapter";

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
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  // const web3 = anchor.web3;
  const network = clusterApiUrl('devnet');
  const wallet = new Wallet(providerUrl, network);
  const connection = useMemo(() => new Connection(network, "recent"), [network]);
  
  // Metaplex client
  const metaplex = useMemo(() => {
    if (pubkey) {
      const _keypair = Keypair.fromSeed(pubkey.toBuffer());
      const mplexCli = Metaplex.make(connection)
        // .use(guestIdentity())
        // .use(wallAdapterIdentity())
        .use(keypairIdentity(_keypair))
        .use(mockStorage());
        return mplexCli;
    }
    return null;
  }, [connection, pubkey]);

  useEffect(() => {
    console.log('mplex client ', metaplex);
  }, [metaplex])

  useEffect(() => {
    console.log('wallet ', wallet);
    
    const { solana } = window as any;
    if (typeof solana !== 'undefined') {
      console.log('solana provider ', solana);
      setSolanaProvider(solana);
    }
    
    // const keypair = Keypair.generate();

  }, [wallet]);

  useEffect(() => {
    if (typeof solanaProvider?.publicKey !== 'undefined') {
      // first checking window.solana
      setPubkey(solanaProvider.publicKey)
    } else if (typeof wallet?.publicKey !== 'undefined') {
      // in case using a browser like opera which initially doesn't detect solana
      setPubkey(wallet.publicKey)
    }
  }, [solanaProvider?.publicKey, wallet?.publicKey]);

  // Solana Mint Button text
  const walletText = useCallback(() => {
    if (pubkey) {
      return 'Mint';
    } else if (solanaProvider) {
      return 'Solana Connect';
    }
    return 'Get Phantom Wallet';
  }, [pubkey, wallet, solanaProvider])

  // Connect to Solana wallet action
  const solanaConnect = useCallback(async () => {
    if (solanaProvider) {
      try {
        setIsConnecting(true);
        solanaProvider.connect();
      } catch (e) {
        console.error(e);
      } finally {
        setIsConnecting(false);
      }
    } else {
      window.open(providerUrl + '/download', '_blank');
    }
  }, [solanaProvider, setIsConnecting])

  return (
    <button 
      style={{ color: color ??  'white', width:width ?? '120px', height: '40px', background: bg ?? '#FFFFFF42'}}
      onClick={solanaConnect}
    >
        {walletText()}
    </button>
  )
}

export default MintButton;
