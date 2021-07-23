/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { GatsbyNode } from 'gatsby';
import Prismic from '@prismicio/client';
import path from 'path';
import { createUrl, extractMeta } from '../helpers';
import { TThemePlugin } from '../types';

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

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }, { themeProps }) => {
  const { createPage } = actions;
  const { prismicRepo } = themeProps as TThemePlugin;

  const pageFiles: any = await graphql(pageFilesQuery);
  const settings: any = await fetchSettings(prismicRepo);

  for (const file of pageFiles.data.allFile.edges) {
    const pageType = file.node.name;
    const fetchPages: any = await graphql(pageQuery(pageType));
    const pages = fetchPages.data[`allPrismic${pageType}`].edges;
    pages.forEach((page: any) => {
      createPage({
        path: createUrl(page.node.uid, page.node.lang),
        component: path.resolve(__dirname, `../templates/pages/${pageType}.tsx`),
        context: {
          prismicId: page.node.prismicId,
          meta: extractMeta(page.node),
          settings,
        },
      });
    });
  }
};
