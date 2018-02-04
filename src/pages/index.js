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
              maxWidth: 1389
              maxHeight: 1004
              traceSVG: {
                color: "#fafafa"
                blackOnWhite: false
                optTolerance: 0.8
                turnPolicy: TURNPOLICY_MINORITY
              }
            ) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`;
