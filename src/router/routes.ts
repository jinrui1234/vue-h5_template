import { type RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user/index.vue')
  }
];
