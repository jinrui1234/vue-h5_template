/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-13 11:49:48
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-25 19:06:14
 * @FilePath: /vue3-ts-h5-template/src/router/index.ts
 * @Description: 页面路由文件
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized
} from 'vue-router';
import { routes } from './routes';
import { setPageTitle } from '@/utils/set-page-title';
import NProgress from '@/utils/progress';
import store from '../stores';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // 解决浏览器回退后页面顶部位置丢失问题
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition;
    }
    if (!store.getters['cachedView/getCachedView'].includes(to.name)) {
      return { top: 0 };
    } else {
      return { top: savedPosition?.top || 0 };
    }
  }
});

export interface toRouteModel extends RouteLocationNormalized {
  meta: {
    title?: string;
    keepAlive?: boolean;
  };
}

router.beforeEach((to: toRouteModel, from, next) => {
  NProgress.start();
  store.commit('loading/SET_LOADING', true);
  // 设置页面标题
  setPageTitle(to.meta.title);
  next();
});
router.afterEach((to: toRouteModel) => {
  // 缓存页面keep-alive
  store.dispatch('cachedView/setAddCachedView', to);
  NProgress.done();
  setTimeout(() => {
    store.commit('loading/SET_LOADING', false);
  }, 500);
});

export default router;
