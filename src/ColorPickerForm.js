import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ChromePicker } from "react-color";
import { Button, TextField } from "@material-ui/core";

const styles = (theme) => ({
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

export class ColorPickerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#fff",
      colorName: "",
      colorErrorMessage: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
      colorErrorMessage: "",
    });
  }

  handleColorChange(color) {
    this.setState({ color: color.hex, colorErrorMessage: "" });
  }

  checkColorInput() {
    function someEqualValue(palette, value, propName) {
      return palette.some(
        (color) =>
          color[propName] ===
          (value.toLowerCase() ? value.toLowerCase() : value)
      );
    }

    const { color, colorName } = this.state;
    const { paletteColors } = this.props;

    if (!colorName) return "You must specify a color name.";
    if (
      someEqualValue(paletteColors, colorName, "name") &&
      someEqualValue(paletteColors, color, "color")
    )
      return "Color name and value must be unique.";
    if (someEqualValue(paletteColors, colorName, "name"))
      return "Color name must be unique.";
    if (someEqualValue(paletteColors, color, "color"))
      return "Color value must be unique.";
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const colorErrorMessage = this.checkColorInput();
    if (colorErrorMessage) return this.setState({ colorErrorMessage });

    const { color, colorName } = this.state;
    this.props.addNewColor(color, colorName);
    this.setState({
      color: "#fff",
      colorName: "",
      colorErrorMessage: "",
    });
  }

  render() {
    const { isPaletteFull, classes } = this.props;
    const { color, colorName, colorErrorMessage } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        autoComplete="off"
        className={classes.form}
      >
        <ChromePicker
          color={color}
          onChange={this.handleColorChange}
          disableAlpha={true}
          className={classes.colorPicker}
        />
        <TextField
          className={classes.colorNameInput}
          margin="normal"
          error={Boolean(colorErrorMessage)}
          id="outlined-error-helper-text"
          label="Color name"
          name="colorName"
          helperText={colorErrorMessage}
          variant="outlined"
          value={colorName}
          onChange={this.handleChange}
        />
        <Button
          className={classes.addColorBtn}
          variant="contained"
          type="submit"
          disabled={isPaletteFull}
          style={{
            backgroundColor: isPaletteFull ? "gray" : this.state.color,
            transition: "none",
          }}
        >
          {isPaletteFull ? "Palette Full" : "Add Color"}
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
