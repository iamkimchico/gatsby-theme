module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"process.env.SITE_NAME","short_name":"process.env.SITE_NAME","start_url":"/","display":"minimal-ui","icon":"src/images/gatsby-icon.png","background_color":"#663399","theme_color":"#663399","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('../node_modules/gatsby-plugin-breakpoints/gatsby-browser.js'),
      options: {"plugins":[],"queries":"media"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
