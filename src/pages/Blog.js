import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import Link from "gatsby-link";

import get from "lodash/fp/get";

import { color, font, size, sumSize } from "../theme";
import { transparentize } from "../polished";
import { media } from "../styles/mediaQueries";

import FadeWithoutFont from "../FadeWithoutFont";

import Work from "../components/Work";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Cogs from "../components/Cogs";

const Posts = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: calc(100vh - 21rem - 8.8rem);
`;

const PostImage = styled(Img)``;

const Post = styled.li`
  margin: 0 auto;
  padding: 0;
  position: relative;
  overflow: hidden;

  max-width: 144rem;
  width: 100%;
`;

const PostLink = styled(Link)`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 1s;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: ${size(3)};
  text-decoration: none;
  &:hover {
    background-color: ${transparentize(0.5, "white")};
  }

  ${media.aboveTablet`
    padding: ${size(4)};
  `};
`;

const Title = styled.h2`
  font-family: ${font("display")};
  color: ${color("white")};
  font-size: ${size(3)};
  margin: 0;
  line-height: 1;
  ${media.aboveTablet`
    font-size: ${size(4)};
  `};
`;

const Container = styled(Flex).attrs({ column: true })`
  color: ${get("theme.colors.text")};
`;

const Date = styled.span`
  font-family: ${font("primary")};
  color: ${color("white")};
  font-size: ${size(2)};
  padding-bottom: 0.3rem;
`;

const Blog = ({ data: { allMarkdownRemark: { edges } } }) => {
  return (
    <Posts>
      {edges
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node }) => (
          <Post>
            <PostImage {...node.frontmatter.image.childImageSharp} />
            <PostLink to={node.frontmatter.path}>
              <Title>{node.frontmatter.title}</Title>
            </PostLink>
          </Post>
        ))}
    </Posts>
  );
};

export default Blog;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            image {
              childImageSharp {
                responsiveSizes(maxWidth: 1440) {
                  src
                  srcSet
                  sizes
                  aspectRatio
                  base64
                  originalImg
                }
              }
            }
          }
        }
      }
    }
  }
`;
