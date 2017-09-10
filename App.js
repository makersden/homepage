import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";
import styled from "styled-components";

import { BlogPostContainer } from "./src/blog";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { MainLayout } from "./src/layouts";
import { Home } from "./src/pages";

const App = () => (
  <ThemeProvider theme={theme}>
    <Router history={browserHistory}>
      <Route component={MainLayout}>
        <Route path="/" component={Home} />
        <Route path="/blog/*" component={BlogPostContainer} />
      </Route>
    </Router>
  </ThemeProvider>
);

export default createApp(App);

if (module.hot) {
  module.hot.accept(() => renderApp(App));
}

// kill previous website ServiceWorker
if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations) registration.unregister();
  });
}
