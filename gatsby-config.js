/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
  },
  plugins: [
    "gatsby-plugin-postcss", 
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages",
  },
  `gatsby-plugin-mdx`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: "posts",
      path: "./content/posts/",
    },
    __key: "posts",
  },
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  ]
};