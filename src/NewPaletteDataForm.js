import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { PalettesContext } from "./contexts/palettes.context";

export class NewPaletteDataForm extends Component {
  static contextType = PalettesContext;
  constructor(props) {
    super(props);

    this.state = {
      stage: "pickName",
      paletteName: "",
      paletteNameErrorMessage: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addPalette = this.addPalette.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
      paletteNameErrorMessage: "",
    });
  }

  checkPaletteName(paletteName) {
    if (!paletteName) return "You must specify a Palette name.";

    if (
      this.context.palettes.some(
        (palette) =>
          palette.paletteName.toLowerCase() === paletteName.toLowerCase()
      )
    )
      return "Palette name must be unique.";
  }

  handleSubmit(evt, paletteName) {
    evt.preventDefault();
    const paletteNameErrorMessage = this.checkPaletteName(paletteName);
    if (paletteNameErrorMessage)
      return this.setState({ paletteNameErrorMessage });

    this.setState({ stage: "pickEmoji" });
  }

  addPalette(emoji) {
    const newPalette = {
      paletteName: this.state.paletteName,
      emoji: emoji.native,
    };
    this.props.handleAddPalette(newPalette);
    this.setState({ stage: "" });
  }

  render() {
    const { handleClose } = this.props;
    const { stage, paletteName, paletteNameErrorMessage } = this.state;
    return (
      <div>
        <Dialog
          open={stage === "pickEmoji"}
          onClose={handleClose}
          aria-labelledby="emoji-dialog-title"
        >
          <DialogTitle id="emoji-dialog-title">Pick an emoji</DialogTitle>
          <Picker onSelect={this.addPalette} />
        </Dialog>
        <Dialog
          open={stage === "pickName"}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette Name
          </DialogTitle>
          <form onSubmit={(evt) => this.handleSubmit(evt, paletteName)}>
            <DialogContent>
              <DialogContentText>
                Please enter an unique name for your custom Palette.
              </DialogContentText>
              <TextField
                error={Boolean(paletteNameErrorMessage)}
                id="outlined-error-helper-text"
                label="Palette name"
                name="paletteName"
                helperText={paletteNameErrorMessage}
                variant="outlined"
                value={paletteName}
                onChange={this.handleChange}
                autoFocus
                autoComplete="off"
                margin="normal"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Next Step
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default NewPaletteDataForm;
