import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/register'
import Home from '@/components/home'
import Logged from '@/components/logged'
import Editmed from '@/components/editmed'
import Medlist from '@/components/medlist'
import Applymed from '@/components/applymed'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "Home Page",
      component: Home
    },
    {
      path: '/login',
      name: 'Login Page',
      component: Login
    },
    {
      path : "/register",
      name: "Register Page",
      component: Register
    },
    {
      path : "/logged",
      name: "Logged Page",
      component: Logged
    }, {
      path : "/medics",
      name: "med list",
      component: Medlist
    },
    {
      path : "/edit-med",
      name: "Edit",
      component: Editmed
    },
    {
      path : "/apply-med",
      name: "Apply",
      component: Applymed
    }
  ]   
})
