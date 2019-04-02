import React from 'react';
import styled, { css, injectGlobal } from "styled-components";
import flatMap from 'lodash/fp/flatMap'
import GatsbyImage from "gatsby-image";

import * as SectionModule from "./Section";
import range from 'lodash/range';
import theme from "../theme";
import { color, size, } from "../theme";
import {media} from '../styles/mediaQueries';

const offsets = {
  Korneliusz: '-35%',
  Harrison: '8%'
}

const Member = ({ image, name, description, quotes }) => (
  <MemberContainer offset={offsets[name]}>
    <MemberImage {...image}  />
    <Background data-aos="gradient" />
    <MemberContent>
      <Description data-aos="fade-up">
        <Name>{name}</Name>
        {flatMap((paragraph, i) => (
          <Paragraph key={i}>
            <span>{paragraph}</span>
          </Paragraph>
        ), description)}
        {flatMap(quote => [
          <Quote>{quote.content}</Quote>,
          <Author href={quote.author.link}>
            {quote.author.name}
          </Author>
        ], quotes)}
      </Description>
    </MemberContent>
  </MemberContainer>
)

export default Member;

const height = '500px';

const MemberContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  ${media.aboveTablet`
    > * {
      width: 55%;
    }
  `}
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
`

const MemberContainer = styled.div`
  position: relative;
  overflow: hidden;

  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    height: ${height};
    min-height: ${height};
    max-width: 100%;
  }

  .gatsby-image-outer-wrapper {
    width: 100%;
    height: ${height};
    min-height: ${height};
    max-width: 100%;
    img {
      height: ${height};
      min-height: ${height};
    }
  }

  &:nth-child(2n) {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    ${media.belowDesktop`
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    `}
  }

  &:nth-child(2n+1) {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    ${media.belowDesktop`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `}
  }

  ${media.aboveTablet`
    height: ${height};

    .gatsby-image-outer-wrapper {
      position: absolute !important;
      top: 0;
      left: 0;
    }
    &:nth-child(2n) {
      .gatsby-image-outer-wrapper {
        ${props => props.offset && `
          transform: translateX(${props.offset});
        `}
      }

      ${MemberContent} {
        left: 45%;
      }
    }

    &:nth-child(2n+1) {
      .gatsby-image-outer-wrapper {
        transform: translateX(30%);
        ${props => props.offset && `
          transform: translateX(${props.offset});
        `}
      }
    }
  `}

    ${range(10).map(i => css`
      &:nth-child(${i+1}) {
        ${Background} {
          ${i % 2 === 0 && css`
            background: linear-gradient(110deg, ${color('backgroundDark')} 77%, ${theme.colors.team[i]} 77%);

            &[data-aos="gradient"] {
                transition-property: transform;
                transform: translateX(0%);

                &.aos-animate {
                  transform: translateX(-50%);
                }
            }
          `};

          ${i % 2 !== 0 && css`
            background: linear-gradient(70deg, ${theme.colors.team[i]} 23%, ${color('backgroundDark')} 20%);

            &[data-aos="gradient"] {
                transition-property: transform;
                transform: translateX(-50%);

                &.aos-animate {
                  transform: translateX(0%);
                }
            }
          `}

          ${media.belowTablet`
            background: linear-gradient(180deg, ${theme.colors.team[i]} 47%, ${color('backgroundDark')} 57%);
          `}

        }
      }
    `)}
`

const MemberImage = styled(GatsbyImage)`
`

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

const AuthorSpan = styled.span`
  ${authorStyle};
  color: ${color("backgroundDark")};
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

const Paragraph = styled(SectionModule.Paragraph)`
  color: ${color("whiteAlt")};
`;

const Description = styled(SectionModule.Description)`
  background: transparent;
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
