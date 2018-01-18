import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import { StickyContainer } from "react-sticky";
import { compose, lifecycle } from "recompose";

import Header from "../components/Header";
import Footer from "../components/Footer";

import theme, { color, font } from "../theme";
import { breakpoints } from "../styles/mediaQueries";

import AOS from "aos";
import "aos/dist/aos.css";
import "prismjs/themes/prism.css";

const Layout = styled.div`
  background: ${color("white")};
  font-family: ${font("primary")};
  min-width: 32rem;
  overflow-x: hidden;
`;

injectGlobal`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 62.5%;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  a,
  a:link {
    text-decoration-skip: ink;
  }
`;

const TemplateWrapper = props => (
  <ThemeProvider
    theme={{
      ...theme,
      breakpoints
    }}
  >
    <Layout>
      <Helmet
        title="Makers' Den"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <StickyContainer id="home">
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

export default compose(
  lifecycle({
    componentDidMount() {
      AOS.init();
    }
  })
)(TemplateWrapper);
