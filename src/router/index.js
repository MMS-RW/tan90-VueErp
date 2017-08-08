import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'
import Goods from '../components/Goods/Goods.vue'
import HomeComponent from '../components/home/home.vue'
import LoginComponent from '../components/login/login.vue'
import Clients from '../components/clients/clients.vue'
import Client from '../components/client/client.vue'
import Addgod from '../components/Goods/addgod/addgod.vue'
import Childrensd from '../components/text/testd/childrensd.vue'

import Zerod from '../components/details/zero.vue'
import Datails from '../components/details/datails/datails.vue'
import Textcomponent from '../components/text/textComponenty.vue'


//引进vue
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/',
		name: 'home',
		component: HomeComponent,
		children: [{
			path: '/clients',
			name: 'clients',
			component: Clients
		},{
			path: '/client',
			name: 'client',
			component: Client
		},{
			path:'/goods',
			name:'goods',
			component:Goods,
		},{
			path:'/addgod',
			name:'addgod',
			component:Addgod,
		}
		]
	},{
		path: '/login',
		name: 'login',
		component: LoginComponent
	},{
		path:'/text',
		name:'text',
		component: Textcomponent,
		children:[{
			path:'/childrensd',
			name:'childrensd',
			component:Childrensd
		}]
	},{
		path:'/zerod',
		name:'zerod',
		component:Zerod
	},{
			path:'/datalis',
			name:'datalis',
			component:Datails
		
	}
]
})

// 对将要进入的路由进行权判断
// router.beforeEach((to, from, next) =>{
// 	// console.log(to);
// 	if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('user')){
// 		router.replace('login');
// 		next();
// 	} 
// 	next();
// })

export default router