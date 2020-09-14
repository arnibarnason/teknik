import React from "react";
import styles from "./index.module.scss"

export const ContentCard = ({ header, children }) => (
  <div className={`card ${styles.bmCardEqualHeight}`}>
    <header className="card-header">
      <p className="card-header-title is-centered"> {header} </p>
    </header>
    <div className="card-content">
      <div className="content"> {children} </div>
    </div>
  </div>
);
