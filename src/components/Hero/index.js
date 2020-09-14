import React from "react";
import styles from "./index.module.scss";

export const Hero = () => (
  <section className={`hero is-large ${styles.hasBackgroundImage}`}>
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-8-desktop is-offset-2-desktop">
            <h1 className="title is-spaced has-text-light">
              Við hjálpum þér að taka réttar ákvaðanir
            </h1>
            <h2 className="subtitle has-text-light">
              Áhersla á virðisaukandi ráðgjöf og góða þjónustu við viðskiptavini
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
);
