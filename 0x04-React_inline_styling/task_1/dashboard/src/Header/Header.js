import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  AppHeader: {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    paddingTop: "20px",
    position: "absolute",
    top: 0,
    left: 0,
  },

  AppLogo: {
    width: "200px",
    height: "200px",
  },
});

function Header() {
  return (
    <>
      <header className={css(styles.AppHeader)}>
        <img
          src={logo}
          className={css(styles.AppLogo)}
          alt="Holberton School Logo"
        />
        <h1>School dashboard</h1>
      </header>
    </>
  );
}

export default Header;
