<!--
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-20 10:37:24
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-25 11:26:22
 * @FilePath: /vue3-ts-h5-template/src/layout/component/nav-bar/index.vue
 * @Description: 顶部导航栏
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
-->
<template>
  <nav-bar
    class="nav-bar-view"
    fixed
    placeholder
    safe-area-inset-top
    :border="false"
  >
    <template #right>
      <icon name="user-o" class="search-icon" size="20px" />
    </template>
  </nav-bar>
</template>
<script setup lang="ts" name="NavBarView">
import { NavBar, Icon } from 'vant';
</script>
