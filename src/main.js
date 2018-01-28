// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers'
import echarts from 'echarts'
import App from './App'

Vue.use(VueRouter)
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // components: { App },
  // template: '<App/>'

})
