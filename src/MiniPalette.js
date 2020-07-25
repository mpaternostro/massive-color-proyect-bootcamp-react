import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/MiniPaletteStyles";

function MiniPalette(props) {
  const {
    classes,
    paletteName,
    id,
    emoji,
    colors,
    goToPalette,
    handleOpenDialog,
  } = props;
  const miniColorBoxes = colors.map(({ name, color }) => (
    <div
      className={classes.miniColorBox}
      key={name}
      style={{
        backgroundColor: color,
      }}
    />
  ));

  const handleClick = () => {
    goToPalette(id);
  };

  const handleDelete = (evt) => {
    evt.stopPropagation();
    handleOpenDialog(paletteName, id);
  };

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Paper elevation={3}>
        <div className={classes.container} onClick={handleClick}>
          <IconButton className={classes.delete} onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
          <div className={classes.miniColorBoxes}>{miniColorBoxes}</div>
          <div className={classes.title}>
            <span>{paletteName}</span>
            <span>{emoji}</span>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}

export default React.memo(withStyles(styles)(MiniPalette));
