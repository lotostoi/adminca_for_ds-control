import * as User from '@/api/user'
import router from '@/router'
let autoLog
let endLoad = new Promise(resolve => { autoLog = resolve })

export default {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    user: (state) => state.user,
    ready: () => endLoad,
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
  },
  actions: {
    async auth({ commit }, auth) {
      try {
        const { user, result, token } = await User.auth(auth)
        if (user, token) {
          localStorage.setItem('token', token)
          commit('setUser', { ...user, token })
          router.push('/import')
        }
      } catch (e) { console.log(e) }
    },
    async getUser({ commit }) {
      try {
        let token = localStorage.getItem('token')
        if (token) {
          let { username } = await User.check(token)
          if (username) {
            commit('setUser', username)
          } else {
            commit('setUser', null)
          }
        } else {
          commit('setUser', null)
        }
        autoLog()
      
      } catch (e) {
        console.log(e)
      }

    },
    setUser({ commit }, user) {
      commit('setUser', user)
    },
  },
} 