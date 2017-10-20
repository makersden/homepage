import React, { PureComponent } from "react";
import debounce from "lodash/debounce";
import getOr from "lodash/fp/getOr";

class OnScreenDetect extends PureComponent {
  state = {
    isOnScreen: false
  };

  checkIsOnScreen = () => {
    const { element } = this;
    const { once } = this.props;
    const rect = element.getBoundingClientRect();
    const isOnScreen =
      rect.top >= 0 &&
      rect.bottom <=
        0 + (window.innerHeight || document.documentElement.clientHeight);

    this.setState({
      isOnScreen
    });

    if (isOnScreen && once) {
      window.removeEventListener("scroll", this.onScroll);
    }
  };

  setPreviousScroll = () => this.setState({});
  onScroll = debounce(this.checkIsOnScreen, 100);

  componentDidMount() {
    this.checkIsOnScreen();

    window.addEventListener("scroll", this.onScroll);
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
