import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "grid-styled";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import Link from "gatsby-link";
import Observer from "react-intersection-observer";

import get from "lodash/fp/get";

import { color, column, font, size, sumSize } from "../theme";
import { transparentize } from "../polished";
import { media } from "../styles/mediaQueries";

import { Image } from "../components/Section";

import FadeWithoutFont from "../FadeWithoutFont";

const Container = styled(Flex).attrs({ column: true })`
  color: ${get("theme.colors.text")};
  align-items: center;
  width: ${column(12)};
`;

const Headline = styled.h1`
  font-family: ${font("display")};
  letter-spacing: 1px;
  margin: 0;
  font-size: ${sumSize(3, 1)};
  font-weight: normal;
  margin-top: ${size(3)};
  margin-bottom: ${size(3)};
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

const Video = styled.div`
  border: 1px solid white;
  width: 640px;
  height: 480px;
`;

const LunchHeadline = styled.h3`
  margin: ${sumSize(3, 2)} 0;
  font-size: ${sumSize(2, 1)};
`;

const StyledLunchMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 600px;
`;

const StyledLunchOption = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: ${sumSize(2, 1)};
  padding: ${size(3)} ${size(3)};
  background: ${color("green")};
  border-radius: 9px;
  display: flex;
  align-items: center;
  width: calc(300px - ${size(4)} / 2);
  transition: color 300ms, background 300ms;

  &:hover {
    background: ${color("lightGreen")};
    color: ${color("textDark")};
  }

  ${Image} {
    width: ${size(4)};
    height: ${size(4)};
    margin-right: ${size(2)};
  }
`;

const LunchOption = ({ children, image }) => (
  <StyledLunchOption>
    <Image {...image.childImageSharp} width={size(4)} />
    <span>{children}</span>
  </StyledLunchOption>
);

const LunchMenu = ({ meat, veg }) => (
  <StyledLunchMenu>
    <LunchOption image={meat}>Meat</LunchOption>
    <LunchOption image={veg}>Veg</LunchOption>
  </StyledLunchMenu>
);

const flash = props => keyframes`
  0% {
    color: ${color("green")(props)};
  }

  30% {
    color: ${color("white")(props)};
  }

  100% {
    color: ${color("green")(props)};
  }
`;

const StyledFeatures = styled.div`
  margin-top: ${size(4)};
  width: ${column(10)};
  display: flex;
  flex-direction: row;
  font-family: ${font("display")};
  font-size: ${size(3)};
  justify-content: flex-end;
  align-items: flex-start;

  h3 {
    margin-top: 0;
    flex: 1;
    text-align: right;
  }

  ul {
    flex: 1;
    margin: 0;
    margin-left: ${size(4)};
    padding: 0;
    list-style: none;
    line-height: 1.17;
    li {
    }
  }
`;

const Feature = styled.li`
  cursor: pointer;
`;

const FlashingSpan = styled.span`
  color: ${color("green")};
  height: 1.17em;
  line-height: 1.17em;
  transition: color 0.3s;

  ${props =>
    props.flash &&
    css`
      animation: 300ms ${flash};
    `} &:hover {
    color: ${color("superWhite")};
  }
`;

const Features = ({ title, features }) => (
  <StyledFeatures>
    <h3>{title}</h3>
    <ul>
      {features.map(feature => [
        <Feature>
          <Observer>
            {inView => (
              <FlashingSpan flash={inView}>
                {feature.name || feature}
              </FlashingSpan>
            )}
          </Observer>
        </Feature>,
        feature.description && <li>{feature.description}</li>
      ])}
    </ul>
  </StyledFeatures>
);

const workFeatures = [
  { name: "React" },
  { name: "Nodejs" },
  { name: "Scala" },
  { name: "Kotlin" },
  { name: "Design & UX" }
];

const funFeatures = [
  { name: "Videos" },
  { name: "Podcasts" },
  { name: "Apps & Demos" },
  { name: "Drawing" },
  { name: "Woodworking" },
  { name: "..." }
];

const values = [
  { name: "Freedom" },
  { name: "Challenge" },
  { name: "Improvement" },
  { name: "Responsibility" },
  { name: "Respect" },
  { name: "Balance" }
];

const workplaces = [
  { name: "At co-works" },
  { name: "From home" },
  { name: "At customers'" }
];

const Join = ({ data }) => {
  return (
    <Container>
      <FadeWithoutFont>
        <Headline>
          <span>
            By Makers<br />
            For Makers
          </span>
        </Headline>
      </FadeWithoutFont>
      <Video />
      <FadeWithoutFont>
        <Container>
          <LunchHeadline>Let's have lunch.</LunchHeadline>
          <LunchMenu {...data} />

          <Features title="Mostly we do" features={workFeatures} />

          <Features title="For fun, we also do" features={funFeatures} />

          <Features title="We value" features={values} />

          <Features title="We work" features={workplaces} />

          <LunchHeadline>We eat food too.</LunchHeadline>
          <LunchMenu {...data} />
        </Container>
      </FadeWithoutFont>
    </Container>
  );
};

export default Join;

export const pageQuery = graphql`
  query Images {
    meat: file(relativePath: { eq: "meat.png" }) {
      childImageSharp {
        sizes(maxWidth: 512, toFormat: PNG) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    veg: file(relativePath: { eq: "veg.png" }) {
      childImageSharp {
        sizes(maxWidth: 512, toFormat: PNG) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
