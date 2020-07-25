import React, { Component } from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "./Alert";

export class CopySuccess extends Component {
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
    const { open, handleClose, copiedColor } = this.props;
    return (
      <div>
        <Snackbar open={open}>
          <Alert onClose={handleClose} severity="success">
            Copied color {copiedColor}
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default CopySuccess;
