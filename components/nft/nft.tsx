import { useEffect, Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import styles from './nft.module.scss'
import { useWeb3React } from '@web3-react/core'
import { useMoralis } from 'react-moralis'
import { contractAddress } from '../../WalletHelpers/contractVariables'
import { Canvas } from 'react-three-fiber'
import {
  Center,
  Environment,
  Lightformer,
  OrbitControls,
  useGLTF,
} from '@react-three/drei'
import ConnectWallet from '../connectWallet/connectWallet'
import Header from '../header/header'
import Footer from '../footer/footer'
import Slider from '../slider/slider'

let currentGlb = 0
const allModels = [
  '/glb/Pear/pear noir.glb',
  '/glb/Assher/assher citrine.glb',
  '/glb/Baguette/baguette blanc.glb',
  '/glb/Emerald/emerald ametiste.glb',
  '/glb/Marquise/marquise aquamarine.glb',
  '/glb/Princess/princess noir.glb',
  '/glb/Rose/rose peridot.glb',
  '/glb/Round/round lazulli.glb',
  '/glb/Trapeze/trapeze noir.glb',
]

const Model = (props: any) => {
  let glb = useGLTF(props.model)
  return <primitive object={glb.scene} scale={1.6} />
}

const Holders: React.FC = () => {
  const context = useWeb3React<any>()
  // const { Moralis, isInitialized, initialize } = useMoralis();
  const { account, provider, chainId } = context

  // const fetchSearchNFTs = async () => {
  //   const options = {
  //     chain: "goerli",
  //     address: account,
  //     token_address: contractAddress,
  //   };

  //   const nfts = await Moralis.Web3API.account.getNFTsForContract(
  //     options as any
  //   );

  //   console.log(nfts);
  // };

  // useEffect(() => {
  //   if (isInitialized && !!account) {
  //     fetchSearchNFTs();
  //   }
  // }, [isInitialized]);

  const [model, setModel] = useState(allModels[0])

  function changeGlb(i: number) {
    if (currentGlb + i >= 0 && currentGlb + i < allModels.length) {
      currentGlb += i
      setModel(allModels[currentGlb])
    }
  }

  return (
    <div className="Wrapper">
      <Header />
      <div id="Gallery" className="demi-spacer" />

      <section className="inventory">
        <h2>Your inventory</h2>
        <p>Visualise your NFT you can freely manipulate it</p>
        <br></br>
        <div className="focus">
          <div className={styles.wrapper}>
            <a onClick={(e) => changeGlb(-1)}>back</a>
            <Canvas className={styles.canvas}>
              <OrbitControls autoRotate />
              <Suspense fallback={null}>
                <Center>
                  <Model model={model} />
                </Center>
                <Environment preset="warehouse" resolution={512} />
              </Suspense>
            </Canvas>
            <a onClick={(e) => changeGlb(1)}>next</a>
          </div>
          {/* Slider */}
          <p></p>

          <Slider></Slider>
        </div>
        <img className="lueur" src="/img/lueur.svg" alt="intro" />
      </section>

      <div className="spacer" />

      <Footer />
    </div>
  )
}

export default Holders
