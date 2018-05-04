import Vue from 'vue'
import Router from 'vue-router'
import recommend from '../pages/recommend'


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: recommend
    },
    {
        path: '/recommend',
        name: 'recommend',
        component: recommend
    },
  ]
})
