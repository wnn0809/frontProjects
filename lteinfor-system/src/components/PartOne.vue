<template>
	<div class="part-one">
		<div class="operatorMode">
			<span class="wordDesc">说明：<br>信令解析分为信令接入和协议解析两部分，信令管理系统在保证协议解析状态正常的情况下着重管理运营商接入原始信令数据。</span>
			<form name="form1" method='post'>
			运营商选择：<br>
			&nbsp&nbsp<input type="radio" name="radio1" value="chinamobile" checked="checked">&nbsp中国移动<br>
			&nbsp&nbsp<input type="radio" name="radio1" value="chinaunicom">&nbsp中国电信<br>
			&nbsp&nbsp<input type="radio" name="radio1" value="chinatelecom">&nbsp中国联通<br>
			</form>
		</div>
		<div class="sever-list">
			<span class="severTitle">运营商服务器选择：<br></span>
			<select class="selectbox" autocomplete="off">
				<option value="ip1" selected="selected">192.168.1.1</option>
				<option value="ip2">192.168.1.2</option>
				<option value="ip2">192.168.1.3</option>
				<option value="ip2">192.168.1.4</option>
				<option value="ip2">192.168.1.5</option>
				<option value="ip2">192.168.1.5</option>
				<option value="ip2">192.168.1.7</option>
				<option value="ip2">192.168.1.8</option>
			</select>
		</div>
	</div>
</template>

<script>
	export default{
		name: "partone"
	};
</script>

<style scoped>
	.part-one {
		width:100%;
		height:410px;
		border: 35px solid transparent;
		border-image: url("../assets/img/border-image.png") 30 30 stretch;
		background: #18202d;
		font-size: 17px;
    	font-family: cursive;
	}

	.operatorMode input{
		margin: 10px;
	}
	.operatorMode {
        margin-top: -18px;
	}
	.operatorMode form{
	    margin-top: 12px;
	}
	.sever-list{
		/*margin-top:25px;
	   	border-top: 1px solid #034493;*/
	}
	.sever-list .severTitle{
	    margin-top: 10px;
    	display: flex;
	}
	.sever-list .selectbox{
		margin-top:10px;
	    width: 185px;
	    border-radius: 10px;
	    background-color: #ccc;
	}
</style>