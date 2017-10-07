import React, { PureComponent } from "react";
import styled from "styled-components";

import { fade } from "./mixins";

class WithLoadedFont extends PureComponent {
  state = { loaded: false };

  componentDidMount() {
    document.fonts.ready.then(this.setLoaded).catch(this.setLoaded);
  }

  setLoaded = () => this.setState(() => ({ loaded: true }));

  render() {
    const { children } = this.props;

    return children(this.state);
  }
}

const Fade = styled.div`${fade};`;

class FadeWithoutFont extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <WithLoadedFont>
        {({ loaded }) => <Fade show={loaded}>{children}</Fade>}
      </WithLoadedFont>
    );
  }
}

export default FadeWithoutFont;
