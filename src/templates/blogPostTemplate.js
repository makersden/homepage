import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import ReactDisqusComments from "react-disqus-comments";
import Helmet from "react-helmet";

import { transparentize } from "../polished";
import { color, font, size } from "../theme";

const Post = styled.article`
  background: ${color("white")};
  margin: 0;
  font-size: 1.8rem;
  color: ${color("textDark")};
`;

const TitleImage = styled(Img)`
  max-width: 144rem;
  width: 100%;
  max-height: 60rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: ${font("display")};
  font-size: ${size(4)};
  text-align: center;
  color: ${color("black")};
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
  max-width: calc(100vw - 10em);
  margin: 0 auto;
  h2,
  h3,
  h4 {
    color: ${color("black")};
  }
  p {
    margin: 1em 0;
    font-weight: 300;
  }

  a {
    color: ${color("black")};
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
    float: left;
    max-width: 31.5rem;
    margin: 2em;
    margin-left: -5em;
    p {
      font-family: ${font("display")};
      font-size: ${size(3)};
      margin: 0;
      &:last-child {
        margin-top: 1rem;
        font-size: ${size(2)};
      }
    }
  }
`;

const Paragraph = styled.p``;

const Author = styled.p`
  text-align: right;
`;

const Comments = styled.div`
  margin-top: 1em;
  margin-bottom: 2em;
`;

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
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
          <Comments>
            <ReactDisqusComments
              shortname="makersden-io"
              title={frontmatter.title}
              identifier={frontmatter.slug}
            />
          </Comments>
        </Content>
      </Container>
    </Post>
  );
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
