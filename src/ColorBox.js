import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/core/styles";

const isDark = (color) => chroma(color).luminance() > 0.2;

const getVisibleColor = (props) =>
  isDark(props.backgroundColor)
    ? "rgb(0, 0, 0, 0.8)"
    : "rgb(255, 255, 255, 0.9)";

const getVisibleBackground = (props) =>
  isDark(props.backgroundColor)
    ? "rgba(0, 0, 0, 0.1)"
    : "rgba(255, 255, 255, 0.3)";

const styles = (theme) => ({
  ColorBox: {
    backgroundColor: (props) => props.backgroundColor,
    color: getVisibleColor,
    display: "flex",
    flex: "1",
    minWidth: "20%",
    minHeight: "42px",
    "& div": {
      maxWidth: "calc(100% / 3)",
    },
    "& p": {
      margin: "0",
      padding: "10px",
      fontSize: "12px",
      textTransform: "uppercase",
      fontWeight: "500",
      letterSpacing: "1px",
      whiteSpace: "nowrap",
    },
    "&:hover $copyColor": {
      opacity: "1",
    },
    [theme.breakpoints.down("md")]: {
      minWidth: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "100%",
    },
  },
  copyColor: {
    display: "flex",
    justifyContent: "center",
    flex: "1",
    textAlign: "center",
    alignSelf: "center",
    opacity: "0",
    transition: "opacity 0.5s",
    "& p": {
      width: "fit-content",
      backgroundColor: getVisibleBackground,
      padding: "10px",
      margin: "0",
    },
  },
  colorName: {
    flex: "1",
    alignSelf: "flex-end",
  },
  moreColors: {
    flex: "1",
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },
    "& p": {
      width: "fit-content",
      backgroundColor: getVisibleBackground,
    },
  },
});

export class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.handleCopy = this.handleCopy.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }

  handleCopy() {
    this.props.setCopied(this.props.color);
  }

  handleLink(evt) {
    evt.stopPropagation();
  }

  render() {
    const { backgroundColor, name, moreUrl, classes } = this.props;

    return (
      <CopyToClipboard text={backgroundColor} onCopy={this.handleCopy}>
        <div className={classes.ColorBox}>
          <div className={classes.colorName}>
            <p>{name}</p>
          </div>
          <div className={classes.copyColor}>
            <p>Copy</p>
          </div>
          {moreUrl && (
            <div className={classes.moreColors}>
              <Link to={moreUrl} onClick={this.handleLink}>
                <p>More</p>
              </Link>
            </div>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
