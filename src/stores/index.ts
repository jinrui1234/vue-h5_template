/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-13 11:49:48
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-25 14:26:35
 * @FilePath: /vue3-ts-h5-template/src/stores/index.ts
 * @Description: vuex store
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */
import { createStore, createLogger } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { name } from '../../package.json';
import cachedView from './modules/cached-view';
import loading from './modules/loading';
const store = createStore({
  strict: true, // 严格模式
  modules: {
    cachedView,
    loading
  },
  plugins: [
    createPersistedState({
      key: `${name}_vuex_`,
      paths: ['']
    }),
    createLogger({
      logActions: true,
      logMutations: true,
      logger: console
    }) // 内置日志打印
  ]
});

export default store;
