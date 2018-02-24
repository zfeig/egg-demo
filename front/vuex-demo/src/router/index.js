import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloList from '@/components/HelloList'
import HelloDetail from '@/components/HelloDetail'
import HelloAbout from '@/components/HelloAbout'
import HelloCate from '@/components/HelloCate'
import CateSports from '@/components/cate/CateSports'
import CateNews from '@/components/cate/CateNews'
import CateMoive from '@/components/cate/CateMoive'
import CateEconomics from '@/components/cate/CateEconomics'
import Elem from '@/components/elem/Elem' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/elem',
      component: Elem
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
    },
    {
      path:'/cate',
      name:'HelloCate',
      component:HelloCate,
      children: [
        {
          path:'sports',
          name:'CateSports',
          component:CateSports
        },
        {
          path:'news',
          name:'CateNews',
          component:CateNews
        },
        {
          path:'moive',
          name:'CateMoive',
          component:CateMoive
        },
        {
          path:'economics',
          name:'CateEconomics',
          component:CateEconomics
        }
      ]
    }
  ]
})
