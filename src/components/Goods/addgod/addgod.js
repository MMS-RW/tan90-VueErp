import Vue from 'vue'
import http from '../../../utils/HttpClient'
import router from '../../../router/index'

const state = {
}

const mutations = {
	addgod: (data, formData) => {
		http.post('addGoods',formData).then(response => {
			console.log(response)
		})
		
	}
}

const actions = {
	addgod: (events, formData) => {
		events.commit('addgod', formData)
	}
}

export default {
	state,
	mutations,
	actions
}