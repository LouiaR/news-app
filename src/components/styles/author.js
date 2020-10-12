export const author = (theme) => ({
  fontFamily: "goudy-old-style,serif",
  fontWeight: " 400",
  fontSize: "2.575rem",
  letterSpacing: "-.0125rem",
  marginBottom: "1rem",
  color: theme.colors.red,
  fontStyle: "italic",
  "@media (min-width: 42.5em)": {
    fontSize: "2rem",
    padding: "0 2em 0 0",
  },
});
