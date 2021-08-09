//引入Vue
import axios from 'axios';
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入Vue-roter
import VueRoter from 'vue-router'
//引入路由器
import router from './router'


//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRoter)


//创建vm
new Vue({
   el:'#app',
   render: h => h(App),
   router: router
});