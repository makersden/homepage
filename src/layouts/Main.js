import React from "react";
import { createContainer } from "@phenomic/preset-react-app/lib/client";
import styled from "styled-components";

import Header from "../components/Header";
import { color } from "../theme";

const Layout = styled.div`background: ${color("backgroundDark")};`;

const MainLayout = (props, context) => {
  return (
    <Layout>
      <Header location={props.location} />
      {props.children}
    </Layout>
  );
};

export default createContainer(MainLayout);
