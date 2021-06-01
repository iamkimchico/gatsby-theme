const path = require(`path`)
const queries = require("./prismic/queries")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const fetchPages = await graphql(queries.page);

  const pages = fetchPages.data.allPrismicPages.edges;

  pages.forEach( page => {
    createPage({
      path:page.node.slug,
      component:path.resolve("./src/templates/page.jsx")
    })
  })

}