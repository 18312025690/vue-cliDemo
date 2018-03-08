// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './ask_list'
Vue.config.productionTip = false


new Vue({
  el: '#ask_list', 
  template: '<App/>',
  components: { App:App }
})
