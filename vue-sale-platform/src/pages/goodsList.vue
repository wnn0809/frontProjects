<template lang="html">
	<div>
		<!-- header  -->
		<Header></Header>
		<div class="goods">
          	<nav class="nav-goods">
            	<a href="/" class="home">Home/</a>
            	<span>Goods</span>
            	<!-- 购物车 -->
            	<div class="cart">
            		<router-link :to="{path: '/carts'}">
            			<img src="../assets/sider-shopcar.png">
            			<i>购物车({{count}})</i>
            		</router-link>
            	</div>
     	 	</nav>
        	<div class="goodsinfo">
        		<ul>
        			<!-- 渲染商品列表数据 -->
        			<li v-for="item in goodsList">
        				<!-- 商品图片渲染 -->
        				<div class="pic">
	                      	<a href="#"><img :src="item.src" alt=""></a>
	                    </div>
	                    <!-- 渲染商品名称价格等描述 -->
	                    <div class="goodsDesc">
	                    	<div class="goodsname">{{item.productName}}</div>
	                    	<div class="goodsprice">{{item.prodcutPrice}}</div>
	                    	<div class="cartBtn">
	                    		<span @click="addgoods()">加入购物车</span>
	                    	</div>
	                    </div>
        			</li>
        		</ul>
        	</div>
		</div>
		<!-- footer  -->
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from '../components/footer.vue'
	import Header from '../components/header.vue'
    export default {
    	data() {
    		//初始化
    		return {
    			count: 0,
    			goodsList: [
				    {
				        src: require('../assets/goods/mi6.jpg'),
		          		productName: '小米6',
		          		productId: 10001,
		          		prodcutPrice: 1998,
				    },
				    {
				     	src: require('../assets/goods/miS2.jpg'),
		          		productName: '红米S2',
		          		productId: 10002,
		          		prodcutPrice: 996,
				    },
				    {
				      	src: require('../assets/goods/mi6x.jpg'),
		          		productName: '小米6x',
		          		productId: 10001,
		          		prodcutPrice: 1998,
				    },
				    {
				      	src: require('../assets/goods/mi8SE.jpg'),
		          		productName: '小米8SE',
		          		productId: 10001,
		          		prodcutPrice: 2558,
				    },
				    {
				      	src: require('../assets/goods/jiadian1.jpg'),
		          		productName: '家庭电视',
		          		productId: 10001,
		          		prodcutPrice: 6126,
				    },
				    {
				        src: require('../assets/goods/pingheng.jpg'),
		          		productName: '平衡车',
		          		productId: 10001,
		          		prodcutPrice: 2500,
				    },
				    {
				        src: require('../assets/goods/note.jpg'),
		          		productName: '笔记本',
		          		productId: 10001,
		          		prodcutPrice: 5679,
				    },
				    {
				      	src: require('../assets/goods/zipai.jpg'),
		          		productName: '自拍杆',
		          		productId: 10001,
		          		prodcutPrice: 129,
				    }
				  ]
    		}
    	},
    	components: {
    		Footer,
    		Header,
    	},
    	methods: {
    		addgoods() {
    			return this.count++
    		}
    	}
  }
</script>

<style scoped>
	.goods {
		width: 1200px;
		margin: 0 auto;
	}
	.goods nav {
		height: 35px;
	}
	.cart {
		float: right;
		background: darkred;
   	 	color: #fff;
   	 	width: 170px;
    	height: 35px;
	}
	.cart img {
		width: 30px;
		position: absolute;
		margin-left: 32px;
	}
	.cart i {
		display: inline-block;
	    margin-left: 75px;
	    margin-top: 10px;
	}
	.nav-goods .home {
		margin-left: -75px;
	}
	.nav-goods span {
		margin-top: 18px;
    	display: inline-block;
    	color: red;
	}
	.goodsinfo li{
		width: 260px;
	    height: 320px;
	    float: left;
	    background: #fff;
	    text-align: center;
	    margin-left: 39px;
	    margin-top: 15px;
	}
	.pic img {
		width: 180px;
		height: 180px;
		margin-top: 15px;
		margin-bottom: 15px;
	}
	.goodsinfo ul {
		overflow: hidden;
		padding: 0px;
	}
	.goodsname {
		color: #333333;
	    font-size: 17px;
	    font-weight: 500;
	    margin: 0 20px 5px;
	}
	.goodsprice {
		color: #ff6709;
	}
	.cartBtn {
		background: #4fc08d;
	    cursor: pointer;
	    color: #fff;
	    padding: 10px 22px;
	    display: inline-block;
	    margin-top: 16px;
	}
</style>