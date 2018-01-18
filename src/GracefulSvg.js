import React from "react";
import styled from "styled-components";
import Isvg from "react-inlinesvg";
import Observer from "react-intersection-observer";

import { fade } from "./mixins";

const StyledGracefulSvg = styled(Isvg)`
  ${fade} svg {
    ${fade};
  }

  &.loaded {
    opacity: 1;
    svg {
      opacity: 1;
    }
  }
`;

const GracefulSvg = props => {
  const preloader = props.preloader || <div className={props.className} />;
  return (
    <Observer triggerOnce>
      {inView =>
        inView ? (
          <StyledGracefulSvg {...props} preloader={preloader} />
        ) : (
          preloader
        )}
    </Observer>
  );
};

export default GracefulSvg;
