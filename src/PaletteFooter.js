import React from "react";

function PaletteFooter(props) {
  const { paletteName, emoji } = props;
  return (
    <footer className="Palette-footer">
      <span>{paletteName}</span>
      <span className="Palette-footer-emoji">{emoji}</span>
    </footer>
  );
}

export default PaletteFooter;
