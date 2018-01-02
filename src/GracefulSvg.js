import React from "react";
import styled from "styled-components";
import Isvg from "react-inlinesvg";
import OnScreenDetect from "./OnScreenDetect";

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
    <OnScreenDetect once>
      {({ isOnScreen }) =>
        isOnScreen ? (
          <StyledGracefulSvg {...props} preloader={preloader} />
        ) : (
          preloader
        )}
    </OnScreenDetect>
  );
};

export default GracefulSvg;
