import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import styles from "./connectWallet.module.scss";
import Modal from "../modal/modal";

const ConnectWallet = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const context = useWeb3React<any>();
  const { connector, account } = context;

  return (
    <div className={styles.walletContainer}>
      {!account && (
        <div>
          <button
            className={styles.btnConnect}
            onClick={() => setOpenModal(!openModal)}
          >
            Connect wallet
          </button>
          {openModal && <Modal closeModal={setOpenModal} />}
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
