import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import styles from "./styles/NavbarStyles";
import "rc-slider/assets/index.css";

export class Navbar extends Component {
  render() {
    const {
      level,
      handleColorLevel,
      format,
      handleFormatChange,
      displayColorLevel,
      classes,
    } = this.props;
    return (
      <div className={classes.Navbar}>
        <div className={classes.appName}>
          <Link to="/">
            <h1>React Color Picker</h1>
          </Link>
        </div>
        {displayColorLevel && (
          <div className={classes.sliderContainer}>
            <p className={classes.sliderLevel}>Level: {level}</p>
            <Slider
              min={100}
              max={900}
              step={100}
              defaultValue={level}
              className={classes.slider}
              onAfterChange={handleColorLevel}
            />
          </div>
        )}
        <div className={classes.formatSelect}>
          <FormControl variant="outlined">
            <InputLabel id="color-format">Format</InputLabel>
            <Select
              labelId="color-format"
              value={format}
              onChange={handleFormatChange}
              label="Format"
            >
              <MenuItem value="hex">Hex - #000000</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
