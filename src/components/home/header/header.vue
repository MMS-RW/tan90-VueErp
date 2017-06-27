<template>
	<div class="dk-header">
		<ul>
			<li><router-link to="/">tan90后台</router-link></li>
		</ul>
		<ul>
			<li>
				<router-link class="dropdown-toggle count-info" to="/">
					<i class="fa fa-bars"></i>
					<span class="badge badge-primary"> 2</span>
				</router-link>
			</li>
			<li>
				<router-link class="dropdown-toggle count-info" to="/">
					<i class="fa fa-envelope"></i>
					<span class="badge badge-primary"> 2</span>
				</router-link>
			</li>
			<li>
				欢迎你：
				<router-link class="dropdown-toggle count-info dex" to="/">
					Adminstrator
				</router-link>
			</li>						
		</ul>		
	</div>	
</template>

<script type="text/javascript">
	import './header.scss'
	import $ from 'jquery'
	
	export default {
		  
			mounted(){
			var obj = JSON.parse(window.window.localStorage.getItem("user"));
			$('.dex').html(obj.username)
			 
		}
		 
		// methods:{
		// 	nav(event){
		// 		let self = $(event.target);
		// 		if(!self.is('.dk-nav-item')){
		// 			self = self.closest('.dk-nav-item');
		// 		}
		// 		self.toggleClass('active');
		// 	}
		// }
	}
</script>