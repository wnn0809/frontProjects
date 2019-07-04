// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/layout'
import IndexPage from './pages/index'
import LoginForm from './pages/loginForm'
import GoodsList from './pages/goodsList.vue'

Vue.use(VueRouter)
// Vue.config.productionTip = false

let router = new VueRouter({
	
	routes: [
		{
			path: '/',
			name: 'index',
			component: IndexPage,
			meta: {
				title: '首页'
			}
		},
		{
			path: '/login',
			name: 'login',
			component: LoginForm,
			meta: {
				title: '登录'
			}
		},
		{
			path: '/goods',
			name: 'goods',
			component: GoodsList,
			meta: {
				title: '商品列表'
			}
		},
	]
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
