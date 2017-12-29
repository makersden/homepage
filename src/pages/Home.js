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
  min-height: 80vh;
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  span {
    display: block;
  }
`;

const Container = styled(Flex).attrs({ column: true })`
  color: ${get("theme.colors.text")};
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
        <HeroSegment p={4} m={4} mb={4} id="home">
          <Title>We are a software workshop.</Title>
          <StyledCogs />
          <Subtitle w={6 / 12} mx={4} px={4}>
            <div>
              <span>We solve hard problems</span>
              <span>to realize amazing ideas.</span>
            </div>
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
    </Container>
  );
};

export default Home;
