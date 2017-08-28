import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI)


Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
