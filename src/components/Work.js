import React from "react";
import styled, { css } from "styled-components";
import Image from "react-imageloader";
import Isvg from "react-inlinesvg";

import { mix } from "../polished";
import { borderCorners } from "../mixins";
import { color } from "../theme";
import OnScreenDetect from "../OnScreenDetect";
import GracefulImage from "../GracefulImage";

import epimap3d from "../../assets/images/epimap_3d.jpg";
import pointmap from "../../assets/images/3d_pointmap.jpg";
import diagram from "../../assets/images/Web App Reference Architecture.svg";
import revenue from "../../assets/images/revenue.svg";

const Container = styled.div``;

const Header = styled.h2`
  margin: 0;
  margin-bottom: 4.8rem;
  text-align: center;
  font-weight: 300;
  font-size: 4.8rem;
  color: ${color("black")};
`;

const ListItem = styled.li``;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80rem;
  flex: 1;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  margin-bottom: 4.8rem;
  justify-content: center;

  > * {
    :first-child {
      margin-right: 2.4rem;
    }

    :last-child {
      margin-left: 2.4rem;
    }
  }

  :nth-child(2n + 1) {
    flex-direction: row-reverse;

    > * {
      :first-child {
        margin-left: 2.4rem;
        margin-right: 0;
      }

      :last-child {
        margin-right: 2.4rem;
        margin-left: 0;
      }
    }
  }
`;

const Paragraph = styled.p`
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 500;
  color: ${color("textDark")};
  text-align: ${props => props.align || "left"};
`;

const ImagePlaceholder = styled.div`
  max-width: ${props => props.width};
  height: ${props => props.height};
  flex: 1;

  border-radius: 4px;

  background: rgba(0, 0, 0, 0.05);
`;

const StyledImage = styled(Image)`
  max-width: 50%;
  img {
    width: 100%;
    max-height: 100%;
  }
`;

const Quote = styled.blockquote`
  margin-left: 0;
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 300;
  margin-bottom: 4.8rem;
`;

const Author = styled.span`
  color: ${color("black")};
  font-size: 2.4rem;
  position: relative;
  margin-bottom: 2.4rem;

  ::before {
    content: "–";
    position: absolute;
    left: 0;
    top: 0;
  }

  > span {
    display: block;
    margin-left: 2.4rem;
  }
`;

const CallToAction = styled.a`
  border: 1px solid ${mix(0.5, "accent", "white")};
  background-color: ${mix(0.1, "accent", "white")};
  color: ${color("accent")};
  font-weight: 700;
  font-size: 2.4rem;
  padding: 3.2rem 4.8rem;
  text-align: center;
  text-decoration: none;
  align-self: center;
  transition: background-color 200ms, border-color 200ms, color 200ms,
    font-size 200ms;

  :hover {
    border-color: ${color("accent")};
    color: ${color("white")};
    font-size: 3.2rem;
    background-color: ${color("accent")};
  }

  ${borderCorners({ color: "accent" })};
`;

const ResponsiveImage = styled(Image)`
  transition: opacity 200ms;
  max-width: 100%;
  max-height: 100%;
`;

const ArchitectureSvg = styled(Isvg)`
  width: 100%;
  height: auto;

  svg {
    width: 100%;
    height: auto;

    .drop {
      transition: transform 1s;
      transform: translateY(${props => (props.show ? "0rem" : "-100rem")});
      ${Array.from({ length: 30 }).map(
        (_, i) => css`
          :nth-child(${i + 1}) {
            transition-delay: ${i * 200}ms;
          }
        `
      )} &.labels {
        transition-delay: 300ms;
      }
    }
  }
`;

const Crop = styled.div`
  ${props =>
    "width" in props &&
    `
    width: ${props.width};
  `} ${props =>
      "height" in props &&
      `
    height: ${props.height};
  `} overflow: hidden;
`;

const renderArchitectureSvg = ({ isOnScreen }) => (
  <ArchitectureSvg src={diagram} show={isOnScreen} />
);

const EpimapImage = styled(GracefulImage).attrs({
  src: epimap3d
})`
  min-height: 76rem;
  min-width: 64rem;
  border-radius: 4px;
`;

const PointMapImage = styled(GracefulImage).attrs({
  src: pointmap
})`
  min-width: 77rem;
  min-height: 49rem;
  border-radius: 4px;
`;

// TODO viewbox? native dimensions?
const RevenueImage = styled(Isvg).attrs({
  src: revenue
})`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 100%;
    height: auto;
    max-height: 30rem;
  }

  .axes {
    stroke: ${color("backgroundDark")};
    fill: none;
    stroke-width: 0.1;
  }

  .guide {
    fill: none;
    stroke: ${color("black")};
    stroke-width: 0.2;
    stroke-opacity: 0.2;
    stroke-dasharray: 2;
    stroke-dashoffset: 4;
  }

  .chartline {
    fill: none;
    stroke: ${color("accent")};
    animation: runchart 6s infinite;
    stroke-dasharray: 50;
    stroke-width: 0.4;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @keyframes runchart {
    from {
      stroke-dashoffset: 50;
    }

    90% {
      stroke-dashoffset: 0;
      opacity: 1;
    }

    to {
      stroke-dashoffset: 0;
      opacity: 0;
    }
  }
`;

const Home = () => {
  return (
    <Container>
      <Header>Our Work</Header>
      <Section>
        <Crop width="50%">
          <OnScreenDetect once render={renderArchitectureSvg} />
        </Crop>
        <Description>
          <Paragraph standout>
            We engineer high quality services, back to back.
          </Paragraph>
          <Paragraph>
            We take care of frontends, backends, data and cloud.
          </Paragraph>
          <Paragraph>We like to use React, NodeJS, Scala and AWS.</Paragraph>
        </Description>
      </Section>
      <Section>
        <Crop>
          <EpimapImage />
        </Crop>
        <Description>
          <Paragraph align="right">
            Together with iHealth Finland we created machine learning algorithms
            forecasting the spread of pathogens. Using our web based interface,
            doctors and pharma companies can see when and where in the country
            epidemics are likely to occur.
          </Paragraph>
          <Quote>
            “They provided advice, UI design, frontend and backend code, cloud
            infrastructure and data analysis algorithms. All on time, very
            communicative and flexible with adjusting features as the project
            went along. It’s reassuring to know your product is in the hands of
            real professionals. Impeccable work - I can recommend them without
            hesitation.”
          </Quote>
          <Author>
            <span>Dr. Otto Helve</span>
            <span>CEO of iHealth Finland and board member of Duodecim Oy.</span>
          </Author>
        </Description>
      </Section>
      <Section>
        <Crop>
          <PointMapImage />
        </Crop>
        <Description>
          <Quote>
            “Without big data analytics, companies are blind and deaf, wandering
            out onto the web like deer on a freeway.”
          </Quote>
          <Author>
            <span>Geoffrey Moore</span>
          </Author>
          <Paragraph>
            We help our clients harvest relevant data from their services and
            unlock its potential through intuitively visualized insights.
          </Paragraph>
        </Description>
      </Section>
      <Section>
        <RevenueImage />
        <Description>
          <Paragraph align="center">What about you?</Paragraph>
          <CallToAction href="mailto:korneliusz@makersden.io">
            <span>Let's talk.</span>
          </CallToAction>
        </Description>
      </Section>
    </Container>
  );
};

export default Home;
