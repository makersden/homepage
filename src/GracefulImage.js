import React, { PureComponent } from "react";
import styled, { css } from "styled-components";

import OnScreenDetect from "./OnScreenDetect";

const Img = styled.img`
  opacity: ${props => (props.loaded ? "1" : "0")};
  transition: opacity 400ms;
  ${props =>
    !props.loaded &&
    css`
      min-height: ${props => props.height};
      min-width: ${props => props.width};
    `};
`;

class GracefulImage extends PureComponent {
  state = {
    loaded: false
  };

  componentDidMount() {
    const { element } = this;
  }

  onLoaded = () =>
    this.setState(() => ({
      loaded: true
    }));

  listenToLoad = element => element.addEventListener("load", this.onLoaded);

  render() {
    const { className, src, alt } = this.props;
    const { loaded } = this.state;

    const Preloader =
      this.props.preloader || (() => <div className={className} />);

    return (
      <OnScreenDetect once>
        {({ isOnScreen }) =>
          isOnScreen ? (
            <Img
              src={src}
              alt={alt}
              innerRef={this.listenToLoad}
              loaded={loaded}
              className={className}
            />
          ) : (
            <Preloader />
          )}
      </OnScreenDetect>
    );
  }
}

export default GracefulImage;
