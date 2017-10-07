import React, { PureComponent } from "react";
import styled from "styled-components";

const Img = styled.img`
  opacity: ${props => (props.loaded ? "1" : "0")};
  transition: opacity 200ms;
`;

class GracefulImage extends PureComponent {
  state = {
    loaded: false
  };

  componentDidMount() {
    const { element } = this;

    element.addEventListener("load", this.onLoaded);
  }

  onLoaded = () =>
    this.setState(() => ({
      loaded: true
    }));

  render() {
    const { loaded } = this.state;

    return (
      <Img {...this.props} innerRef={e => (this.element = e)} loaded={loaded} />
    );
  }
}

export default GracefulImage;
