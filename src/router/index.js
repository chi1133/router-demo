import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '@/vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'a',
        component: {
          render: (h) => <div>home a</div>,
        },
      },
      {
        path: 'b',
        component: {
          render: (h) => <div>home b</div>,
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [
      {
        path: 'a',
        component: {
          render: (h) => <div>about a</div>,
        },
      },
      {
        path: 'b',
        component: {
          render: (h) => <div>about b</div>,
        },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

// 守卫 路由钩子
// router.beforeEach((to, from, next) => {
//   console.log('to:', to)
//   console.log('from:', from)
//   setTimeout(() => {
//     console.log('1')
//     next()
//   }, 1000)
// })
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   setTimeout(() => {
//     console.log('2')
//     next()
//   }, 1000)
// })
export default router
