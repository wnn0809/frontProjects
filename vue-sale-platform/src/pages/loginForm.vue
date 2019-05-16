<template lang="html">
	<div class="login-form">
		<div class="loginIndex">
			<div class="title">
				<h1>欢迎您登录数字商城</h1>
			</div>
			<div class="login-box">
				<p class="input_account">
					用户名： <input v-model="usernameModel" id="username"type="text" placeholder="请输入您的用户名">
				</p>
				<span class="errorTip">{{ userErrors.errorText }}</span>
				<p class="input_account">
					密码： <input v-model="passwordModel" id="pwd" type="password" placeholder="请输入您的密码">
				</p>
				<span class="errorTip">{{ passwordErrors.errorText }}</span>
				<div class="login-mode">
					<span class="phoneMode">手机登录</span>
					<span class="lostPwd">忘记密码</span>
					<span class="reg">免费注册</span>
				</div>
				<p class="loginBtn" @click="onLogin">
					<input type="submit" value="登录" >
				</p>
				<p class="loginTip">{{ errorText }}</p>
			</div>
			
		</div>
	</div>
</template>

<script>
    export default {
    	data(){
    		return {
    			usernameModel: "",
    			passwordModel: "",
    			errorText: ""
    		}
    	},
    	// 声明一个计算属性userErrors,当usernameModel改变时，userErrors也会更新
    	computed:{
    		userErrors(){
    			let errorText,status
    			// 使用正则test方法验证用户用户名输入
    			if(!/@/g.test(this.usernameModel)){
    				status = false
    				errorText = '用户名需包含@符号'
    			}else{
    				status = true
    				errorText = ''
    			}
    			//设置flag，检测是否是第一次进入计算属性，解决用户未输入时就提示错误的问题
    			if(!this.userFlag){
    				errorText='',
    				this.userFlag = true
    			}
    			return{
    				status,
    				errorText
    			}
    		},
    		passwordErrors(){
    			let errorText,status
    			// 使用正则test方法验证用户密码输入
    			// 正则字符串起始标志^和结束标志$要加上，否则验证不准确
    			if(!/^\w{1,8}$/g.test(this.passwordModel)){
    				status = false
    				errorText = '密码需1-8位字符'
    			}else{
    				status = true
    				errorText = ''
    			}
    			//设置flag，检测是否是第一次进入计算属性，解决用户未输入时就提示错误的问题
    			if(!this.pwdFlag){
    				errorText=''
    				this.pwdFlag = true
    			}
    			return{
    				status,
    				errorText
    			}
    		}
    	},
    	methods: {
    		onLogin() {
    			if(!this.userErrors.status||!this.passwordErrors.status){
    				this.errorText = '用户名或密码不正确'
    			}else{
    				this.errorText = '成功登陆'
    			}
    		}
    	}
  }
</script>

<style>
	.login-form {
		background: azure;
		height: 100%;
	    width: 100%;
	    position: fixed;
		}
	.title {
		color: #fff;
		font-size: 30px;
		font-family: cursive;
		float: left;
		padding: 154px;
	}
	.loginIndex {
		background: url(../assets/login.jpg) no-repeat;
		height: 500px;
		width: 1100px;
    	margin: 100px auto;
	}
	.login-box {
		border: 1px solid #dedede;
	    width: 329px;
	    height: 338px;
	    background: #fff;
	    float: right;
	    margin-right: 135px;
	    margin-top: 30px;
	    overflow: hidden;
	    text-align: center;
	}
	.input_account {
		font-size: 20px;
	    font-family: monospace;
	    margin-top: 27px;
	}
	.input_account input {
		border-radius: 7px;
    	height: 22px;
    	border: 1px solid #ccc;
	}
	#pwd {
		margin-left: 18px;
	}
	#username {
		margin-top: 33px;
	}
	/*用户名密码输入错误提示*/
	.errorTip {
		color: red;
		display: inline-block;
    	margin-left: 66px;
	}
	.loginTip {
		color: red;
		margin-top: 5px;
	}

	.login-mode {
		text-align: center;
    	padding: 50px;
	}
	.phoneMode {
    	margin-right: 42px;
	}
	.lostPwd {
		color: #035Ec9;
	}
	.reg {
		float: right;
		color: #035Ec9;
	}
	.loginBtn input{
	    width: 268px;
	    height: 38px;
	    border-radius: 5px;
	    background: #126ab1;
	    color: #fff;
	    font-size: 16px;
	}
</style>