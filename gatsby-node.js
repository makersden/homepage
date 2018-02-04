const path = require("path");

exports.createPages = ({ boundActionCreators: { createPage }, graphql }) => {
  const blogPostTemplate = path.resolve(`src/templates/blogPostTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.frontmatter.slug}`,
        slug: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {} // additional data can be passed via context
      });
    });
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /aos/,
      loader: "null-loader"
    });
  }
};
