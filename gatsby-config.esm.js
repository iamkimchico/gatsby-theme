// export default {
//   plugins: [
//     "gatsby-transformer-sharp",
//     "gatsby-plugin-sharp",
//     "gatsby-plugin-sass",
//     "gatsby-image",
//     {
//     resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: "props.name",
//         short_name: "props.name",
//         start_url: `/`,
//         display: `standalone`,
//         icon: `src/images/gatsby-icon.png`,
//       },
//     },
//     {
//       resolve: "gatsby-plugin-breakpoints",
//       options: {
//         queries: "media",
//       },
//     },
//     {
//       resolve: "gatsby-plugin-react-svg",
//       options: {
//         rule: {
//           include: /assets/,
//         },
//       },
//     },
//     {
//       resolve: `gatsby-source-prismic`,
//       options: {
//         repositoryName: "gatsby-theme",
//         accessToken: "MC5ZTFRtZHhBQUFDWUFlcExw.77-9ce-_ve-_ve-_vSHvv73vv70U77-977-9PAXvv73vv73vv73vv71LNO-_ve-_vW9k77-977-977-977-977-977-977-977-977-9",
//         prismicToolbar: true,
//         linkResolver: ({ node, key, value }) => (doc) => {
//           `/${doc.uid}`;
//         },
//         schemas: {
//           page:require("./prismic/schemas/page.json"),
//         },
//       },
//     },
//   ],  
// }