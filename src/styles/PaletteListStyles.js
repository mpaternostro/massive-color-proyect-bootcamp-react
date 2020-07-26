import bg from "./bg.svg";

export default (theme) => ({
  "@global": {
    ".fade-exit": {
      opacity: "1",
    },
    ".fade-exit-active": {
      opacity: "0",
      transition: "opacity 500ms ease-in",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    overflow: "auto",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#5f34af",
    backgroundImage: `url(${bg})`,
  },
  container: {
    width: "50%",
    "@media (max-width: 1500px)": {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
    "@media (max-width: 800px)": {
      width: "85%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "65%",
    },
  },
  navigator: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: "2rem",
  },
  link: {
    color: "rgb(255, 255, 255, 0.9)",
    fontSize: "1.1rem",
  },
});
