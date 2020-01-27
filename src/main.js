import Vue from 'vue'
import router from './router.js' // 引入路由文件
import GlobalComponents from './GlobalComponents' // 引入全局安装
import App from './App'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
