import React, { PureComponent } from "react";
import Link from "gatsby-link";
import styled, { css } from "styled-components";
import Headroom from "react-headroom";
import Hamburger from "./Hamburger";
import Isvg from "react-inlinesvg";

import LogoFull from "../../../assets/logoFull.svg";
import LogoShort from "../../../assets/logoShort.svg";

import MediaQueries, { media } from "../../styles/mediaQueries";
import { transparentize } from "../../polished";
import { transition } from "../../mixins";
import {
  color,
  duration,
  font,
  size,
  sizeWithoutUnit,
  sumSize
} from "../../theme";
import FadeWithoutFont from "../../FadeWithoutFont";

const {
  BelowPhone,
  AbovePhone,
  BelowBigPhone,
  AboveBigPhone,
  AboveTablet,
  BelowTablet
} = MediaQueries;

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
    transition: transform ${duration("fast")};
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

  :hover {
    ::before,
    ::after {
      transform: translateX(${props => (props.active ? "100%" : "0%")});
    }
  }
`;

const StyledLink = styled(Link)`
  transition: color ${duration("slow")}, background-color ${duration("slow")};
  font-family: ${font("primary")};
  font-size: 2rem;
  text-decoration: none;
  padding: 0 0.8rem;

  color: ${props => color(props.light ? "white" : "textDark")(props)};
  background: ${props =>
    props.light ? color("backgroundDark") : color("white")};
  ${media.aboveTablet`
    background: transparent;
  `};
`;

const NavLink = styled(StyledLink).attrs({
  activeClassName
})``;

const HashLink = styled(StyledLink)``;

const BrandLink = styled(HashLink)`
  letter-spacing: -0.16rem;
  margin-right: 2.4rem;
  padding: 0;
  background: transparent;

  svg {
    height: 4.8rem;
    path {
      fill: ${props => color(props.light ? "white" : "black")(props)};
      transition: fill
        ${props => duration(props.light ? "slow" : "fast")(props)};
    }
  }

  ::before,
  ::after {
    display: none;
  }
`;

const BrandNav = styled.nav`
  z-index: 10;
`;

const Nav = styled.nav`
  display: flex;
  ${media.belowTablet`
    pointer-events: none;
    opacity: 0;
    flex-direction: column;
    ${transition("opacity")};
    position: absolute;
    top: calc(100% - 5px);
    right: 0;

    > * {
      height: ${size(4)};
      display: flex;
      align-items: center;
      margin: 0;
      height: ${size(4)};
      padding: 0 ${size(3)};
      justify-content: flex-end;
      width: 100vw;
      text-align: right;
      transform: translateY(0);
      ${transition("transform")};

      ${Array.from({ length: 4 }).map(
        (_, i) => css`
          &:nth-child(${i + 1}) {
            z-index: ${4 - i + 1};
            ${props =>
              !props.show &&
              css`
                transform: translateY(-${(i + 0.5) * sizeWithoutUnit(4)}px);
                transition-delay: ${(4 - i) * 25}ms;
              `} ${props =>
                props.show &&
                css`
                  transition-delay: ${i * 25}ms;
                `};
          }
        `
      )}
    }

    ${props =>
      props.show &&
      css`
        opacity: 1;
        pointer-events: all;
      `}
  `};
`;

const StyledHeader = styled.div`
  transition: background ${duration("slow")};
  height: calc(9rem - 2px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.4rem;
  width: 100%;
  z-index: 2;

  background-color: ${color("white")};
  border-bottom: 2px solid #f5f5f5;
  ${props =>
    props.dark &&
    css`
      background-color: transparent;
      border-color: transparent;
    `};

  ${media.aboveTablet`
    padding: 0 3.2rem;
    &:not(:last-child) {
      margin-right: 2.4rem;
    }
  `};
`;

const pinTolerance = 10;

class Header extends PureComponent {
  state = {
    isSticky: false,
    navVisible: false
  };

  handlePin = () => {
    const hero = this.state.hero || document.getElementById("hero");
    const isSticky = window.scrollY >= (hero ? hero.offsetHeight - 88 : 0);
    this.setState(() => ({
      isSticky,
      navVisible: false,
      hero
    }));
  };

  toggleNav = () =>
    this.setState(() => ({ navVisible: !this.state.navVisible }));

  render() {
    const { location: { hash, pathname } } = this.props;
    const hashName = hash.slice(1);
    const isLanding = pathname === "/";
    const isHome = isLanding && (!hashName || hashName === "home");
    const isActive = target => hashName === target;
    const { isSticky, navVisible } = this.state;

    const useAltHeader = isLanding && !isSticky;

    return (
      <Headroom
        onUnfix={() => this.setState(() => ({ isSticky: false }))}
        onPin={this.handlePin}
        onUnpin={this.handlePin}
        upTolerance={pinTolerance}
        downTolerance={pinTolerance}
        style={{
          zIndex: 10
        }}
      >
        <StyledHeader dark={useAltHeader} sticky={isSticky}>
          <BrandNav>
            <BrandLink active={isHome} to="#home" light={useAltHeader}>
              <BelowBigPhone
                component="span"
                data-aos="fade"
                data-aos-duration={1000}
              >
                <Isvg src={LogoShort} />
              </BelowBigPhone>
              <AboveBigPhone
                component="span"
                data-aos="fade"
                data-aos-duration={1000}
              >
                <Isvg src={LogoFull} />
              </AboveBigPhone>
            </BrandLink>
          </BrandNav>
          <FadeWithoutFont>
            <BelowTablet
              active={navVisible}
              component={Hamburger}
              light={useAltHeader}
              onClick={this.toggleNav}
            />
            <Nav show={this.state.navVisible}>
              <HashLink
                active={isActive("team")}
                to="#team"
                light={useAltHeader}
              >
                Team
              </HashLink>
              <HashLink
                active={isActive("work")}
                to="#work"
                light={useAltHeader}
              >
                Work
              </HashLink>
              <HashLink
                active={isActive("contact")}
                to="#contact"
                light={useAltHeader}
              >
                Contact
              </HashLink>
              <NavLink to="blog" light={useAltHeader}>
                Blog
              </NavLink>
            </Nav>
          </FadeWithoutFont>
        </StyledHeader>
      </Headroom>
    );
  }
}

export default Header;
