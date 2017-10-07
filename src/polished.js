import { mix, transparentize } from "polished";
import { color } from "./theme";

const mdMix = (weight, color1, color2) => props =>
  mix(weight, color(color1)(props), color(color2)(props));

const mdTransparentize = (factor, theColor) => props =>
  transparentize(factor, color(theColor)(props));

export { mdMix as mix, mdTransparentize as transparentize };
