export default {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "200px",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      cursor: "pointer",
    },
  },
  miniColorBoxes: {
    margin: "0.5rem",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(5, 20%)",
    backgroundColor: "#dae1e4",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    fontWeight: "bold",
  },
};
