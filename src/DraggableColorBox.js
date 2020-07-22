import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  root: {
    backgroundColor: (props) => props.color,
    width: "20%",
    height: "25%",
    display: "inline-block",
    "&:hover $delete": {
      transform: "scale(1.4)",
    },
  },
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  name: {
    fontSize: "12px",
    letterSpacing: "1px",
    padding: "12px",
    color: "rgba(0, 0, 0, 0.8)",
    textTransform: "uppercase",
  },
  delete: {
    transition: "all 0.3s ease-in-out",
  },
};

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
