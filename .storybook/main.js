const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')
module.exports = {
  babel: async options => ({
    ...options,

    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods',
    ],
  }),
  
  // ... other settings here
}
module.exports = nuxifyStorybook({
  webpackFinal (config, options) {

    // extend config here
    
    return config
  },
  stories: [
    '../.design-system/storybook/stories/**/*-story.js',
    // './stories/**/*-story.js'
  ],
  addons: [    
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-notes',
    '@storybook/addon-options',
    '@whitespace/storybook-addon-html'
  ]
})
