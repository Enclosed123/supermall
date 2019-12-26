import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue({})
FastClick.attach(document.body)
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/006Zw1yCly1fxtez9jmyqj30n70xcn18.png')
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
