import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MoralisProvider } from 'react-moralis'
import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { WalletConnect } from '@web3-react/walletconnect'
import {
  coinbaseWallet,
  hooks as coinbaseWalletHooks,
} from '../WalletHelpers/connectors/coinbaseWallet'
import {
  hooks as metaMaskHooks,
  metaMask,
} from '../WalletHelpers/connectors/metaMask'
import {
  hooks as walletConnectHooks,
  walletConnect,
} from '../WalletHelpers/connectors/walletConnect'

const connectors: [
  MetaMask | WalletConnect | CoinbaseWallet,
  Web3ReactHooks,
][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
]

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider connectors={connectors}>
      {/* <MoralisProvider
        serverUrl="https://u6xwlbhg6xoa.usemoralis.com:2053/server"
        appId="iehwSINVlUUj40eYq7QCRJeSK0NMHhXU23LQafyr"
      > */}
      <Head>
        <title>Metastone</title>
        <link rel="shortcut icon" href="../favicon.ico" />
      </Head>
      <Component {...pageProps} />
      {/* </MoralisProvider> */}
    </Web3ReactProvider>
  )
}

export default MyApp
