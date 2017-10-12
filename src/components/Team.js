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

const Title = styled.h2`
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
  flex-direction: row-reverse;
  margin-bottom: 4.8rem;
  justify-content: center;
  text-align: right;
  align-items: flex-start;

  :not(:first-child) {
    margin-top: 9.6rem;
  }

  a {
    align-self: flex-end;
  }

  > * {
    :first-child {
      margin-left: 2.4rem;
    }

    :last-child {
      margin-right: 2.4rem;
    }
  }

  :nth-child(2n + 1) {
    a {
      align-self: flex-start;
    }

    text-align: left;
    flex-direction: row;

    > * {
      :first-child {
        margin-right: 2.4rem;
        margin-left: 0;
      }

      :last-child {
        margin-left: 2.4rem;
        margin-right: 0;
      }
    }
  }
`;

const Paragraph = styled.p`
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 300;
  color: ${color("black")};
  ${props =>
    props.align &&
    `
    text-align: ${props => props.align};
  `} strong {
    font-weight: 500;
  }

  span {
    display: block;
  }

  :first-child {
    margin-top: 0;
  }
`;

const ImagePlaceholder = styled.div`
  max-width: ${props => props.width};
  height: ${props => props.height};
  flex: 1;
  border: 1px solid #979797;

  border-radius: 1px;

  background: rgba(0, 0, 0, 0.05);
`;

const Quote = styled.blockquote`
  margin-left: 0;
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 300;
  margin: 1.2rem 0;
  ::before {
    content: "“";
  }
  ::after {
    content: "”";
  }
`;

const authorStyle = css`
  font-size: 2.4rem;
  position: relative;
  margin-bottom: 2.4rem;

  ::before {
    content: "–";
    position: absolute;
    left: -2.4rem;
    top: 0;
  }

  margin-left: 2.4rem;
`;

const AuthorSpan = styled.span`${authorStyle} color: ${color("black")};`;

const AuthorLink = styled.a.attrs({
  target: "blank"
})`
  &,
  &:active,
  &:visited,
  &:link {
    ${authorStyle} color: ${color("accent")} !important;
    transition: opacity 200ms;
    font-weight: 500;
    ${props =>
      smartUnderline({
        background: color("whiteAlt")(props),
        selection: color("whiteAlt")(props),
        text: color("accent")(props),
        position: "93%",
        size: "2px"
      })} &:hover {
      opacity: 0.8;
    }
  }
`;

const Author = ({ children, href }) =>
  href ? (
    <AuthorLink href={href}>{children}</AuthorLink>
  ) : (
    <AuthorSpan>{children}</AuthorSpan>
  );

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
  height: 56rem;

  svg {
    width: 100%;
    height: 56rem;

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
      <Section>
        <ImagePlaceholder width="24rem" height="31rem" />
        <Description>
          <Paragraph>
            <span>
              <strong>Korneliusz Caputa</strong> is a grade A developer.
            </span>
            <span>
              7 years of professional experience. React is his current main
              interest and his writings on React are widely shared and followed.
            </span>
          </Paragraph>
          <Quote>
            He understands a startup’s need for speed and made effort towards
            improving the team’s velocity without sacrificing quality.
          </Quote>
          <Author href="https://www.linkedin.com/in/silvan-saxer-6b9268130/">
            Silvan Saxer, COO at FRI:DAY Versicherung
          </Author>
          <Quote>
            Absolute craftmanship. It’s easy to recommend Korneliusz.
          </Quote>
          <Author href="https://www.linkedin.com/in/otto-helve-665a6b4b/">
            Dr. Otto Helve, CEO at iHealth Finland
          </Author>
        </Description>
      </Section>
      <Section>
        <ImagePlaceholder width="32rem" height="44rem" />
        <Description>
          <Paragraph>
            <span>
              <strong>Carl-Petter (Kalle) Bertell</strong> packs more than a
              decade of development experience. A Scala/Java hevyweight whose
              current love is React and NodeJS.
            </span>
          </Paragraph>
          <Quote>
            I had the pleasure of working with Kalle in total more than one and
            a half years during my time in Rovio. Kalle is truly a jack of all
            trades: seasoned with competence and enough humour to survive the
            toughest of situations.
          </Quote>
          <Author href="https://www.linkedin.com/in/silvan-saxer-6b9268130/">
            Ossi Tiltti, Technical Director at Rovio
          </Author>
          <Quote>
            I can honestly recommend him to anyone needing help with their
            frontend needs.
          </Quote>
          <Author href="https://www.linkedin.com/in/otto-helve-665a6b4b/">
            Mathias Nestler, CTO at FRI:DAY
          </Author>
        </Description>
      </Section>
      <Section kimi>
        <ImagePlaceholder width="13rem" height="51rem" />
        <Description>
          <Paragraph>
            <span>
              <strong>Kimi Ylilammi</strong> has disrupted more than a few
              industries with his machine learning algorithms.
            </span>
          </Paragraph>
        </Description>
      </Section>
    </Container>
  );
};

export default Home;
