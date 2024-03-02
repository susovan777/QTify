import React from "react";
import styles from "./navbar.module.css" // module-scoped CSS
import MyLogo from "./Logo";
import SearchIcon from "../../assets/search-icon.svg";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <MyLogo />
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.textbox}
          placeholder="Search a song of your choice"
        />
        <button className={styles.searchbtn}><img src={SearchIcon} width={20} alt="Search Icon" /></button>
      </div>
      <Button value={"Give Feedback"} />
    </nav>
  );
}
