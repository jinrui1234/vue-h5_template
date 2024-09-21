<!--
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-20 10:36:55
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-20 18:02:47
 * @FilePath: /vue3-ts-h5-template/src/layout/index.vue
 * @Description: 框架布局组件
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
-->
<template>
  <div class="layout-view w-full h-full relative">
    <config-provider :theme-vars="themeVars">
      <NavBar />
      <div class="layout-body">
        <router-view />
      </div>
      <Tabbar />
    </config-provider>
  </div>
</template>
<script setup lang="ts" name="LayoutView">
import NavBar from './component/nav-bar/index.vue';
import Tabbar from './component/tab-bar/index.vue';
import { ConfigProvider } from 'vant';
const themeVars = {
  navBarBackground: 'transparent'
};
</script>
<style lang="less" scoped>
@import '../styles/mixin.less';
.layout-view {
  .clearfix();
  background: linear-gradient(
    180deg,
    rgba(197, 220, 255, 0.7) 0%,
    #f7f8fb 100%
  );
}
</style>
