import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "200px",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      cursor: "pointer",
    },
  },
  miniColorBoxes: {
    margin: "0.5rem",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(5, 20%)",
    backgroundColor: "#dae1e4",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    fontWeight: "bold",
  },
};

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, handleClick } = props;
  const miniColorBoxes = colors.map(({ name, color }) => (
    <div
      key={name}
      style={{
        backgroundColor: color,
      }}
    ></div>
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
