import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  AppBody: {
    minHeight: "45vh",
    fontSize: "1rem",
    padding: "2em",
  },

  input: {
    marginRight: "10px",
  },

  label: {
    marginRight: "10px",
  },
});

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email" className={css(styles.label)}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            className={css(styles.input)}
          ></input>
          <label htmlFor="password" className={css(styles.label)}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            className={css(styles.input)}
          ></input>
          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
