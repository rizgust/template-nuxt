const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')

module.exports = nuxifyStorybook({
  webpackFinal (config, options) {

    // extend config here
    
    return config
  },
  stories: [
    '../.design-system/storybook/stories/**/*-story.js',
    './stories/**/*-story.js'
  ],
  addons: [    
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-notes',
    '@storybook/addon-options',
    '@whitespace/storybook-addon-html'
  ]
})
