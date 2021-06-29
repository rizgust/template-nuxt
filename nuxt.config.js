export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'XXX Mart',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    './assets/styles/stylesheet.scss',
    // './assets/styles/global.scss'
  ],

  styleResources: {
    scss: [ '~/assets/styles/*.css', '~/assets/styles/*.scss', '~/assets/fonts/roboto.css']
  },

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    [
      "nuxt-vuex-localstorage",
      {
        localStorage: ["localStorage"],
        sessionStorage: ["sessionStorage"]
      }
    ],
  ],

  plugins: [
    '~/plugins/axios.js',
    '~/plugins/dateFormatter.js',
  ],

  build: {
  },

  toast: {
    position: 'top-center',
  },
  publicPath: ''
}
