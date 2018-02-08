import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
/* import { Isvg } from "react-inlinesvg";*/

import get from "lodash/fp/get";
import getOr from "lodash/fp/getOr";
import mapValues from "lodash/fp/mapValues";
import find from "lodash/fp/find";
import flow from "lodash/fp/flow";

import { color, font, size, sumSize } from "../theme";
import { media } from "../styles/mediaQueries";

import FadeWithoutFont from "../FadeWithoutFont";

import Work from "../components/Work";
import Team from "../components/Team";
import Contact from "../components/Contact";
import cogs from "../images/cogwheels_above_the_fold.svg";

import { Image } from "../components/Section";

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
  ${media.aboveTablet`
    height: calc(100vh - 192px);
  `};
`;

const LightSegment = styled(TransparentSegment)`
  color: ${color("textDark")};
  position: relative;
`;

const ContactSegment = styled(LightSegment)`
  padding: 0;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-family: ${font("display")};
  letter-spacing: 1px;
  margin: 0;
  font-size: ${sumSize(3, 1)};
  font-weight: normal;

  ${media.aboveTablet`
    font-size: ${size(4)};
  `};
`;

const Subtitle = styled(Box)`
  font-size: ${sumSize(2, 1)};
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  font-family: monospace;
  align-items: flex-end;
  span {
    display: block;
  }

  ${media.aboveTablet`
    font-size: ${size(3)};
  `};
`;

const Container = styled(Flex).attrs({ column: true })`
  color: ${get("theme.colors.text")};
`;

const segments = ["home", "work", "team", "contact"];

const shouldScroll = url => segments.indexOf(url) !== -1;

const CogsContainer = styled.div`
  max-height: 100%;
  max-width: 100%;
  margin: 0;
`;

const CogsImage = styled(Image)`
  max-width: 700px;
  display: block;
  margin: 0 auto;
`;

const Home = ({ data }, context) => {
  const images = mapValues("childImageSharp", data);
  const cogsImg = { sizes: { src: { cogs } } };
  return (
    <Container>
      <FadeWithoutFont>
        <HeroSegment p={[0, 4]} m={[3, 4]} id="hero">
          <Title>We are a software workshop.</Title>
          <CogsContainer>
            <CogsImage {...cogsImg} />
          </CogsContainer>
          <Subtitle w={[1, 6 / 12]} mx={[0, 4]} px={[0, 4]}>
            <div>
              <span>We solve gnarly problems</span>
              <span>to realize amazing ideas.</span>
            </div>
          </Subtitle>
        </HeroSegment>
      </FadeWithoutFont>
      <LightSegment>
        <Work images={images} />
      </LightSegment>
      <LightSegment>
        <Team images={images} />
      </LightSegment>
      <ContactSegment id="contact">
        <Contact images={images} />
      </ContactSegment>
    </Container>
  );
};

export default Home;

export const pageQuery = graphql`
  query IndexImages {
    berlin: file(relativePath: { eq: "berlin-sharp.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2560, toFormat: JPG) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    epimap3d: file(relativePath: { eq: "epimap_3d.jpg" }) {
      childImageSharp {
        sizes(
          maxWidth: 1400
          toFormat: JPG
          quality: 99
          traceSVG: { color: "rgba(250, 250, 250, 0.3)", blackOnWhite: false }
        ) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    revenue: file(relativePath: { eq: "revenue.png" }) {
      childImageSharp {
        sizes(
          maxWidth: 978
          maxHeight: 658
          toFormat: PNG
          quality: 99
          traceSVG: { color: "transparent", blackOnWhite: true }
        ) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    missionready: file(relativePath: { eq: "missionready.jpg" }) {
      childImageSharp {
        sizes(
          maxWidth: 700
          toFormat: JPG
          quality: 99
          traceSVG: { color: "rgba(250, 250, 250, 0.3)", blackOnWhite: false }
        ) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    waves: file(relativePath: { eq: "waves.jpg" }) {
      childImageSharp {
        sizes(
          maxWidth: 1000
          quality: 99
          traceSVG: { color: "#fafafa", blackOnWhite: false }
        ) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    data: file(relativePath: { eq: "data.png" }) {
      childImageSharp {
        sizes(
          maxWidth: 1400
          toFormat: JPG
          quality: 99
          traceSVG: { color: "rgba(250, 250, 250, 0.3)", blackOnWhite: false }
        ) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    otto: file(relativePath: { eq: "otto.png" }) {
      childImageSharp {
        sizes(
          maxWidth: 75
          toFormat: JPG
          quality: 99
          traceSVG: { color: "#fafafa", blackOnWhite: false }
        ) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    aki: file(relativePath: { eq: "aki.png" }) {
      childImageSharp {
        sizes(
          maxWidth: 75
          toFormat: JPG
          quality: 99
          traceSVG: { color: "#fafafa", blackOnWhite: false }
        ) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    kalle: file(relativePath: { eq: "kalle.png" }) {
      childImageSharp {
        sizes(
          maxWidth: 1400
          toFormat: JPG
          quality: 99
          traceSVG: { color: "#fafafa", blackOnWhite: false }
        ) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    korneliusz: file(relativePath: { eq: "korneliusz2.jpg" }) {
      childImageSharp {
        sizes(
          maxWidth: 1400
          toFormat: JPG
          quality: 99
          traceSVG: { color: "#fafafa", blackOnWhite: false }
        ) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    partners: file(relativePath: { eq: "partners.png" }) {
      childImageSharp {
        sizes(
          maxWidth: 1400
          toFormat: JPG
          quality: 99
          traceSVG: { color: "#fafafa", blackOnWhite: false }
        ) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`;
