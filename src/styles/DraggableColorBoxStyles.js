export default (theme) => ({
  root: {
    backgroundColor: (props) => props.color,
    width: "20%",
    height: "25%",
    display: "inline-block",
    [theme.breakpoints.down("md")]: {
      width: "25%",
      height: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      height: "10%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "5%",
    },
    "&:hover $delete": {
      transform: "scale(1.4)",
    },
  },
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  name: {
    fontSize: "12px",
    letterSpacing: "1px",
    padding: "12px",
    color: "rgba(0, 0, 0, 0.8)",
    textTransform: "uppercase",
  },
  delete: {
    transition: "all 0.3s ease-in-out",
  },
});
