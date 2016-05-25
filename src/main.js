import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.use(VueResource)

require('script!../node_modules/sweetalert/dist/sweetalert.min.js')


/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
