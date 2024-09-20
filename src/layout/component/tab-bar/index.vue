<!--
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-20 10:38:05
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-20 11:32:05
 * @FilePath: /vue3-ts-h5-template/src/layout/component/tab-bar/index.vue
 * @Description: 底部导航栏
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
-->
<template>
  <tabbar
    v-model="activeBar"
    class="tab-bar-view"
    placeholder
    route
    fixed
    safe-area-inset-bottom
  >
    <tabbar-item name="home" icon="home-o">首页</tabbar-item>
    <tabbar-item name="search" icon="setting-o">工具</tabbar-item>
    <tabbar-item name="user" icon="user-o">关于</tabbar-item>
  </tabbar>
</template>
<script setup lang="ts" name="TabBarView">
import { ref } from 'vue';
import { Tabbar, TabbarItem } from 'vant';
const activeBar = ref(0);
</script>
