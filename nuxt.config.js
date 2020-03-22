
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: '/bootstrap/css/bootstrap.min.css' },
      { rel: "stylesheet", href: '/fontawesome/css/all.min.css' },
      { rel: "stylesheet", href: '/jqvmap/dist/jqvmap.min.css' },
      { rel: "stylesheet", href: '/summernote/summernote-bs4.css' },
      { rel: "stylesheet", href: '/owlcarousel2/dist/assets/owl.carousel.min.css' },
      { rel: "stylesheet", href: '/owlcarousel2/dist/assets/owl.theme.default.min.css' },
      { rel: "stylesheet", href: '/css/components.css' },
      { rel: "stylesheet", href: '/css/custom.css' },
      { rel: "stylesheet", href: '/css/style.css' },
      { rel: "stylesheet", href: '/bootstrap-social/bootstrap-social.css' },
      { rel: "stylesheet", href: '/jquery-selectric/selectric.css' },
    ],
    script: [
      { src: '/js/jquery.min.js' },
      { src: '/bootstrap/js/bootstrap.min.js' },
      { src: '/nicescroll/jquery.nicescroll.min.js' },
      { src: '/owlcarousel2/dist/owl.carousel.min.js' },
      { src: '/jquery-pwstrength/jquery.pwstrength.min.js' },
      { src: '/jquery-selectric/jquery.selectric.min.js' },
      { src: '/dropzonejs/min/dropzone.min.js' },
      { src: '/js/moment.min.js' },
      { src: '/js/popper.js' },
      { src: '/js/tooltip.js' },
      { src: '/js/stisla.js' },
      { src: '/upload-preview/assets/js/jquery.uploadPreview.min.js' },
      { src: '/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js' },
      { src: '/summernote/summernote-bs4.js' },
      { src: '/jquery-ui/jquery-ui.min.js' },
      { src: '/cleave-js/dist/cleave.min.js' },
      { src: '/js/page/modules-chartjs.js' },
      { src: '/js/page/modules-datatables.js' },
      { src: '/js/page/modules-ion-icons.js' },
      { src: '/js/page/modules-slider.js' },
      { src: '/js/page/modules-sweetalert.js' },
      { src: '/js/page/modules-toastr.js' },
      { src: '/js/page/modules-vector-map.js' },
      { src: '/js/page/auth-register.js' },
      { src: '/js/page/bootstrap-modal.js' },
      { src: '/js/page/components-chat-box.js' },
      { src: '/js/page/components-multiple-upload.js' },
      { src: '/js/page/components-table.js' },
      { src: '/js/page/components-user.js' },
      { src: '/js/page/features-post-create.js' },
      { src: '/js/page/features-posts.js' },
      { src: '/js/page/features-setting-detail.js' },
      { src: '/js/page/forms-advanced-forms.js' },
      { src: '/js/page/index-0.js' },
      { src: '/js/page/index.js' },
      { src: '/js/scripts.js' },
      { src: '/js/custom.js' },
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  serverMiddleware: [
    '~/server/logger'
  ],
  router: {
    linkActiveClass: 'active-link',
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/errors/404.vue')
      })
    },
    // Run the middleware/user-agent.js on every page
    middleware: 'user-agent'
  }
}
