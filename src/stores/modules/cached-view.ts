/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-21 12:57:34
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-25 19:51:30
 * @FilePath: /vue3-ts-h5-template/src/stores/modules/cached-view.ts
 * @Description: 缓存页面keep-alive的组件名称
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */

import type { toRouteModel } from '@/router';
import type { ActionContext } from 'vuex';
export interface ICachedViewStateModel {
  list: string[];
}

const state: ICachedViewStateModel = {
  // 缓存页面keep-alive的组件名称
  list: [] as string[]
};

const getters = {
  // 获取缓存页面
  getCachedView: (state: ICachedViewStateModel) => state.list
};

const mutations = {
  // 添加缓存页面
  ADD_CACHED_VIEW(state: ICachedViewStateModel, route: toRouteModel) {
    if (state.list.includes(route.name as string)) {
      return;
    }

    if (route.meta.keepAlive) {
      state.list.push(route.name as string);
    }
  },
  // 移除缓存页面
  REMOVE_CACHED_VIEW(state: ICachedViewStateModel, route: toRouteModel) {
    const index = state.list.indexOf(route.name as string);
    if (index > -1) {
      state.list.splice(index, 1);
    }
  },
  // 清空缓存页面
  CLEAR_CACHED_VIEW(state: ICachedViewStateModel) {
    state.list = [];
  }
};

const actions = {
  // 添加缓存页面
  setAddCachedView(
    { commit }: ActionContext<ICachedViewStateModel, ICachedViewStateModel>,
    route: toRouteModel
  ) {
    commit('ADD_CACHED_VIEW', route);
  },
  // 移除缓存页面
  setRemoveCachedView(
    { commit }: ActionContext<ICachedViewStateModel, ICachedViewStateModel>,
    route: toRouteModel
  ) {
    commit('REMOVE_CACHED_VIEW', route);
  },
  // 清空缓存页面
  setClearCachedView({
    commit
  }: ActionContext<ICachedViewStateModel, ICachedViewStateModel>) {
    commit('CLEAR_CACHED_VIEW');
  }
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
