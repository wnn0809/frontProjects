<!-- container部分即首页内容部分 -->
<template lang="html">
	<!-- header  -->
	<div>
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
		<div class="container">
			<div class="index-wrap">
				<!-- 左侧产品栏和新闻栏 -->
				<div class="index-left">
					<div class="index-left-productlist">
						<h2>全部产品</h2>
						<!-- 也可以使用div，使用template可以使其成为引用模板 -->
						<template v-for='product in productList'>
							<h3>{{ product.title }}</h3>
							<ul>
								<li v-for='item in product.list'>
									<a :href="item.url">{{item.name}}</a>
									<!-- 热点hot的制作 -->
									<span v-if='item.hot' class="hot-tag">HOT</span>
								</li>
							</ul>
							<div class="hr"></div>
						</template>
					</div>
					<div class="index-left-productlist lastest-news">
						<h2>最新消息</h2>
						<ul>
							<li v-for='item in newsList'>
								<a :href="item.url" class="new-item">{{item.title}}</a>
								<span v-if='item.hot' class="hot-tag">HOT</span>
							</li>
						</ul>
					</div>
				</div>
				<!-- 轮播图 -->
				<div class="index-right">
					<!-- 轮播图实现代码有些多，专门给轮播图写一个组件。此处调用组件 -->
					<slideShow :slides="slides" :inv="spanTime"></slideShow>
					<!-- 轮播图下方 -->
					<div class="index-board-list">
						<div class="index-board-item" v-for='item in boardList' 
								:class='["index-board-"+item.id]'>
							<div class="index-board-item-inner">
								<h2>{{ item.title }}</h2>
								<p>{{ item.description }}</p>
								<div class="index-board-buybutton">
									<!-- 使用router-link跳转到购买页面 -->
									<router-link class="button" :to="{path: 'detail/'+item.toKey}">立即购买</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="app-foot">
			<p>@2019-2029 by w1418899532</p>
			<p>版权所有  侵权必究</p>
		</div>
	</div>
</template>

<script>
	import slideShow from '../components/slideShow.vue'
    export default {
    	data() {
    		//初始化
    		return {
    			
    		}
    	},
	    methods: {
	    	goLogin: function () {
	    		// if ($route.meta.title=='登录'){
	    		// 	this.$router.push({path: '/login'});
	    		// }
	    		// this.$router.push({path: '/login'});
	    	}
	    },
    	components: {
    		slideShow
    	},
    // 	// 
	  	// created: function () {
	   //  // vue-resoure为组件注入this.$http方法
	   //  // 使用get方法请求后端接口api/getNewsList数据
	   //  this.$http.get('api/getNewsList')//返回promise对象
	   //  // 通过then回调后台传来的数据，这里使用jsonServe模拟后端数据，数据存放在db.json中
	   //  .then((res) => {
	   //    	// 后台数据赋值给newsList，data()中newsList就不用再放置自己造的数据
	   //    	this.newsList = res.data
		  //   }, (err) => {
		  //     console.log(err)
		  //   })
	 	 // },
    	data(){
    		return {
    			// 间隔时间
    			spanTime: 2000,
    			// 轮播图片列表
    			slides: [
    			{
		          src: require('../assets/slideShow/pic1-1.jpg'),
		          title: '托管运营',
		          href: 'detail/analysis'
		        },
		        {
		          src: require('../assets/slideShow/pic2-1.jpg'),
		          title: '包邮',
		          href: 'http://www.baidu.com'
		        },
		        {
		          src: require('../assets/slideShow/pic3-1.jpg'),
		          title: '会员回馈',
		          href: 'detail/count'
		        },
		        {
		          src: require('../assets/slideShow/pic4-1.png'),
		          title: '巡演',
		          href: 'detail/analysis'
		        },
    			],
    			// 定义右侧产品列表数据格式
    			productList:{
    				pc:{
    					title: "PC产品",
    					list: [
	    					{
	    						name: '数据观察',
	    						url: 'http://www.dataobserve.com',
	    						hot: 'true'
	    					},
	    					{
	    						name: '数据统计',
	    						url: 'http://www.datastatic.com'
	    					},
	    					{
	    						name: '数据获取',
	    						url: 'http://www.dataget.com'
	    					},
	    					{
	    						name: '数据分析',
	    						url: 'http://www.dataanalyse.com'
	    					}
    					]
    				},
    				app:{
    					title: "APP应用产品",
    					list: [
	    					{
	    						name: '花甲手机助手',
	    						url: 'http://www.huajiazhushou.com'
	    					},
	    					{
	    						name: '流量统计助手',
	    						url: 'http://www.liuliang.com',
	    						hot: 'true'
	    					},
	    					{
	    						name: '智能地图',
	    						url: 'http://www.maps.com'
	    					},
	    					{
	    						name: '小桃语音',
	    						url: 'http://www.yuyin.com'
	    					}
    					]
    				}
    			},
    			newsList: [
	    			{
	    				title: '亚马逊退出中国',
	    				url: 'http://yamaxun.com',
	    				hot: 'true'
	    			},
	    			{
	    				title: 'bilibili源码泄露',
	    				url: 'http://bilibili.com'
	    			},
	    			{
	    				title: '微软收购',
	    				url: 'http://weiruan.com'
	    			},
	    			{
	    				title: '数据中台服务升级',
	    				url: 'http://shujuzhontai.com'
	    			},
	    			{
	    				title: '大数据清洗',
	    				url: 'http://dataclear.com'
	    			},
	    			{
	    				title: '大数据清洗',
	    				url: 'http://dataclear.com'
	    			},
	    			{
	    				title: '大数据清洗',
	    				url: 'http://dataclear.com'
	    			},
	    			{
	    				title: '大数据清洗',
	    				url: 'http://dataclear.com'
	    			},
    			],
	    		boardList: [
			        {
			          title: '开放产品',
			          description: '开放产品是一款开放产品',
			          id: 'earth',
			          toKey: 'analysis',
			          saleout: false
			        },
			        {
			          title: '品牌营销',
			          description: '品牌营销帮助你的产品更好地找到定位',
			          id: 'loud',
			          toKey: 'count',
			          saleout: false
			        },
			        {
			          title: '使命必达',
			          description: '使命必达快速迭代永远保持最前端的速度',
			          id: 'car',
			          toKey: 'forecast',
			          saleout: true
			        },
			        {
			          title: '勇攀高峰',
			          description: '帮你勇闯高峰，到达事业的顶峰',
			          id: 'hill',
			          toKey: 'publish',
			          saleout: false
			        }
			      ],
    		}
    	}
  }
