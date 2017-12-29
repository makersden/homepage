import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import { StickyContainer } from "react-sticky";
import Isvg from "react-inlinesvg";
import { Flex, Box } from "grid-styled";

import LogoFull from "../../assets/logoFull.svg";
import LogoShort from "../../assets/logoShort.svg";
import Header from "../components/Header";
import GracefulImage from "../GracefulImage";

import { fade } from "../mixins";
import theme, { color, font, size } from "../theme";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";

const GracefulSvg = styled(Isvg)`
  ${fade} &.loaded {
    opacity: 1;
  }
`;

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

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  color: ${color("whiteAlt")};
  align-items: flex-end;
  justify-content: space-between;
  padding: ${size(3)};
`;

const Socials = styled.div`
  display: flex;
`;

const SocialLink = styled.a.attrs({
  target: "blank"
})`
  text-decoration: none;
  opacity: 0.9;
  transition: opacity 200ms;
  :hover {
    opacity: 1;
  }
`;

const SocialIcon = styled(GracefulImage)`
  max-width: 100%;
  max-height: 100%;
  width: 4.1rem;
  height: 4.1rem;
`;

const StyledLogo = styled(GracefulSvg)`
  min-height: 4.8rem;
  margin: 0;
  letter-spacing: -0.16rem;
  color: ${color("text")};
  display: inline-block;

  svg {
    height: 4.8rem;
  }

  path {
    fill: ${color("text")};
  }
`;

const SmallStyledLogo = styled(StyledLogo).attrs({
  src: LogoShort
})`
  min-height: 3.1rem;
  margin-left: 0.1rem;

  svg {
    height: 3.1rem;
  }
`;

const TaglineSection = styled.div`
  display: flex;
  font-size: 1.8rem;
  align-items: center;
`;

const Address = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 1.8rem;
  letter-spacing: -0.08rem;
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
        <Footer id="footer" p={3}>
          <div>
            <StyledLogo src={LogoFull} />
            <Box mt={3}>
              <Socials>
                <SocialLink href="https://www.facebook.com/wearemakersden/">
                  <SocialIcon src={facebook} />
                </SocialLink>
                <SocialLink href="https://twitter.com/makers_den">
                  <SocialIcon src={twitter} />
                </SocialLink>
              </Socials>
              <Address>Germaniastr. 1, 12345 Berlin</Address>
            </Box>
          </div>
          <TaglineSection>
            <span>All you need is</span>
            <SmallStyledLogo />
          </TaglineSection>
        </Footer>
      </StickyContainer>
    </Layout>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
