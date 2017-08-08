import Vue from 'vue'
import Vuex from 'vuex'
import login from '../components/login/Login'
import addgod from '../components/Goods/addgod/addgod'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        addgod
    }
})