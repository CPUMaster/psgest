// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
  // ==============================
import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import VueResource from 'vue-resource'
import _ from 'lodash'

Vue.use(Quasar) // Install Quasar Framework
Vue.use(VueResource)
Vue.use(_)

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App'))
  })
})
