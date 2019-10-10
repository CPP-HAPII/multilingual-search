import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Thanks from '@/components/Thanks'
import Query from '@/components/Query'
// import Questionnaire1 from '@/components/Questionnaire-1'
import Questionnaire2 from '@/components/Questionnaire-2'
// import Questionnaire3 from '@/components/Questionnaire-3'
import newQ1 from '@/components/newQ1'
import quest from '@/components/Question'
import postQuestion from '@/components/PostQuestion'
import base from '@/components/base'

Vue.use(Router)

export default new Router({
  scrollBehavior () {
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/questionnaire/1',
      name: 'questionnaire-1',
      component: newQ1
    },
    {
      path: '/questionnaire/2',
      name: 'questionnaire-2',
      component: Questionnaire2
    },
    {
      path: '/questionnaire/3',
      name: 'questionnaire-3',
      component: postQuestion
    },
    {
      path: '/quest',
      name: 'quest',
      component: quest
    },
    {
      path: '/register',
      name: 'Register',
      component: Login
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks
    },
    {
      path: '/query/:queryID',
      name: 'query',
      component: Query
    },
    {
      path: '/base',
      name: 'base',
      component: base
    }
  ]
})
