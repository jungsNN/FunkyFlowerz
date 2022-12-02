// import { SendTransactionOptions, WalletError, WalletNotConnectedError, WalletNotReadyError, WalletReadyState } from "@solana/wallet-adapter-base";
// import { Wallet, WalletContext } from "@solana/wallet-adapter-react";
// import { Connection, PublicKey, Transaction } from "@solana/web3.js";
// import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import { Adapter } from "../models/wallet";
// import { useWalletStore } from "../hooks/useStore";

// interface WalletProviderProps {
//   children: React.ReactNode | any;
//   wallets: Adapter[]
//   autoConnect?: boolean;
//   onError?: (error: WalletError) => void;
//   walletKey?: string;
// }

// const initialState: {
//   wallet: Wallet | null
//   adapter: Adapter | null
//   publicKey: PublicKey | null
//   connected: boolean
// } = {
//   wallet: null,
//   adapter: null,
//   publicKey: null,
//   connected: false
// }

// class WalletNotSelectedError extends WalletError {
//   name = 'WalletNotSelectedError';
// }

export default function WalletProvider() {}
// export default function WalletProvider(props: WalletProviderProps) {}
//   const { autoConnect, children, onError, wallets: adapters, walletKey } = props;
//   const store = useWalletStore();
//   const [name, setName] = store.setWallet(walletKey ?? "walletName", undefined);
//   // const [name, setName] = useLocalStorageState(
//   //   localStorageKey, null
//   // )
//   const [{ wallet, adapter, publicKey, connected }, setState] = useState(initialState)
//    const readyState = adapter?.readyState || WalletReadyState.Unsupported;
//    const [connecting, setConnecting] = useState(false);
//    const [disconnecting, setDisconnecting] = useState(false);
//    const isConnecting = useRef(false);
//    const isDisconnecting = useRef(false);
//    const isUnloading = useRef(false);

//    // Wrap adapters to conform to the 'Wallet' interface
//    const [wallets, setWallets] = useState(() =>
//     adapters.map((adapter) => ({
//       adapter,
//       readyState: adapter.readyState,
//     }))
//     )
// // When the wallets change, start to listen for changes to their 'readyState'
// useEffect(() => {
//   function handleReadyStateChange(
//   this: Adapter,
//   readyState: WalletReadyState
//  ) {
//   setWallets((previous) => {
//     const walletIndex = previous.findIndex(
//       ({ adapter }) => adapter.name === this.name
//     )
//     if (walletIndex === -1) return previous

//     return [
//       ...previous.slice(0, walletIndex),
//       {
//         ...previous[walletIndex], readyState
//       },
//       ...previous.slice(walletIndex + 1),
//     ]
//   })
// }
// for (const adapter of adapters) {
//   adapter.on('readyStateChange', handleReadyStateChange, adapter)
// }
// return () => {
//   for (const adapter of adapters) {
//     adapter.off('readyStateChange', handleReadyStateChange, adapter)
//   }
// }
// }, [adapters])

// useEffect(() => console.log('name in WalletProvider.tsx ', name), [name]);

// // When the selected wallet change, initialize the state
// useEffect(() => {
//   const wallet = wallets.find(({ adapter }) => adapter
//     .name === name)
//     if (wallet) {
//       setState({
//         wallet,
//         adapter: wallet.adapter,
//         connected: wallet.adapter.connected,
//         publicKey: wallet.adapter.publicKey
//       })
//     } else {
//       setState(initialState)
//     }
// }, [name, wallets])

//   // If autoConnect is enabled, try to connect when the adapter changes and is ready
//   useEffect(() => {
//     if (
//       isConnecting.current ||
//       connecting ||
//       connected ||
//       !autoConnect ||
//       !adapter ||
//       !(
//         readyState === WalletReadyState.Installed ||
//         readyState === WalletReadyState.Loadable
//       )
//     )
//     return;

//     (async function() {
//       isConnecting.current = true;
//       setConnecting(true);
//       try {
//         await adapter.connect()
//       } catch (err) {
//         // Clear the selected wallet
//         // Don't throw error but handleError will still be called
//       } finally {
//         setConnecting(false);
//         isConnecting.current = false;
//       }
//     })()
//   }, [isConnecting, connecting, connected, autoConnect, adapter, readyState])

//   // If the window is closing or reloading, ignore disconnect and error events from the adapter
//   useEffect(() => {
//     function listener() {
//       isUnloading.current = true
//     }

//     window.addEventListener('beforeunload', listener)
//     return () => window.removeEventListener('beforeunload', listener)
//   }, [isUnloading])

//   // Handle the adapter's connect event
//   const handleConnect = useCallback(() => {
//     if (!adapter) return;

//     setState((state) => ({
//       ...state,
//       connected: adapter.connected,
//       publicKey: adapter.publicKey,
//     }))
//   }, [adapter])

