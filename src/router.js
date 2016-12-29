import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Auth from './components/Auth'
import Detail from './components/Detail'
import List from './components/List'

Vue.use(VueRouter)
module.exports = new VueRouter({
	base: __dirname,
	routes: [
		{
			name: 'index',
			path: '/index',
			component: Home,
		},
		{
			name: 'auth',
			path: '/auth',
			component: Auth,
		},
		{
			name: 'detail',
			path: '/detail/:id',
			component: Detail,
		},
		{
			name: 'list',
			path: '/list',
			component: List,
		}
	],
})
