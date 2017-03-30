import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
import Products from './Products'
import About from './About'
Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/products',
			component: Products
		},
		{
			path: '/about',
			component: About
		}
	]
})
