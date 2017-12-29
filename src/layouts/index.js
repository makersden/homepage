import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import { StickyContainer } from "react-sticky";

import Header from "../components/Header";
import Footer from "../components/Footer";

import theme, { color, font } from "../theme";

const Layout = styled.div`
  background: ${color("backgroundDark")};
  font-family: ${font("primary")};
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
    overflow-x: hidden;
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
      <StickyContainer>
        <Header {...props} />
        {props.children()}
        <Footer />
      </StickyContainer>
    </Layout>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
