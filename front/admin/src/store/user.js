import * as User from '@/api/user'

export default {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    setUser(state, user) {
      state.user = user  
    },
  },
  actions: {
    async auth ({commit},auth) {
      try{
        const res =  await User.auth(auth)
        console.log('ok');
      } catch(e) {console.log(e)}
    },
/*     async getUser({ commit }) {
      try {
        let token = localStorage.getItem('token')
        let res = await User.check(token)
        commit('setUser', res)
      } catch (e) {
        commit('setUser', null)
      }
    }, */
    setUser({ commit }, user) {
      commit('setUser', user)
    },
  },
} 