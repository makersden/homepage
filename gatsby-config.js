module.exports = {
  siteMetadata: {
    title: `Makers' Den`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts"
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ["gatsby-remark-prismjs", "gatsby-remark-copy-linked-files"]
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ]
};
