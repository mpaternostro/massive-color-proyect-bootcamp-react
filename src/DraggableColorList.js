import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
import styles from "./styles/DraggableColorListStyles";

const DraggableColorList = SortableContainer(
  ({ items, deleteColor, classes }) => (
    <ul className={classes.currentPaletteColors}>
      {items.map((value, index) => (
        <DraggableColorBox
          key={`item-${value.name}`}
          index={index}
          {...value}
          deleteColor={deleteColor}
        />
      ))}
    </ul>
  )
);

export default withStyles(styles)(DraggableColorList);
