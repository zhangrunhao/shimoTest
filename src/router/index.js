import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import ItemOne from '@/components/ItemOne'
import ItemTwo from '@/components/ItemTwo'
import ItemThree from '@/components/ItemThree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/item1',
      component: ItemOne
    },
    {
      path: '/item2',
      component: ItemTwo
    },
    {
      path: '/item3',
      component: ItemThree
    }
  ]
})
