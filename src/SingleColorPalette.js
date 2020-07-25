import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import CopySuccess from "./CopySuccess";
import FormatChange from "./FormatChange";
import PaletteFooter from "./PaletteFooter";
import styles from "./styles/PaletteStyles";

export class SingleColorPalette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      format: "hex",
      copiedColor: undefined,
      copiedSnackbar: false,
      formatSnackbar: false,
    };
    this.setCopied = this.setCopied.bind(this);
    this.setFormat = this.setFormat.bind(this);
    this.closeCopySuccess = this.closeCopySuccess.bind(this);
    this.closeFormatChange = this.closeFormatChange.bind(this);
  }

  setCopied(copiedColor) {
    this.setState({ copiedSnackbar: true, copiedColor });
  }

  setFormat(evt) {
    this.setState({ format: evt.target.value, formatSnackbar: true });
  }

  closeCopySuccess() {
    this.setState({ copiedSnackbar: false });
  }

  closeFormatChange() {
    this.setState({ formatSnackbar: false });
  }

  render() {
    const { classes, paletteName, emoji, id, shades } = this.props;
    const { format, copiedColor, copiedSnackbar, formatSnackbar } = this.state;
    const boxes = shades.map((shade) => (
      <ColorBox
        key={shade.name}
        color={shade[format]}
        name={shade.name}
        setCopied={this.setCopied}
        moreUrl={false}
      />
    ));

    return (
      <>
        <Navbar
          format={this.state.format}
          handleFormatChange={this.setFormat}
          displayColorLevel={false}
        />
        <div>
          <div className={classes.colorBoxes}>
            {boxes}
            <div className={classes.goBack}>
              <Link to={`/palette/${id}`}>Go Back</Link>
            </div>
          </div>
        </div>
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

export default withStyles(styles)(SingleColorPalette);
