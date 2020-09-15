import React from "react";
import styles from "./index.module.css";

export const ContentSection = ({ title, img, children }) => (
  <div className={`verticalSpacing ${styles.container}`}>
    <div className={styles.wrapper}>
      <div>
        <h2>{title}</h2>
        <div className={styles.content}>{children}</div>
      </div>
      {img && <img className={styles.image} src={img} alt="pipes" />}
    </div>
  </div>
);
