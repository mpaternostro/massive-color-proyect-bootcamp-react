import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";
import "./PaletteList.css";

export class PaletteList extends Component {
  render() {
    const links = this.props.palettes.map((palette) => {
      const { paletteName, id, emoji } = palette;
      return (
        <Grid item xs={12} md={6} lg={4} key={id}>
          <Paper>
            <Link className="PaletteList-item" to={`/palette/${id}`}>
              <div className="PaletteList-item--box">
                Mini Palette goes here!
              </div>
              <div className="PaletteList-item--name">
                <span>{paletteName}</span>
                <span>{emoji}</span>
              </div>
            </Link>
          </Paper>
        </Grid>
      );
    });

    return (
      <div className="PaletteList">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2>React Colors</h2>
          </Grid>
          {links}
        </Grid>
      </div>
    );
  }
}

export default PaletteList;
