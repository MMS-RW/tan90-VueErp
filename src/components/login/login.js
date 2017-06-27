import Vue from 'vue'
import http from '../../utils/HttpClient'
import router from '../../router/index'

const state = {
}

const mutations = {
	login: (data, formData) => {
		
		if(formData.username == '123456' && formData.password == '123456'){
			var obj = {"username": formData.username,"password":formData.password};
			obj = JSON.stringify(obj);
			window.localStorage.setItem("user", obj);
			router.push({name: 'home'})
		} else {
			return alert('输入的密码账号不对')
			
		}
	}
}

const actions = {
	login: (events, formData) => {
		events.commit('login', formData)
	}
}

export default {
	state,
	mutations,
	actions
}