import React from "react";
import Helmet from "react-helmet";
import { ServerStyleSheet, injectGlobal } from "styled-components";
/* import AirstreamEOT from './assets/fonts/Airstream.eot'
 * import AirstreamTTF from './assets/fonts/Airstream.ttf'
 * import AirstreamSVG from './assets/fonts/Airstream.svg'
 * import AirstreamWOFF from './assets/fonts/Airstream.woff'
 * import AirstreamWOFF2 from './assets/fonts/Airstream.woff2'*/

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

const Html = ({ App, render }) => {
  const sheet = new ServerStyleSheet();
  const { Main, State, Script } = render(sheet.collectStyles(<App />));
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:200,300,400"
          rel="stylesheet"
        />
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
