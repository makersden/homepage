import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import Helmet from "react-helmet";
import get from "lodash/fp/get";
import Isvg from "react-inlinesvg";

import { color, font } from "../theme";
import LogoFull from "../../assets/logoFull.svg";
import FadeWithoutFont from "../FadeWithoutFont";

import Work from "../components/Work";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Cogs from "../components/Cogs";

const TransparentSegment = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeroSegment = styled(Box)`
  height: calc(100vh - 192px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Footer = styled(TransparentSegment)`
  align-items: center;
  justify-content: center;
  text-align: center;
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
  font-family: ${font("display")};
  letter-spacing: 1px;
  margin: 0;

  font-size: 6.4rem;
  font-weight: normal;
`;

const Subtitle = styled(Box)`
  font-size: 3.6rem;
  align-self: flex-end;
`;

const Container = styled(Flex).attrs({ column: true })`
  font-family: ${font("primary")};
  color: ${get("theme.colors.text")};
`;

const StyledLogo = styled(Isvg)`
  margin: 0;
  letter-spacing: -0.16rem;
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

const StyledCogs = styled(Cogs)`
  align-self: center;
`;

const Home = () => {
  return (
    <Container>
      <FadeWithoutFont>
        <HeroSegment p={4} m={4} id="home">
          <Title>We are a software workshop.</Title>
          <StyledCogs />
          <Subtitle w={1 / 4} pr={4} mr={4}>
            We solve hard problems to realize amazing ideas.
          </Subtitle>
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
