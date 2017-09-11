import React, { PropTypes } from "react";
import Link from "@phenomic/plugin-renderer-react/lib/components/Link";
import styled, { css } from "styled-components";
import MediaQuery from "react-responsive";

import { color, font } from "../../theme";

const activeClassName = "nav-active";

const StyledLink = styled(Link)`
  transition: color 200ms;
  font-family: ${font("primary")};
  font-size: 2rem;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

const NavLink = styled(StyledLink).attrs({
  activeClassName
})`
  color: ${color("textDark")};
  &.${activeClassName} {
    color: ${color("backgroundLight")};
  }
`;

const HashLink = styled(StyledLink)`
  color: ${color("textDark")};
  ${props => props.active && css`color: ${color("backgroundLight")};`};
`;

const BrandLink = styled(HashLink)`
  font-size: 4.8rem;
  letter-spacing: -0.16rem;
  font-family: ${font("brand")};
  margin-right: 2.4rem;
`;

const StyledHeader = styled.header`
  height: calc(7rem - 2px);
  background-color: ${color("text")};
  border-bottom: 2px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4.8rem;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw);
  box-shadow: 0 0px 1rem 1rem rgba(255, 255, 255, 0.2);
  z-index: 1;
`;

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
            MD
          </MediaQuery>
          <MediaQuery component="span" query="(min-width: 531px)">
            Makers' Den
          </MediaQuery>
        </BrandLink>
      </nav>
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
    </StyledHeader>
  );
};

Header.contextTypes = {
  metadata: PropTypes.object.isRequired
};

export default Header;
