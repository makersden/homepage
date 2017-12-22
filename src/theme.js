import get from "lodash/fp/get";
import memoize from "lodash/fp/memoize";
import "../assets/fonts/index.css";

const theme = {
  colors: {
    superWhite: "white",
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
// Power of 2 scale, with step 1 = 8px (0.8 rem).
export const size = step => Math.pow(2, Math.max(0, step) + 2) + "px";

export const column = size => size / 12 * 100 + "%";

export default theme;
