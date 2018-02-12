import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers'
import Vuex from 'vuex'
import echarts from 'echarts'
import App from './App'
import bgImg from '@/assets/bg.jpg'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations: {
    increase(state){
      state.count++
    }
  },
  getters:{}
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // components: { App },
  // template: '<App/>'

});

export default store;  
