/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-14 15:43:43
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-23 22:32:55
 * @FilePath: /vue3-ts-h5-template/src/router/routes.ts
 * @Description: 路由文件
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */
import { type RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    component: () => import('../layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/settings/index.vue'),
        meta: {
          title: '工具'
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/about/index.vue'),
        meta: {
          title: '关于'
        }
      }
    ]
  }
];
