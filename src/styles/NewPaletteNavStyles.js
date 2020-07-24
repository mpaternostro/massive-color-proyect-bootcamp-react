import { DRAWER_WIDTH } from "../constants";

export default (theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  paletteButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("")]: {
      marginRight: theme.spacing(1),
    },
  },
  hide: {
    display: "none",
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
      height: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1rem",
    },
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  buttons: {
    "& button": {
      marginRight: theme.spacing(2),
      width: "100px",
      [theme.breakpoints.down("xs")]: {
        marginRight: theme.spacing(1),
        width: "80px",
      },
    },
  },
  goBack: {
    textDecoration: "none",
    color: "inherit",
    "& button": {
      [theme.breakpoints.down("xs")]: {
        padding: "0",
      },
    },
  },
});
