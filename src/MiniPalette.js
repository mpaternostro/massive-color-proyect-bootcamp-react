import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import styles from "./styles/MiniPaletteStyles";

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, handleClick } = props;
  const miniColorBoxes = colors.map(({ name, color }) => (
    <div
      className={classes.miniColorBox}
      key={name}
      style={{
        backgroundColor: color,
      }}
    />
  ));

  return (
    <Grid item xs={12} md={6} lg={4} onClick={handleClick}>
      <Paper elevation={3}>
        <div className={classes.container}>
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

export default withStyles(styles)(MiniPalette);
