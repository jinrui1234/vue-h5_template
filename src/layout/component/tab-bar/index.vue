<!--
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-20 10:38:05
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-23 19:49:42
 * @FilePath: /vue3-ts-h5-template/src/layout/component/tab-bar/index.vue
 * @Description: 底部导航栏
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
-->
<template>
  <tabbar
    v-model="activeBar"
    class="tab-bar-view"
    placeholder
    fixed
    safe-area-inset-bottom
    @change="handleTabChange"
  >
    <tabbar-item
      v-for="item in tabList"
      :key="item.name"
      :name="item.name"
      :icon="item.icon"
      :dot="item.dot"
      >{{ item.text }}</tabbar-item
    >
  </tabbar>
</template>
<script setup lang="ts" name="TabBarView">
import { ref } from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import { useRouter, useRoute } from 'vue-router';
const tabList = [
  {
    name: 'home',
    icon: 'home-o',
    text: '首页',
    path: '/home'
  },
  {
    name: 'settings',
    icon: 'setting-o',
    text: '工具',
    path: '/settings',
    dot: true
  },
  {
    name: 'about',
    icon: 'user-o',
    text: '关于',
    path: '/about'
  }
];
// 获取当前路由的name
const route = useRoute();
const activeBar = ref((route.name as string) || 'home');
const router = useRouter();
// 监听路由变化，更新activeBar
const handleTabChange = (name: string) => {
  router.push(tabList.find(item => item.name === name)?.path || '/home');
  activeBar.value = name;
};
</script>
