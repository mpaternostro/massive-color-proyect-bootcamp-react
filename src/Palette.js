import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import CopySuccess from "./CopySuccess";
import FormatChange from "./FormatChange";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import styles from "./styles/PaletteStyles";

export class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copiedSnackbar: false,
      copiedColor: undefined,
      level: 500,
      format: "hex",
      formatSnackbar: false,
    };

    this.setCopied = this.setCopied.bind(this);
    this.setColorLevel = this.setColorLevel.bind(this);
    this.setFormat = this.setFormat.bind(this);
    this.closeCopySuccess = this.closeCopySuccess.bind(this);
    this.closeFormatChange = this.closeFormatChange.bind(this);
  }

  setCopied(copiedColor) {
    this.setState({ copiedSnackbar: true, copiedColor });
  }

  setColorLevel(value) {
    this.setState({ level: value });
  }

  setFormat(evt) {
    this.setState({ format: evt.target.value, formatSnackbar: true });
  }

  closeCopySuccess(evt, reason) {
    this.setState({ copiedSnackbar: false });
  }

  closeFormatChange(evt, reason) {
    this.setState({ formatSnackbar: false });
  }

  render() {
    const { paletteName, emoji, id: paletteID, colors } = this.props.palette;
    const { classes } = this.props;
    const {
      copiedSnackbar,
      copiedColor,
      level,
      format,
      formatSnackbar,
    } = this.state;
    const boxes = colors[level].map((color) => (
      <ColorBox
        key={color.name}
        moreUrl={`/palette/${paletteID}/${color.id}`}
        backgroundColor={color[this.state.format]}
        name={color.name}
        setCopied={this.setCopied}
      />
    ));

    return (
      <>
        <Navbar
          level={level}
          handleColorLevel={this.setColorLevel}
          format={this.state.format}
          handleFormatChange={this.setFormat}
          displayColorLevel={true}
        />
        <div className={classes.colorBoxes}>{boxes}</div>
        {copiedSnackbar && (
          <CopySuccess
            open={copiedSnackbar}
            copiedColor={copiedColor}
            handleClose={this.closeCopySuccess}
          />
        )}
        {formatSnackbar && (
          <FormatChange
            open={formatSnackbar}
            handleClose={this.closeFormatChange}
            format={format}
          />
        )}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </>
    );
  }
}

export default withStyles(styles)(Palette);
