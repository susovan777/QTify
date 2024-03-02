import React from "react";
import styles from "./hero.module.css";
import hp from "../../assets/hero_headphones.png";

function Hero() {
    return (
        <div className={styles.heroDiv}>
            <div className={styles.heroTextDiv}>
                <h2>100 Thousand Songs, ad-free</h2>
                <h2>Over thousands podcast episodes</h2>
            </div>
            <img src={hp} alt="Headphone" width={212} height={212} />
        </div>
    )
}

export default Hero;