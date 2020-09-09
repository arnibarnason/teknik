import React from "react";
import styles from "./index.module.css";

export const ContentSection = ({ title, children }) => (
  <div className={`verticalSpacing ${styles.container}`}>
    <h2>{title}</h2>
    <div className={styles.content}>{children}</div>
  </div>
);
