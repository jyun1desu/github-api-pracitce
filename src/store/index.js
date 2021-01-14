import {
  createStore
} from 'vuex';
import API from '../api/api.js';

export default createStore({
  state: {
    githubRepos: {},
  },
  mutations: {
    setGithubData(state, data) {
      state.githubRepos = data;
    },
  },
  actions: {
    async getGithubData({
      commit
    }) {
      try {
        const response = await API.get(`users/jyun1desu/repos`)
        commit('setGithubData',response.data)
      } catch (e) {
        console.log(e)
      }
    },
  },
  modules: {}
})