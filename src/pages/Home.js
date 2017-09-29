import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import get from "lodash/fp/get";
import Isvg from "react-inlinesvg";

import { color, font } from "../theme";
import Stars from "../stars";
import LogoFull from "../../assets/logoFull.svg";

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

const ContactSegment = styled(HeroSegment)`min-height: 0;`;

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

const StyledLogo = styled(Isvg)`
  margin: 0;
  letter-spacing: -0.16rem;
  font-family: ${font("brand")};
  color: ${color("text")};
  margin-bottom: 1.2rem;
  display: inline-block;

  svg {
    height: 4.8rem;
    fill: ${color("text")};
  }
`;

const Address = styled.p`
  margin: 0;
  margin-top: 1.2rem;
  font-weight: 200;
  font-size: 2.4rem;
  letter-spacing: -0.08rem;
`;

const Home = () => {
  return (
    <Container>
      <Stars />
      <HeroSegment id="home">
        <Title>Software Development by Veterans</Title>
        <Subtitle>We'll guide you.</Subtitle>
      </HeroSegment>
      <LightSegment id="work">
        <Work />
      </LightSegment>
      <ContactSegment id="home">
        <div>
          <StyledLogo src={LogoFull} />
          <Address>Matternstraße 7, 10249 Berlin</Address>
        </div>
      </ContactSegment>
    </Container>
  );
};

export default Home;
