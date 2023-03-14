import Vue from 'vue'
import App from './App.vue'
import Routes from "./Router/router"
import VueRouter from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
})


new Vue({
  render: h => h(App),
  mounted() {
    AOS.init()
  },
  router: router,
}).$mount('#app')
