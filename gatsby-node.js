const path = require("path");

const homeSubpage = (subRoute, page) => {
  return Object.assign({}, page, {
    path: `/${subRoute}`
  });
};

const subRoutes = ["home", "team", "work", "contact"];

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

// exports.onCreatePage = ({ page, boundActionCreators: { createPage } }) =>
//   new Promise(resolve => {
//     if (page.path === "/") {
//       subRoutes.forEach(subRoute => createPage(homeSubpage(subRoute, page)));
//     }

//     resolve();
//   });
