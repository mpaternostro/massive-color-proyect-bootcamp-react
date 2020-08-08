export default (theme) => ({
  currentPaletteColors: {
    height: "calc(100vh - 64px)",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("xs")]: {
      height: "calc(100vh - 56px)",
    },
  },
});
