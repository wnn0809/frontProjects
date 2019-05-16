<!-- slideShow组件时轮播图实现的主要部分 -->
<template lang="html">
	<div class="slide-show" v-on:mouseover="clearAuto" @mouseout="runAuto">
		<div class="slide-img">
			<a :href="slides[nowIndex].href">
				<!-- transition只有一个name属性 ，使用transition添加前一张向左移出，后一张向左移入的动画-->
				<transition name="slide" mode="out-in">
					<img v-if="isShow" :src="slides[nowIndex].src">
				</transition>
				<!--上一个transition动画是图片进入，下面这个transition动画是图片从显示到隐藏  -->
				<transition name="slide-fade">
		          <img v-if="!isShow" :src="slides[nowIndex].src">
		        </transition>
			</a>
		</div>
		<h2>{{ slides[nowIndex].title }}</h2>
		<ul class="slide-pages">
			<!-- 实现点击左尖括号，图片循环播放 -->
			<li @click="goto(prevIndex)">&lt;</li>
			<!-- 实现点击页码，图片切换 -->
			<li v-for="(item,index) in slides" @click="goto(index)">
				<!-- 绑定class，cssz中设置on属性有下划线，以便于区分哪一张图片 -->
				<!-- index === nowIndex是判定条件 -->
				<a v-bind:class="{on: index === nowIndex}">
					<!-- index是从0开始的 此处加1，使页码为1234-->
					{{ index+1 }}
				</a>
			</li>
			<!-- 实现点击右尖括号，图片循环播放 -->
			<li @click="goto(nextIndex)">&gt;</li>
		</ul>
	</div>
</template>

<script>
    export default {
    	// 父组件的值传递到子组件需要使用props声明                                       
    	props:{
    		slides: {
    			// 定义slides数据类型和默认值
		      	type: Array,
		      	default: []
	    	},
	    	inv: {
	    		type: Number,
	    		default: 1000
	    	}
    	},
    	data(){
    		return{
    			nowIndex: 0,
    			isShow: true
    		}
    	},
    	//通过计算属性实现<和>向前向后翻页
    	computed: {
    		//向前翻页的方法实现
    		prevIndex(){
    			// 如果是第一张图片，获取slides长度减1，跳转到最后一张图
    			if (this.nowIndex === 0) {
    				return this.slides.length - 1
    			}
    			else {
    				return this.nowIndex - 1
    			}
    		},
    		//向后翻页的方法实现
    		nextIndex(){
    			// 如果是最后张图片，获取slides长度减1，跳转到最后一张图
    			if (this.nowIndex === this.slides.length - 1) {
    				return 0
    			}
    			else {
    				return this.nowIndex + 1
    			}
    		}
    	},
    	methods: {
    		// 定义goto方法，使图片跳转
    		goto(index){
    			this.isShow = false
    			setTimeout(() => {
			        this.isShow = true
			        this.nowIndex = index
			      }, 10)
    		},
    		// 使用setInterval()函数实现轮播图自动切换
    		runAuto () {
    			this.invId = setInterval(()=>{
    				// console.log(123)
    				this.goto(this.nextIndex)
    			},this.inv)
    		},
    		// clearAuto函数功能：鼠标放上去时停止自动播放
    		clearAuto () {
    			clearInterval(this.invId)
    		},
    	},
    	mounted () {
    		this.runAuto()
    	}
    }
</script>

<style scoped>
	/*<name名>-enter-active：定义进入过渡生效时的状态*/
	.slide-enter-active {
		transition: all .5s;
	}
	/*<name名>-enter：定义进入过渡的开始状态*/
	.slide-enter {
		transform: translateX(900px);
	}
	/*定义离开过渡生效时的状态。在整个离开过渡的阶段中应用*/
	.slide-fade-leave-active {
		transition: all .5s;
		/*translateX定义转换，只是用 X 轴的值*/
		transform: translateX(-900px);
	}
	.slide-img {
		width: 100%;
		position: absolute;
		top: 0；
	}
	.slide-show {
		position: relative;
		width: 900px;
		height: 500px;
		overflow: hidden;
    	margin: 15px 15px 20px 0;
	}
	.slide-show h2 {
		position: absolute;
	    width: 100%;
	    background: #000;
	    color: #fff;
	    text-align: left;
	    opacity: .5;
	    height: 30px;
	    bottom: 0;
	    padding-left: 15px;
	    line-height: 30px;
	}
	.slide-pages{
		position:absolute;
		bottom: 10px;
		right: 15px; 
	}
	.slide-pages li{
		display: inline-block;
    	color: #fff;
    	padding: 0 10px;
    	cursor: pointer;
	}
	.slide-pages li .on {
	  text-decoration: underline;
	}
</style> 