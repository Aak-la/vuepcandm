import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'pc',
    component: () => import('../views/pc/IndexPage.vue')
  },
  {
    path: '/m',
    name: 'm',
    redirect: {
      path: '/m/home'
    },
    children: [
      {
        path: '/m/home',
        name: '/m/home',
        component: () => import('../views/m/home/HomeView.vue')
      },
      {
        path: '/m/my',
        name: '/m/my',
        component: () => import('../views/m/my/MyView.vue')
      }
    ],
    component: () => import('../views/m/IndexPage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to.path)
  // 判断是否是手机端
  const isMobile = () => {
    const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return flag ? true : false;
  }
  if (to.path == '/' && isMobile()) {
    router.replace('/m');
  } else if (to.path == '/m' || to.path == '/m/home' && !isMobile()) {
    router.replace('/');
  } else {
    next()
  }
})

export default router
