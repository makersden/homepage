import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import { StickyContainer } from "react-sticky";
import { compose, lifecycle } from "recompose";
import LinkedInTag from "react-linkedin-insight";
import FacebookPixel from "react-facebook-pixel";
import TagManager from "react-gtm-module";

import Header from "../components/Header";
import Footer from "../components/Footer";

import theme, { color, duration, font } from "../theme";
import { breakpoints } from "../styles/mediaQueries";
import ogImage from "../images/ogImage.png";

import AOS from "aos";
import "aos/dist/aos.css";
import "prismjs/themes/prism.css";

const Layout = styled.div`
  transition: background ${duration("slow")};
  background: ${props => color(props.dark ? "backgroundDark" : "white")(props)};
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

const Content = styled.div`
  background: ${color("backgroundDark")};
  min-height: calc(100vh - 21rem - 8.8rem);
`;

const TemplateWrapper = ({ ...props }) => (
  <ThemeProvider
    theme={{
      ...theme,
      breakpoints
    }}
  >
    <Layout dark={props.location.pathname.indexOf("/blog/") === -1}>
      <Helmet
        title="Makers' Den"
        meta={[
          {
            name: "description",
            content:
              "Your javascript studio. Solving gnarly problems to realise amazing ideas."
          },
          {
            name: "keywords",
            content:
              "software, consulting, full-stack, fullstack, development, berlin, deutschland, react, node.js, amazon web services, aws, scala, software house, agency"
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          },
          {
            name: "google-site-verification",
            content: "VEd-YN0XIV4G-934e_RkML776hewBuI9UC0O-9IFOrQ"
          },
          {
            property: "og:image",
            content: ogImage
          }
        ]}
      >
        {props.location.pathname.indexOf("/join") !== -1 && (
          <script
            charstet="utf-8"
            src="https://ucarecdn.com/libs/widget/3.6.1/uploadcare.full.min.js"
          />
        )}
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver" />
      </Helmet>

      <StickyContainer id="home">
        <Header {...props} />
        <Content>{props.children()}</Content>
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
      AOS.init({
        delay: 200,
        duration: 1000,
        once: true
      });

      LinkedInTag.init("691641");
      FacebookPixel.init("2565393533492435");
      FacebookPixel.pageView();
      TagManager.initialize({
        gtmId: "GTM-PTS69CM"
      });
    }
  })
)(TemplateWrapper);
