import React from "react";
import styled, { css } from "styled-components";
import Isvg from "react-inlinesvg";
import { Flex } from "grid-styled";
import Link from "gatsby-link";

import { circle, transition } from "../mixins";
import { color, column, font, size, sumSize } from "../theme";
import MQs, { media } from "../styles/mediaQueries";
import OnScreenDetect from "../OnScreenDetect";
import GracefulImage from "../GracefulImage";
import GracefulSvg from "../GracefulSvg";
import FWF from "../FadeWithoutFont";

import architecture from "../../assets/images/Web App Reference Architecture.svg";
import epimap3d from "../../assets/images/epimap_3d.jpg";
import missionready from "../../assets/images/missionready.jpg";
import revenue from "../../assets/images/revenue.svg";
import waves from "../../assets/images/waves.png";
import data from "../../assets/images/data.png";
import otto from "../../assets/images/otto.png";
import aki from "../../assets/images/aki.png";

const { AboveTablet, BelowTablet } = MQs;

import {
  authorStyle,
  AuthorLink,
  Background,
  Description,
  Paragraph,
  Quote,
  Section
} from "./Section";

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

const Author = styled.figure`
  display: flex;
  align-items: center;
  margin: 0;

  figcaption {
    ${authorStyle} margin-left: ${size(2)};

    span {
      font-weight: 300;
    }
  }
`;

const AuthorImage = styled(GracefulImage).attrs({
  static: true
})`
  ${circle("7.5rem")};
`;

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  background: url(${waves});
  background-repeat: repeat;
  background-size: 25%;
`;

const Curtain = styled.div`
  background: linear-gradient(
    180deg,
    ${color("backgroundDark")} 0%,
    rgba(0, 0, 0, 0) 18.23%,
    rgba(0, 0, 0, 0) 81.77%,
    ${color("darkGrey")} 99%
  );
`;

const Content = styled(Flex)`
  max-width: 144rem;
  margin: 0 auto;
  padding: ${size(7)} 0;
  width: 100%;
  overflow: hidden;
`;

const StyledGracefulImage = styled(GracefulImage)``;

const Title = styled.h2`
  font-family: ${font("display")};
  font-weight: normal;
  letter-spacing: 1px;
  color: ${color("white")};
  margin: 0;
  font-size: ${size(3)};
  ${media.aboveTablet`
    font-size: ${size(4)};
  `};
