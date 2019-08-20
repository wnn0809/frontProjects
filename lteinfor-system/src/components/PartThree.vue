<template>
	<div class="part-three" id="part-three">
		
	</div>
</template>

<script>
	
	// 引入基本模板
	// let echarts = require("echarts/lib/echarts.js");

	export default{
		name:"partthree",
		data(){
			return {};
		},
		mounted() {
			this.drawEcharts();
		},
		methods:{
			drawEcharts(){
				// 基于准备好的dom，初始化echarts实例
      			let myChart = this.$echarts.init(document.getElementById("part-three")); 

      			myChart.setOption({
			        // 标题
			        title: {
			          // 标题文本
			          text: "硬件特征分布图",
			          // 标题样式
			          textStyle: {
			            color: "#fff"
			          },
			          // 标题位置
			          x: "center"
			        },
			        // 移动显示
			        tooltip: {
			          trigger: "item",
			          // 显示文字样式
			          formatter: "{a} <br/>{b} : {d}%"
			        },
			        // 注记
			        legend: {
			          x: "center",
			          y: "bottom",
			          textStyle: {
			            color: "#fff"
			          },
			          data: [ "IMEI", "IMSI", "MAC", "PHONE","MSISDN","其他"]
			        },
			        // 注记显示手柄
			        calculable: true,
			        // 图形系列
			        series: [
			          {
			            name: "硬件特征分布",
			            type: "pie",
			            radius: [30, 65],
			            roseType: "area",
			            data: [
			              { value: 15, name: "IMEI" },
			              { value: 15, name: "IMSI" },
			              { value: 20, name: "MAC" },
			              { value: 20, name: "PHONE" },
			              { value: 20, name: "MSISDN" },
			              { value: 15, name: "其他" }
			            ]
			          }
			        ],
			        // 颜色调整
			        color: ['#00bfff', '#00ffdd', '#207ffc', '#00aeff', "#0099ff", "#0066ff"]
			      });
			}
		}
	}
</script>

<style scoped>
	.part-three {
		width:100%;
		height:410px;
		border: 15px solid transparent;
		border-image: url("../assets/img/border-image.png") 30 30 stretch;
		background: #18202d;
	}
</style>