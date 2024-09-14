/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-13 11:49:48
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-14 15:45:44
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
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export interface toRouteModel extends RouteLocationNormalized {
  meta: {
    title?: string;
    keepAlive?: boolean;
  };
}

router.beforeEach((to: toRouteModel, from, next) => {
  NProgress.start();
  // 设置页面标题
  setPageTitle(to.meta.title);
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
