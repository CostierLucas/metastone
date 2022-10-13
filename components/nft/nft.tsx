import { useEffect, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import styles from "./nft.module.scss";
import { useWeb3React } from "@web3-react/core";
import { useMoralis } from "react-moralis";
import { contractAddress } from "../../WalletHelpers/contractVariables";
import { Canvas } from "react-three-fiber";
import { Center, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import ConnectWallet from "../connectWallet/connectWallet";
import Header from "../header/header";
import Footer from "../footer/footer";

const Model = () => {
  let glb = useGLTF("/glb/rose.glb");

  return <primitive object={glb.scene} />;
};

const Holders: React.FC = () => {
  const context = useWeb3React<any>();
  // const { Moralis, isInitialized, initialize } = useMoralis();
  const { account, provider, chainId } = context;

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
            <Canvas className={styles.canvas}>
              <OrbitControls />
              <Suspense fallback={null}>
                <Center>
                  <Model />
                </Center>
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </div>
          {/* Slider */}
          <p>Write infos something here</p>
          <div className="slider double">
            <img src="/img/stones/blue.gif" alt="stone" />
            <img src="/img/stones/blue.gif" alt="stone" />
            <img src="/img/stones/blue.gif" alt="stone" />
            <img src="/img/stones/blue.gif" alt="stone" />
            <img src="/img/stones/blue.gif" alt="stone" />
          </div>
        </div>
        <img className="lueur" src="/img/lueur.svg" alt="intro" />
      </section>

      <div className="spacer" />

      <Footer />
    </div>
  );
};

export default Holders;
