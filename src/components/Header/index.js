import React, { PureComponent } from "react";
import Link from "gatsby-link";
import styled, { css } from "styled-components";
import Headroom from "react-headroom";

import LogoFull from "../../../assets/logoFull.svg";
import LogoShort from "../../../assets/logoShort.svg";

import MediaQueries, { media } from "../../styles/mediaQueries";
import { transparentize } from "../../polished";
import { transition } from "../../mixins";
import { color, duration, font, size, sumSize } from "../../theme";
import FadeWithoutFont from "../../FadeWithoutFont";
import GracefulSvg from "../../GracefulSvg";

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

  ${linkHighlight};
  color: ${props => color(props.light ? "white" : "textDark")(props)};
  background: ${props =>
    props.light ? transparentize(0.01, "backgroundDark") : color("white")};
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

const Nav = styled.nav`
  display: flex;
  ${media.belowTablet`
    pointer-evsnts: none;
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
      padding: 0 ${size(4)};
      transform: translateY(0);
      ${transition("transform")};

      ${Array.from({ length: 4 }).map(
        (_, i) => css`
          &:nth-child(${i + 1}) {
            z-index: ${4 - i + 1};
            ${props =>
              !props.show &&
              css`
                transform: translateY(-${i * sumSize(4)}px);
                transition-delay: ${(4 - i) * 25}ms;
              `} ${props =>
                props.show &&
                css`
                  transition-delay: ${i * 25}ms;
                `};
          }
        `
      )}

      &:last-child {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }

    ${props =>
      props.show &&
      css`
        opacity: 1;
        pointer-events: all;
      `}
  `};
`;

const StyledHeader = styled.header`
  transition: background ${duration("slow")};
  height: calc(9rem - 2px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.4rem;
  width: 100%;
  z-index: 2;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

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
    const home = this.state.home || document.getElementById("home");
    const isSticky = window.scrollY >= home.offsetHeight - 88;
    this.setState(() => ({
      isSticky,
      navVisible: false,
      home
    }));
  };

  toggleNav = () =>
    this.setState(() => ({ navVisible: !this.state.navVisible }));

  render() {
    const { location: { hash, pathname } } = this.props;
    const hashName = hash.slice(1);
    const isHome = pathname === "/" && (!hashName || hashName === "home");
    const isActive = target => hashName === target;
    const { isSticky } = this.state;

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
        <StyledHeader dark={!isSticky} sticky={isSticky}>
          <nav>
            <BrandLink active={isHome} to="#home" light={!isSticky}>
              <BelowBigPhone component="span">
                <GracefulSvg src={LogoShort} />
              </BelowBigPhone>
              <AboveBigPhone component="span">
                <GracefulSvg src={LogoFull} />
              </AboveBigPhone>
            </BrandLink>
          </nav>
          <FadeWithoutFont>
            <BelowTablet component="button" onClick={this.toggleNav}>
              Menu
            </BelowTablet>
            <Nav show={this.state.navVisible}>
              <HashLink active={isActive("team")} to="#team" light={!isSticky}>
                Team
              </HashLink>
              <HashLink active={isActive("work")} to="#work" light={!isSticky}>
                Work
              </HashLink>
              <HashLink
                active={isActive("contact")}
                to="#contact"
                light={!isSticky}
              >
                Contact
              </HashLink>
              <NavLink to="blog" light={!isSticky}>
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
