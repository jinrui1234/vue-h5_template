/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-21 12:57:34
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-23 22:23:48
 * @FilePath: /vue3-ts-h5-template/src/stores/modules/cached-view.ts
 * @Description: 缓存页面keep-alive的组件名称
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */

import type { toRouteModel } from '@/router';
import type { ActionContext } from 'vuex';
export interface StateModel {
  list: string[];
}

const state: StateModel = {
  // 缓存页面keep-alive的组件名称
  list: [] as string[]
};

const getters = {
  // 获取缓存页面
  getCachedView: (state: StateModel) => state.list
};

const mutations = {
  // 添加缓存页面
  addCachedView(state: StateModel, route: toRouteModel) {
    if (state.list.includes(route.name as string)) {
      return;
    }
    console.log('addCachedView', route.name);

    if (route.meta.keepAlive) {
      state.list.push(route.name as string);
    }
  },
  // 移除缓存页面
  removeCachedView(state: StateModel, route: toRouteModel) {
    const index = state.list.indexOf(route.name as string);
    if (index > -1) {
      state.list.splice(index, 1);
    }
  },
  // 清空缓存页面
  clearCachedView(state: StateModel) {
    state.list = [];
  }
};

const actions = {
  // 添加缓存页面
  setAddCachedView(
    { commit }: ActionContext<StateModel, StateModel>,
    route: toRouteModel
  ) {
    commit('addCachedView', route);
  },
  // 移除缓存页面
  setRemoveCachedView(
    { commit }: ActionContext<StateModel, StateModel>,
    route: toRouteModel
  ) {
    commit('removeCachedView', route);
  },
  // 清空缓存页面
  setClearCachedView({ commit }: ActionContext<StateModel, StateModel>) {
    commit('clearCachedView');
  }
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