`;

const ArchitectureSvg = styled(Isvg).attrs({
  src: architecture
})`
  background: black;
  display: block;

  &.loaded {
    svg {
      .drop {
        transition: transform 1s, opacity 1.5s;
        transform: translateY(${props => (props.show ? "0rem" : "-100rem")});
        opacity: ${props => (props.show ? 1 : 0)};
        ${Array.from({ length: 30 }).map(
          (_, i) => css`
            :nth-child(${i + 1}) {
              transition-delay: ${i * 200}ms;
            }
          `
        )}
        }

        &.labels {
          transition-delay: 300ms;
        }
      }
  }

  svg {
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`;

const ArchitectureSection = styled(Section)`
  position: relative;
  width: ${column(12)};
  padding: ${size(3)};
  margin: 0;

  ${ArchitectureSvg} {
    width: calc(100% + ${size(3)});
    padding: ${size(2)};
    position: absolute;
    left: -${size(2)};
    right: -${size(3)};
    bottom: -${size(5)};
  }

  ${Description} {
  }

  ${Background} {
    background: linear-gradient(
      32.24deg,
      rgba(189, 138, 255, 0.4) 16.65%,
      rgba(255, 138, 0, 0.14) 44.57%
    );
  }

  ${Title} {
    margin: -${sumSize(5, 2)}px 0 ${size(3)} 0;
    width: ${column(12)};
    z-index: 3;

    ${media.belowBigPhone`
      margin-top: -${sumSize(5, 4, 3)}px;
    `};
  }

  ${media.aboveTablet`
    width: ${column(10)};
    padding: ${size(4)};
    margin: ${size(4)};
    margin-left: 0;

    ${ArchitectureSvg} {
      position: static;
      margin-top: -${sumSize(5, 4)}px;
      margin-left: ${size(4)};
      padding: ${size(4)};
      padding-top: ${sumSize(5, 3)}px;
      width: 98rem;
      height: auto;
    }

    ${Description} {
      position: absolute;
      right: -${size(5)};
      width: ${column(6)};
    }

    ${Background} {
      background: linear-gradient(
        32.24deg,
        rgba(189, 138, 255, 0.4) 16.65%,
        rgba(255, 138, 0, 0.14) 44.57%
      );
    }

    ${Title} {
      margin: 0;
      margin-top: -${sumSize(5)}px;
      width: ${column(7)};
    }
  `};
`;

const SectionContent = styled.div`
  ${media.aboveTablet`
    margin: 0 -${size(4)};
  `};
`;

const EpimapImage = styled(StyledGracefulImage).attrs({
  src: epimap3d
})`
  max-width: 100%;
`;

const EpimapSection = styled(Section)`
  padding: ${size(3)};
  width: ${column(12)};
  margin-top: ${size(6)};

  ${EpimapImage} {
    position: absolute;
    top: -${size(3)};
    right: 0;
    left: ${size(4)};
  }

  ${Description} {
    position: relative;
    left: 0;
    z-index: 2;
    width: ${column(12)};
  }

  ${Background} {
    background: linear-gradient(
      180deg,
      rgba(189, 138, 255, 0.4) 0%,
      rgba(255, 138, 0, 0.14) 100%
    );
  }

  ${Title} {
    margin-bottom: ${size(3)};
    z-index: 3;
  }

  ${media.aboveTablet`
    margin: ${size(4)};
    margin-top: ${size(6)};
    padding: ${size(4)};
    width: ${column(10)};

    ${EpimapImage} {
      position: static;
      margin-top: -${sumSize(7, 6, 4)}px;
      margin-left: ${size(7)};
      width: calc(100% - ${sumSize(6, 4)}px);
    }

    ${Description} {
      left: ${size(5)};
      width: ${column(7)};
    }

    ${Background} {
      background: linear-gradient(
        180deg,
        rgba(189, 138, 255, 0.4) 0%,
        rgba(255, 138, 0, 0.14) 100%
      );
    }
    ${Title} {
      margin-bottom: ${size(4)};
      margin-left: ${size(4)};
      margin-top: ${size(3)};
    }
  `};
`;

const MissionreadyImage = styled(StyledGracefulImage).attrs({
  src: missionready
})`
  max-width: 100%;
  max-height: 100%;
  ${media.aboveTablet`
    height: 70.6rem;
    min-width: 49rem;
    min-height: 70.6rem;
  `}
`;

const MissionreadySection = styled(Section)`
  margin: 0 auto;
  margin-top: ${size(5)};
  min-height: ${size(7)};
  width: ${column(12)};
  padding: ${size(2)};

  ${MissionreadyImage} {
    position: relative;
    top: -${size(5)};
  }

  ${Description} {
    position: absolute;
    left: ${column(1)};
    top: ${sumSize(5, 3)}px;
    margin-top: ${size(2)};
    width: ${column(10)};
    z-index: 2;
  }

  ${Background} {
    background: linear-gradient(
      121.27deg,
      rgba(190, 84, 255, 0.348) 45.32%,
      rgba(252, 162, 25, 0.216) 69.28%
    );
  }

  ${Title} {
    position: absolute;
    top: ${size(2)};
    width: ${column(6)};
    left: ${column(3)};
  }

  ${media.aboveTablet`
    width: ${column(10)};
    margin-left: ${column(1)};
    padding: ${size(4)};
    margin-top: ${size(6)};

    ${MissionreadyImage} {
      position: absolute;
      left: ${size(4)};
      top: -${size(5)};
    }

    ${Title} {
      position: static;
      margin-left: ${column(6)};
      padding-left: ${sumSize(4)}px;
    }

    ${Description} {
      left: ${column(3)};
      top: ${sumSize(6, 4, 3, 1)}px;
      width: ${column(6)};
    }
  `};
`;

const DataImage = styled(StyledGracefulImage).attrs({
  src: data
})`
  max-width: 100%;
  max-height: 100%;
`;

const DataSection = styled(Section)`
  position: relative;
  margin-top: ${size(7)};
  padding: ${size(3)};
  width: ${column(12)};

  ${Description} {
    margin-top: -${sumSize(4, 3, 2)}px;
    margin-left: ${size(3)};
    width: ${column(12)};
    z-index: 2;
  }

  ${Background} {
    background: linear-gradient(
      216.12deg,
      rgba(255, 197, 48, 0.342) 6.61%,
      rgba(245, 142, 241, 0.198) 74.88%
    );
  }

  ${Title} {
    position: absolute;
    bottom: ${size(5)};
    left: ${size(3)};
    span {
      display: block;
    }
  }

  ${media.aboveTablet`
    margin-left: ${column(3)};
    padding: ${size(4)};
    padding-top: ${sumSize(4, 3)}px;
    width: ${column(9)};

    ${Crop} {
      position: relative;
      margin-left: ${column(4)};
      margin-top: ${size(5, 0) + size(3, 0)}px;
    }

    ${Description} {
      position: absolute;
      bottom: ${sumSize(5, 3, 2, 1)}px;
      left: -${column(1)};
      width: ${column(6)};
    }

    ${Title} {
      position: absolute;
      bottom: ${size(3)};
      left: ${sumSize(5)}px;
    }
  `};
`;

const YourProjectImage = styled(GracefulSvg).attrs({
  src: revenue
})`
  svg {
    max-height: 100%;
    max-width: 100%;
    width: 100%;
  }

  ${media.aboveTablet`
    svg {
      width: 80rem;
      height: 50rem;
    }

    width: 80rem;
    min-width: 80rem;
  `}
`;

const YourProjectImageContainer = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: ${size(3)};

  ${media.aboveTablet`
    padding: ${size(4)} ${size(5)};
  `};
`;

const CallToAction = styled.a`
  width: 100%;
  display: block;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.12rem;
  background-color: ${color("black")};
  font-weight: bold;
  text-decoration: none;
  ${transition("transform", "background-color")};
  transform: scale(1);

  span {
    color: ${color("accent")};
    ${transition("color")};
  }

  :hover {
    border-color: ${color("accent")};
    background-color: ${color("accent")};
    transform: scale(1.1);

    span {
      color: white;
    }
  }
`;

const YourProjectSection = styled(Section)`
  align-items: center;
  margin: ${size(6)} auto 0 auto;
  width: ${column(12)};

  ${YourProjectImageContainer} {
    margin-top: -${size(4)};
    padding: ${size(3)} 0;
    width: 100%;
  }

  ${Background} {
    background: linear-gradient(
      224.32deg,
      rgba(255, 197, 48, 0.342) 10.18%,
      rgba(245, 142, 241, 0.198) 72.27%
    );
  }

  ${Paragraph} {
    font-weight: bold;
    line-height: 1.12;
    letter-spacing: 0.12rem;
    margin-bottom: ${size(2)};
    text-align: center;
  }

  ${CallToAction} {
    margin-top: ${size(2)};
    font-size: ${size(2)};
    padding: ${size(3)} 0;
  }

  ${Description} {
    margin-top: -${sumSize(4, 2, 1)}px;
    margin-bottom: ${size(3)};
    width: ${column(8)};
    font-size: ${size(3)};
  }

  ${Title} {
    margin-bottom: ${size(2)};
  }

  ${media.aboveTablet`
    margin-top: ${size(6)};
    padding: 0 ${size(4)};
    width: ${column(10)};

    ${YourProjectImageContainer} {
      margin: ${size(4)};
      margin-top: -${size(4)};
    }

    ${CallToAction} {
      margin-top: ${size(3)};
      min-height: 16.7rem;
      span {
        font-size: ${sumSize(2, 1)}px;
      }
    }

    ${Description} {
      position: absolute;
      bottom: -${sumSize(6, 4, 2, 1)}px;
      width: ${column(5)};
    }

    ${Paragraph} {
      margin-bottom: ${size(3)};
      font-size: ${sumSize(2, 1)}px;
    }
  `};
`;

const Home = () => {
  return (
    <Container>
      <Curtain>
        <Content column>
          <ArchitectureSection>
            <Title>
              <FWF>Outstanding digital products</FWF>
            </Title>
            <Background />
            <OnScreenDetect once>
              {({ isOnScreen }) => <ArchitectureSvg show={isOnScreen} />}
            </OnScreenDetect>
            <Description>
              <FWF>
                <Paragraph>
                  Engineering stellar frontends and backends, weaponizing data,
                  managing the cloud.
                </Paragraph>
                <Paragraph>It's what we do best.</Paragraph>
                <Paragraph>
                  We excel at React, Node.js, Scala and AWS.
                </Paragraph>
              </FWF>
            </Description>
          </ArchitectureSection>
          <EpimapSection>
            <Background />
            <Title>
              <FWF>Full-stack development</FWF>
            </Title>
            <SectionContent>
              <Description>
                <FWF>
                  <Paragraph>
                    Together with iHealth Finland we created machine learning
                    algorithms forecasting the spread of pathogens. Doctors and
                    pharma companies use our web-based interface to monitor when
                    and where in the country epidemics are likely to occur.
                  </Paragraph>
                  <Quote>
                    They provided advice, UI design, frontend and backend code,
                    cloud infrastructure and data analysis algorithms. All on
                    time, very communicative and flexible with adjusting
                    features as the project went along. It’s reassuring to know
                    your product is in the hands of real professionals.
                    Impeccable work - I can recommend them without hesitation.
                  </Quote>
                  <Author>
                    <AuthorImage src={otto} />
                    <figcaption>
                      <AuthorLink href="https://www.linkedin.com/in/otto-helve-665a6b4b/">
                        Dr. Otto Helve
                      </AuthorLink>
                      <span>CEO of iHealth Finland</span>
                    </figcaption>
                  </Author>
                </FWF>
              </Description>
              <EpimapImage />
            </SectionContent>
          </EpimapSection>
          <MissionreadySection>
            <Background />
            <MissionreadyImage />
            <Title>
              <FWF>Rock-solid technical expertise</FWF>
            </Title>
            <Description>
              <FWF>
                <Paragraph>
                  Missionready trusts us to make sure their platform is
                  production-ready in terms of performance and scalability.
                </Paragraph>
                <Quote>
                  Makers’ Den helped us evaluate our current platform and find
                  the bottlenecks for scale. Thanks to thorough analysis and
                  actionable advice from the team, we feel confident in the
                  platform and our ability to grow without limits.
                </Quote>
                <Author>
                  <AuthorImage src={aki} />
                  <figcaption>
                    <AuthorLink href="https://www.linkedin.com/in/otto-helve-665a6b4b/">
                      Aki Ranin
                    </AuthorLink>
                    <span>CEO of Missionready</span>
                  </figcaption>
                </Author>
              </FWF>
            </Description>
          </MissionreadySection>
          <DataSection>
            <Background />
            <AboveTablet>
              <Crop width="64.2rem" height="54.2rem">
                <DataImage />
                <Title>
                  <FWF>
                    <span>Data +</span>
                    <span>Algorithm +</span>
                    <span>UX = Product</span>
                  </FWF>
                </Title>
              </Crop>
            </AboveTablet>
            <BelowTablet style={{ position: "relative" }}>
              <DataImage />
              <Title>
                <FWF>
                  <span>Data +</span>
                  <span>Algorithm +</span>
                  <span>UX = Product</span>
                </FWF>
              </Title>
            </BelowTablet>
            <Description>
              <FWF>
                <Paragraph>
                  <Link to="berlin-flights">
                    To explain the importance of contextualizing facts, we
                    visualized flight departures and arrivals in Berlin. Click
                    here for the full story.
                  </Link>
                </Paragraph>
                <Paragraph>
                  Data is of no use without actionable information and
                  appropriate visualization. We help companies turn their data
                  into new insights.
                </Paragraph>
                <Quote>
                  Without big data analytics, companies are blind and deaf,
                  wandering out onto the web like deer on a freeway.
                </Quote>
                <Author>
                  <span>Geoffrey Moore</span>
                </Author>
              </FWF>
            </Description>
          </DataSection>
          <YourProjectSection>
            <Background />
            <YourProjectImageContainer>
              <Title>
                <FWF>At your service?</FWF>
              </Title>
              <YourProjectImage />
            </YourProjectImageContainer>
            <Description px={3} py={4} w={5 / 12}>
              <FWF>
                <Paragraph>
                  Looking to build something new?
                  <br />
                  Improving an existing product?
                </Paragraph>
              </FWF>
              <CallToAction href="mailto:hello@makersden.io">
                <FWF>
                  <span>Let's talk.</span>
                </FWF>
              </CallToAction>
            </Description>
          </YourProjectSection>
        </Content>
      </Curtain>
    </Container>
  );
};

export default Home;
