<!--
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-20 10:36:55
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-25 14:56:46
 * @FilePath: /vue3-ts-h5-template/src/layout/index.vue
 * @Description: 框架布局组件
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
-->
<script setup lang="ts" name="LayoutView">
import { computed } from 'vue';
import NavBar from './component/nav-bar/index.vue';
import Tabbar from './component/tab-bar/index.vue';
import { ConfigProvider } from 'vant';
import { useStore } from 'vuex';
const store = useStore();
// 取出缓存的路由列表
const cacheViewList = computed(() => {
  return store.getters['cachedView/getCachedView'];
});
// 取loading状态
const loading = computed(() => {
  return store.getters['loading/getLoading'];
});
// 主题变量
const themeVars = {
  navBarBackground: 'transparent'
};
</script>
<template>
  <div class="layout-view w-full h-full relative">
    <config-provider :theme-vars="themeVars">
      <NavBar />
      <div class="layout-body">
        <router-view v-slot="{ Component }">
          <keep-alive :max="10" :include="cacheViewList">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
      <Tabbar />
    </config-provider>
    <!-- 指定body位置渲染loading -->
    <Teleport to="body">
      <div class="spinner-container" v-show="loading.loading">
        <div class="spinner-icon"></div>
        <div class="spinner-text text-[26px] mt-[24px] text-black font-bold">
          {{ loading.text }}
        </div>
      </div>
    </Teleport>
  </div>
</template>
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
