import React, { Component, PropTypes } from "react";
import classnames from "classnames/bind";
import styles from "./index.scss";

const cx = classnames.bind(styles);

class ScrollbarConcealer extends Component {
  static propTypes = {
    element: PropTypes.func,
    children: PropTypes.object.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    element: React.DOM.main,
    className: ""
  };

  render() {
    const { element, children, className } = this.props;
    return <element className={cx("concealer", className)}>{children}</element>;
  }
}
