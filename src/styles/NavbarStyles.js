export default (theme) => ({
  Navbar: {
    height: "8vh",
    display: "flex",
    alignItems: "center",
  },
  appName: {
    backgroundColor: "tomato",
    padding: "0 10px",
    height: "100%",
    width: "270px",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.displayColorLevel ? "none" : ""),
      width: "200px",
      "& h1": {
        textAlign: "center",
        fontSize: "30px",
        margin: "0",
      },
    },
  },
  sliderContainer: {
    height: "100%",
    display: "flex",
    flex: "1",
    alignItems: "center",
    "& .rc-slider-rail": {
      height: "6px",
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-handle": {
      backgroundColor: "darkgreen",
      top: "6px",
      border: "none",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  sliderLevel: {
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0.5rem",
    },
  },
  slider: {
    width: "350px",
    marginLeft: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      width: "200px",
    },
  },
  formatSelect: {
    marginLeft: "auto",
    marginRight: "0.5rem",
  },
});
