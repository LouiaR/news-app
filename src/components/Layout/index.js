import React from "react";
import { createUseStyles, useTheme } from "react-jss";

import Header from "../Header";

const styles = createUseStyles((theme) => ({
  wrapper: {
    padding: "0 1.6em",
    backgroundColor: theme.colors.white,
    "@media (min-width: 42.5em)": {
      display: "flex",
      flexDirection: "row-reverse",
    },
  },
}));

const Layout = ({ children }) => {
  const theme = useTheme();
  const classes = styles({ theme });

  return (
    <>
      <Header />
      <main>
        <div className={classes.wrapper}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
