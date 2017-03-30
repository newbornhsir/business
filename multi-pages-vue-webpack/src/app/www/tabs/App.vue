<template>
	<div id="app">
		<header class="mui-bar mui-bar-nav">
		    <h1 class="mui-title" id="title">首页</h1>
		</header>
		<div class="mui-content">
			<router-view></router-view>
		</div>
		<nav class="mui-bar mui-bar-tab">
		    <a class="mui-tab-item mui-active" id="home" v-on:tap='changeTab($event)'>首页</a>
		    <a class="mui-tab-item" id="products" v-on:tap='changeTab($event)'>商品</a>
		    <a class="mui-tab-item" id="about" v-on:tap='changeTab($event)'>我的</a>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data: function(){
			return {
				activeTab: "home",
			}
		},
		methods: {
			changeTab: function(e){
				let el = e.target;
				let idName = el.getAttribute("id");
				if(idName==this.activeTab){
					return;
				}
				this.activeTab=idName;
				document.getElementById("title").innerHTML=el.innerHTML;
				console.log(this.activeTab);
				let route = this.activeTab;
				if(route=="home"){
					route = '/';
				}
				this.$router.push(route);
			}
		}
	}
</script>

<style>
</style>