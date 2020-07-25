import chroma from "chroma-js";

export const DRAWER_WIDTH = 350;
export const WIDTH_MD = "25%";
export const WIDTH_SM = "50%";
export const WIDTH_XS = "100%";

const isDark = (color) => chroma(color).luminance() > 0.2;

export const getVisibleColor = (props) =>
  isDark(props.color) ? "rgb(0, 0, 0, 0.8)" : "rgb(255, 255, 255, 0.9)";

export const getVisibleBackground = (props) =>
  isDark(props.color) ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.3)";
