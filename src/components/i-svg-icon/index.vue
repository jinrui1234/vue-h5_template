<!--
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-26 18:41:47
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-10-10 15:24:53
 * @FilePath: /vue3-ts-h5-template/src/components/i-svg-icon/index.vue
 * @Description:  svg component
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
-->
<script setup lang="ts" name="ISvgIcon">
import { computed } from 'vue';
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
    default: '#333333'
  }, // 颜色
  className: {
    type: String,
    default: ''
  } // 大小
});
// svg 图标名称
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
<template>
  <svg aria-hidden="true" :class="props.className">
    <use :href="symbolId" :fill="props.color" />
  </svg>
</template>
