import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

export class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy = () => {
    this.props.setCopied(this.props.color);
  };

  render() {
    return (
      <CopyToClipboard text={this.props.color} onCopy={this.handleCopy}>
        <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
          <div className="ColorBox-name">
            <p>{this.props.name}</p>
          </div>
          <div className="ColorBox-copy">
            <p>Copy</p>
          </div>
          <div className="ColorBox-options">
            <p>More</p>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
