import React from "react";
import Logo from "../../assets/logo.png";
import "./navbar.css"


const MyLogo = () => {
  return (
    <div className="logoDiv">
      <img src={Logo} alt="QTify Logo" width={70} />
    </div>
  );
};

export default MyLogo;
