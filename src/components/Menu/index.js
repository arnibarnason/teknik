import React from "react";
import styles from "./index.module.css";
import logo from "../../logo.svg";

export const Menu = () => (
  <header className={styles.container}>
    <div className={`${styles.wrapper} grid_container`}>
      <img src={logo} className={styles.logo} alt="logo" />
      <div>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Um okkur
        </a>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Verkefni
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
