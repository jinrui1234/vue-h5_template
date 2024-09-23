<!--
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-20 10:36:55
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-23 22:34:49
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
const cacheViewList = computed(() => {
  console.log('cacheViewList,', store.getters['cachedView/getCachedView']);

  return store.getters['cachedView/getCachedView'];
});
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
