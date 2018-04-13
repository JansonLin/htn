import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

import Layout from '../views/layout/Layout'


export default new Router({
  routes: [
    {
      path: '',
      component: Layout,
      redirect: 'home',
      children: [
        {
          path: 'home',
          component: _import('home/home'),
          name: 'home',
          meta: { title: '首页', keepAlive: true }
        },{
          path: 'home2',
          component: _import('home/home2'),
          name: 'home',
          meta: { title: '首页2', keepAlive: true }
        }
      ]
    }
  ]
})
