import React, { Component } from "react";
import Slider from "rc-slider";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    const { level, handleColorLevel, format, handleFormatChange } = this.props;
    return (
      <div className="Navbar">
        <div className="Navbar-palette-name">
          <Link to="/">
            <h1>React Color Picker</h1>
          </Link>
        </div>
        <p className="Navbar-slider-level">Level: {level}</p>
        <Slider
          min={100}
          max={900}
          step={100}
          defaultValue={level}
          className="Navbar-slider"
          onAfterChange={handleColorLevel}
        />
        <div className="Navbar-select">
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

export default Navbar;
