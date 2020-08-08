import { getVisibleColor } from "../constants";

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
  },
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
    },
  },
  name: {
    fontSize: "12px",
    letterSpacing: "1px",
    padding: "12px",
    color: getVisibleColor,
    textTransform: "uppercase",
  },
  deleteButton: {
    [theme.breakpoints.down("xs")]: {
      padding: "6px",
    },
  },
  delete: {
    color: getVisibleColor,
  },
});
