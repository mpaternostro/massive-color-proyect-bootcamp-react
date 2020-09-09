export default function paletteReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.newPalette];
    case "delete":
      const palettes = state.filter(
        (palette) => palette.id !== action.paletteID
      );
      return palettes;
    default:
      return state;
  }
}
