import React, { PureComponent } from "react";
import debounce from "lodash/debounce";
import getOr from "lodash/fp/getOr";

class OnScreenDetect extends PureComponent {
  state = {
    isOnScreen: false
  };

  checkIsOnScreen = () => {
    const { scrollY } = window;
    const { element } = this;
    const { once } = this.props;

    const offsetTop =
      element.offsetTop +
      getOr(0, "offsetParent.offsetTop", element) -
      element.offsetHeight;

    const isOnScreen = scrollY >= offsetTop;

    this.setState({
      isOnScreen
    });

    if (isOnScreen && once) {
      window.removeEventListener("scroll", this.onScroll);
    }
  };

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
    const { render } = this.props;

    return <div ref={e => (this.element = e)}>{render({ isOnScreen })}</div>;
  }
}

export default OnScreenDetect;
