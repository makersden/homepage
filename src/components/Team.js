import React from "react";
import styled, { css } from "styled-components";
import { Flex } from "grid-styled";
import Isvg from "react-inlinesvg";
import GatsbyImage from "gatsby-image";

import { color, font, size, sumSize, column } from "../theme";
import GracefulImage from "../GracefulImage";
import * as SectionModule from "./Section";
import { media } from "../styles/mediaQueries";

import kalle from "../../assets/images/kalle.png";
import korneliusz from "../../assets/images/korneliusz2.jpg";
import partners from "../../assets/images/partners.png";
import giantCog from "../../assets/images/GiantCog.svg";

const sectionSpacing = css`
  margin-top: ${size(5)};

  &:not(:first-child) {
    ${media.aboveLaptop`
      margin-top: ${size(6)};
    `};
  }
`;

const Title = styled.h2`
  font-family: ${font("display")};
  letter-spacing: 1px;
  text-align: center;
  font-weight: 300;
  color: ${color("accent")};
  font-size: ${size(3)};
  margin: 0;
  margin-top: ${size(3)};

  ${media.aboveLaptop`
    font-size: ${size(4)};
    margin-top: ${size(4)};
  `};
`;

const CogContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const GiantCog = styled(Isvg).attrs({
  src: giantCog
})`
  position: absolute;
  top: 25%;

  animation: rotate 120s linear infinite;
  svg {
    height: 75%;
  }

  ${media.belowLaptop`
    left: -32.75%;
  `}
  ${media.aboveLaptop`
    right: -32.75%;
  `}

  @keyframes rotate {
   from {
     transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`;

const Section = styled(SectionModule.Section)`
  margin-bottom: ${size(5)};
`;

const Container = styled.div`
  background-color: ${color("darkGrey")};
  padding-bottom: ${size(5)};
`;

const Content = styled(Flex)`
  margin: 0 auto;
  max-width: 144rem;
`;

const Background = styled(SectionModule.Background)`
  background: #1a1a1a;
`;

const Paragraph = styled(SectionModule.Paragraph)`
  color: ${color("whiteAlt")};
`;

const Description = styled(SectionModule.Description)`
  background: #2f80ed;
  border-radius: 10px;
  color: ${color("whiteAlt")};
  font-size: 1.8rem;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: 500;
`;

const Quote = styled(SectionModule.Quote)`
  margin-bottom: ${size(2)};
`;

const authorStyle = css`
  font-size: 1.8rem;
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

const KalleImage = "kalle";

const AuthorSpan = styled.span`
  ${authorStyle};
  color: ${color("black")};
`;

const AuthorLink = styled(SectionModule.AuthorLink)`
  ${authorStyle};
  color: ${color("whiteAlt")} !important;
`;

const Author = ({ children, href }) =>
  href ? (
    <AuthorLink href={href}>{children}</AuthorLink>
  ) : (
    <AuthorSpan>{children}</AuthorSpan>
  );

const KalleSection = styled(Section)`
  margin: 0 ${size(3)};
  padding-bottom: ${size(3)};
  ${sectionSpacing};
  ${KalleImage} {
    border-radius: 10px;
  }

  ${Background} {
    border-radius: 20px;
  }

  ${Description} {
    margin-left: ${size(3)};
    margin-top: -${size(4)};
    width: ${column(12)};
  }

  ${media.aboveLaptop`
    margin-left: ${column(2)};
    width: ${column(9)};
    padding: ${size(4)};

    .${KalleImage} {
      margin-right: -${size(5)};
    }

    ${Description} {
      position: absolute;
      left: calc(-${column(3)} + ${size(4)});
      top: -${size(4)};
      margin: 0;
      width: ${column(7)};
    }
  `};
