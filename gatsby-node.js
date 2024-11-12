const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve("src/templates/post-template.js");

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error("Error fetching MDX posts:", result.errors);
    return;
  }

  result.data.allMdx.edges.forEach((node) => {
    console.log('node: ', node.node)
    createPage({
      path: `/post/${node.node.frontmatter.slug}`,
      component: `${postTemplate}?__contentFilePath=${node.node.internal.contentFilePath}`,
      context: { id: node.node.id },
    });
  });
};
