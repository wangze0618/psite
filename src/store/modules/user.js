export default {
  namespaced: true,
  state() {
    return {
      profile: {
        id: "",
        username: "",
        avatar: "",
        nickname: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        token: "",
      },
    };
  },
  mutations: {
    setToken(state, payload) {
      state.profile.token = payload;
    },
  },
  getters: {
    token: (state) => () => {
      return state.profile.token;
    },
  },
};
