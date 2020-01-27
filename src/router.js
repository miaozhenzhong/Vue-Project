import Vue from 'vue'
// 路由
import VueRouter from 'vue-router'

// 登录
import Login from './components/Login.vue'
// 公共页面
import Home from './components/Home.vue'

// 评审报告查阅 - 评审报告查询(主页面)
import Main from './components/reviewReportLook/Main.vue'
// 评审报告查阅 - 报告指标分析
import ReportIndicatorsAnalysis from './components/reviewReportLook/ReportIndicatorsAnalysis.vue'
// 评审报告查阅 - 数据质量提升
import DataQualityImprovement from './components/reviewReportLook/DataQualityImprovement.vue'
// 评审报告查阅 - 评审报告查重
import ReviewReportReview from './components/reviewReportLook/ReviewReportReview.vue'

// 评审数据挖掘 - 客户信息
import CustomerInformation from './components/dataMining/CustomerInfor/CustomerInformation.vue'
import CustomerDetails from './components/dataMining/CustomerInfor/CustomerDetails.vue' // 客户详情
import test0115 from './components/dataMining/CustomerInfor/test0115.vue' // 客户详情
// 评审数据挖掘 - 项目信息
import ProjectInformation from './components/dataMining/ProjectInformation.vue'
// 评审数据挖掘 - 行业信息
import IndustryInformation from './components/dataMining/IndustryInformation.vue'

// 报告编写支持
import ReportReviewSupport from './components/reportReview/ReportReviewSupport.vue'

// 报告审查支持
import ReportWritingSupport from './components/reportWriting/ReportWritingSupport.vue'
// 贷委会纪要编写
import DwhOnlineWriting from './components/reportWriting/DwhOnlineWriting.vue'
// 评审报告知识库
import ReviewReportKnowledgeBase from './components/reportWriting/ReviewReportKnowledgeBase.vue'

// 练习-crud
import crud from './components/test/crud.vue'
// 练习 - echarts
import echarts from './components/test/echarts.vue'
import elementUI from './components/test/elementUI.vue'
import a1 from './components/test/a1.vue'
import a2 from './components/test/a2.vue'

// demo
import demo1 from './components/demo/demo1.vue'
import JD from './components/demo/JD.vue'

// vue 知识点总结
import BusHome from './components/VueKnowledge/01_vue事件总线/BusHome.vue'
import search from './components/VueKnowledge/02_vue搜索功能/search.vue'
import highlight from './components/VueKnowledge/03_JS实现匹配文字高亮显示/highlight.vue'
import particle from './components/VueKnowledge/04_particle粒子运动特效/particle.vue'
import vueparticles from './components/VueKnowledge/04_particle粒子运动特效/vueparticles.vue'
import mock from './components/VueKnowledge/05_mock模拟数据/mock.vue'

import { test } from 'shelljs'

Vue.use(VueRouter)


const routes = [
  { path: '/', redirect: '/login'},
  { path: '/login', component: Login },
  { 
    path: '/home',
    component: Home,
    redirect: '/main',
    children: [
      { path: '/main', component: Main }, // 主页面
      { path: '/reportIndicatorsAnalysis', component: ReportIndicatorsAnalysis }, // 报告指标分析
      { path: '/dataQualityImprovement', component: DataQualityImprovement }, // 数据质量提升
      { path: '/reviewReportReview', component: ReviewReportReview }, // 评审报告查重
      { path: '/customerInformation', component: CustomerInformation }, // 客户信息
      { path: '/CustomerDetails', component: CustomerDetails }, // 客户详情信息
      { path: '/test0115', component: test0115 }, // 客户详情信息
      { path: '/projectInformation', component: ProjectInformation }, // 项目信息
      { path: '/industryInformation', component: IndustryInformation }, // 行业信息
      { path: '/reportWritingSupport', component: ReportWritingSupport }, // 报告编写支持
      { path: '/reportReviewSupport', component: ReportReviewSupport }, // 报告审查支持
      { path: '/dwhOnlineWriting', component: DwhOnlineWriting }, // 贷委会纪要编写
      { path: '/reviewReportKnowledgeBase', component: ReviewReportKnowledgeBase },  // 评审报告知识库
      { path: '/crud', component: crud },  // 练习crud
      { path: '/search', component: search },  // 练习 search
      { path: '/echarts', component: echarts },  // 练习echarts
      { path: '/elementUI', component: elementUI },  // 练习elementUI
      { path: '/highlight', component: highlight },  // 练习highlight
      { path: '/particle', component: particle },  // 练习particle
      { path: '/vueparticles', component: vueparticles },  // 练习vue-particle
      { path: '/mock', component: mock },  // 练习mock
      { 
        path: '/BusHome',
        component: BusHome
      },
      {   // 练习父子路由
        path: '/a1', 
        component: a1,
        children: [
          {
            path: '/a2',
            component: a2
          }
        ]
      },
      {   // demo
        path: '/demo1', 
        component: demo1
        // children: [
        //   {
        //     path: '/JD',
        //     component: JD
        //   }
        // ]
      },
      {
        path: '/JD',
        component: JD
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history', // 路由的显示模式： # 去掉
  routes // (缩写) 相当于 routes: routes
})

// 挂载路由导航守卫
router.beforeEach((to,from,next) => {
  // to:将要访问的路径
  // from： 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
      // next() 放行  next('/login') 强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})

export default router
