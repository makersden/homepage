import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import get from "lodash/fp/get";

import Header from "../components/Header";

const Segment = styled.div`
  min-height: calc(100vh - 4.8rem);
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
`;

const Hero = styled(Segment)`
  align-items: center;
  justify-content: center;
  text-align: center;
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
      <Hero>
        <Title>Software Development by Veterans</Title>
        <Subtitle>We'll guide you.</Subtitle>
      </Hero>
    </Container>
  );
};

export default Home;
