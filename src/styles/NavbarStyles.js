export default {
  Navbar: {
    height: "8vh",
    display: "flex",
    alignItems: "center",
  },
  paletteName: {
    backgroundColor: "tomato",
    padding: "0 10px",
    height: "100%",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  sliderContainer: {
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
  },
  sliderLevel: {
    marginLeft: "1rem",
  },
  slider: {
    width: "200px",
    marginLeft: "1rem",
  },
  formatSelect: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};
