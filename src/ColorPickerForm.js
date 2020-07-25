import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import { ChromePicker } from "react-color";
import styles from "./styles/ColorPickerFormStyles";
import { getVisibleColor } from "./constants";

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
            color: getVisibleColor(this.state),
          }}
        >
          <p>{isPaletteFull ? "Palette Full" : "Add Color"}</p>
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
