import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router' //引入路由
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
  