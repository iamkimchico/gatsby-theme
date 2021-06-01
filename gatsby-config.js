// const requireEsm = require('esm')(module);
// module.exports = requireEsm('./gatsby-config.esm.js');

module.exports = {
  plugins:[
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-source-prismic',
      options:{
        repositoryName:"gatsby-theme",
        accessToken:"MC5ZTFRtZHhBQUFDWUFlcExw.77-9ce-_ve-_ve-_vSHvv73vv70U77-977-9PAXvv73vv73vv73vv71LNO-_ve-_vW9k77-977-977-977-977-977-977-977-977-9",
        linkResolver: ({ node, key, value }) => (doc) => {
          // do something with links here
        },
        schemas:{
          page: require("./prismic/schemas/page.json")
        }
      }
    }
  ]
}