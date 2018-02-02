import React from "react";
import Link from "gatsby-link";

import Homepage from "./Home";

export default Homepage;

export const pageQuery = graphql`
  query IndexImages {
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            sizes(
              maxWidth: 1920
              height: 1080
              traceSVG: {
                color: "#f00e2e"
                turnPolicy: TURNPOLICY_MINORITY
                blackOnWhite: false
              }
            ) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
    kalle: imageSharp(id: { regex: "/kalle/" }) {
      sizes: responsiveSizes(maxWidth: 1440, cropFocus: NORTH) {
        src
        srcSet
        sizes
        aspectRatio
        base64
        originalImg
      }
    }
    korneliusz: imageSharp(id: { regex: "/korneliusz2/" }) {
      sizes: responsiveSizes(maxWidth: 1440, cropFocus: NORTH) {
        src
        srcSet
        sizes
        aspectRatio
        base64
        originalImg
      }
    }
  }
`;
