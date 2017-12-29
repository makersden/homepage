import React, { PureComponent } from "react";
import Link from "gatsby-link";
import styled, { css } from "styled-components";
import MediaQuery from "react-responsive";
import Headroom from "react-headroom";

import LogoFull from "../../../assets/logoFull.svg";
import LogoShort from "../../../assets/logoShort.svg";

import { media } from "../../styles/mediaQueries";
import { transparentize } from "../../polished";
import { color, duration, font } from "../../theme";
import FadeWithoutFont from "../../FadeWithoutFont";
import GracefulSvg from "../../GracefulSvg";

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
  transition: color ${props => duration(props.light ? "slow" : "fast")(props)};
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
  color: ${props => color(props.light ? "white" : "textDark")(props)};
`;

const HashLink = styled(StyledLink)`
  color: ${props => color(props.light ? "white" : "textDark")(props)};
`;

const BrandLink = styled(HashLink)`
  letter-spacing: -0.16rem;
  margin-right: 2.4rem;
  padding: 0;

  svg {
    height: 4.8rem;
    fill: ${props => color(props.light ? "white" : "black")(props)};
    transition: fill ${props => duration(props.light ? "slow" : "fast")(props)};
  }

  ::before,
  ::after {
    display: none;
  }
`;

const StyledHeader = styled.header`
  transition: background ${duration("slow")};
  height: calc(9rem - 2px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.2rem;
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

  ${media.phoneL`
    padding: 0 2.4rem;
  `};
`;

const pinTolerance = 20;

class Header extends PureComponent {
  state = {
    isSticky: false
  };

  onUnpin = () => {
    const home = document.getElementById("home");
    this.setState(() => ({
      isSticky: window.scrollY >= home.offsetHeight - 88
    }));
  };

  render() {
    const { location: { hash, pathname } } = this.props;
    const hashName = hash.slice(1);
    const isHome = pathname === "/" && (!hashName || hashName === "home");
    const isActive = target => hashName === target;
    const { isSticky } = this.state;

    return (
      <Headroom
        onUnfix={() => this.setState(() => ({ isSticky: false }))}
        onUnpin={this.onUnpin}
        upTolerance={pinTolerance}
        downTolerance={pinTolerance}
        style={{
          zIndex: 10
        }}
      >
        <StyledHeader dark={!isSticky} sticky={isSticky}>
          <nav>
            <BrandLink active={isHome} to="#home" light={!isSticky}>
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
            </nav>
          </FadeWithoutFont>
        </StyledHeader>
      </Headroom>
    );
  }
}

export default Header;
