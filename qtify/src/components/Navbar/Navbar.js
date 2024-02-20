import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search-icon.svg";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="QTify Logo" width={70} />
      <div className="searchBox">
        <input
          type="text"
          className="textbox"
          placeholder="Search a song of your choice"
        />
        <button className="searchbtn"><img src={SearchIcon} width={20} alt="Search Icon" /></button>
      </div>
      <Button value={"Give Feedback"} />
    </nav>
  );
}
