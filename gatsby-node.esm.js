// import { getLangShort } from "./src/utils"
// import path from "path"
// import pagesQuery from "./prismic/pages"
// import layoutQuery from "./prismic/layout"
// import * as blockQueries from "./prismic/blockQueries"
// import { capitalize } from "./src/utils"

// export const createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const fetchPages = await graphql(pagesQuery);
//   const fetchLayout = await graphql(layoutQuery)
//   const pages = fetchPages.data.prismic.allPages.edges
//   const blocks = await fetchBlocks(pages, graphql);

//   pages.forEach(page => {
//     createPage({
//       path: createUrl(page.node._meta.lang, page.node.path),
//       component: path.resolve(`./src/templates/${page.node._meta.type}.jsx`),
//       context: {
//         id: page.node.prismicId,
//         page: page.node,
//         layout: fetchLayout.data.prismic.allLayouts.edges[0].node,
//         blocks: blocks[page.node._meta.id]
//       },
//     })
//   })
// }

// function createUrl(lang, path) {
//   let formattedLang = `/${getLangShort(lang)}`

//   if (lang === "da-dk") {
//     formattedLang = ""
//   }

//   const createdUrl = `${formattedLang}${path}`
//   return createdUrl
// }

// async function fetchBlocks(pages, graphql){
//   const blocks = {}

//   for(const page of pages){
//     const pageBlocks = []
//     for (const block of page.node.block_links) {
//       if(block.link){
//         const blockId = block.link._meta.id;
//         const blockType = block.link._meta.type;

//         if(typeof blockQueries[blockType] === "function"){
//           const query = blockQueries[blockType](blockId);
//           const fetchBlock = await graphql(query);
//           const blockContent = fetchBlock.data.prismic[`all${capitalize(blockType)}s`].edges[0].node; 
          

//           // -- Commented and not deleted in case a similar approach is needed someday
//           // if(blockContent.body[0].primary){
//           //   const blockProps = Object.keys(blockContent.body[0].primary)
//           //   for (const key of blockProps) {
//           //     const prop = blockContent.body[0].primary[key]
//           //     if(prop && prop._meta && prop._meta.type === "collection"){
//           //       const fetchCollection = await graphql(collectionQuery(prop._meta.id))
//           //       blockContent.body[0].primary[key] = fetchCollection.data.prismic.allCollections.edges[0].node;
//           //     }
//           //   }
//           // }
          
//           pageBlocks.push(blockContent) 
//         }
//       }
//     }

//     blocks[page.node._meta.id] = pageBlocks;
//   }
//   return blocks;
// }