//   // Handle the adapter's disconnect event
//   const handleDisconnect = useCallback(() => {
//     setState((state) => ({
//       ...state,
//       connected: false,
//       publicKey: null,
//     }))
//   }, [])

//   // Handle the adapter's error event, and local errors
//   const handleError = useCallback((
//     error: WalletError
//   ) => {
//     // Call the onError unless the window is unloading
//     if (!isUnloading.current) (onError || console.error)(error)
//     return error
//   }, [isUnloading, onError])

//   // Setup and teardown event listeners when the adapter changes
//   useEffect(() => {
//     if (adapter) {
//       adapter.on('connect', handleConnect)
//       adapter.on('disconnect', handleDisconnect)
//       adapter.on('error', handleError)
//       return () => {
//         adapter.off('connect', handleConnect)
//         adapter.off('disconnect', handleDisconnect)
//         adapter.off('error', handleError)
//       }
//     }
//   }, [adapter, handleDisconnect, handleConnect, handleError])

//   // When the adapter changes, disconnect the old one
//   useEffect(() => {
//     return () => {
//       adapter?.disconnect()
//     }
//   }, [adapter])

//   // Connect the adapter to the wallet
//   const connect = useCallback( async () => {
//     if (isConnecting.current || connecting || disconnecting || connected) return;

//     if (!adapter) throw handleError(new WalletNotSelectedError());

//     if (
//       !(
//         readyState === WalletReadyState.Installed ||
//         readyState === WalletReadyState.Loadable
//       )
//     ) {
//       if (typeof window !== 'undefined') {
//         window.open(adapter.url, '_blank');
//       }

//       throw handleError(new WalletNotReadyError())
//     }

//     isConnecting.current = true;
//     setConnecting(true)
//     await adapter.connect()
//     setConnecting(false)
//     isConnecting.current = false
//   }, [
//     isConnecting,
//     connecting,
//     disconnecting,
//     connected,
//     adapter,
//     readyState,
//     handleError,
//   ])

//   // disconnect the adapter from the wallet

//   const disconnect = useCallback(async () => {
//     if (isDisconnecting.current || disconnecting) return;
//     if (!adapter) return

//     isDisconnecting.current = true;
//     setDisconnecting(true);
//     try {
//       await adapter.disconnect()
//     } catch (err) {
//       setDisconnecting(false)
//       isDisconnecting.current = false
//       throw err
//     }
//   }, [isDisconnecting, disconnecting, adapter])

//   // Send a transaction using the provided connecting
//   const sendTransaction = useCallback(async (
//     transaction: Transaction,
//     connection: Connection,
//     options?: SendTransactionOptions
//   ) => {
//     if (!adapter) throw handleError(new WalletNotSelectedError());
//     if (!connected) throw handleError(new WalletNotConnectedError());
//     return await adapter.sendTransaction(transaction, connection, options);

//   }, [adapter, handleError, connected])

//   // Sign Tx if the wallet supports it
//   const signTransaction = useMemo(() =>
//     adapter && 'signTransaction' in adapter
//       // ? async <T extends Transaction | VersionedTransaction>(transaction: T): Promise<T> => {
//         ? async (transaction: Transaction) => {
//         if (!connected) throw handleError(new WalletNotConnectedError());
//         return await adapter.signTransaction(transaction)
//   } : undefined, [adapter, handleError, connected])

//   // Sign multiple transaction if the wallet supports it
//   const signAllTransactions = useMemo(
//     () => adapter && 'signAllTransactions' in adapter
//       // ? async <T extends Transaction | VersionedTransaction>(transactions: T[]): Promise<T[]> => {
//         ? async (transactions: Transaction[]) => {
//         if (!connected) throw handleError(new WalletNotConnectedError());
//         return await adapter.signAllTransactions(transactions);
//       } : undefined,
//       [adapter, handleError, connected]
//   )

//   // Sign an arbitrary message if supported
//   const signMessage = useMemo(
//     () => adapter && 'signMessage' in adapter
//     ? async (title: Uint8Array) => {
//       if (!connected) throw handleError(new WalletNotConnectedError());
//       return await adapter.signMessage(title)
//     } : undefined,
//     [ adapter, handleError, connected]
//   )

//   return (
//       <WalletContext.Provider
//         value={{
//           autoConnect: autoConnect ?? false,
//           wallets,
//           wallet,
//           publicKey,
//           connected,
//           connecting,
//           disconnecting,
//           select: setName,
//           connect,
//           disconnect,
//           sendTransaction,
//           // @ts-ignore
//           signTransaction,
//           // @ts-ignore
//           signAllTransactions,
//           signMessage
//         }}>
//           {children}
//         </WalletContext.Provider>
//     )
// }
