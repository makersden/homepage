import React, { PureComponent } from "react";
import throttle from "lodash/throttle";
import getOr from "lodash/fp/getOr";

class OnScreenDetect extends PureComponent {
  state = {
    isOnScreen: false
  };

  checkIsOnScreen = () => {
    const { element } = this;
    const { once } = this.props;
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const isOnScreen = rect.top >= 0 && rect.bottom <= windowHeight;

    this.setState({
      isOnScreen
    });

    if (isOnScreen && once) {
      window.removeEventListener("scroll", this.onScroll);
    }
  };

  onScroll = throttle(this.checkIsOnScreen, 100);

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);

    this.checkIsOnScreen();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    const { isOnScreen } = this.state;
    const { render, children } = this.props;

    return (
      <div ref={e => (this.element = e)}>
        {(render || children)({ isOnScreen })}
      </div>
    );
  }
}

export default OnScreenDetect;
