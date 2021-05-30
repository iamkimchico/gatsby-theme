import { media } from "./src/constants/breakpoints"

export default {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
    resolve: `gatsby-plugin-manifest`,
      options: {
        name: "process.env.SITE_NAME",
        short_name: "process.env.SITE_NAME",
        start_url: `/`,
        display: `standalone`,
        icon:`src/favicon/alterna/favicon.png`
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {},
    },
    {
      resolve: "@prismicio/gatsby-source-prismic-graphql",
      options: {
        repositoryName: "process.env.PRISMIC_REPO",
        accessToken: "process.env.PRISMIC_TOKEN",
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: media,
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
  ],
}
