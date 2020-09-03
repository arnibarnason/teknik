import React from "react";
import styles from "./index.module.css";

export const Footer = () => (
  <div className={styles.footerContainer}>
    <div className={styles.content}>
      <p className={`verticalSpacing ${styles.contactLabel}`}>Hafðu samband:</p>
      <p></p>
      <a
        className={`verticalSpacing ${styles.emailAddress}`}
        href="mailto:teknik@teknik.is"
      >
        teknik@teknik.is
      </a>
    </div>
  </div>
);
