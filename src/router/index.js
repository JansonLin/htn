import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

import Layout from '../views/layout/Layout'

export default new Router({
  routes: [
    // {
    //   path: '',
    //   component: Layout,
    //   redirect: 'home',
    //   children: [
    //     {
    //       path: 'home',
    //       component: _import('home/home'),
    //       name: 'home',
    //       meta: { title: '首页', keepAlive: true }
    //     },{
    //       path: 'news-center',
    //       component: _import('news/news-center'),
    //       name: 'home',
    //       meta: { title: '新闻中心', keepAlive: true }
    //     },{
    //       path: 'education-training',
    //       component: _import('education/education-training'),
    //       name: 'home',
    //       meta: { title: '教育培训', keepAlive: true }
    //     },{
    //       path: 'job-hunting',
    //       component: _import('job/job-hunting'),
    //       name: 'home',
    //       meta: { title: '招聘求职', keepAlive: true }
    //     },{
    //       path: 'about-us',
    //       component: _import('about/about-us'),
    //       name: 'home',
    //       meta: { title: '关于我们', keepAlive: true }
    //     }
    //   ]
    // },
    {
      path: "",
      component: _import('home/home'),
      name: 'home',
      meta: { title: '首页', keepAlive: true }
    },
    {
      path: "*",
      redirect: "/"
    },{
      path: "/login",
      component: _import('login/index')
    },{
      path: "/member-center",
      component: _import('members/member-center')
    }
  ]
})
