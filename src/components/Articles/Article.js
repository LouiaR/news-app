import React from "react";
import { createUseStyles, useTheme } from "react-jss";

import {
  author,
  headline,
  add,
  card,
  image,
  imageWrapper,
  star,
} from "../styles";

const styles = createUseStyles((theme) => ({
  newsCard: card(),
  wrapper: {
    "@media (min-width: 68em)": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      margin: "1rem 0",
      color: theme.colors.red,
      textDecoration: "none",
    },
  },
  copyWrapper: {
    width: "100%",
    height: "100%",
  },
  headline: headline(),
  author: author(theme),
  cta: add(theme),
  imageWrapper: imageWrapper(),
  picture: image(),
  star: star(),
}));

const Article = ({
  source: { name },
  author,
  title,
  urlToImage,
  url,
  isMarked,
  dispatch,
}) => {
  const theme = useTheme();
  const classes = styles({ theme });

  const img =
    urlToImage ||
    "https://images.contentstack.io/v3/assets/blt48221813da522c96/blte02cfd94a771f211/5e3ac1a78458282f81ea6fa6/og-image.jpg"; // Use Default image if image not provided

  const heading = title || "Unknown";
  const source = author || name; // Display name of the author or site publisher

  const handleBookmark = (item) => {
    dispatch({ type: "BOOKMARK", payload: item });
  };

  return (
    <article className={classes.newsCard}>
      <div className={classes.wrapper}>
        <div className={classes.copyWrapper}>
          <p className={classes.author}>{source}</p>
          <h2 className={classes.headline}>{heading}</h2>

          <button
            disabled={isMarked}
            className={classes.cta}
            onClick={() =>
              handleBookmark({
                [url]: {
                  title: heading,
                  author: source,
                  isMarked: true,
                  id: url,
                },
              })
            }
          >
            {!isMarked ? (
              <>
                Add <span>&#9734;</span>
              </>
            ) : (
              <>
                Added <span>&#10003;</span>
              </>
            )}
          </button>
        </div>

        <div className={classes.imageWrapper}>
          <img srcSet={img} src={img} alt="pic" className={classes.picture} />
        </div>
      </div>
    </article>
  );
};

export default Article;
