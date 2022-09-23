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
    redirect: '/cooker/list',
    component: Layout,
    meta: { title: '集成灶' },
    children: [
      {
        path: 'list',
        name: 'Cooker',
        component: () => import('@/views/cooker/index.vue'),
        meta: { icon: 'cooker', title: '集成灶' }
      },
      {
        path: 'add',
        hidden: true,
        name: 'CookerAdd',
        component: () => import('@/views/cooker/handle.vue'),
        meta: { title: '新建-集成灶' }
      },
      {
        path: 'editor/:id',
        hidden: true,
        name: 'CookerEditor',
        component: () => import('@/views/cooker/handle.vue'),
        meta: { title: '编辑-集成灶' }
      }
    ]
  },
  {
    path: '/air',
    redirect: '/air/list',
    component: Layout,
    meta: { title: '空调' },
    children: [
      {
        path: 'list',
        name: 'Air',
        component: () => import('@/views/air/index.vue'),
        meta: { icon: 'air', title: '空调' }
      },
      {
        path: 'add',
        hidden: true,
        name: 'AirAdd',
        component: () => import('@/views/air/handle.vue'),
        meta: { title: '新建-空调' }
      },
      {
        path: 'editor/:id',
        hidden: true,
        name: 'AirEditor',
        component: () => import('@/views/air/handle.vue'),
        meta: { title: '编辑-空调' }
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
