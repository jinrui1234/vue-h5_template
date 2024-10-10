<!--
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-26 18:41:47
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-26 19:21:55
 * @FilePath: /vue3-ts-h5-template/src/components/i-svg-icon/index.vue
 * @Description:  svg component
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
-->
<script setup lang="ts" name="IIcon">
import { defineProps, computed } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: ''
  }, // 图标名称
  prefix: {
    type: String,
    default: 'icon'
  }, // 前缀
  color: {
    type: String,
    default: '#fc4a14'
  }, // 颜色
  size: {
    type: Number,
    default: 16
  } // 大小
});
// svg 图标名称
const symbolId = computed(() => `${props.prefix}-${props.name}`);
</script>
<template>
  <svg aria-hidden="true" :width="size + 'px'" :height="size + 'px'">
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
  <!-- <svg aria-hidden="true" :width="size + 'px'" :height="size + 'px'">
    <use :xlink-href="symbolId" :fill="props.color"></use>
  </svg> -->
</template>
