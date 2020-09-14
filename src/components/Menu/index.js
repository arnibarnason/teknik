import React from "react";
import styles from "./index.module.css";

export function Menu() {
  const [isActive, setisActive] = React.useState(false);
  return (
    <nav
      // class="navbar is-fixed-top is-transparent"
      class="navbar "
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <text className="is-size-3 px-6 has-text-primary">TEKNIK.</text>
          {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> */}
        </a>

        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          aria-label="menu"
          aria-expanded="false"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu is-transparent ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <NavbarItem text="fyrirtækið" />
          <NavbarItem text="þjónusta" />
          <NavbarItem text="hafðu samband" />
        </div>
      </div>
    </nav>
  );
}

const NavbarItem = (props) => (
  <a className="navbar-item has-text-primary"> {props.text} </a>
);
