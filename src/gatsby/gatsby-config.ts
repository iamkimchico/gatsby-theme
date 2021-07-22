import base from '../styles/base';

export default (props: any): any => ({
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pageTypes',
        path: `${__dirname}/src/templates/pages`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: props.prismicRepo,
        accessToken: props.prismicToken,
        prismicToolbar: true,
        schemas: {
          site_settings: require('../../custom_types/site_settings.json'),
          navigation: require('../../custom_types/navigation.json'),
          landing_page: require('../../custom_types/landing_page.json'),
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
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
});
