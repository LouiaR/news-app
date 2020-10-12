import React from "react";
import { createUseStyles, useTheme } from "react-jss";

import BookmarkItem from "./Item";
import { useNewsContext } from "../lib/newsContext";
import { author, headline, lineWrapper, line1, line2 } from "../styles";

const styles = createUseStyles((theme) => ({
  bookmark: {
    display: "block",
    "@media (min-width: 42.5em)": {
      width: "25%",
    },
  },
  section: {
    padding: "1.6em 0",
    backgroundColor: theme.colors.white,
  },
  description: {
    color: theme.colors.lightGrey2,
    fontSize: "2rem",
  },
  author: author(theme),
  headline: headline(),
  lineWrapper: lineWrapper(),
  line1: line1(theme),
  line2: line2(theme),
}));

const BookmarkList = () => {
  const theme = useTheme();
  const classes = styles(theme);
  const {
    state: { bookmark },
    dispatch,
  } = useNewsContext();
  const bookmarkedArticles = Object.keys(bookmark).map((el) => ({
    ...bookmark[el],
    id: el,
  }));

  return (
    <div className={classes.bookmark}>
      <div className={classes.lineWrapper}>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line2}></div>
      </div>
      <div className={classes.section}>
        <div className={classes.description}>
          Articles you bookmark will be added to this list
        </div>
        {bookmarkedArticles.map(
          (article) =>
            article.isMarked && ( // Check isMarked field
              <BookmarkItem
                article={article}
                key={article.id}
                bookmark={bookmark}
                dispatch={dispatch}
                id={article.id}
              />
            )
        )}
      </div>
    </div>
  );
};

export default BookmarkList;
