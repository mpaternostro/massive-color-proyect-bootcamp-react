import React, { Component, createContext } from "react";
import palettes from "../seedColors";

const PalettesContext = createContext();

class PalettesProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      palettes,
    };
    this.addPalette = this.addPalette.bind(this);
  }

  addPalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  }

  render() {
    const value = { ...this.state, addPalette: this.addPalette };
    return (
      <PalettesContext.Provider value={value}>
        {this.props.children}
      </PalettesContext.Provider>
    );
  }
}

export { PalettesContext, PalettesProvider };
