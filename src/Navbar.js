import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export class Navbar extends Component {
  // constructor(props) {
  //   super(props);

  //   this.handleColorLevel = this.handleColorLevel.bind(this);
  // }

  render() {
    const { name, level, handleColorLevel } = this.props;
    return (
      <div className="Navbar">
        <div className="Navbar-palette-name">
          <h1>{name}</h1>
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
      </div>
    );
  }
}

export default Navbar;
