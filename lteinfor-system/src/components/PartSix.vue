<template>
	<div class="part-six" id="part-six">
		
	</div>
</template>

<script>
	// 引入基本模板
	let echarts = require("echarts/lib/echarts.js");

	export default{
		name:"partfour",
		data(){
			return {};
		},
		mounted() {
			this.drawEcharts();
		},
		methods:{
			drawEcharts(){
				// 基于准备好的dom，初始化echarts实例
      			let myChart = echarts.init(document.getElementById("part-six")); 

      			myChart.setOption({
					tooltip : {
				        formatter: "{a} <br/>{c} {b}"
				    },
				    toolbox: {
				        show : true,
				        feature : {
				            mark : {show: true},
				            restore : {show: true},
				            saveAsImage : {show: true}
				        	}
				   		 },
					series : [
						//中国电信
						{
							name:'关联率',
							type:'gauge',
							center : ['50%', '70%'],    // 全局位置设置
							//startAngle:180,//开始角度，左侧角度
							//startAngle:0,//结束角度，侧角度
							min:0,
							max:100,
							splitNumber:10,
							radius: '80%',//设置仪表盘的大小
							axisLine: {            // 坐标轴线
								lineStyle: {       // 属性lineStyle控制线条样式
									color: [[0.09, '#FF0000'],[0.82, '#75caff'],[1, '#ff4500']],
									width: 3,
									shadowColor : '#fff', //默认透明
									shadowBlur: 10
								}
							},
							axisLabel: {            // 坐标轴小标记
								textStyle: {       // 属性lineStyle控制线条样式
									fontWeight: 'bolder',
									color: '#fff',
									shadowColor : '#fff', //默认透明
									shadowBlur: 10
								}
							},
							axisTick: {            // 坐标轴小标记
								length :15,        // 属性length控制线长
								lineStyle: {       // 属性lineStyle控制线条样式
									color: 'auto',
									shadowColor : '#fff', //默认透明
									shadowBlur: 10
								}
							},
							splitLine: {           // 分隔线
								length :25,         // 属性length控制线长
								lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
									width:3,
									color: '#fff',
									shadowColor : '#fff', //默认透明
									shadowBlur: 10
								}
							},
							pointer: {           // 分隔线
								shadowColor : '#fff', //默认透明
								shadowBlur: 5
							},
							title : {
								offsetCenter: [2, '100%'],
								textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
									fontWeight: 'bolder',
									fontSize: 15,
									fontStyle: 'italic',
									color: '#fff',
									shadowColor : '#fff', //默认透明
									shadowBlur: 10
								}
							},
							detail : {
								//backgroundColor: 'rgba(30,144,255,0.8)',
								//borderWidth: 1,
								//borderColor: '#fff',
								shadowColor : '#fff', //默认透明
								shadowBlur: 5,
								offsetCenter: [0, '70%'],       // x, y，单位px
								textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
									fontWeight: 'bolder',
									color: '#fff'
								}
							},
							data:[{value: 40, name: 'RelationRatio(%)'}]
						},
						{
							name:'输入率',
							type:'gauge',
							center : ['50%', '22%'],    // 全局位置设置
							radius : '80%',
							min:0,
							max:12,
							//endAngle:10,
							splitNumber:10,
							axisLine: {            // 坐标轴线
								lineStyle: {       // 属性lineStyle控制线条样式
									color: [[0.29, '#FF0000'],[0.86, '#75caff'],[1, '#ff4500']],
									width: 2,
									shadowColor : '#fff', //默认透明
									shadowBlur: 10
								}
							},
							axisLabel: {            // 坐标轴小标记
								textStyle: {       // 属性lineStyle控制线条样式
									fontWeight: 'bolder',
									color: '#fff',
									shadowColor : '#fff', //默认透明
									shadowBlur: 10
								}
							},
							axisTick: {            // 坐标轴小标记
								length :12,        // 属性length控制线长
								lineStyle: {       // 属性lineStyle控制线条样式
									color: 'auto',
									shadowColor : '#fff', //默认透明
									shadowBlur: 10
								}
							},
							splitLine: {           // 分隔线
								length :20,         // 属性length控制线长
								lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
									width:3,
									color: '#fff',
									shadowColor : '#fff', //默认透明
									shadowBlur: 10
								}
							},
							pointer: {
								width:5,
								shadowColor : '#fff', //默认透明
								shadowBlur: 5
							},
							title : {
								offsetCenter: [-2, '100%'],       // x, y，单位px
								textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
									fontWeight: 'bolder',
									fontStyle: 'italic',
									fontSize: 16,
									color: '#fff',
									shadowColor : '#fff', //默认透明
									shadowBlur: 10
								}
							},
							detail : {
								//backgroundColor: 'rgba(30,144,255,0.8)',
							   // borderWidth: 1,
								borderColor: '#fff',
								shadowColor : '#fff', //默认透明
								shadowBlur: 5,
								width: 80,
								height:30,
								offsetCenter: [0, '70%'],       // x, y，单位px
								textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
									fontWeight: 'bolder',
									color: '#fff'
								}
							},
							data:[{value: 4, name: 'DataInput(GB)'}]
						}]
				})
			}
		}
	}
</script>

<style scoped>
	.part-six{
		width:100%;
		height:410px;
		border: 40px solid transparent;
		border-image: url("../assets/img/border-image.png") 30 30 stretch;
		background: #18202d;
	}
</style>