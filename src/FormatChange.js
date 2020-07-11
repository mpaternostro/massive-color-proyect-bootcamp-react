import React, { Component } from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export class FormatChange extends Component {
  componentDidMount() {
    this.timerID = setTimeout(() => {
      this.props.handleClose();
    }, 3000);
  }

  componentDidUpdate() {
    clearTimeout(this.timerID);
    this.timerID = setTimeout(() => {
      this.props.handleClose();
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  render() {
    const { open, handleClose, format } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          message={`Format changed to ${format.toUpperCase()}`}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </div>
    );
  }
}

export default FormatChange;
