export default {
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "200px",
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
    "&:hover $delete": {
      opacity: "1",
      backgroundColor: "#f34f28",
    },
  },
  miniColorBoxes: {
    margin: "0.5rem",
    height: "100%",
    backgroundColor: "#dae1e4",
    borderRadius: "5px",
    overflow: "hidden",
  },
  miniColorBox: {
    display: "inline-block",
    width: "20%",
    height: "25%",
    marginBottom: "-4px",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    fontWeight: "bold",
  },
  delete: {
    position: "absolute",
    right: "0",
    padding: "10px",
    opacity: "0",
    color: "white",
    borderRadius: "0",
    transition: "all 0.3s ease-in-out",
  },
};
