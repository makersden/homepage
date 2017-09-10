import React, { PropTypes } from "react";
import Link from "@phenomic/plugin-renderer-react/lib/components/Link";
import styled from "styled-components";
import Svg from "react-svg-inline";
import get from "lodash/fp/get";

const activeClassName = btoa(Math.random());

const NavLink = styled(Link).attrs({
  activeClassName
})`
  color: #111;

  &.${activeClassName} {
    color: red;
  }

  ${props =>
    props.active &&
    `
    color: red;
  `}
`;

const _hashLink = currentHash => (id, text) => {
  return (
    <NavLink active={id === currentHash} to={`/#${id}`}>
      {text}
    </NavLink>
  );
};

const link = (to, text) => {
  return <NavLink to={to}>{text}</NavLink>;
};

const Nav = styled.nav`
  height: calc(7rem - 2px);
  background-color: ${get("theme.colors.text")};
  border-bottom: 2px solid #eee;
`;

const Header = props => {
  const { location: { hash, pathname } } = props;
  const hashName = hash.slice(1);
  const hashLink = _hashLink(hashName);
  const isHome = pathname === "/" && (!hashName || hashName === "home");
  return (
    <Nav>
      {hashLink("home", "Makers' Den")}
      {hashLink("team", "Our Team")}
      {hashLink("work", "Our Work")}
      {hashLink("contact", "Contact Us!")}
      {link("blog", "Our Blog")}
    </Nav>
  );
};

Header.contextTypes = {
  metadata: PropTypes.object.isRequired
};

export default Header;
