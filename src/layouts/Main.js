import React from "react";
import { createContainer } from "@phenomic/preset-react-app/lib/client";

import Header from "../components/Header";

const Layout = (props, context) => {
  return (
    <div>
      <Header location={props.location} />
      {props.children}
    </div>
  );
};

export default createContainer(Layout);
