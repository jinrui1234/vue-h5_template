/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-25 19:20:30
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-25 21:45:31
 * @FilePath: /vue3-ts-h5-template/src/stores/modules/theme-mode.ts
 * @Description: 主题切换
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */

import type { ActionContext } from 'vuex';

export enum ThemeModeEnum {
  LIGHT = 'light',
  DARK = 'dark'
}

interface IThemeModeStateModel {
  mode: string;
}

// 获取当前系统的主题模式
const getSystemThemeMode = () => {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isDarkMode ? ThemeModeEnum.DARK : ThemeModeEnum.LIGHT;
};

const state = {
  mode: 'light'
};
const getters = {
  getThemeMode: (state: IThemeModeStateModel) => state.mode
};
const mutations = {
  SET_THEME_MODE(state: IThemeModeStateModel, mode: string) {
    state.mode = mode;
  }
};

const actions = {
  setChangeThemeMode(
    { commit }: ActionContext<IThemeModeStateModel, any>,
    mode: string
  ) {
    if (mode === ThemeModeEnum.DARK) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
    commit('SET_THEME_MODE', mode);
  }
};

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
};
