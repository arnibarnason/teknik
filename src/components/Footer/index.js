import React from "react";
import styles from "./index.module.css";

export const Footer = () => (
  <footer className="footer has-background-dark">
    <div className={`container ${styles.footerContainer}`}>
      <div className="content  has-text-white">
        <div className={`columns  ${styles.columns}`}>
          <div className="column is-narrow">
            <p>
              Lyngháls 7
              <br />
              110 Reykjavik
              <br />
              Ísland
            </p>
          </div>
          <div className="column is-narrow ">
            <p>
              +354-588-5522
              <br />
              teknik@teknik.is
              <br />
              Kt: 2001852189
            </p>
          </div>
          <div className="column is-narrow ">
            <p>
              Opnunartími:
              <br />
              mán.-fös. 8:00-16:00
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
