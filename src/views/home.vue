<!--
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-13 11:49:48
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-19 20:05:45
 * @FilePath: /vue3-ts-h5-template/src/views/home.vue
 * @Description:
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<script setup lang="ts" name="HomeView">
import { Button, Cell } from 'vant';
import { reactive } from 'vue';
import { getLists } from '@/api/mock';

const columnList = reactive([
  '✔ ⚡ Vue3 + Vite5',
  '✔ 🍕 TypeScript',
  '✔ ✨ 全局环境变量',
  '✔ 🎨 Vant4 组件库',
  '✔ 🎨 vw 窗口适配',
  '✔ 🌀 Tailwindcss 原子类框架',
  '✔ 🌈 Pettier+ ESLint 统一代码风格',
  '✔ 👏 页面标题自动切换',
  '✔ 🚀 自动化部署',
  '✔ 🌈 Mock 实现数据模拟',
  '🚀 封装Axios请求库',
  '🌈 封装Utils常用工具函数'
]);
const handleList = () => {
  getLists().then(res => {
    console.log(res, 99);
  });
};
</script>

<template>
  <div class="home-view min-h-[100vh] w-full h-auto px-[24px] py-[48px]">
    <Button type="default" @click="handleList()">Mock请求</Button>
    <cell v-for="(item, index) in columnList" :key="index" :title="item"></cell>
  </div>
</template>
