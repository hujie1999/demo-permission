import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    login :false,
    router: [],
    username: null
  },
  getters: {
    router :(state) => state.router,
    username : (state) => state.username,
    login : (state) => state.login
    
  },
  mutations: {
    router(state,data){
      state.router = data
    },
    setUsername(state,data){
      state.username = data
    },
    clearRouter(state){
      state.router = []
    },
    clearUsername(state){
      state.username = null
    },
    logOut(state){
      state.login = false
    }

  },
  actions: {
    
  }
})
