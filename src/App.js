import React, { Component } from "react";
import "./App.css";
import NavBar from "./Navbar";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    const palette = generatePalette(seedColors[1]);

    return (
      <div className="App">
        <Palette palette={palette} />
      </div>
    );
  }
}

export default App;
