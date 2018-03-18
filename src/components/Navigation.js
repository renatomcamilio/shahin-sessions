import React from "react";
import pure from "../styles/PureCSS";
import Button from "./Button";

const MenuItem = ({ label, link }) => {
  return (
    <li className={pure("menu-item")}>
      <a className={pure("menu-link")} href={link} title={label}>
        {label}
      </a>
    </li>
  );
};

const styles = {
  logo: {
    "font-family": "helvetica, arial, sans-serif",
    "font-weight": "100",
    "font-size": "36px"
  }
};

export default ({ label, items }) => {
  return (
    <div className={pure("menu", "menu-horizontal")}>
      <a
        href="#"
        style={styles.logo}
        className={[pure("menu-heading", "menu-link")]}
      >
        Logo
      </a>
      <ul className={pure("menu-list")}>
        {items.map(item => <MenuItem {...item} />)}
      </ul>
      <Button label="Log In" flavour="light" />
    </div>
  );
};
