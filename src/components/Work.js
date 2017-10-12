import React from "react";
import styled, { css } from "styled-components";
import Helmet from "react-helmet";
import Image from "react-imageloader";
import Isvg from "react-inlinesvg";
import LazyLoad from "react-lazyload";

import { mix } from "../polished";
import { borderCorners, smartUnderline } from "../mixins";
import { color } from "../theme";
import TechStack from "../components/TechStack";
import OnScreenDetect from "../OnScreenDetect";

import epimap3d from "../../assets/images/epimap_3d.jpg";
import pointmap from "../../assets/images/3d_pointmap.jpg";
import diagram from "../../assets/images/Web App Reference Architecture.svg";
import revenue from "../../assets/images/dark_dashboard.jpg";

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

    // POC - elements should have IDs not to fall apart during the transition.
    * {
      transition: transform 1s;
      transform: translateY(${props => (props.show ? "0rem" : "-100rem")});
      :nth-child(2n + 1) {
        transition-duration: 1.2s;
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
        <Crop width="48rem">
          <StyledImage
            src={epimap3d}
            preloader={() => <ImagePlaceholder width="100%" height="76rem" />}
          />
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
        <StyledImage
          src={pointmap}
          preloader={() => <ImagePlaceholder width="47rem" height="49rem" />}
        />
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
        <StyledImage
          src={revenue}
          preloader={() => <ImagePlaceholder width="55rem" height="66rem" />}
        />
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
