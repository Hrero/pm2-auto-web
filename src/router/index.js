import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'layout',
        redirect: '/home',
        component: layout,
        hidden: true,
        children: [{
            path: 'home',
            component: () => import('@/views/home/home')
        }]
    }
  ]
})
