import React from "react";
import styled, { css, keyframes } from "styled-components";

import { color } from "./theme";

const starColor = "rgba(255, 255, 255, 0.7)";
const starDimension = 3000;
const starSpeed = 200;

const random = n => Math.round(Math.random() * n);

const multipleBoxShadow = n => {
  let value = `${random(starDimension)}px ${random(
    starDimension
  )}px ${starColor}`;

  for (let i = 2; i <= n; i++) {
    value = `${value}, ${random(starDimension)}px ${random(
      starDimension
    )}px ${starColor}`;
  }

  return value;
};

const shadows = {
  small: multipleBoxShadow(500),
  medium: multipleBoxShadow(200),
  big: multipleBoxShadow(100)
};

const animateStar = keyframes`
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-${starDimension}px);
  }
`;

const stars = ({ size, boxShadow, speed }) => css`
  width: ${size};
  height: ${size};
  background: transparent;
  box-shadow: ${boxShadow};
  animation: ${animateStar} ${speed}s linear infinite;
  border-radius: 50%;

  &:after {
    content: " ";
    position: absolute;
    top: ${starDimension};
    width: ${size};
    height: ${size};
    border-radius: 50%;
    background: transparent;
    box-shadow: ${boxShadow};
  }
`;

const smallStars = stars({
  size: "1px",
  boxShadow: shadows.small,
  speed: 1 * starSpeed
});

const mediumStars = stars({
  size: "2px",
  boxShadow: shadows.medium,
  speed: 2 * starSpeed
});

const bigStars = stars({
  size: "3px",
  boxShadow: shadows.big,
  speed: 3 * starSpeed
});

const StarsBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: background-color 0.3s;
  background-color: radial-gradient(
    ellipse at bottom,
    ${color("backgroundLight")} 0%,
    ${color("backgroundDark")} 100%
  );

  & ~ * {
    position: relative;
  }
`;

const SmallStars = styled.div`${smallStars};`;

const MediumStars = styled.div`${mediumStars};`;

const BigStars = styled.div`${bigStars};`;

export default () => (
  <StarsBackground>
    <SmallStars />
    <MediumStars />
    <BigStars />
  </StarsBackground>
);
