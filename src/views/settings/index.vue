<template>
  <div class="settings-view w-full h-[100vh]">
    <cell-group :border="false" inset>
      <cell
        v-for="(item, index) in columnList"
        :key="index"
        :title="item"
      ></cell>
    </cell-group>
  </div>
</template>
<script setup lang="ts" name="SettingsView">
import { reactive } from 'vue';
import { CellGroup, Cell } from 'vant';
const columnList = reactive(['✔ ⚡ Vue3 + Vite5']);
</script>
