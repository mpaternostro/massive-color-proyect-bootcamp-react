import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import CopySuccess from "./CopySuccess";
import FormatChange from "./FormatChange";
import PaletteFooter from "./PaletteFooter";

const styles = (theme) => ({
  colorBoxes: {
    display: "flex",
    flexWrap: "wrap",
    height: "87vh",
  },
  goBack: {
    backgroundColor: "black",
    minWidth: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& a": {
      backgroundColor: "#4c5561",
      color: "white",
      textDecoration: "none",
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("md")]: {
      minWidth: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "100%",
    },
  },
});

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

  closeCopySuccess(evt, reason) {
    this.setState({ copiedSnackbar: false });
  }

  closeFormatChange(evt, reason) {
    this.setState({ formatSnackbar: false });
  }

  render() {
    const { classes, palette, shades } = this.props;
    const { paletteName, emoji, id } = palette;
    const { format, copiedColor, copiedSnackbar, formatSnackbar } = this.state;
    const boxes = shades.map((shade) => (
      <ColorBox
        key={shade.name}
        backgroundColor={shade[format]}
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
