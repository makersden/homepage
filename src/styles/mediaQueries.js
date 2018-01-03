import { css } from "styled-components";
import values from "lodash/fp/values";

const breakpoints = {
  desktop: 144,
  laptop: 102.4,
  tablet: 76.8,
  phone: 32
};

const breakpointValues = values(breakpoints).reverse();

export { breakpointValues as breakpoints };

// iterate through the breakpoints and create a media template
export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}rem) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
