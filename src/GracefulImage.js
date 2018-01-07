import React, { PureComponent } from "react";
import styled, { css } from "styled-components";

import OnScreenDetect from "./OnScreenDetect";

const Img = styled.img`
  opacity: ${props => (props.loaded ? "1" : "0")};
  ${props =>
    !props.static &&
    css`
      transform: translateY(${props => (props.loaded ? "0px" : "-20px")});
    `} transition: opacity 800ms, transform 1000ms;
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

  listenToLoad = element =>
    element && element.addEventListener("load", this.onLoaded);

  render() {
    const { className } = this.props;
    const { loaded } = this.state;

    const Preloader =
      this.props.preloader || (() => <div className={className} />);

    return (
      <OnScreenDetect once>
        {({ isOnScreen }) =>
          isOnScreen ? (
            <Img {...this.props} innerRef={this.listenToLoad} loaded={loaded} />
          ) : (
            <Preloader />
          )}
      </OnScreenDetect>
    );
  }
}

export default GracefulImage;
