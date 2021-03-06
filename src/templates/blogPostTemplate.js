import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import { ReactTypeformEmbed } from "react-typeform-embed";
import LinkedInTag from "react-linkedin-insight";
import FacebookPixel from "react-facebook-pixel";
import TagManager from "react-gtm-module";

import { transparentize } from "../polished";
import { color, font, size } from "../theme";
import { media } from "../styles/mediaQueries";

const Post = styled.article`
  background: ${color("white")};
  margin: 0;
  font-size: 1.8rem;
  color: ${color("black")};
  min-height: 100vh;
`;

const TitleImage = styled(Img)`
  max-width: 144rem;
  width: 100%;
  max-height: 60rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: ${font("display")};
  text-align: center;
  color: ${color("black")};
  font-size: ${size(3)};

  ${media.aboveTablet`
    font-size: ${size(4)};
  `};
`;

const Meta = styled.section`
  text-align: right;
  font-weight: 300;
`;

const Date = styled.span``;

const Container = styled.section`
  width: 60em;
  max-width: 100vw;
  line-height: 1.4;
  margin: 0 auto;
`;

const Content = styled.section`
  width: 50em;
  max-width: calc(100vw - 2em);
  margin: 0 auto;
  h2,
  h3,
  h4 {
    color: ${transparentize(0.2, "black")};
  }
  p {
    margin: 1em 0;
    font-weight: 300;
  }

  ul {
    font-weight: 300;
  }

  a {
    color: ${transparentize(0.3, "black")};
    transition: color 0.1s;

    &:hover {
      color: ${color("black")};
    }
  }

  em,
  strong {
    font-weight: 500;
  }

  pre {
    margin: 1em 0;
  }

  li {
    margin-top: 0.5em;
  }

  blockquote {
    margin: 2em;
    ${media.aboveTablet`
      float: left;
      max-width: 31.5rem;
      margin-left: 0;
      margin-top: 1em;
    `};

    ${media.aboveBigLaptop`
      margin-left: -5em;
    `} p {
      font-family: ${font("display")};
      font-size: ${size(3)};
      margin: 0;
      &:last-child {
        margin-top: 1rem;
        font-size: ${size(2)};
      }
    }
  }

  .shaded-images {
    .gatsby-resp-image-wrapper {
      box-shadow: rgba(0, 0, 0, 0.25) 0 1px 4px;
    }
  }

  .quote2 {
    margin: 2em;
    font-family: ${font("display")};
    font-size: ${size(2.5)};

    ${media.aboveTablet`
      float: left;
      max-width: 31.5rem;
      margin-left: 0;
      margin-top: 1em;

      &.right {
        float: right;
        margin-right: 0;
        margin-left: 2em;
      }
    `};

    ${media.aboveBigLaptop`
      margin-left: -5em;
      &.right {
        margin-left: 2em;
        margin-right: -5em;
      }
    `} p {
      font-family: ${font("display")};
      font-size: ${size(3)};
      margin: 0;
    }
  }
`;

const Paragraph = styled.p``;

const Author = styled.p`
  text-align: right;
`;

const Comments = styled.div`
  margin-top: 1em;
  margin-bottom: 3em;
`;

export default class Template extends React.Component {
  componentDidMount() {
    const { data } = this.props;
    const { markdownRemark } = data;
    const { frontmatter } = markdownRemark;
    FacebookPixel.trackCustom(frontmatter.title);
    TagManager.dataLayer({
      dataLayerName: "BlogDataLayer",
      dataLayer: {
        title: frontmatter.title
      }
    });
  }

  render() {
    // this prop will be injected by the GraphQL query below.
    const { data } = this.props;

    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;
    return (
      <Post>
        <Helmet title={`${frontmatter.title} - Makers' Den blog`} />
        <TitleImage {...frontmatter.image.childImageSharp} />
        <Container>
          <Title>{frontmatter.title}</Title>
          <Content>
            <Meta>
              <span>{frontmatter.author}</span>,&nbsp;
              <Date>{frontmatter.date}</Date>
            </Meta>
            <section dangerouslySetInnerHTML={{ __html: html }} />
            <ReactTypeformEmbed
              url="https://makersden.typeform.com/to/lvLOpJ"
              style={{ position: "relative", height: 500, marginTop: 50 }}
            />
            <Comments />
          </Content>
        </Container>
      </Post>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        tags
        image {
          childImageSharp {
            sizes(maxWidth: 1440) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`;
