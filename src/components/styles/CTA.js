export const add = (theme) => ({
  display: "block",
  boxShadow: "2px 2px 0 0 rgba(211, 13, 29, 0.05), inset 2px 2px 0 0 #ffffff",
  border: "2px solid",
  borderColor: theme.colors.red,
  backgroundColor: theme.colors.lightRed,
  width: "10em",
  height: "2.4em",
  borderRadius: "1em",
  margin: "4em 0",
  cursor: "pointer",
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: "1.8em",
  color: theme.colors.red,
  "&:disabled": {
    color: theme.colors.lightGrey,
    backgroundColor: theme.colors.lightGrey2,
    borderColor: theme.colors.lightGrey2,
    cursor: "not-allowed",
    "& span": {
      color: theme.colors.green,
      fontSize: "1.3rem",
      marginLeft: ".4em",
    },
  },
  "@media (min-width: 42.5em)": {
    margin: "2em 0",
    width: "8em",
    height: "2em",
  },
});

export const star = () => ({
  fontWeight: "300",
  display: "block",
  lineHeight: "1",
  paddingLeft: ".5em",
});
