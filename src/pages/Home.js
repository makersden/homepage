import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import get from "lodash/fp/get";

import { color, font, size, sumSize } from "../theme";
import { media } from "../styles/mediaQueries";

import FadeWithoutFont from "../FadeWithoutFont";

import Work from "../components/Work";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Cogs from "../components/Cogs";

const TransparentSegment = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const HeroSegment = styled(Box)`
  height: calc(100vh - 152px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.tablet`
    height: calc(100vh - 192px);
  `};
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
  font-size: ${sumSize(3, 1) / 10}rem;
  font-weight: normal;

  ${media.tablet`
    font-size: ${size(4)};
  `};
`;

const Subtitle = styled(Box)`
  font-size: ${sumSize(2, 1) / 10}rem;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  font-family: monospace;
  align-items: flex-end;
  span {
    display: block;
  }

  ${media.tablet`
    font-size: ${size(4)};
  `};
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
        <HeroSegment p={[0, 4]} m={[3, 4]} id="home">
          <Title>We are a software workshop.</Title>
          {/* <StyledCogs /> */}
          <Subtitle w={[1, 6 / 12]} mx={[0, 4]} px={[0, 4]}>
            <div>
              <span>We solve gnarly problems</span>
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
