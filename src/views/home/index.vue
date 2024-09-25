<!--
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-13 11:49:48
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-25 19:13:26
 * @FilePath: /vue3-ts-h5-template/src/views/home/index.vue
 * @Description:
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<script setup lang="ts" name="HomeView">
import { Cell, CellGroup } from 'vant';
import { reactive } from 'vue';

const columnList = reactive([
  '✔ ⚡ Vue3 + Vite5 + Vuex',
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
  '✔ 🌈 封装Utils常用工具函数',
  '✔ 🚀 打包资源GZIP压缩',
  '✔ 🌈 全屏加载动画 loading',
  '✔ 🌈 浏览器回退Keep-Alive 页面状态保持'
]);
</script>

<template>
  <div class="home-view min-h-[100vh] w-full h-auto py-[12px]">
    <div
      class="mt-[12px] mb-[32px] px-[48px] w-full text-center flex justify-center items-center"
    >
      <img src="../../assets/logo.webp" class="w-[240px]" />
    </div>
    <div class="px-[32px] my-[24px]">
      <p class="text-[28px] py-[24px] px-[20px] rounded-[8px] mt-[28px]">
        🌼🌼🌼 基于 Vue3.5 全家桶、TypeScript、Vite、Vant、Less、Tailwindcss
        构建工具，开箱即用的 H5 移动端项目基础模板。 🌼🌼🌼
      </p>
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
