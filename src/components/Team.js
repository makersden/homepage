import React from "react";
import styled, { css } from "styled-components";
import { Flex } from "grid-styled";

import { color, font, size, column } from "../theme";
import GracefulImage from "../GracefulImage";
import * as SectionModule from "./Section";

import kalle from "../../assets/images/kalle.png";
import korneliusz from "../../assets/images/korneliusz2.jpg";
import partners from "../../assets/images/partners.png";

const Title = styled.h2`
  font-family: ${font("display")};
  letter-spacing: 1px;
  margin: ${size(5)} 0;
  text-align: center;
  font-size: ${size(4)};
  font-weight: 300;
  color: ${color("accent")};
`;

const Section = styled(SectionModule.Section)`
  margin-bottom: ${size(5)};
`;

const Container = styled.div`
  background-color: ${color("darkGrey")};
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
  font-size: 1.8rem;
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
  font-weight: 700;
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

const KalleImage = styled(GracefulImage).attrs({
  src: kalle
})`
  max-height: 100%;
  max-width: 100%;
`;

const AuthorSpan = styled.span`
  ${authorStyle} color: ${color("black")};
`;

const AuthorLink = styled.a.attrs({
  target: "blank"
})`
  &,
  &:active,
  &:visited,
  &:link {
    ${authorStyle} color: ${color("whiteAlt")} !important;
    transition: opacity 200ms;
    font-weight: 500;
    &:hover {
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

const KalleSection = styled(Section)`
  margin-left: ${column(1)};
  ${KalleImage} {
    margin-left: ${size(5)};
    min-width: 107.7rem;
    min-height: 74.4rem;
  }

  ${Description} {
    position: absolute;
    left: ${size(4)};
    top: ${size(5)};
  }
`;

const KorneliuszImage = styled(GracefulImage).attrs({
  src: korneliusz
})`
  max-height: 100%;
  max-width: 100%;
`;

const KorneliuszSection = styled(Section)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${Description} {
    position: absolute;
    right: -${size(6)};
  }

  ${KorneliuszImage} {
    margin-left: ${size(4)};
    height: 63.5rem;
    min-height: 63.5rem;
    min-width: 49.5rem;
  }
`;

const PartnersImage = styled(GracefulImage).attrs({
  src: partners
})`
  max-height: 100%;
  max-width: 100%;
`;

const PartnersSection = styled(Section)`
  align-items: center;
  justify-content: center;
  margin-left: ${column(3)};
  padding: ${size(5)};
  padding-bottom: ${size(5, 0) + size(3, 0)}px;

  ${PartnersImage} {
    min-width: 75.1rem;
    min-height: 56.3rem;
  }

  ${Description} {
    position: absolute;
    right: ${size(5, 0) + size(4, 0)}px;
    bottom: ${size(4, 0)}px;
  }
`;

const Home = () => {
  return (
    <Container>
      <Title>The A-Team</Title>
      <Content column>
        <KalleSection w={10 / 12} p={4}>
          <Background />
          <KalleImage />
          <Description w={5 / 12} p={3}>
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
        <KorneliuszSection w={6 / 12} py={4}>
          <Background />
          <KorneliuszImage />
          <Description w={8 / 12} p={3}>
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
        <PartnersSection w={9 / 12} p={4}>
          <Background />
          <PartnersImage />
          {/* <ImagePlaceholder border width="13rem" height="51rem" /> */}
          <Description w={7 / 12} p={3}>
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

export default Home;
