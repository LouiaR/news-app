export const lineWrapper = () => ({
  "@media (min-width: 42.5em)": {
    padding: "4em 0 0",
  },
});

export const line1 = (theme) => ({
  backgroundColor: theme.colors.red,
  minWidth: "15.1em",
  height: "3px",
});

export const line2 = (theme) => ({
  backgroundColor: theme.colors.lightRed,
  minWidth: "15.1em",
  height: "1px",
  marginTop: "1em",
});
