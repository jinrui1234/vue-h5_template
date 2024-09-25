/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-25 19:20:30
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-25 23:21:34
 * @FilePath: /vue3-ts-h5-template/src/stores/modules/theme-mode.ts
 * @Description: 主题切换
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */
import { nextTick } from 'vue';
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
  // 初始化主题模式
  initThemeMode({ state }: ActionContext<IThemeModeStateModel, any>) {
    if (state.mode === ThemeModeEnum.DARK) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  },
  // 切换主题模式
  setChangeThemeMode(
    { state, commit }: ActionContext<IThemeModeStateModel, any>,
    event?: TouchEvent | MouseEvent
  ) {
    const toggle = () => {
      console.log(state.mode, 1);

      // 判断当前主题模式
      const __mode =
        state.mode === ThemeModeEnum.LIGHT
          ? ThemeModeEnum.DARK
          : ThemeModeEnum.LIGHT;
      console.log(__mode, 2);

      if (__mode === ThemeModeEnum.DARK) {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
      commit('SET_THEME_MODE', __mode);
    };
    // 点击切换的动画效果
    let x: number, y: number;
    if (event instanceof TouchEvent) {
      x = event.touches[0].clientX;
      y = event.touches[0].clientY;
    } else if (event instanceof MouseEvent) {
      x = event.clientX;
      y = event.clientY;
    } else {
      // 如果没有事件对象，使用屏幕右上角作为默认位置
      x = window.innerWidth;
      y = 0;
    }
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = (document as any).startViewTransition(async () => {
      toggle();
      await nextTick();
    });
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];
      document.documentElement.animate(
        {
          clipPath:
            state.mode === ThemeModeEnum.DARK
              ? [...clipPath].reverse()
              : clipPath
        },
        {
          duration: 800,
          easing: 'ease-out',
          pseudoElement:
            state.mode === ThemeModeEnum.DARK
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)'
        }
      );
    });
  }
};

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
};
