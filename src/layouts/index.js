import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled, { injectGlobal, ThemeProvider } from "styled-components";

import Header from "../components/Header";

import theme, { color } from "../theme";

const Layout = styled.div`
  background: ${color("backgroundDark")};
`;

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

const TemplateWrapper = props => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Helmet
        title="Makers' Den"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <Header {...props} />
      {props.children()}
    </Layout>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
