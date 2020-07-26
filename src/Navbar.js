import React from "react";
import { withStyles, useTheme } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import styles from "./styles/NavbarStyles";
import "rc-slider/assets/index.css";

export function Navbar({
  level,
  handleColorLevel,
  format,
  handleFormatChange,
  displayColorLevel,
  classes,
}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <nav className={classes.Navbar}>
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
            onChange={handleColorLevel}
          />
        </div>
      )}
      <div className={classes.formatSelect}>
        {matches ? (
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-color-format">Format</InputLabel>
            <Select
              native
              value={format}
              onChange={handleFormatChange}
              label="Format"
              inputProps={{
                name: "format",
                id: "outlined-color-format",
              }}
            >
              <option value="hex">Hex</option>
              <option value="rgb">RGB</option>
              <option value="rgba">RGBA</option>
            </Select>
          </FormControl>
        ) : (
          <FormControl variant="outlined">
            <InputLabel id="color-format">Format</InputLabel>
            <Select
              labelId="color-format"
              value={format}
              onChange={handleFormatChange}
              label="Format"
            >
              <MenuItem value="hex">
                Hex <span> - #000000</span>
              </MenuItem>
              <MenuItem value="rgb">
                RGB <span> - rgb(255, 255, 255)</span>
              </MenuItem>
              <MenuItem value="rgba">
                RGBA <span> - rgba(255, 255, 255, 1.0)</span>
              </MenuItem>
            </Select>
          </FormControl>
        )}
      </div>
    </nav>
  );
}

export default withStyles(styles)(Navbar);
