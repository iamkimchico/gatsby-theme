<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Kimchico's Gatsby Theme
</h1>

## 🪒 Eslint & Prettier Setup

The formatting settings is already set in prettierrc and eslintrc.js, which is not to be manipulated with, so you don't have to worry about those.

Download Eslint Extension: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
Download Prettier Extenstion: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
Update VScode settings. Insert the following in settings.json in VScode:
`"editor.defaultFormatter": "esbenp.prettier-vscode", "editor.renderWhitespace": "none", "editor.detectIndentation": false, "editor.tabSize": 2, "prettier.htmlWhitespaceSensitivity": "strict", "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" }, "[javascriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" }, "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" }, "[typescriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" }, "editor.formatOnSave": true, "editor.codeActionsOnSave": { "source.fixAll.eslint": true }, "eslint.alwaysShowStatus": true, "eslint.format.enable": true, "eslint.packageManager": "yarn", "eslint.probe": [ "javascript", "javascriptreact", "typescript", "typescriptreact", "html", "markdown" ], "eslint.workingDirectories": ["./src"],`

## 🚀 Quick start

See the Readme in gatsby-theme-test for how to set up this project and use it for development with yarn workspaces
