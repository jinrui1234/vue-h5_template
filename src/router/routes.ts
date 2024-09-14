/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-14 15:43:43
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-14 15:50:25
 * @FilePath: /vue3-ts-h5-template/src/router/routes.ts
 * @Description: 路由文件
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */
import { type RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue'),
    meta: {
      title: '首页'
    }
  }
];
