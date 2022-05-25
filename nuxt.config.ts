import {defineNuxtConfig} from "nuxt";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  buildModules: [
    "@pinia/nuxt",
    '@vueuse/nuxt'
  ],
  vueuse: {
    ssrHandlers: true,
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: [
        '@headlessui/vue', 'vue', 'pinia', 'ufo'
      ]
    }
  }
});
