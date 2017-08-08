import Vue from 'vue'
import http from '../../utils/HttpClient'
import router from '../../router/index'
const state = {
    authod:"改编"
}
const mutations = {
    authod:(data, formData)=>{
        console.log(data,formData)
    }
}
const actions = {
	// authod: (events, formData) => {
	// 	events.commit('authod', formData)
	// }
}
export default {
	state,
	mutations,
	actions
}