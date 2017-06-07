// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import babel from "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'
import "common/stylus/index.styl"
import fastclick from "fastclick"
import $ from 'jquery'
import VueLazyload from 'vue-lazyload'

// or with options
Vue.use(VueLazyload, {
  loading: require("common/image/default.png"),
})
Vue.config.productionTip = false
fastclick.attach(document.body)//解决延迟
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
