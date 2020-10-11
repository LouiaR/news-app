export const card = () => ({
  padding: "4em 0",
  boxShadow: "inset 0 1.5px 0 0 #ebebeb",
  margin: "1rem 0",
  "&:hover": {
    opacity: " 0.8",
  },
  "@media (min-width: 68em)": {
    display: "flex",
    width: " calc(33.3333% - 2rem)",
    boxShadow: "inset 0 -1.5px 0 0 #ebebeb",
    margin: "0 1rem",
  },
});
