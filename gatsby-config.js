const { generateConfig } = require('gatsby-plugin-ts-config');

// We send props in both the first and second parameter. The first is used to access the props in .node
// the second is used for accessing the props in .config
module.exports = (props) =>
  generateConfig(
    {
      projectRoot: __dirname,
      configDir: './src/gatsby',
      themeProps: { ...props },
    },
    { ...props },
  );
