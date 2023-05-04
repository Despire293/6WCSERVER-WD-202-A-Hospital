import Vue from 'vue'
import index from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(index)
}).$mount('#app')