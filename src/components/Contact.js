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
`;

const Background = styled(GracefulImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BackgroundCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${transparentize(0.1, "white")};
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

  font-size: 3.2rem;
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

const Contact = () => (
  <Container>
    <Background src={berlin} />
    <BackgroundCover />
    <Header>Contact</Header>
    <Content>
      <p>0049 123 456 789</p>
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
