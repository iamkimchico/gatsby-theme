import Prismic from '@prismicio/client';
import { createUrl, extractMeta } from '../helpers';

const pageFilesQuery = ` query MyQuery {
  allFile {
    edges {
      node {
        relativeDirectory
        name
      }
    }
  }
}`;

const pageQuery = (type: any) => `query MyQuery {
  allPrismic${type} {
    edges {
      node {
        prismicId
        type
        uid
        lang
        id
        tags
        data {
          meta_type
          meta_twitter_creator
          meta_twitter_card
          meta_title
          meta_index_page
          meta_description
          meta_image {
            url
            fixed {
              src
              height
              width
            }
          }
        }
      }
    }
  }
 }`;

const fetchSettings = async (repo: any) => {
  const restEndpoint = `https://${repo}.prismic.io/api/v2`;
  const client = Prismic.client(restEndpoint);

  const data = await client.query(Prismic.Predicates.at('document.type', 'site_settings'));
  return data.results[0].data;
};

export const onPreInit = async ({ actions, store }, pluginOptions) => {
  // const { setPluginStatus } = actions;
  // const { prismicRepo } = pluginOptions;
  // const state = store.getState();
  // const settings = await fetchSettings(prismicRepo);
  // const plugin = state.flattenedPlugins.find((plugin) => plugin.name === 'gatsby-plugin-prefetch-google-fonts');
  // if (plugin) {
  //   plugin.pluginOptions = {
  //     ...plugin.pluginOptions,
  //     fonts: [
  //       { family: settings.primary_font, variants: [400] },
  //       { family: settings.secondary_font, variants: [400] },
  //       { family: settings.special_font, variants: [400] },
  //     ],
  //   };
  //   console.log(plugin.pluginOptions);
  //   setPluginStatus({ pluginOptions: plugin.pluginOptions }, plugin);
  // }
};

export const createPages = async ({ graphql, actions }, pluginOptions) => {
  const { createPage } = actions;
  const { prismicRepo } = pluginOptions;

  // Create pages programmatically
  const pageFiles = await graphql(pageFilesQuery);
  for (const file of pageFiles.data.allFile.edges) {
    const pageType = file.node.name;
    const fetchPages = await graphql(pageQuery(pageType));
    const settings = await fetchSettings(prismicRepo);
    const pages = fetchPages.data[`allPrismic${pageType}`].edges;

    pages.forEach((page) => {
      createPage({
        path: createUrl(page.node.uid, page.node.lang),
        component: require.resolve(`./src/templates/pages/${pageType}.jsx`),
        context: {
          prismicId: page.node.prismicId,
          meta: extractMeta(page.node),
          settings,
        },
      });
    });
  }
};
