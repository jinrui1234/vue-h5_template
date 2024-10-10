<!--
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-20 10:37:24
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-10-10 14:00:22
 * @FilePath: /vue3-ts-h5-template/src/layout/component/nav-bar/index.vue
 * @Description: 顶部导航栏
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
-->
<script setup lang="ts" name="NavBarView">
import { computed } from 'vue';
import { NavBar, Icon } from 'vant';
import { useStore } from 'vuex';
import { ThemeModeEnum } from '../../../stores/modules/theme-mode';
const store = useStore();
const isDarkTheme = computed(() => {
  const currentThemeMode = store.getters['themeMode/getThemeMode'];
  return currentThemeMode === ThemeModeEnum.DARK;
});
// 切换主题模式
const handleChangeTheme = (event: MouseEvent | TouchEvent) => {
  store.dispatch('themeMode/setChangeThemeMode', event);
};
</script>
<template>
  <nav-bar
    class="nav-bar-view"
    fixed
    placeholder
    safe-area-inset-top
    :border="false"
  >
    <template #right>
      <i-svg-icon
        :name="isDarkTheme ? 'light' : 'dark'"
        :size="20"
        :color="isDarkTheme ? '#fff' : '#000'"
        @click="handleChangeTheme"
      />
    </template>
  </nav-bar>
</template>
