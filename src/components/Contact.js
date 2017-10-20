import React from "react";
import styled, { css } from "styled-components";

import { color } from "../theme";
import { transparentize } from "../polished";
import berlin from "../../assets/images/berlin-sharp.jpg";
import GracefulImage from "../GracefulImage";

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

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${color("white")};

  font-size: 3.2rem;
  background-color: ${transparentize(0.1, "black")};
`;

const Link = styled.a`
  &,
  &:active,
  &:visited,
  &:link {
    color: ${color("accent")} !important;
    transition: opacity 200ms;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Header = styled.h2`
  position: relative;
  align-self: center;
  justify-self: flex-start;
  margin: 4.8rem 0;
  text-align: center;
  font-weight: 300;
  font-size: 4.8rem;
  color: ${color("black")};
`;

// TOOD video of berlin in background?
const Contact = () => (
  <Container>
    <Content>
      <h2>Let's get in touch.</h2>
      <p>
        <Link href="mailto:korneliusz@makersden.io">
          korneliusz@makersden.io
        </Link>
      </p>
      <p>We're based in Berlin.</p>
    </Content>
  </Container>
);

export default Contact;
