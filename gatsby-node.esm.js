import * as queries from "./prismic/queries"

export const createPages = ({graphql, actions}) => {
  const { createPage } = actions


  const fetchPages = await graphql(queries.page);
  const pages = fetchPages.data.allPrismicPages.edges;

  console.log(pages);
}