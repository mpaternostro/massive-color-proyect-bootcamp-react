import chroma from "chroma-js";
import seedColors from "./seedColors";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
}

function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function getScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

function getPaletteColors(paletteID) {
  const originalPalette = seedColors.find(({ id }) => id === paletteID);
  return generatePalette(originalPalette);
}

function getSingleColorShades(paletteID, colorID) {
  const palette = getPaletteColors(paletteID);
  const { colors } = palette;
  const singleColorShades = [];
  for (let level in colors) {
    singleColorShades.push(
      ...colors[level].filter((color) => color.id === colorID)
    );
  }
  return { palette, singleColorShades: singleColorShades.slice(1) };
}

export { getPaletteColors, getSingleColorShades };
