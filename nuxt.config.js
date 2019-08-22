require('dotenv').config();

module.exports = {
  mode: 'universal',

  dir: {
    assets: 'resources/assets',
    layouts: 'resources/layouts',
    middleware: 'app/middleware',
    pages: 'resources/pages',
    static: 'resources/static',
    store: 'resources/store',
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'My Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My website' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel:"stylesheet", href: "https://fonts.googleapis.com/css?family=Nunito:200,600"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    './resources/assets/css/suporte.css',
    // './node_modules/bootstrap/dist/css/bootstrap.css',
    // './node_modules/bootstrap-vue/dist/bootstrap-vue.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/firebase.js',
    // './plugins/auth.js'
  ],

  env: {
    firebaseConfig: require('./config/firebase.json'),
    uriApi: process.env.URI_API || '/api/',
    appEnv: process.env.APP_ENV || 'production'
  },
  
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],  

  /*
  ** Build configuration
  */
  buildDir: "nuxt_build",
  build: {
    publicPath: '/assets/',
    extractCSS: true,

    babel:{
      sourceType: 'unambiguous',
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  generate:{
    dir: 'public'
  },
  
  server:{
    host: process.env.NUXT_SERVER_HOST || "localhost",
  }
}
