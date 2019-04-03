<template>
	<div class="part-seven" id="part-seven">
		<div class="operatorMode">
			<span class="wordDesc">一周数据接入量和关联率柱形图主要检测运营商数据是否稳定，关联结果是否稳定。<br>右侧仪表盘显示此时此刻的数据接入与关联数据，下方单选框可以选择查看那个运营商的数据。<br></span>
			<form name="form1" method='post'><br>运营商选择：<br>
			&nbsp&nbsp<input type="radio" name="radio1" value="chinamobile" checked="checked">&nbsp中国移动<br>
			&nbsp&nbsp<input type="radio" name="radio1" value="chinaunicom">&nbsp中国电信<br>
			&nbsp&nbsp<input type="radio" name="radio1" value="chinatelecom">&nbsp中国联通<br>
			</form>
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style scoped>
	.part-seven{
		width:100%;
		height:430px;
		border: 40px solid transparent;
		border-image: url("../assets/img/border-image.png") 30 30 stretch;
		background: #18202d;
		font-family: cursive;
	}
</style>