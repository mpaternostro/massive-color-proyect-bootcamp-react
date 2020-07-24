import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement(({ classes, name, deleteColor }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <span className={classes.name}>{name}</span>
      <IconButton onClick={() => deleteColor(name)}>
        <DeleteIcon className={classes.delete} />
      </IconButton>
    </div>
  </div>
));

export default withStyles(styles)(DraggableColorBox);
