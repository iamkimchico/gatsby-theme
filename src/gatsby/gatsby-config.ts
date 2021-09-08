import { GatsbyConfig } from 'gatsby';
import path from 'path';
import base from '../styles/base';
import { TThemePlugin } from '../types';

export default (_tsProps: Record<string, string>, themeProps: TThemePlugin): GatsbyConfig => ({
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pageTypes',
        path: path.resolve(__dirname, '../pageTypes'),
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: themeProps.prismicRepo,
        accessToken: themeProps.prismicToken,
        prismicToolbar: true,
        schemas: {
          site_settings: require('../../custom_types/site_settings.json'),
          navigation: require('../../custom_types/navigation.json'),
          standard_page: require('../../custom_types/standard_page.json'),
          team: require('../../custom_types/team.json'),
          person: require('../../custom_types/person.json'),
          location: require('../../custom_types/location.json'),
          business_value: require('../../custom_types/business_value.json'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: base.media,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [
            base.breakpoints.XXS,
            base.breakpoints.XS,
            base.breakpoints.SM,
            base.breakpoints.MD,
            base.breakpoints.LG,
            base.breakpoints.MX,
          ],
          backgroundColor: `transparent`,
          transformOptions: { fit: 'cover', cropFocus: 'attention' },
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
});
