import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import page from './modules/page'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        page
    },
    getters,
    plugins: [
        createPersistedState({ storage: window.sessionStorage }) //持久化于sessionStorage
    ]
})

export default store