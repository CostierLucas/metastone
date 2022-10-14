import ConnectWallet from '../../components/connectWallet/connectWallet'
import Header from '../../components/header/header'
import styles from './mint.module.scss'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import {
  contractAddress,
  targetChainId,
} from '../../WalletHelpers/contractVariables'
import { ethers } from 'ethers'
import ContractAbi from '../../WalletHelpers/contractAbi.json'
import { TailSpin } from 'react-loader-spinner'
import tokens from '../../tokens.json'
import { MerkleTree } from 'merkletreejs'
import keccak256 from 'keccak256'

const Mint: React.FC = () => {
  const context = useWeb3React<any>()
  const { account, provider, chainId } = context
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [count, setCounter] = useState<number>(1)
  const [sellingStep, setSellingStep] = useState<string>()
  const [sellingStepNumber, setSellingStepNumber] = useState<number>(0)
  const [BNWlSalePrice, setBNWlSalePrice] = useState<ethers.BigNumber | null>(
    null,
  )
  const [wlSalePrice, setWlSalePrice] = useState<number>(0)
  const [
    BNPublicSalePrice,
    setBNPublicSalePrice,
  ] = useState<ethers.BigNumber | null>()
  const [publicSalePrice, setPublicSalePrice] = useState<number>(0)
  const [currentPrice, setCurrentPrice] = useState<number>(0)
  const [totalSupply, setTotalSupply] = useState(null)
  const [isMinting, setIsMinting] = useState(false)

  const addOne = () => {
    if (count < 10) {
      setCounter(count + 1)
    }
  }

  const removeOne = () => {
    if (count > 1) {
      setCounter(count - 1)
    }
  }

  useEffect(() => {
    if (!!provider && chainId == targetChainId && !!account) {
      getDatas()
    }
  }, [provider, chainId])

  const getDatas = async () => {
    setIsLoading(true)
    const getSigner = provider.getSigner()
    const contract = new ethers.Contract(
      contractAddress,
      ContractAbi.abi,
      getSigner,
    )

    const sellingStep = await contract.sellingStep()

    let wlSalePrice = await contract.wlSalePrice()
    let wlSalePriceBN = ethers.BigNumber.from(wlSalePrice._hex)
    wlSalePrice = ethers.utils.formatEther(wlSalePriceBN)

    let publicSalePrice = await contract.publicSalePrice()
    let publicSalePriceBN = ethers.BigNumber.from(publicSalePrice._hex)
    publicSalePrice = ethers.utils.formatEther(publicSalePriceBN)

    let totalSupply = await contract.totalSupply()
    totalSupply = totalSupply.toString()

    switch (sellingStep) {
      case 0:
        setSellingStep('Not started')
        break
      case 1:
        setSellingStep('Whitelist Sale')
        setCurrentPrice(wlSalePrice)
        break
      case 2:
        setSellingStep('Public Sale')
        setCurrentPrice(publicSalePrice)
        break
      case 3:
        setSellingStep('Sold Out')
        break
      default:
        setSellingStep('Not started')
        break
    }

    setBNPublicSalePrice(publicSalePriceBN)
    setWlSalePrice(wlSalePrice)
    setPublicSalePrice(publicSalePrice)
    setTotalSupply(totalSupply)
    setBNWlSalePrice(wlSalePriceBN)
    setSellingStepNumber(sellingStep)
    setIsLoading(false)
  }

  const whitelistMint = async () => {
    setIsMinting(true)
    const signer = provider.getSigner()

    const contract = new ethers.Contract(
      contractAddress,
      ContractAbi.abi,
      signer,
    )

    let tab: string[] = []
    tokens.map((token) => {
      tab.push(token.address)
    })
    let leaves = tab.map((address) => keccak256(address))
    let tree = new MerkleTree(leaves, keccak256, { sort: true })
    let leaf = keccak256(account as string)
    let proof = tree.getHexProof(leaf)

    let overrides = {
      value: BNWlSalePrice?.mul(count),
    }

    try {
      let transaction = await contract.whitelistMint(1, proof, overrides)
      await transaction.wait()
      setIsMinting(false)
      toast.success('Minting success')
    } catch (e) {
      setIsMinting(false)
      handleError(e.reason)
    }
  }

  const publicMint = async () => {
    setIsMinting(true)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(
      contractAddress,
      ContractAbi.abi,
      signer,
    )

    let overrides = {
      value: BNPublicSalePrice?.mul(count),
    }

    try {
      let transaction = await contract.publicMint(count, overrides)
      await transaction.wait()
      setIsMinting(false)
      getDatas()
      toast.success('Minting success')
    } catch (e) {
      setIsMinting(false)
      handleError(e.reason)
    }
  }

  const handleError = (error: string) => {
    switch (error) {
      case 'execution reverted: Not whitelisted':
        toast.error('You are not whitelisted.')
        break
      case 'insufficient funds for intrinsic transaction cost':
        toast.error("You don't have enought ether to buy this token.")
        break
      case 'execution reverted: You can only get 1 NFT on the Whitelist Sale':
        toast.error('You can only get 2 NFT on the Whitelist Sale')
        break
    }
  }

  return (
    <div className={styles.wrapper}>
      <ToastContainer position="bottom-left" />
      <img className={styles.lueur} src="/img/lueur.svg" alt="intro" />
      <Header />
      <section className={styles.mint}>
        {account && (
          <div className={styles.mintContainer}>
            {isLoading ? (
              <div className={styles.progress}>
                <TailSpin color="#000" />
              </div>
            ) : (
              <>
                <div className={styles.address}>
                  <div>
                    <p>{sellingStep}</p>
                  </div>
                  <div>
                    <p>
                      Wallet :
                      {`  ${account.substring(0, 6)}...${account.substring(
                        account.length - 4,
                      )}`}
                    </p>
                  </div>
                </div>
                <hr />
                <div className={styles.counter}>
                  <button onClick={() => removeOne()}>-</button>
                  <div>{count}</div>
                  <button onClick={() => addOne()}>+</button>
                </div>
                <div className={styles.price}>
                  <p>
                    {(count * currentPrice).toFixed(3)} ETH <br />
                    <span>+ gas fees </span>
                  </p>
                </div>
                <hr />
                <div className={styles.mintButton}>
                  {sellingStepNumber === 3 ? (
                    <p className={styles.soldOut}>Sold out</p>
                  ) : (
                    <button
                      type="button"
                      onClick={
                        sellingStepNumber === 1
                          ? () => whitelistMint()
                          : () => publicMint()
                      }
                      disabled={sellingStepNumber === 0 ? true : false}
                    >
                      {isMinting ? (
                        <TailSpin width={20} color="#000" />
                      ) : (
                        'Mint now'
                      )}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        )}
        <ConnectWallet />
      </section>
    </div>
  )
}

export default Mint
