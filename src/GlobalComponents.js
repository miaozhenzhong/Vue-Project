import Vue from 'vue'
import ElementUI, { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont.css' // 导入字体图标
import './assets/css/global.css' // 导入全局样式表
import axios from 'axios'
import echarts from "echarts";
import VueParticles from "vue-particles";
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import '@/assets/aliicon/aliicon/iconfont.css'

// 向main.js中添加如下代码
process.env.Mock && require('./mock.js')


Vue.use(ElementUI);
Vue.use(VueParticles);
Vue.component('icon',Icon)

Vue.prototype.$axios = axios // 通过this可以访问axios，从而发送ajax请求
Vue.prototype.$echarts = echarts;

// axios.defaults.baseURL = 'http://localhost:3000' //配置请求的根路径


/**
 * 配置axios请求拦截器
 */
axios.interceptors.request.use(config => {
  console.log(config,'config')
  config.headers.Authorization = window.sessionStorage.getItem('token')

  return config  // 在最后必须return config
})


/**
 * 全局-弹窗-挂载到vue上
 */
Vue.prototype.$message = Message


/**
 * 阻止显示生产模式的消息
 * 为生产部署时，请确保启用生产模式。
 * 如果没有这行代码，或者设置为true，控制台就会多出这么一段代码。
 * You are running Vue in development mode.
 * Make sure to turn on production mode when deploying for production.
 */
Vue.config.productionTip = false