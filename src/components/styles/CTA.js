export const add = (theme) => ({
  display: "block",
  boxShadow: "2px 2px 0 0 rgba(211, 13, 29, 0.05), inset 2px 2px 0 0 #ffffff",
  border: "2px solid",
  borderColor: theme.colors.red,
  backgroundColor: theme.colors.lightRed,
  width: "10em",
  height: "2.4em",
  borderRadius: "1em",
  cursor: "pointer",
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: "1.8em",
  color: theme.colors.red,
  margin: "2.5em 0",
  "&:disabled": {
    color: theme.colors.lightGrey,
    backgroundColor: theme.colors.lightGrey3,
    borderColor: theme.colors.lightGrey3,
    cursor: "not-allowed",
    "& span": {
      color: theme.colors.green,
      fontSize: "1.3rem",
      marginLeft: ".4em",
    },
  },
  "@media (min-width: 42.5em)": {
    height: "2em",
    width: "7em",
    fontSize: "1.3em",
  },
});

export const star = () => ({
  fontWeight: "300",
  display: "block",
  lineHeight: "1",
  paddingLeft: ".5em",
});

export const remove = (theme) => ({
  position: "absolute",
  top: "10px",
  right: "0px",
  fontSize: " 3rem",
  color: theme.colors.red,
  border: "solid 0.5px #d30d1d",
  borderRadius: "30px",
  boxShadow: "2px 2px 0 0 rgba(211, 13, 29, 0.05), inset 2px 2px 0 0 #ffffff",
  width: "30px",
  height: "30px",
  textAlign: "center",
  lineHeight: "30px",
});
