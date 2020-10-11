import React from "react";
import { createUseStyles, useTheme } from "react-jss";

import Article from "./article";
import { useNewsContext } from "../lib/newsContext";

const useStyles = createUseStyles((theme) => ({
  articles: {
    "@media (min-width: 42.5em)": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      color: theme.colors.black,
    },
  },
}));

const Articles = () => {
  const {
    state: { articles },
    dispatch,
  } = useNewsContext();

  const theme = useTheme();
  const classes = useStyles({ theme });

  const allArticles = articles.map((article) => {
    return <Article key={article.url} {...article} dispatch={dispatch} />;
  });

  return <section className={classes.articles}>{allArticles}</section>;
};

export default Articles;
