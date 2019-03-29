import React from 'react';
import styled, { css } from "styled-components";
import flatMap from 'lodash/fp/flatMap'
import GatsbyImage from "gatsby-image";

import * as SectionModule from "./Section";
import range from 'lodash/range';
import theme from "../theme";
import { color, size, } from "../theme";

const Member = ({ image, name, description, quotes }) => (
  <MemberContainer>
    <MemberImage {...image} />
    <Background />
    <MemberContent>
      <Description data-aos="fade-up">
        <Name>{name}</Name>
        {flatMap(paragraph => (
          <Paragraph>
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

  > * {
    width: 55%;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const MemberContainer = styled.div`
  position: relative;
  height: ${height};
  overflow: hidden;
  &:first-child {
    border-top-right-radius: 10px;
  }

  &:last-child {
    border-bottom-right-radius: 10px;
  }

  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    height: ${height};
    min-height: ${height};
    max-width: 100%;
  }

  .gatsby-image-outer-wrapper {
    width: 100%;
    position: absolute !important;
    top: 0;
    height: ${height};
    min-height: ${height};
    max-width: 100%;
    img {
      height: ${height};
      min-height: ${height};
    }
  }

  &:nth-child(2n) {
    .gatsby-image-outer-wrapper {
      transform: translateX(-30%);
    }

    ${MemberContent} {
      left: 45%;
    }
  }

  &:nth-child(2n+1) {
    .gatsby-image-outer-wrapper {
      transform: translateX(30%);
    }
  }

  ${range(10).flatMap(i => css`
    &:nth-child(${i}) {
      ${Background} {
        ${i % 2 === 0 ? css`
          background: linear-gradient(70deg, ${theme.colors.team[i]} 20%, ${color('backgroundDark')} 50.69%);
        ` : css`
          background: linear-gradient(100deg, ${color('backgroundDark')} 50%, ${theme.colors.team[i]} 85.69%);
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
