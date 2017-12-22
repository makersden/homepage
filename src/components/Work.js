import React from "react";
import styled, { css } from "styled-components";
import LoadedImage from "react-imageloader";
import Isvg from "react-inlinesvg";
import { Flex, Box } from "grid-styled";

import { mix, transparentize } from "../polished";
import { borderCorners } from "../mixins";
import { color, column, font, size } from "../theme";
import OnScreenDetect from "../OnScreenDetect";
import GracefulImage from "../GracefulImage";

import epimap3d from "../../assets/images/epimap_3d.jpg";
import pointmap from "../../assets/images/3d_pointmap.jpg";
import diagram from "../../assets/images/Web App Reference Architecture.svg";
import missionready from "../../assets/images/missionready.jpg";
import revenue from "../../assets/images/revenue.svg";
import waves from "../../assets/images/waves.png";

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  background: url(${waves});
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: 30%;
`;

const Content = styled(Flex)`
  background: linear-gradient(
    180deg,
    ${color("backgroundDark")} 0%,
    rgba(0, 0, 0, 0) 18.23%
  );
`;

const Description = styled(Box)`
  background: ${transparentize(0.05, "superWhite")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80rem;

  * {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;

const DivPlace = styled.div`
  background: black;
  width: 980px;
  height: 630px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const StyledGracefulImage = styled(GracefulImage)``;

const Title = styled.h2`
  font-family: ${font("display")};
  font-weight: normal;
  letter-spacing: 1px;
  font-size: ${size(4)};
  color: ${color("white")};
  margin: 0;
`;

const Section = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  * {
    border-radius: 20px;

    &:not(${Background}) {
      position: relative;
      z-index: 1;
    }
  }
`;

const ArchitectureSection = styled(Section)`
  ${StyledGracefulImage}, ${DivPlace} {
    margin-top: -${size(5)};
    margin-left: ${size(4)};
  }

  ${Description} {
    position: absolute;
    right: -${size(5)};
  }

  ${Background} {
    background: linear-gradient(
      32.24deg,
      rgba(189, 138, 255, 0.4) 16.65%,
      rgba(255, 138, 0, 0.14) 44.57%
    );
  }

  ${Title} {
    margin-top: -${size(5)};
    width: ${column(7)};
    z-index: 3;
  }
`;

const SectionContent = styled.div`
  margin: 0 -${size(4)};
`;

const EpimapImage = styled(StyledGracefulImage).attrs({
  src: epimap3d
})`
  min-height: 106.8rem;
  min-width: 64rem;
`;

const EpimapSection = styled(Section)`
  margin-top: ${size(6)};

  ${EpimapImage} {
    align-self: flex-end;
    margin-top: -${size(6)};
    position: relative;
    left: ${size(7)};
  }

  ${Description} {
    position: absolute;
    left: ${size(5)};
    z-index: 2;
  }

  ${Background} {
    background: linear-gradient(
      180deg,
      rgba(189, 138, 255, 0.4) 0%,
      rgba(255, 138, 0, 0.14) 100%
    );
  }
  ${Title} {
    margin-left: ${size(4)};
    margin-top: ${size(3)};
    margin-bottom: ${size(4)};
    z-index: 3;
  }
`;

const MissionreadyImage = styled(StyledGracefulImage).attrs({
  src: missionready
})`
  width: 49rem;
  min-width: 49rem;
`;

const MissionreadySection = styled(Section)`
  margin-top: ${size(7)};

  ${MissionreadyImage} {
    position: absolute;
    left: 0;
    margin-top: -${size(3)};
    top: -${size(5)};
  }

  ${Description} {
    position: absolute;
    left: ${column(3)};
    margin-top: ${size(4)};
    top: ${size(6)};
    z-index: 2;
  }

  ${Background} {
    background: linear-gradient(
      180deg,
      rgba(189, 138, 255, 0.4) 0%,
      rgba(255, 138, 0, 0.14) 100%
    );
  }
  ${Title} {
    margin-left: ${size(7)};
    padding-left: ${size(3)};
  }
`;

const Paragraph = styled.p`
  font-weight: 500;
  color: ${color("textDark")};
  text-align: ${props => props.align || "left"};
  > span {
    display: block;
  }

  margin: ${size(2)} 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

const ImagePlaceholder = styled.div`
  max-width: ${props => props.width};
  height: ${props => props.height};
  flex: 1;

  border-radius: 4px;

  background: rgba(0, 0, 0, 0.05);
`;

const StyledImage = styled(LoadedImage)`
  max-width: 50%;
  img {
    width: 100%;
    max-height: 100%;
  }
`;

const Quote = styled.blockquote`
  margin-left: 0;
  font-weight: 300;
  margin-bottom: 4.8rem;
`;

const Author = styled.span`
  color: ${color("black")};
  position: relative;

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

const ResponsiveImage = styled(LoadedImage)`
  transition: opacity 200ms;
  max-width: 100%;
  max-height: 100%;
`;

const ArchitectureSvg = styled(Isvg)`
  width: 98rem;
  height: auto;
  background: black;

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

const renderArchitectureSvg = ({ isOnScreen }) => <DivPlace />;

const PointMapImage = styled(StyledGracefulImage).attrs({
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
      <Content column>
        <ArchitectureSection w={10 / 12} p={4} m={4} ml={0}>
          <Title>High quality services and apps</Title>
          <Background />
          <OnScreenDetect once render={renderArchitectureSvg} />
          <Description w={6 / 12} p={4}>
            <Paragraph>
              Engineering stellar frontends and backends, weaponizing data,
              managing the cloud.
            </Paragraph>
            <Paragraph>It's what we do best.</Paragraph>
            <Paragraph>We excel at React, Node.js, Scala and AWS.</Paragraph>
          </Description>
        </ArchitectureSection>
        <EpimapSection w={10 / 12} p={4} m={4}>
          <Background />
          <Title>Full-stack development</Title>
          <SectionContent>
            <Description w={7 / 12} p={4}>
              <Paragraph>
                Together with iHealth Finland we created machine learning
                algorithms forecasting the spread of pathogens. Using our web
                based interface, doctors and pharma companies can see when and
                where in the country epidemics are likely to occur.
              </Paragraph>
              <Quote>
                “They provided advice, UI design, frontend and backend code,
                cloud infrastructure and data analysis algorithms. All on time,
                very communicative and flexible with adjusting features as the
                project went along. It’s reassuring to know your product is in
                the hands of real professionals. Impeccable work - I can
                recommend them without hesitation.”
              </Quote>
              <Author>
                <span>Dr. Otto Helve</span>
                <span>
                  CEO of iHealth Finland and board member of Duodecim Oy.
                </span>
              </Author>
            </Description>
            <EpimapImage />
          </SectionContent>
        </EpimapSection>
        <MissionreadySection w={11 / 12} p={4} m="0 auto">
          <Background />
          <MissionreadyImage />
          <Title>Rock-solid technical expertise</Title>
          <Description w={6 / 12} p={4}>
            <Paragraph>
              Missionready trusts us to make sure their platform is
              production-ready in terms of performance and scalability.
            </Paragraph>
            <Quote>
              “Makers’ Den helped us evaluate our current platform and find the
              bottlenecks for scale. Thanks to thorough analysis and actionable
              advice from the team, we feel confident in the platform and our
              ability to grow without limits.”
            </Quote>
            <Author>
              <span>Aki Ranin</span>
              <span>CEO of Missionready</span>
            </Author>
          </Description>
        </MissionreadySection>
        <Section mt={4} pt={4} style={{ marginTop: size(7) }}>
          <Crop>
            <PointMapImage />
          </Crop>
          <Description>
            <Quote>
              “Without big data analytics, companies are blind and deaf,
              wandering out onto the web like deer on a freeway.”
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
      </Content>
    </Container>
  );
};

export default Home;
