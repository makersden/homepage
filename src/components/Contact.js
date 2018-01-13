import React from "react";
import styled from "styled-components";

import { media } from "../styles/mediaQueries";
import { color, font, size, sumSize } from "../theme";
import { transparentize } from "../polished";
import berlin from "../../assets/images/berlin-sharp.jpg";
import FadeWithoutFont from "../FadeWithoutFont";

const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${color("black")} url(${berlin});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position-x: 100%;
`;

const Curtain = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;

  color: ${color("white")};

  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      ${transparentize(0.87, "accent")} 100%
    ),
    ${transparentize(0.1, "black")};
`;

const Content = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;

  font-size: ${sumSize(2, 1)};
  font-weight: 300;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${size(4)} ${size(3)};
  justify-content: space-between;

  > * {
    margin: 0;
  }

  ${media.aboveTablet`
    font-size: ${size(3)};
    padding: ${size(6)} ${size(4)};
  `};
`;

const Link = styled.a`
  &,
  &:active,
  &:visited,
  &:link {
    color: ${color("accent")} !important;
    transition: opacity 200ms;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Header = styled.h2`
  color: ${color("accent")};
  font-weight: 500;
  font-family: ${font("display")};
`;

// TOOD video of berlin in background?
const Contact = () => (
  <Container>
    <Curtain>
      <FadeWithoutFont>
        <Content>
          <Header>Let's get started.</Header>
          <p>
            <Link href="mailto:hello@makersden.io">hello@makersden.io</Link>
          </p>
          <p>We're based in Berlin.</p>
        </Content>
      </FadeWithoutFont>
    </Curtain>
  </Container>
);

export default Contact;
