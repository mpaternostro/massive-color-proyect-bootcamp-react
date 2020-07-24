import { DRAWER_WIDTH } from "../constants";

export default (theme) => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: "0",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: DRAWER_WIDTH,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  currentPaletteColors: {
    height: "calc(100vh - 64px)",
    margin: "0",
    padding: "0",
  },
  container: {
    margin: "0.5rem",
    display: "flex",
    flexDirection: "column",
  },
  title: {},
  buttons: {
    display: "flex",
    marginBottom: "1rem",
    "& button": {
      width: "50%",
      margin: "4px",
      padding: "8px 6px",
    },
  },
});
