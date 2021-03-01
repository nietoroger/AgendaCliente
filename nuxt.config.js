export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Agenda cliente',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', 'http-equiv':"Content-Security-Policy", content: 'upgrade-insecure-requests' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css',
        integrity: 'sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1',
        crossorigin: 'anonymous'
      }
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js',
        integrity: 'sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU',
        crossorigin: 'anonymous',
        async: true
      },
      {
        type: 'text/javascript',
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js',
        integrity: 'sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj',
        crossorigin: 'anonymous',
        async: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/estilo-agenda.css",
    "~/assets/css/estilo-timeline.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/vuelidate.js",
    "@/plugins/axios",
    "~/plugins/api.plugin.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment'
  ],
  moment: {
    locales: ['es']
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    //'@/modules/servicios.js'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    //baseURL: 'http://190.208.57.219:8082/MKServicios/apiagenda/'
    baseURL: "http://masterkey.fortidyndns.com:4444/mkodata/odata/" //"http://localhost:49440/odata/"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    baseURL: "http://190.208.57.219:8082/MKServicios/apiagenda/"
  }
}
