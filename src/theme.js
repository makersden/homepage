import get from "lodash/fp/get";

const theme = {
  colors: {
    white: "#fafafa",
    black: "#111",
    accent: `rgb(21, 169, 206)`,
    backgroundDark: `#090a0f`,
    backgroundLight: `#1b2735`,
    text: "#ecf0f1",
    textDark: "#2c3e50"
    // NOTE: Also try these colors
    // text: "#f5f5f5",
    // textDark: "#111",
  },
  font: {
    brand: "Airstream, sans-serif",
    primary: "Lato, sans-serif"
  }
};

export const color = name => get(`theme.colors.${name}`);
export const font = name => get(`theme.font.${name}`);

export default theme;
