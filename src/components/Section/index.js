import { Flex, Box } from "grid-styled";
import styled, { css } from "styled-components";

import { transparentize } from "../../polished";
import { color, size } from "../../theme";
import { media } from "../../styles/mediaQueries";

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const Quote = styled.blockquote`
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

export const Author = styled.span`
  ${authorStyle};
  img {
    border-radius: 50%;
    height: 7.5rem;
    width: 7.5rem;
  }
`;

export const AuthorLink = styled.a.attrs({
  target: "blank"
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

export const Paragraph = styled.p`
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
      border-radius: 5px;
      ${media.aboveTablet`
        border-radius: 20px;
      `}

      &:not(${Background}) {
        z-index: 1;
      }
  }
`;

export const Description = styled(Box)`
  background: ${transparentize(0.05, "superWhite")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80rem;
  padding: ${size(4)};
  ${media.belowTablet`
    padding: ${size(3)};
  `} * {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;
