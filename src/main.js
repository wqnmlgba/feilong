// 导入Vue的第三方包
import Vue from 'vue';
import VueRouter from 'vue-router'; 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
// 启动Vue插件
Vue.use(VueRouter)
Vue.use(ElementUI)

import App from './component/App.vue';
// 导入路由配置
import routerConfig from "./route/index.js";

new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(App);
    },
    router: new VueRouter(routerConfig)
})