</script>

<style scoped>
	.index-wrap {
	  width: 1200px;
	  margin: 0 auto;
	  overflow: hidden;
	}
	.index-left{
		float: left;
		width: 300px;
		text-align: left;
	}
	.index-left-productlist{
		background: #fff;
	    box-shadow: 0 0 1px #ddd;
	    margin: 15px;
	}
	.index-left-productlist h2{
		background: #4fc08d;
		padding: 10px 15px;
	    color: #fff;
	    margin-bottom: 20px;
	}
	.index-left-productlist h3{
		padding: 0px 15px 5px 15px;
	    color: #222;
	    font-weight: bold;
	}
	.index-left-productlist ul{
		padding: 10px 15px;
	}
	.index-left-productlist li{
		padding: 5px;
	}
	.index-left-productlist .hr{
		margin-bottom: 20px;
		background: #ddd;
	    height: 1px;
	    width: 100%;
	}
	.index-left-productlist .hot-tag{
		background: red;
	    color: #fff;
	}
	/*x新闻*/
	.lastest-news{
		min-height: 512px;
	}
	.index-right{
		float: left;
		width: 900px;
	}
	/*轮播图下方*/
	.index-board-list{
		overflow: hidden;
		position: absolute;
	}
	.index-board-item{
	    float: left;
	    width: 400px;
	    background: #fff;
    	box-shadow: 0 0 1px #ddd;
	    padding: 20px;
        margin-right: 20px;
    	margin-bottom: 20px;
	}
	.index-board-car .index-board-item-inner{
		background: url(../assets/images/2.png) no-repeat;
	}
	.index-board-earth .index-board-item-inner{
		background: url(../assets/images/1.png) no-repeat;
	}
	.index-board-loud .index-board-item-inner{
		background: url(../assets/images/3.png) no-repeat;
	}
	.index-board-hill .index-board-item-inner{
		background: url(../assets/images/4.png) no-repeat;
	}
	.index-board-item-inner{
		padding-left: 120px;
    	min-height: 125px;
	}
	.index-board-item-inner h2{
		font-size: 18px;
		font-weight: bold;
		color: #000;
    	margin-bottom: 15px;
	}
	.index-board-item-inner .index-board-buybutton{
		margin-top: 20px;
	}
	.index-board-buybutton .button{
		background: #4fc08d;
		cursor: pointer;
		color: #fff;
	    padding: 10px 22px;
	    display: inline-block;
	}

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
	.container {
	  width: 1200px;
	  margin: 0 auto;
	}
	
	.app-foot{
		height: 90px;
		background: #e3e4e8;
		text-align: center;
		margin-top: 30px;
	}
	.app-foot p{
		padding-top: 25px;
	}
</style>