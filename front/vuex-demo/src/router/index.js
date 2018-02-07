import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloList from '@/components/HelloList'
import HelloDetail from '@/components/HelloDetail'
import HelloAbout from '@/components/HelloAbout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'HelloList',
      component: HelloList
    },
    {
      path: '/detail/:id',
      name: 'HelloDetail',
      component: HelloDetail
    },
    {
      path: '/about',
      name: 'HelloAbout',
      component: HelloAbout
    }
  ]
})
