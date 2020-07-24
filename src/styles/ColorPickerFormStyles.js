export default (theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  colorPicker: {
    width: "90% !important",
    "& input, span": {
      fontFamily: "Roboto, sans-serif",
    },
  },
  colorNameInput: {
    width: "90%",
  },
  addColorBtn: {
    width: "90%",
    height: "4rem",
    fontSize: "1.5rem",
  },
});
