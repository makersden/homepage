import React from "react";
import styled from "styled-components";
import Isvg from "react-inlinesvg";
import OnScreenDetect from "./OnScreenDetect";

import { fade } from "./mixins";

const StyledGracefulSvg = styled(Isvg)`
  ${fade} &.loaded {
    opacity: 1;
  }
`;

const GracefulSvg = props => {
  const preload = props.preload || <div className={props.className} />;
  return (
    <OnScreenDetect once>
      {({ isOnScreen }) =>
        isOnScreen ? (
          <StyledGracefulSvg {...props} preload={preload} />
        ) : (
          preload
        )}
    </OnScreenDetect>
  );
};

export default GracefulSvg;
