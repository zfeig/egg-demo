// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vuex from 'vuex'
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import stock  from './store'
Vue.use(Element,{ size: 'small' });
Vue.use(Vuex);
const store = new Vuex.Store(stock);
Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   store,
//   router,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  render: h => h(App)
})
