import React, { PureComponent } from "react";
import styled from "styled-components";

import OnScreenDetect from "./OnScreenDetect";

const Img = styled.img`
  opacity: ${props => (props.loaded ? "1" : "0")};
  transition: opacity 400ms;
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
    const { className } = this.props;
    const { loaded } = this.state;

    return (
      <OnScreenDetect once>
        {({ isOnScreen }) =>
          isOnScreen ? (
            <Img
              {...this.props}
              innerRef={this.listenToLoad}
              loaded={loaded}
              className={className}
            />
          ) : (
            <div className={className} />
          )}
      </OnScreenDetect>
    );
  }
}

export default GracefulImage;
