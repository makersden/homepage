import React, { PropTypes } from "react";
import Link from "@phenomic/plugin-renderer-react/lib/components/Link";
import styled, { css } from "styled-components";
import MediaQuery from "react-responsive";
import Isvg from "react-inlinesvg";

import LogoFull from "../../../assets/logoFull.svg";
import LogoShort from "../../../assets/logoShort.svg";

import { media } from "../../styles/mediaQueries";
import { transparentize } from "../../polished";
import { fade } from "../../mixins";
import { color, font } from "../../theme";
import FadeWithoutFont from "../../FadeWithoutFont";

const activeClassName = "nav-active";

const linkHighlight = css`
  position: relative;
  overflow: hidden;
  display: inline-block;
  ::before,
  ::after {
    content: " ";
    position: absolute;
    width: 100%;
    background-color: ${transparentize(0.9, "accent")};
    z-index: -1;

    transform: translateX(${props => (props.active ? "100%" : "-100%")});
    transition: transform 200ms;
  }

  ::before {
    left: -100%;
    height: 1.5rem;
    top: 55%;
  }

  ::after {
    left: 0;
    height: 0.2rem;
    top: calc(100% - 0.2rem);
  }

  &.${activeClassName} {
    transform: translateX(100%);
  }

  :hover {
    ::before,
    ::after {
      transform: translateX(${props => (props.active ? "100%" : "0%")});
    }
  }
`;

const StyledLink = styled(Link)`
  transition: color 200ms;
  font-family: ${font("primary")};
  font-size: 2rem;
  text-decoration: none;
  padding: 0 0.8rem;
  &:not(:last-child) {
    margin-right: 2.4rem;
  }

  ${linkHighlight};
`;

const NavLink = styled(StyledLink).attrs({
  activeClassName
})`
  color: ${color("textDark")};
  &.${activeClassName} {
    color: black;
  }
`;

const HashLink = styled(StyledLink)`
  color: ${color("textDark")};
  ${props => props.active && css`color: black;`};
`;

const BrandLink = styled(HashLink)`
  letter-spacing: -0.16rem;
  margin-right: 2.4rem;
  padding: 0;

  svg {
    height: 4.8rem;
    fill: ${color("black")};
  }

  ::before,
  ::after {
    display: none;
  }
`;

const StyledHeader = styled.header`
  height: calc(7rem - 2px);
  background-color: ${color("white")};
  border-bottom: 2px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4.8rem;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw);
  z-index: 1;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;

  ${media.phoneL`
    padding: 0 2.4rem;
  `};
`;

const GracefulSvg = styled(Isvg)`${fade} &.loaded {opacity: 1;}`;

const Header = props => {
  const { location: { hash, pathname } } = props;
  const hashName = hash.slice(1);
  const isHome = pathname === "/" && (!hashName || hashName === "home");
  const isActive = target => hashName === target;
  return (
    <StyledHeader>
      <nav>
        <BrandLink active={isHome} to="#home">
          <MediaQuery component="span" query="(max-width: 530px)">
            <GracefulSvg src={LogoShort} />
          </MediaQuery>
          <MediaQuery component="span" query="(min-width: 531px)">
            <GracefulSvg src={LogoFull} />
          </MediaQuery>
        </BrandLink>
      </nav>
      <FadeWithoutFont>
        <nav>
          <HashLink active={isActive("team")} to="#team">
            Team
          </HashLink>
          <HashLink active={isActive("work")} to="#work">
            Work
          </HashLink>
          <HashLink active={isActive("contact")} to="#contact">
            Contact
          </HashLink>
          <NavLink to="blog">Blog</NavLink>
        </nav>
      </FadeWithoutFont>
    </StyledHeader>
  );
};

Header.contextTypes = {
  metadata: PropTypes.object.isRequired
};

export default Header;
