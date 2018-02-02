import React, { PureComponent } from "react";
import styled, { css } from "styled-components";

import Observer from "react-intersection-observer";

const Img = styled.img.attrs({
  "data-aos": "fade",
  "data-aos-duration": 1000,
  "data-aos-once": true
})`
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
      <Observer triggerOnce>
        {inView =>
          inView ? (
            <Img {...this.props} innerRef={this.listenToLoad} loaded={loaded} />
          ) : (
            <Preloader />
          )}
      </Observer>
    );
  }
}

export default GracefulImage;
