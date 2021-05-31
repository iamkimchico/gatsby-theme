// import { media } from "./src/constants/breakpoints"

export default {
  plugins: [
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
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {},
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
  ],
}
