export default (theme) => ({
  Navbar: {
    height: "75px",
    display: "flex",
    alignItems: "center",
  },
  appName: {
    backgroundColor: "tomato",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    height: "100%",
    width: "270px",
    "& h1": {
      fontSize: "2em",
      margin: "0",
    },
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    [theme.breakpoints.down("sm")]: {
      width: "160px",
      "& h1": {
        textAlign: "center",
        fontSize: "30px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      width: "110px",
      display: "flex",
      alignItems: "center",
      "& h1": {
        fontSize: "20px",
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
    [theme.breakpoints.down("sm")]: {
      width: "220px",
    },
    "@media (max-width: 500px)": {
      width: "150px",
    },
    "@media (max-width: 400px)": {
      width: "100px",
    },
  },
  formatSelect: {
    marginLeft: "auto",
    marginRight: "0.5rem",
  },
});
