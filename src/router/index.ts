import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Layout from '@/layout/index.vue';
import DashBoard from '@/views/dashboard/index.vue';

export type RouterConfig = RouteRecordRaw & { hidden?: boolean };

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard/index'
  },
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  }
];

export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    redirect: '/dashboard/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'DashBoard',
        component: DashBoard,
        meta: { icon: 'dashboard', title: '首页', affix: true }
      }
    ]
  },
  {
    path: '/cooker',
    redirect: '/cooker/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Cooker',
        component: () => import('@/views/cooker/index.vue'),
        meta: { icon: 'cooker', title: '集成灶' }
      },
      {
        path: 'add',
        hidden: true,
        name: 'CookerAdd',
        component: () => import('@/views/cooker/handle.vue')
      },
      {
        path: 'editor',
        hidden: true,
        name: 'CookerEditor',
        component: () => import('@/views/cooker/handle.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes, ...asyncRoutes]
});

router.beforeEach((to, _from, next) => {
  NProgress.start();
  const title = to.meta?.title;

  if (title) {
    document.title = `${title}-Vite Element Admin`;
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
