import React from "react";
import styled from "styled-components";
import { Box } from "grid-styled";

import LogoFull from "../images/makers_den_logo.svg";
import LogoShort from "../../assets/logoShort.svg";
import FadeWithoutFont from "../FadeWithoutFont";

import MQs from "../styles/mediaQueries";
import { color, size } from "../theme";
import { transition } from "../mixins";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";

const { AboveTablet } = MQs;
import { Image, Svg } from "./Section";

const StyledLogo = styled(Svg)`
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

const StyledFooter = styled.footer`
  background: ${color("backgroundDark")};

  > * {
    display: flex;
    flex-direction: row;
    color: ${color("whiteAlt")};
    align-items: flex-end;
    justify-content: space-between;
    padding: ${size(3)};
  }
`;

const Socials = styled.div`
  display: flex;
`;

const SocialLink = styled.a.attrs({
  target: "blank"
})`
  text-decoration: none;
  opacity: 0.9;
  ${transition("opacity", "transform")};
  :hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const SocialIcon = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 4.1rem;
  height: 4.1rem;
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

const Footer = () => (
  <StyledFooter id="footer" p={3}>
    <FadeWithoutFont>
      <div>
        <StyledLogo src={LogoFull} data-aos="fade" data-aos-duration={1000} />
        <Box mt={3}>
          <Socials>
            <SocialLink href="https://www.facebook.com/wearemakersden/">
              <SocialIcon src={facebook} />
            </SocialLink>
            <SocialLink href="https://twitter.com/makers_den">
              <SocialIcon src={twitter} />
            </SocialLink>
          </Socials>
          <Address>Germaniastr. 1A | Kirchhofstr. 45, Berlin</Address>
        </Box>
      </div>
      <AboveTablet>
        <TaglineSection>
          <span>All you need is</span>
          <SmallStyledLogo />
        </TaglineSection>
      </AboveTablet>
    </FadeWithoutFont>
  </StyledFooter>
);

export default Footer;
