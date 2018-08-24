import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage/index'
//  重定向   routes的/redirect属性重定向
const Recommend = (resolve) => {
  import('@/components/recommend').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('@/components/rank').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('@/components/search').then((module) => {
    resolve(module)
  })
}
const Singer = (resolve) => {
  import('@/components/singer').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: '/',
          component: Recommend
        },
        {
          path: '/recommend',
          component: Recommend
        }, {
          path: '/rank',
          component: Rank
        }, {
          path: '/search',
          component: Search
        }, {
          path: '/singer',
          component: Singer
        }
      ]
    }
  ]
})