`;

const KorneliuszImage = "korneliusz";

const KorneliuszSection = styled(Section)`
  margin: 0 ${size(3)};
  padding-bottom: ${size(3)};
  ${sectionSpacing};
  ${Background} {
    border-radius: 20px;
  }

  ${Description} {
    margin-top: -${sumSize(5)};
    margin-left: -${size(3)};
    width: calc(${column(12)});
  }

  ${media.aboveTablet`
    margin-left: calc(${column(3)} - ${size(3)});
    width: ${column(9)};
    ${Description} {
      position: relative;
      top: ${size(3)};
      margin-top: -${sumSize(6, 3)};
      margin-bottom: ${size(3)};
    }

  `};
  ${media.aboveLaptop`
    margin: ${size(3)};
    margin-top: ${size(5)};
    margin-left: ${size(3)};
    width: ${column(7)};
    padding: ${size(4)} 0;

    ${Description} {
      margin: 0;
      position: absolute;
      right: -${column(7)};
      padding: ${size(3)};
      top: ${size(5)};
      width: ${column(10)};
    }

    .${KorneliuszImage} {
      margin: 0 ${size(4)};
      width: auto;
      min-height: 65rem;
    }
  `};

  ${media.aboveDesktop`
    ${Description} {
      top: ${size(5)};
      right: -${column(6)};
    }
  `};
`;

const PartnersImage = styled(GracefulImage).attrs({
  src: partners,
  "data-aos-duration": 1000
})`
  max-height: 100%;
  max-width: 100%;
`;

const PartnersSection = styled(Section)`
  justify-content: center;
  margin: ${size(3)};
  margin-top: ${size(5)};
  margin-bottom: 0;
  position: relative;
  ${sectionSpacing};
  ${Background} {
    border-radius: 20px;
  }

  ${Description} {
    margin: ${size(3)};
    margin-right: -${size(3)};
    margin-top: -${size(4)};
  }

  ${media.aboveTablet`
    ${PartnersImage} {
      width: calc(${column(12)} - ${size(4)});
      margin-left: ${size(3)};
      margin-top: ${size(3)};
    }

    ${Description} {
      position: relative;
      margin: 0;
      left: ${column(2)};
      margin-top: -${size(5)};
      top: ${size(4)};
      width: ${column(9)};
    }
  `};

  ${media.aboveLaptop`
    width: ${column(10)};
    margin-left: ${column(1)};
  `};

  ${media.aboveBigLaptop`
    width: ${column(9)};
    margin-left: ${column(3)};
  `};

  ${media.aboveDesktop`
    width: ${column(9)};
    margin-left: ${column(3)};
    padding: ${size(5)};
    padding-bottom: 0;

    ${PartnersImage} {
      margin: 0;
      width: ${column(12)};
      min-width: 75.1rem;
      min-height: 56.3rem;
    }

    ${Description} {
      position: relative;
      margin: 0;
      margin-right: ${sumSize(5, 4)};
      margin-top: -${size(5)};
      align-self: flex-end;
      width: ${column(8)};
    }
  `};
`;

const Team = ({ images }) => {
  return (
    <Container id="team">
      <Title>The A-Team</Title>
      <Content column>
        {/* <CogContainer>
            <GiantCog />
            </CogContainer> */}
        <KalleSection>
          <Background />
          <div
            data-aos="fade-right"
            data-aos-duration={1000}
            className={KalleImage}
          >
            <GatsbyImage {...images.kalle} />
          </div>
          <Description data-aos="fade-up">
            <Name>Carl-Petter (Kalle) Bertell</Name>
            <Paragraph>
              <span>
                Packs more than a decade of development experience, from
                architecture to UX. A Scala/Java hevyweight whose current love
                is React and NodeJS.
              </span>
            </Paragraph>
            <Quote>
              I had the pleasure of working with Kalle in total more than one
              and a half years during my time in Rovio. Kalle is truly a jack of
              all trades: seasoned with competence and enough humour to survive
              the toughest of situations.
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
        </KalleSection>
        <KorneliuszSection>
          <Background />
          <div data-aos="fade-left" data-aos-duration={1000}>
            <GatsbyImage {...images.korneliusz} className={KorneliuszImage} />
          </div>
          <Description data-aos="fade-down">
            <Name>Korneliusz Caputa</Name>
            <Paragraph>
              Managing Director and a seasoned software engineer. Passionate
              about cloud architecture and frontend development, especially the
              React ecosystem.
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
        </KorneliuszSection>
        <PartnersSection>
          <Background />
          <PartnersImage />
          <Description>
            <Name>Our network of Trusted Partners</Name>
            <Paragraph>
              We are connected to a wide range of industry experts within
              Design, UX, Machine Learning as well as stellar developers within
              web, mobile and backends.
            </Paragraph>
            <Paragraph>We work with the best.</Paragraph>
          </Description>
        </PartnersSection>
      </Content>
    </Container>
  );
};

export default Team;
