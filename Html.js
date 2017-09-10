import React from "react";
import Helmet from "react-helmet";
import { ServerStyleSheet, injectGlobal } from "styled-components";

injectGlobal`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

const Html = ({ App, render }) => {
  const { Main, State, Script, Style } = render(<App />);
  const sheet = new ServerStyleSheet();
  const helmet = Helmet.renderStatic();

  return (
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        {helmet.base.toComponent()}
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {helmet.style.toComponent()}
        {helmet.script.toComponent()}
        {helmet.noscript.toComponent()}
        {sheet.getStyleElement()}
      </head>
      <body {...helmet.bodyAttributes.toComponent()}>
        <Main />
        <State />
        <Script />
      </body>
    </html>
  );
};

export default Html;
