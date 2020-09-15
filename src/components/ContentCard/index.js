import React from "react";
import styles from "./index.module.css";

export const ContentCard = ({ title, children }) => (
  <div className={styles.container}>
    <div className={styles.cardWrapper}>
      <h3>{title}</h3>
      <div className={styles.content}>{children}</div>
    </div>
  </div>
);
