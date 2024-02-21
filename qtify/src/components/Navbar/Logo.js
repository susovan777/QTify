import React from "react";
import Logo from "../../assets/logo.png";
import styles from "./navbar.module.css"


const MyLogo = () => {
  return (
    <div className={styles.logoDiv}>
      <img src={Logo} alt="QTify Logo" width={70} />
    </div>
  );
};

export default MyLogo;
