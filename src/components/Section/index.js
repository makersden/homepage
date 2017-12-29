import { Flex, Box } from "grid-styled";
import styled, { css } from "styled-components";

import { transparentize } from "../../polished";
import { color, size } from "../../theme";

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
  font-weight: 300;
  margin-bottom: 4.8rem;
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

  > span {
    display: block;
    margin-left: 2.4rem;
  }
`;

export const Author = styled.span`
  ${authorStyle};
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
    border-radius: 20px;

    &:not(${Background}) {
      position: relative;
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

  * {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;
