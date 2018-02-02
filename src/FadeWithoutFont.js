import React from "react";
import styled from "styled-components";

import { fade } from "./mixins";

class WithLoadedFont extends React.PureComponent {
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

const Fade = styled.div`
  ${fade};
`;

export default class FadeWithoutFontComponent extends React.PureComponent {
  render() {
    const { children, className } = this.props;
    return (
      <WithLoadedFont>
        {({ loaded }) => (
          <Fade className={className} show={loaded}>
            {children}
          </Fade>
        )}
      </WithLoadedFont>
    );
  }
}
