import { widthMd, widthXs } from "./ColorBoxStyles";

export default (theme) => ({
  colorBoxes: {
    display: "flex",
    flexWrap: "wrap",
    height: "87vh",
  },
  goBack: {
    backgroundColor: "black",
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& a": {
      backgroundColor: "#4c5561",
      color: "white",
      textDecoration: "none",
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("md")]: {
      width: widthMd,
    },
    [theme.breakpoints.down("xs")]: {
      width: widthXs,
    },
  },
});
