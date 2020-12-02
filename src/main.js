// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import MaterialIcon from '~/components/MaterialIcon.vue'
import Navigation from '~/components/Navigation.vue'

import "gridsome-plugin-remark-container/themes/classic.css";
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('MaterialIcon', MaterialIcon)
  Vue.component('Navigation', Navigation)

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    })
    next()
  })
}
