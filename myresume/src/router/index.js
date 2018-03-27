import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cover from '@/page/cover'
import Home from '@/page/home'
import Study from '@/page/study'
import Skill from '@/page/skill'
import Info from '@/page/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cover',
      component: Cover
    },
    {
    	path: '/detail',
    	name: 'Home',
    	component: Home,
      children: [
        {
          path: 'info',
          component: Info
        },
        {
          path: 'skill',
          component: Skill
        },
        {
          path: 'study',
          component: Study
        },
      ]
    }
  ]
})
