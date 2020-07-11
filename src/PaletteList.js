import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    backgroundColor: "#1E84D0",
  },
  container: {
    width: "50%",
    margin: "2rem 0",
  },
  navigator: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
};

export class PaletteList extends Component {
  render() {
    const { classes } = this.props;
    const miniPalettes = this.props.palettes.map((palette) => {
      return <MiniPalette key={palette.id} {...palette} />;
    });

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.navigator}>
            <h2>React Colors</h2>
            <Link to="/new-palette" className={classes.link}>
              Create Palette(WIP)
            </Link>
          </nav>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            {miniPalettes}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
