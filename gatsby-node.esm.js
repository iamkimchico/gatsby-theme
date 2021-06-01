import path from `path`
import queries from "./prismic/queries"

export const createPages = async ({ graphql, actions }) => {
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