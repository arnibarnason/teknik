import React from "react";
import styles from "./index.module.scss";

export const ContactForm = () => (
  <div className={`container ${styles.contactForm} has-text-centered`}>
    <h1 className="title">Hafðu samband</h1>
    <div class="field">
      {/* <label class="label">Name</label> */}
      <div class="control">
        <input class="input" type="text" placeholder="Nafn" />
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input
          //   class="input is-danger"
          class="input"
          type="email"
          placeholder="Tölvupóstfang"
        />
      </div>
      {/* <p class="help is-danger">This email is invalid</p> */}
    </div>

    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="Skilaboð"></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary">Senda</button>
      </div>
    </div>
  </div>
);
