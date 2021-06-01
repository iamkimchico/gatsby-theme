const query = () => `query MyQuery {
  allPrismicPage {
    edges {
      node {
        data {
          body {
            ... on PrismicPageBodyHero {
              id
              slice_label
              slice_type
              primary {
                description
                title
              }
            }
          }
          meta_description
          meta_title
          page_description
          page_title {
            raw
          }
          show_page_description
          show_page_title
          slug
        }
        url
        uid
        type
        prismicId
        lang
      }
    }
  }
}`

export default query;