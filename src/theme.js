import get from "lodash/fp/get";
import "../assets/fonts/index.css";

const theme = {
  colors: {
    white: "#FAFAFA",
    whiteAlt: `#F2F2F2`,
    black: "#111",
    darkGrey: "#333",
    accent: `#56CCF2`,
    backgroundDark: `#090a0f`,
    backgroundLight: `#1A1F1F`,
    text: "#ecf0f1",
    textDark: "#2c3e50"
    // NOTE: Also try these colors
    // text: "#f5f5f5",
    // textDark: "#111",
  },
  font: {
    primary: "Work Sans, sans-serif",
    display: "Womby, sans-serif"
  },
  duration: {
    fast: "300ms",
    slow: "1s"
  }
};

const getter = setName => propName => get(`theme.${setName}.${propName}`);

export const color = getter("colors");
export const font = getter("font");
export const duration = getter("duration");

export default theme;
