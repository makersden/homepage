import React from "react";
import styled, { css } from "styled-components";

import { color } from "../../theme";

const Box = styled.span`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

const Inner = styled.span`
  display: block;
  top: 50%;
  margin-top: -2px;
  &,
  &::before,
  &::after {
    width: 40px;
    height: 4px;
    background-color: ${props =>
      color(props.light ? "white" : "textDark")(props)};
    border-radius: 4px;
    position: absolute;
    transition: transform 0.15s ease, background-color 1s;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    top: -10px;
  }

  &::after {
    bottom: -10px;
  }
`;

const emphatic = css`
  overflow: hidden;
  ${Inner} {
    transition: background-color 0.125s 0.175s ease-in;
    ${props =>
      props.active &&
      css`
        transition: background-color 0.125s 0 ease-out;
        transition-delay: 0s;
        transition-timing-function: ease-out;
        background-color: transparent;
      `} &::before {
      left: 0;
      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
        top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
      ${props =>
        props.active &&
        css`
          left: -80px;
          top: -80px;
          transform: translate3d(80px, 80px, 0) rotate(45deg);
          transition: left 0.125s ease-out, top 0.05s 0.125s linear,
            transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
        `};
    }

    &::after {
      top: 10px;
      right: 0;
      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
        top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
      ${props =>
        props.active &&
        css`
          right: -80px;
          top: -80px;
          transform: translate3d(-80px, 80px, 0) rotate(-45deg);
          transition: right 0.125s ease-out, top 0.05s 0.125s linear,
            transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
        `};
    }
  }
`;

const StyledButton = styled.button`
  padding: 15px 15px;
  outline: none;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  &:hover {
    opacity: 0.7;
  }

  ${emphatic};
`;

export default function Hamburger({ active, type, onClick, ...props }) {
  console.log({ light: props.light });
  return (
    <StyledButton active={active} type={type} onClick={onClick}>
      <Box>
        <Inner {...props} />
      </Box>
    </StyledButton>
  );
}
