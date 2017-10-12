import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import get from "lodash/fp/get";
import Isvg from "react-inlinesvg";

import { color, font } from "../theme";
import Stars from "../stars";
import LogoFull from "../../assets/logoFull.svg";
import FadeWithoutFont from "../FadeWithoutFont";

import Work from "../components/Work";
import Team from "../components/Team";
import Contact from "../components/Contact";

const TransparentSegment = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4.8rem;
`;

const HeroSegment = styled(TransparentSegment)`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Footer = styled(HeroSegment)`
  min-height: 0;
  align-items: flex-start;
  text-align: left;
`;

const LightSegment = styled(TransparentSegment)`
  background: ${color("white")};
  color: ${color("textDark")};
  position: relative;
  :nth-child(2n) {
    background: ${color("whiteAlt")};
  }
`;

const ContactSegment = styled(LightSegment)`
  padding: 0;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 80rem;
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
  font-weight: 300;
  font-size: 2.4rem;
  letter-spacing: -0.08rem;
`;

const segments = ["home", "work", "team", "contact"];

const shouldScroll = url => segments.indexOf(url) !== -1;

const Home = () => {
  return (
    <Container>
      <Stars />
      <FadeWithoutFont>
        <HeroSegment id="home">
          <Title>Software Development by Veterans</Title>
          <Subtitle>We'll guide you.</Subtitle>
        </HeroSegment>
      </FadeWithoutFont>
      <LightSegment id="work">
        <Work />
      </LightSegment>
      <LightSegment id="team">
        <Team />
      </LightSegment>
      <ContactSegment id="contact">
        <Contact />
      </ContactSegment>
      <Footer id="footer">
        <div>
          <StyledLogo src={LogoFull} />
          <Address>Matternstr. 7</Address>
          <Address>10249 Berlin</Address>
        </div>
      </Footer>
    </Container>
  );
};

export default Home;
