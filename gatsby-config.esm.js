import * as schemas from "./prismic/schemas"

export default (props) => ({
  plugins:[
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-source-prismic',
      options:{
        repositoryName:props.prismicRepo,
        accessToken:props.prismicToken,
        linkResolver: ({ node, key, value }) => (doc) => {
          // do something with links here
        },
        schemas:{
          page: schemas.page
        }
      }
    }
  ]
})