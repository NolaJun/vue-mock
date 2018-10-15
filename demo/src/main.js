import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router/router'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})
Vue.config.productionTip = false

new Vue({
  // store
  render: h => h(App),
  router
}).$mount('#app')
