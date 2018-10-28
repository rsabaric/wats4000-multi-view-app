import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Survey from '@/components/survey'
import Secret from '@/components/secret'
import Puppypage from '@/components/puppypage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/survey',
      name: 'Survey',
      component: Survey
    },
    {
      path: '/secret',
      name: 'Secret',
      component: Secret
    },
    {
      path: '/puppypage',
      name: 'Puppypage',
      component: Puppypage
    }
  ]
})
