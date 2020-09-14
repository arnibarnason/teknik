import React from "react";
import styles from "./index.module.css";

export const Hero = () => (
  <div className={styles.heroContainer}>
    <div className="verticalSpacing">
      <h1 className={styles.title}>Við hjálpum þér að taka réttar ákvaðanir</h1>
      <h2 className={styles.subTitle}>
        Áhersla á virðisaukandi ráðgjöf og góða þjónustu við viðskiptavini
      </h2>
    </div>
  </div>
);
