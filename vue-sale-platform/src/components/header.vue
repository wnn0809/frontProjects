<template lang="html">
	<div class="app-head">
			<div class="app-head-inner">
				<router-link :to="{path: '/'}">
					<!-- 公司logo图案 -->
					<div class="logo">
						<img src="../assets/logo.png">
						<p>DATA PROTUCT</p>
					</div>
				</router-link>
				<!-- 导航栏右侧登录注册 -->
				<div class="head-nav">
					<ul class="nav-list1">
						<li>首页</li>
						<li>产品介绍</li>
						<li>解决方案</li>
						<li>售后服务</li>
						<li>联系我们</li>
					</ul>
					<ul class="nav-list2">
						<!-- <li>{{ username }}</li> -->
						<li>注册</li>
						<!-- 分割线 -->
						<li class="nav-pile">|</li>
						<!-- 使用router-link实现跳转到登录页面，tag属性使其渲染成对应标签-->
						<router-link :to="{path: '/login'}" tag='li'>
							登录
						</router-link>
						<!-- <li @click="goLogin">登录</li> -->
						<li class="nav-pile">|</li>
						<li>关于</li>
					</ul>
				</div>
			</div>
		</div>
</template>

<script>
    export default {
  }
</script>

<style scoped>
	.app-head{
		background: #363636;
		color: #b2b2b2;
		height: 90px;
		line-height: 90px;
		width: 100%;
	}
	.app-head-inner{
		width: 1200px;
		margin: 0 auto;
	}
	.app-head-inner img{
		width: 50px;
		margin-top: 12px;
		margin-left: 40px;
	}
	.app-head-inner p{
		margin-top: -71px;
    	margin-left: 10px;
	}
	.logo{
		float: left;
	}
	.head-nav {
		float: right;
	}
	.head-nav ul{
		overflow: hidden;
	}
	.head-nav li{
		cursor: pointer;
		float: left;
	}
	.nav-pile{
		padding: 0px 10px;
	}
	.head-nav .nav-list1{
		float: left;
		padding: 0px 58px;
	}
	.head-nav .nav-list1 li{
		padding: 0px 20px;
	}
</style>