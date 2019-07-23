import React from "react";
import styled, { css } from "styled-components";
import { Flex } from "grid-styled";

import { color, font, size, sumSize, column } from "../theme";
import * as SectionModule from "./Section";
import { media } from "../styles/mediaQueries";
import Member from "./TeamMember";

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
  margin: ${size(3)} 0 ${size(4)} 0;

  ${media.aboveLaptop`
    font-size: ${size(4)};
    margin-top: ${size(4)};
  `};
`;

const Section = styled(SectionModule.Section)`
  margin-bottom: ${size(5)};
`;

const Container = styled.div`
  background-color: ${color("backgroundDark")};
  padding-bottom: ${size(5)};
`;

const Content = styled(Flex)`
  margin: 0 auto;
  max-width: 144rem;
`;

const Background = styled(SectionModule.Background)`
  background: #1a1a1a;
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

  .${KalleImage} {
    border-radius: 10px;
    min-height: 30rem;
    max-width: 100%;
    max-height: 100%;
  }

  ${Background} {
    border-radius: 20px;
  }

  ${Description} {
    margin-left: ${size(3)};
    margin-top: -${size(4)};
    width: ${column(12)};
  }

  ${media.aboveTablet`
    .${KalleImage} {
      min-height: 50rem;
    }
  `} ${media.aboveLaptop`
    margin-left: ${column(2)};
    width: ${column(9)};
    padding: ${size(4)};

    .${KalleImage} {
      min-height: 60rem;
      margin-right: -${size(5)};
    }

    ${Description} {
      position: absolute;
      left: calc(-${column(3)} + ${size(4)});
      top: -${size(4)};
      margin: 0;
      width: ${column(6)};
    }
  `};
`;


const makeMembers = ({ kalle, korneliusz, harrison, rob, kimi, partners }) => [
  {
    name: 'Carl-Petter',
    image: kalle,
    description: [
      `
        Packs more than a decade of development experience, from
        architecture to UX. A Scala/Java heavyweight whose current love
        is React and NodeJS.
      `,
    ],
    quotes: [{
      content:
        `
        I had the pleasure of working with Kalle in total more than one
        and a half years during my time in Rovio. Kalle is truly a jack of
        all trades: seasoned with competence and enough humour to survive
        the toughest of situations.
      `,
      author: {
        link: 'https://www.linkedin.com/in/ossi-tiltti-3120071/',
        name: 'Ossi Tiltti, Technical Director at Rovio'
      }
    }]
  },
  {
    name: 'Korneliusz',
    image: korneliusz,
    description: [
      `
        Managing Director and a seasoned software engineer. Passionate
        about cloud architecture and frontend development, especially the
        React ecosystem.
      `
    ],
    quotes: [{
      content: `
              He understands a startup’s need for speed and made effort towards
              improving the team’s velocity without sacrificing quality.
                `,
      author: {
        link: 'https://www.linkedin.com/in/silvan-saxer-6b9268130/',
        name: 'Silvan Saxer, COO at FRI:DAY Versicherung'
      }
    }]
  },
  {
    name: 'Harrison',
    image: harrison,
    description: [
      `
        Math & petroengineering genius in a love affair with code since the age of 15.
        Full-stack web is the name of the game, speed and discipline are the key tenets.
      `,
      `
        His ability to dismantle problems and catch details never ceases to amaze.
      `
    ],
    quotes: []
  },
  {
    name: 'Rob',
    image: rob,
    description: [
      `
        His path goes on from enterprise
        consultant, through successful startup
        CTO, to indie hacker with 2 prospering
        products.
      `,
      `
        True fullstack, from mobile to cloud infrastructure,
        never losing sight of the big picture. Keen sailor and
        crypto analyst.
      `
    ],
    quotes: []
  },
  {
    name: 'Kimi',
    image: kimi,
    description: [
      `
        AI, machine learning & data science powerhouse
        with coding skills and a pragmatic approach to boot.
      `,
      `
        When not busy managing PhD offers, he stays on top of all
        things blockchain. Breaching security is his favorite
        evening pastime.
      `
    ],
    quotes: []
  },
  {
    name: 'Our Partners',
    image: partners,
    description: [
      `
        We are connected to a wide range of industry experts within
        Design, UX, Machine Learning as well as stellar developers within
        web, mobile and backends.
    `,
    `We work with the best.`
    ],
  },
]


const Team = ({ images }) => {
  return (
    <Container id="team">
      <Title>Meet your makers</Title>
      <Content column>
        {makeMembers(images).map(member => <Member key={member.name} {...member} />)}
      </Content>
    </Container>
  );
};

export default Team;
