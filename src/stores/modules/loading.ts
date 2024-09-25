/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-25 14:23:28
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-25 19:39:46
 * @FilePath: /vue3-ts-h5-template/src/stores/modules/loading.ts
 * @Description: 全局加载loading状态管理
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */
interface ILoadingStateModel {
  loading: boolean;
  text?: string;
}

const state = () => ({
  loading: false,
  text: ''
});

const getters = {
  getLoading(state: ILoadingStateModel) {
    return {
      loading: state.loading,
      text: state.text
    };
  }
};

const mutations = {
  SET_LOADING(
    state: ILoadingStateModel,
    loading: ILoadingStateModel | boolean
  ) {
    if (typeof loading === 'boolean') {
      state.loading = loading;
    } else {
      state.loading = loading.loading;
      if (loading.loading && loading.text) {
        state.text = loading.text;
      }
    }
  }
};

export default {
  namespaced: true,
  getters,
  mutations,
  state
};
