import React from "react";
import { css } from "styled-components";
import MQ from "react-responsive";
import values from "lodash/fp/values";
import cappedReduce from "lodash/fp/reduce";

const reduce = cappedReduce.convert({ cap: false });

const breakpoints = {
  desktop: 1440,
  bigLaptop: 1366,
  laptop: 1024,
  tablet: 768,
  bigPhone: 412, // e.g. iPhone 6+
  phone: 320
};

const capitalize = str => str[0].toUpperCase() + str.slice(1);

const maxSizes = reduce(
  (result, breakpoint, label) => ({
    ...result,
    ["below" + capitalize(label)]: breakpoint - 1
  }),
  {}
)(breakpoints);

const minSizes = reduce(
  (result, breakpoint, label) => ({
    ...result,
    ["above" + capitalize(label)]: breakpoint
  }),
  {}
)(breakpoints);

const breakpointQuery = type => breakpoint => `(${type}: ${breakpoint}px)`;

const mediaQueries = sizeCondition =>
  reduce(
    (acc, size, label) => ({
      ...acc,
      [label]: (...args) => css`
        @media ${breakpointQuery(sizeCondition)(size)} {
          ${css(...args)};
        }
      `
    }),
    {}
  );

/**
 * Styled components media query templates
 */
export const media = {
  ...mediaQueries("max-width")(maxSizes),
  ...mediaQueries("min-width")(minSizes)
};

const breakpointValues = values(breakpoints).reverse();

/**
 * Grid-styled responsive breakpoint values
 */
export { breakpointValues as breakpoints };

const makeMediaQueryComponent = query => props => (
  <MQ {...props} query={query} />
);

const makeMediaQueryComponents = (name, breakpoint) => ({
  [`Below${capitalize(name)}`]: makeMediaQueryComponent(
    breakpointQuery("max-width")(breakpoint - 1)
  ),
  [`Above${capitalize(name)}`]: makeMediaQueryComponent(
    breakpointQuery("min-width")(breakpoint)
  )
});

const mediaQueryComponents = reduce(
  (result, breakpoint, name) => ({
    ...result,
    ...makeMediaQueryComponents(name, breakpoint)
  }),
  {}
)(breakpoints);

export default mediaQueryComponents;
