/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-13 11:49:48
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-14 16:16:04
 * @FilePath: /vue3-ts-h5-template/src/main.ts
 * @Description: main.ts文件
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import './styles/main.css';
import './styles/tailwind.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
