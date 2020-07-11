import React, { Component } from "react";
import Navbar from "./Navbar";
import CopySuccess from "./CopySuccess";
import FormatChange from "./FormatChange";
import ColorBox from "./ColorBox";
import "./Palette.css";

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

  setCopied = (copiedColor) => {
    this.setState({ copiedSnackbar: true, copiedColor });
  };

  setColorLevel = (value) => {
    this.setState({ level: value });
  };

  setFormat = (evt) => {
    this.setState({ format: evt.target.value, formatSnackbar: true });
  };

  closeCopySuccess = (evt, reason) => {
    this.setState({ copiedSnackbar: false });
  };

  closeFormatChange = (evt, reason) => {
    this.setState({ formatSnackbar: false });
  };

  render() {
    const { paletteName, emoji, colors } = this.props.palette;
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
        color={color[this.state.format]}
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
        />
        <div className="Palette-boxes">{boxes}</div>
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
        <footer className="Palette-footer">
          <span>{paletteName}</span>
          <span className="Palette-footer-emoji">{emoji}</span>
        </footer>
      </>
    );
  }
}

export default Palette;
