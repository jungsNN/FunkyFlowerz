import { FC, HTMLAttributes, useEffect } from "react";
import * as anchor from "@project-serum/anchor";
// import { Keypair } from "@solana/web3.js";

interface MintButtonProps {
  width?: string;
  color?: string;
  bg?: string;
  children?: any;
}
const MintButton = ({children, width, color, bg}: MintButtonProps) => {
  const web3 = anchor.web3;

  useEffect(() => {
    console.log('web3 ', web3);

    // const keypair = Keypair.generate();

  }, [web3]);

  // useEffect(() => {
  //   console.log('solana ', web3);
  //   const { ethereum } = window as any;
  //   console.log('ethereum ', ethereum);
  // }, [web3]);
  
  return (
    <button style={{ color: color ??  'white', width:width ?? '120px', height: '40px', background: bg ?? '#FFFFFF42'}}>{children}</button>
  )
}

export default MintButton;
