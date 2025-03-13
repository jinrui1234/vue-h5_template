/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-13 11:49:48
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-25 19:39:51
 * @FilePath: /vue3-ts-h5-template/src/stores/index.ts
 * @Description: vuex store
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */
import { createStore, createLogger } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { name } from '../../package.json';
import user from './modules/user';

const store = createStore({
  strict: true, // 严格模式
  modules: {
    user
  },
  plugins: [
    createPersistedState({
      key: `${name}_vuex_`,
      paths: ['themeMode']
    }),
    createLogger({
      logActions: true,
      logMutations: true,
      logger: console
    }) // 内置日志打印
  ]
});

export default store;
