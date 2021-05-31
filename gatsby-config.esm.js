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
        icon: `src/images/gatsby-icon.png`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
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
  ],
}
