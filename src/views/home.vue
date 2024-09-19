<!--
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-13 11:49:48
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-19 20:40:15
 * @FilePath: /vue3-ts-h5-template/src/views/home.vue
 * @Description:
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<script setup lang="ts" name="HomeView">
import { Cell, CellGroup } from 'vant';
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
  '✔ 🚀 封装Axios请求库',
  '✔ 🌈 封装Utils常用工具函数'
]);
const handleList = () => {
  getLists().then(res => {
    console.log(res, 99);
  });
};
</script>

<template>
  <div class="home-view min-h-[100vh] w-full h-auto py-[48px]">
    <div
      class="my-[48px] px-[48px] w-full text-center flex justify-center items-center"
    >
      <img src="../assets/logo.webp" class="w-[240px]" />
    </div>
    <cell-group :border="false" inset>
      <cell
        v-for="(item, index) in columnList"
        :key="index"
        :title="item"
      ></cell>
    </cell-group>
  </div>
</template>

<style lang="less" scoped>
.home-view {
  background: linear-gradient(
    180deg,
    rgba(197, 220, 255, 0.7) 0%,
    #f7f8fb 100%
  );
  :root:root {
    --van-cekk-background: transparent;
    --van-cell-group-background: transparent;
  }
}
</style>
