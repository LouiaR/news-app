import React from "react";
import { createUseStyles, useTheme } from "react-jss";

import { author, headline, remove, wrapper } from "../styles";

const styles = createUseStyles((theme) => ({
  bookmarkItem: {
    position: "relative",
    boxShadow: "inset 0 1.5px 0 0 #ebebeb",
    padding: "1em",
    "@media (min-width: 42.5em)": {
      boxShadow: "inset 0 -1.5px 0 0 #ebebeb",
    },
  },
  wrapper: {
    "@media (min-width: 42.5em)": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
    },
  },
  copyWrapper: wrapper(),
  headline: headline(),
  author: author(theme),
  cta: remove(theme),
}));

const Item = ({ article, bookmark, dispatch }) => {
  const theme = useTheme();
  const classes = styles(theme);

  const handleRemoveBookmarkedItem = (item) => {
    if (bookmark[article.id]) {
      bookmark[article.id].isMarked = false;
    }
    localStorage.setItem("bookmark", JSON.stringify({})); // Reset cache
    dispatch({ type: "UNBOOKMARK", payload: bookmark });
  };
  return (
    <div className={classes.bookmarkItem}>
      <div className={classes.wrapper}>
        <div className={classes.copyWrapper}>
          <p className={classes.author}>{article.author}</p>
          <h2 className={classes.headline}>{article.title}</h2>
        </div>
      </div>
      <span
        className={classes.cta}
        onClick={() =>
          handleRemoveBookmarkedItem({
            [article.id]: { ...article, isMarked: false },
          })
        }
      >
        &times;
      </span>
    </div>
  );
};

export default Item;
