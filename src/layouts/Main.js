import React, { Component } from "react";
import { createContainer } from "@phenomic/preset-react-app/lib/client";
import styled from "styled-components";

import Header from "../components/Header";
import { color } from "../theme";

const Layout = styled.div`background: ${color("backgroundDark")};`;
let lastHash;

function scrollToAnchor() {
  const [, hash] = window.decodeURIComponent(window.location.hash).split("#");
  if (hash) {
    const element = document.getElementById(hash);
    console.log(element.offsetTop);
    if (element) {
      window.scrollTo(0, element.offsetTop - 68);
    }
  }
}

class MainLayout extends Component {
  componentWillReceiveProps(props) {
    if (
      props.params.splat !== this.props.params.splat &&
      !window.location.hash
    ) {
      window.scrollTo(0, 0);
    } else if (window.location.hash && window.location.hash !== lastHash) {
      lastHash = window.location.hash;
      scrollToAnchor();
    }
  }

  componentDidMount = scrollToAnchor;

  render() {
    const { children, location } = this.props;

    return (
      <Layout>
        <Header location={location} />
        {children}
      </Layout>
    );
  }
}

export default createContainer(MainLayout);
