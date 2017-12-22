const homeSubpage = (subRoute, page) => {
  return Object.assign({}, page, {
    path: `/${subRoute}`
  });
};

const subRoutes = ["home", "team", "work", "contact"];

exports.onCreatePage = ({ page, boundActionCreators: { createPage } }) =>
  new Promise(resolve => {
    if (page.path === "/") {
      subRoutes.forEach(subRoute => createPage(homeSubpage(subRoute, page)));
    }

    resolve();
  });
