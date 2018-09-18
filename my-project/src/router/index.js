import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import newslist from '@/components/News/newslist'
import newsdetails from '@/components/News/newsdetails'
import Vip from '@/components/Vip/Vip'
import Car from '@/components/Car/Car'
import Serach from '@/components/Serach/Serach'
import Photo from '@/components/Photo/Photo'
import Photodetails from '@/components/Photo/Photodetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news/list',
      name:'newslist',
      component:newslist
    },
    {
      path: '/news/details:id',
      name:'newsdetails',
      component:newsdetails 
    },
    {
      path: '/Vip',
      name:'Vip',
      component:Vip 
    },
    {
      path: '/Car',
      name:'Car',
      component:Car 
    },
    {
      path: '/Serach',
      name:'Serach',
      component:Serach 
    },{
      path:'/Photo',
      name:'Photo',
      component:Photo
    },{
      path:'/Photo/Photodetails/:id',
      name:'Photodetails',
      component:Photodetails
    }
  ]
})
