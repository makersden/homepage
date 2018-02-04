import React, { PureComponent } from "react";
import styled, { css } from "styled-components";
import GatsbyImage from "gatsby-image";
import pick from "lodash/fp/pick";
import omit from "lodash/fp/omit";

import Observer from "react-intersection-observer";

const Img = styled.div.attrs({
  "data-aos": "fade"
})`
  ${props =>
    !props.loaded &&
    css`
      min-height: ${props => props.height};
      min-width: ${props => props.width};
    `};
`;

const imgProps = ["data-aos", "className"];

const GracefulImage = props => (
  <Img {...pick(imgProps, props)}>
    <GatsbyImage {...omit(imgProps, props)} className={props.className} />
  </Img>
);

export default GracefulImage;
