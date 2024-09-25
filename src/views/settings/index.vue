<!--
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-21 13:36:58
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-25 11:36:49
 * @FilePath: /vue3-ts-h5-template/src/views/settings/index.vue
 * @Description:
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
-->
<template>
  <div class="settings-view w-full h-[100vh]">
    <cell-group :border="false" inset>
      <cell
        v-for="(item, index) in columnList"
        :key="index"
        :title="item"
        @click="handleCellClick(item)"
      ></cell>
    </cell-group>
  </div>
</template>
<script setup lang="ts" name="SettingsView">
import { reactive } from 'vue';
import { CellGroup, Cell, showToast, showSuccessToast } from 'vant';
import { getLists } from '../../api/mock';
const columnList = reactive(['服务请求 Request（Mock）']);
const handleCellClick = (item: string) => {
  switch (item) {
    case '服务请求 Request（Mock）':
      handleGetLists();
      break;
    default:
      showToast('开发中...');
      break;
  }
};
const handleGetLists = async () => {
  await getLists();
  showSuccessToast('请求成功！');
};
</script>
