interface UserState {
  userInfo: UserInfo | any;
  loading: Boolean;
}

interface UserInfo {
  name: string;
  role: string;
  user_id: string;
}

const state = () => ({
  userInfo: {},
  loading: false
});

const mutations = {
  // 设置用户信息
  SET_USER_INFO(state: UserState, info: UserInfo) {
    state.userInfo = {
      name: info?.name,
      role: info?.role,
      user_id: info?.user_id
    };
  },
  // 重置用户信息
  RESET_USER_INFO(state: UserState) {
    state.userInfo = {};
  },
  // loading
  SET_LOADING(state: UserState, value: Boolean) {
    state.loading = value;
  }
};

export default {
  namespaced: true,
  mutations,
  state
};
