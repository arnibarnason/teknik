import React from "react";
import styles from "./index.module.css";
// import logo from "../../logo.svg";

export const Menu = () => (
  <header className={styles.container}>
    <div className={`${styles.wrapper} verticalSpacing`}>
      {/* <img src={logo} className={styles.logo} alt="logo" /> */}
      <h2 className={styles.logoTitle}>TEKNIK.</h2>
      <div>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Um fyrirtækið
        </a>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Þjónusta
        </a>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Starfsmenn
        </a>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hafðu samband
        </a>
      </div>
    </div>
  </header>
);
