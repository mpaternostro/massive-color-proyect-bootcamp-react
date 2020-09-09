import React, { createContext } from "react";
import paletteReducer from "../reducers/palette.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import defaultPalettes from "../seedColors";

const PalettesContext = createContext();

function PalettesProvider({ children }) {
  const [palettes, dispatch] = useLocalStorageReducer(
    paletteReducer,
    "palettes",
    defaultPalettes
  );

  const value = {
    palettes,
    dispatch,
  };

  return (
    <PalettesContext.Provider value={value}>
      {children}
    </PalettesContext.Provider>
  );
}

export { PalettesContext, PalettesProvider };
