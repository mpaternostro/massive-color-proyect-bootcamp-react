import MuiAlert from "@material-ui/lab/Alert";

import React, { Component } from "react";

export class Alert extends Component {
  render() {
    return (
      <div>
        <MuiAlert elevation={6} variant="filled" {...this.props} />
      </div>
    );
  }
}

export default Alert;
