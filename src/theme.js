import get from "lodash/fp/get";
import "../assets/fonts/index.css";

const theme = {
  colors: {
    superWhite: "white",
    white: "#FAFAFA",
    whiteAlt: `#F2F2F2`,
    black: "#111",
    darkGrey: "#333",
    accent: `#56CCF2`,
    green: "#27AE60",
    lightGreen: "#6FCF97",
    backgroundDark: `#090a0f`,
    backgroundLight: `#1A1F1F`,
    text: "#ecf0f1",
    textDark: "#2c3e50",
    team: [
      'rgba(222, 147, 201, 0.15)',
      'rgba(4, 66, 3, 0.15)',
      'rgba(53, 110, 255, 0.15)',
      'rgba(4, 66, 3, 0.15)',
      'rgba(146, 0, 0, 0.15)',
      'rgba(4, 66, 3, 0.15)',
    ]
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
const sizeWithUnit = (unit, mult = 1) => step =>
  Math.pow(2, Math.max(0, step) + 2) * mult + unit;

export const size = sizeWithUnit("rem", 1 / 10);

export const sizeWithoutUnit = sizeWithUnit(0);

const sizeForComputation = sizeWithUnit(0);

export const sumSize = (...sizes) =>
  sizes.reduce((res, s) => res + sizeForComputation(s), 0) / 10 + "rem";

export const sumSizePx = (...sizes) =>
  sizes.reduce((res, s) => res + sizeForComputation(s), 0) + "px";

export const column = size => size / 12 * 100 + "%";

export default theme;
