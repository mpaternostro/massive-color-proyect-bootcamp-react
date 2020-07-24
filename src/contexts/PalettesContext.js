import React, { Component, createContext } from "react";
import palettes from "../seedColors";

const PalettesContext = createContext();

class PalettesProvider extends Component {
  constructor(props) {
    super(props);

    const savedPalettes = JSON.parse(localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || palettes,
    };
    this.addPalette = this.addPalette.bind(this);
    this.removePalette = this.removePalette.bind(this);
  }

  syncLocalStorage() {
    localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }

  addPalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }

  removePalette(paletteID) {
    const palettes = this.state.palettes.filter(
      (palette) => palette.id !== paletteID
    );
    this.setState({ palettes }, this.syncLocalStorage);
  }

  render() {
    const value = {
      ...this.state,
      addPalette: this.addPalette,
      removePalette: this.removePalette,
    };
    return (
      <PalettesContext.Provider value={value}>
        {this.props.children}
      </PalettesContext.Provider>
    );
  }
}

export { PalettesContext, PalettesProvider };
