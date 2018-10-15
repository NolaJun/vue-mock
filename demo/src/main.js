import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import routes from './router/router'
import store from './store'
import router from './router'

Vue.use(VueRouter)
// const router = new VueRouter({
// 	routes
// })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  // router,
  router
}).$mount('#app')
