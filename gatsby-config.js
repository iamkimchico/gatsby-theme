const { useGatsbyConfig } = require('gatsby-plugin-ts-config');

module.exports = (props) => useGatsbyConfig('./gatsby-config.ts', { props: props });
