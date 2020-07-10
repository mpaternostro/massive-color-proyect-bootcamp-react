import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "./Alert";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./Palette.css";

export class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false,
      copiedColor: undefined,
      level: 500,
    };
    this.setCopied = this.setCopied.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleColorLevel = this.handleColorLevel.bind(this);
  }

  setCopied = (color) => {
    this.setState({ copied: true, color });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ copied: false });
  };

  handleColorLevel = (value) => {
    this.setState({ level: value });
  };

  render() {
    const { paletteName, emoji, colors } = this.props.palette;
    const { copied, copiedColor, level } = this.state;
    const name = `${paletteName} ${emoji}`;
    const boxes = colors[level].map(({ name, hex }) => (
      <ColorBox key={name} color={hex} name={name} setCopied={this.setCopied} />
    ));

    return (
      <>
        <Navbar
          name={name}
          level={level}
          handleColorLevel={this.handleColorLevel}
        />
        <div className="Palette">{boxes}</div>
        <Snackbar
          open={copied}
          autoHideDuration={3000}
          onClose={this.handleClose}
        >
          <Alert onClose={this.handleClose} severity="success">
            Copied color {copiedColor}
          </Alert>
        </Snackbar>
      </>
    );
  }
}

export default Palette;
