import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import get from "lodash/fp/get";

import { color } from "../theme";

import Work from "./Work";

const TransparentSegment = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 8rem;
`;

const HeroSegment = styled(TransparentSegment)`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const LightSegment = styled(TransparentSegment)`
  background: ${color("text")};
  color: ${color("textDark")};
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 4.2rem;
`;

const Subtitle = styled.span`
  font-weight: 500;
  font-size: 3.6rem;
`;

const Container = styled.div`
  position: relative;
  font-family: ${get("theme.font.primary")};
  color: ${get("theme.colors.text")};
`;

const Home = () => {
  return (
    <Container>
      <HeroSegment id="home">
        <Title>Software Development by Veterans</Title>
        <Subtitle>We'll guide you.</Subtitle>
      </HeroSegment>
      <LightSegment id="work">
        <Work />
      </LightSegment>
    </Container>
  );
};

export default Home;
