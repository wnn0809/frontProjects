// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入echarts
import echarts from 'echarts'
//更改原型链,通过this.$echarts来全局使用
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

//引入样式重置
import '../static/css/reset.css'

//按需引入及使用ElementUi
import {Row, Col} from 'element-ui';
Vue.use(Row).use(Col);

//引入ElementUi响应式断点
import 'element-ui/lib/theme-chalk/display.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
