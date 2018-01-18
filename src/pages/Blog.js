import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import get from "lodash/fp/get";

import { color, font, size, sumSize } from "../theme";
import { media } from "../styles/mediaQueries";

import FadeWithoutFont from "../FadeWithoutFont";

import Work from "../components/Work";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Cogs from "../components/Cogs";

const Posts = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Container = styled(Flex).attrs({ column: true })`
  color: ${get("theme.colors.text")};
`;

const Home = ({ data: { allMArkdownRemark: { edges } } }) => {
  return <Posts />;
};

export default Home;
