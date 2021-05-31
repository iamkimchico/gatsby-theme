module.exports = (props) => ({
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-image",
    {
    resolve: `gatsby-plugin-manifest`,
      options: {
        name: props.name,
        short_name: props.name,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: "media",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: props.prismicRepo,
        accessToken: props.prismicToken,
        prismicToolbar: true,
        linkResolver: ({ node, key, value }) => (doc) => {
          `/${doc.uid}`;
        },
        schemas: {
          page:require("./prismic/schemas/page.json"),
        },
      },
    },
  ],  
})