import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundColor: (props) => props.color,
    width: "20%",
    height: "25%",
    display: "inline-block",
  },
};

function DraggableColorBox(props) {
  return <div className={props.classes.root}>{props.name}</div>;
}

export default withStyles(styles)(DraggableColorBox);
