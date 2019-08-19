<template>
	<div class="part-four" id="part-four">
		<p>part-four</p>
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
      			let myChart = echarts.init(document.getElementById("part-four")); 

      			myChart.setOption({
					//条形图标题
					title:{
						text:"一周数据接入量变化(GB/s)",
						left:"center",
						textStyle:{color:"#fff"}
					},
					//不配置grid，xy轴文字显示不完全
					grid:{
						left:"1%",
						right:"2%",
						bottom:"10%",
						containLabel:true
					},
				    xAxis: {
				        type: 'category',
				        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				        // itemStyle:{
				        // 	normal:{
				        // 		color:"#fff"
				        // 	}
				        //}
				    },
				    yAxis: {
				        type: 'value'
				    },
				    textStyle:{
		                fontSize:15,
		                color:'#fff'
		            },
				    series: [{
				        data: [10.8, 6.9, 11.2, 8, 7.6, 3.3, 11],
				        type: 'bar',
				        itemStyle: {
                            normal: {
                                //每根柱子颜色设置
                                color: function(params) {
                                    let colorList = [
                                        "deepskyblue",
                                        "#9feaa5",
                                        "#61a0a8",
                                        "#d48265",
                                        "#91c7ae",
                                        "#0099ff",
                                        "deepskyblue"
                                    ];
                                    return colorList[params.dataIndex];
                                }
                            }
                        },
				    }]
			      });
			}
		}
	}
</script>

<style scoped>
	.part-four {
		width:100%;
		height:410px;
		border: 15px solid transparent;
		border-image: url("../assets/img/border-image.png") 30 30 stretch;
		background: #18202d;
	}
</style>