import { Flex, Box } from "grid-styled";
import styled, { css } from "styled-components";

import { transparentize } from "../../polished";
import { color, font, size } from "../../theme";
import { media } from "../../styles/mediaQueries";
import GracefulImage from "../../GracefulImage";
import GracefulSvg from "../../GracefulSvg";

const duration = 1000;

// order
const background = 1;
const image = 2;
const title = 3;
const description = 4;

const delay = 50;

const getDelay = order => (order - 1) * delay;

export const Background = styled.div.attrs({
  "data-aos": "fade",
  "data-aos-delay": getDelay(background),
  "data-aos-duration": duration,
  "data-aos-once": true
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const Quote = styled.blockquote.attrs({
  // "data-aos": "fade",
  // "data-aos-duration": duration
})`
  margin-left: 0;
  margin-right: 0;
  font-weight: 300;
  margin-bottom: ${size(2)};
  ::before {
    content: "“";
  }

  ::after {
    content: "”";
  }
`;

export const authorStyle = css`
  color: ${color("black")};
  position: relative;

  ::before {
    content: "–";
    position: absolute;
    left: 0;
    top: 0;
  }

  > * {
    display: block;
    margin-left: ${size(2)};
  }
`;

export const Author = styled.span.attrs({
  // "data-aos": "fade",
  // "data-aos-duration": duration
})`
  ${authorStyle};
  img {
    border-radius: 50%;
    height: 7.5rem;
    width: 7.5rem;
  }
`;

export const AuthorLink = styled.a.attrs({
  target: "blank"
  // "data-aos": "fade",
  // "data-aos-duration": duration
})`
  &,
  &:active,
  &:visited,
  &:link {
    color: ${color("black")};
    transition: opacity 200ms;
    font-weight: 500;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Paragraph = styled.p.attrs({
  // "data-aos": "fade",
  // "data-aos-duration": duration
})`
  font-weight: 500;
  color: ${color("textDark")};
  text-align: ${props => props.align || "left"};
  > span {
    display: block;
  }

  margin: ${size(2)} 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export const Section = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  * {
      border-radius: 10px;
      ${media.aboveTablet`
        border-radius: 20px;
      `}

      &:not(${Background}) {
        z-index: 1;
      }
  }
`;

export const Description = styled(Box).attrs({
  "data-aos": "fade-left",
  "data-aos-delay": getDelay(description),
  "data-aos-duration": duration,
  "data-aos-once": true
})`
  position: relative;
  background: ${color("white")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80rem;
  padding: ${size(4)};
  * {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }

  ${media.belowTablet`
    padding: ${size(3)};
    background: ${transparentize(0.05, "superWhite")};
  `};

  z-index: 4999;
`;

export const Title = styled.h2.attrs({
  "data-aos": "fade-up",
  "data-aos-delay": getDelay(title),
  "data-aos-duration": duration,
  "data-aos-once": true
})`
  position: relative;
  font-family: ${font("display")};
  font-weight: normal;
  letter-spacing: 1px;
  color: ${color("white")};
  margin: 0;
  font-size: ${size(3)};
  ${media.aboveTablet`
      font-size: ${size(4)};
`};
  z-index: 5000;
`;

export const Image = styled(GracefulImage).attrs({
  "data-aos": "fade",
  "data-aos-delay": getDelay(image),
  "data-aos-duration": duration,
  "data-aos-once": true
})``;

export const Svg = GracefulSvg;
