import React, { PropTypes } from "react";
import Helmet from "react-helmet";

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      meta={[
        {
          name: "generator",
          content: `${process.env.PHENOMIC_NAME} ${process.env
            .PHENOMIC_VERSION}`
        },
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${pkg.twitter}` }
      ]}
      script={[{ src: "https://cdn.polyfill.io/v2/polyfill.min.js" }]}
    />

    <Helmet>
      {/* <link rel="apple-touch-icon" sizes="57x57" href={require("assets/images/favicons/apple-icon-57x57.png" )}/>
          <link rel="apple-touch-icon" sizes="60x60" href={require("assets/images/favicons/apple-icon-60x60.png" )}/>
          <link rel="apple-touch-icon" sizes="72x72" href={require("assets/images/favicons/apple-icon-72x72.png" )}/>
          <link rel="apple-touch-icon" sizes="76x76" href={require("assets/images/favicons/apple-icon-76x76.png" )}/>
          <link rel="apple-touch-icon" sizes="114x114" href={require("assets/images/favicons/apple-icon-114x114.png" )}/>
          <link rel="apple-touch-icon" sizes="120x120" href={require("assets/images/favicons/apple-icon-120x120.png" )}/>
          <link rel="apple-touch-icon" sizes="144x144" href={require("assets/images/favicons/apple-icon-144x144.png" )}/>
          <link rel="apple-touch-icon" sizes="152x152" href={require("assets/images/favicons/apple-icon-152x152.png" )}/>
          <link rel="apple-touch-icon" sizes="180x180" href={require("assets/images/favicons/apple-icon-180x180.png")}/>
          <link rel="icon" type="image/png" sizes="192x192"  href={require("assets/images/favicons/android-icon-192x192.png" )}/>
          <link rel="icon" type="image/png" sizes="32x32" href={require("assets/images/favicons/favicon-32x32.png")}/>
          <link rel="icon" type="image/png" sizes="96x96" href={require("assets/images/favicons/favicon-96x96.png")}/>
          <link rel="icon" type="image/png" sizes="16x16" href={require("assets/images/favicons/favicon-16x16.png")}/> */}
      {/* <link rel="manifest" href={require("assets/images/favicons/manifest.json" )}/> */}
      <meta name="msapplication-TileColor" content="#090a0f" />
      {/* <meta name="msapplication-TileImage" content={require("assets/images/favicons/ms-icon-144x144.png" )}/> */}
      <meta name="theme-color" content="#090a0f" />
    </Helmet>

    {/* meta viewport safari/chrome/edge */}
    <Helmet
      meta={[
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          name: "google-site-verification",
          content: "VEd-YN0XIV4G-934e_RkML776hewBuI9UC0O-9IFOrQ"
        }
      ]}
    />
    <style>{"@-ms-viewport { width: device-width; }"}</style>
  </div>
);

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired
};

export default DefaultHeadMeta;
