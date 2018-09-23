import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Thanks from '@/components/Thanks'
import Query from '@/components/Query'
import Questionaire from '@/components/Questionaire'
import quest from '@/components/Question'

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
      path: '/questionaire',
      name: 'questionaire',
      component: Questionaire
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
    }
  ]
})
