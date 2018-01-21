import React from "react";
import Link from "gatsby-link";

import Homepage from "./Home";

/* const IndexPage = () => (
 *   <div>
 *     <h1>Hi people</h1>
 *     <p>Welcome to your new Gatsby site.</p>
 *     <p>Now go build something great.</p>
 *     <Link to="/page-2/">Go to page 2</Link>
 *   </div>
 * )
 * */
export default Homepage;

export const pageQuery = graphql`
  query IndexImages {
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            responsiveSizes(maxWidth: 1440) {
              src
              srcSet
              sizes
              aspectRatio
              base64
              originalImg
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
