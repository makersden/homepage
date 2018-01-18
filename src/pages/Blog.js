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
  margin: 0 auto;
  padding: 0;
`;

const PostImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Post = styled.li`
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;

  max-width: 144rem;
  width: 100%;
  max-height: 100%;
  height: 35rem;

  &:first-child {
    height: 60rem;
  }
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
  padding: ${size(4)};
  text-decoration: none;
  &:hover {
    background-color: ${transparentize(0.5, "white")};
  }
`;

const Title = styled.h2`
  font-family: ${font("display")};
  color: ${color("white")};
  font-size: ${size(4)};
  margin: 0;
`;

const Container = styled(Flex).attrs({ column: true })`
  color: ${get("theme.colors.text")};
`;

const Home = ({ data: { allMarkdownRemark: { edges } } }) => {
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

export default Home;

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
                sizes(maxWidth: 1440) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
