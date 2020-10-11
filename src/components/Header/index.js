import React from "react";
import { createUseStyles, useTheme } from "react-jss";

import { ReactComponent as Logo } from "./logo.svg";

const styles = createUseStyles((theme) => ({
  wrapper: {
    minWidth: "var(--small-screen)",
    height: "8.4em",
    textAlign: "center",
    margin: "0 auto",
    boxShadow: "inset 0 -0.5px 0 0 #ebebeb",
    backgroundColor: theme.colors.white,
  },
  link: {
    padding: "2.8em 1.8em 2.8em 1.85em",
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    fill: theme.colors.red,
    width: "15.35em",
    height: "3em",
    "@media screen and (min-width: 680px)": {
      width: "18.35em",
      height: "3.5em",
    },
  },
}));

const Header = () => {
  const theme = useTheme();
  const classes = styles({ theme });

  return (
    <header>
      <div className={classes.wrapper}>
        <a href="/" className={classes.link}>
          <Logo className={classes.logo} />
        </a>
      </div>
    </header>
  );
};

export default Header;
