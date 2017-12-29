import React from "react";
import styled from "styled-components";

import { color, font, size } from "../theme";
import { transparentize } from "../polished";
import berlin from "../../assets/images/berlin-sharp.jpg";

const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(${berlin});
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
`;

const Content = styled.div`
  font-weight: 300;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;

  padding: ${size(6)} 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  color: ${color("white")};

  font-size: 3.2rem;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      ${transparentize(0.87, "accent")} 100%
    ),
    ${transparentize(0.1, "black")};

  > * {
    margin: 0;
  }
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
    <Content>
      <Header>Let's get in touch.</Header>
      <p>
        <Link href="mailto:hello@makersden.io">hello@makersden.io</Link>
      </p>
      <p>We're based in Berlin.</p>
    </Content>
  </Container>
);

export default Contact;
