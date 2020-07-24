import chroma from "chroma-js";
import { WIDTH_MD, WIDTH_SM, WIDTH_XS } from "../constants";

const isDark = (color) => chroma(color).luminance() > 0.2;

const getVisibleColor = (props) =>
  isDark(props.backgroundColor)
    ? "rgb(0, 0, 0, 0.8)"
    : "rgb(255, 255, 255, 0.9)";

const getVisibleBackground = (props) =>
  isDark(props.backgroundColor)
    ? "rgba(0, 0, 0, 0.1)"
    : "rgba(255, 255, 255, 0.3)";

export default (theme) => ({
  ColorBox: {
    backgroundColor: (props) => props.backgroundColor,
    color: getVisibleColor,
    display: "flex",
    width: "20%",
    "& div": {
      maxWidth: "calc(100% / 3)",
    },
    "& p": {
      margin: "0",
      padding: "10px",
      fontSize: "12px",
      textTransform: "uppercase",
      fontWeight: "500",
      letterSpacing: "1px",
      whiteSpace: "nowrap",
    },
    "&:hover $copyColor": {
      opacity: "1",
    },
    [theme.breakpoints.down("md")]: {
      width: (props) => (props.moreUrl ? WIDTH_MD : "20%"),
      minHeight: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      width: () => WIDTH_SM,
      minHeight: "10%",
    },
    [theme.breakpoints.down("xs")]: {
      width: () => WIDTH_XS,
      minHeight: "5%",
    },
  },
  copyColor: {
    display: "flex",
    justifyContent: "center",
    flex: "1",
    textAlign: "center",
    alignSelf: "center",
    opacity: "0",
    transition: "opacity 0.5s",
    "& p": {
      width: "fit-content",
      backgroundColor: getVisibleBackground,
      padding: "10px",
      margin: "0",
    },
  },
  colorName: {
    flex: "1",
    alignSelf: "flex-end",
  },
  moreColors: {
    flex: "1",
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },
    "& p": {
      width: "fit-content",
      backgroundColor: getVisibleBackground,
    },
  },
});
