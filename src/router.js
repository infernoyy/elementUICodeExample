// router.js
 import Vue from 'vue';
 import VueRouter from "vue-router";
 Vue.use(VueRouter);

 // 在此导入 组件
 import signIn from './components/user/signIn.vue';
 import signUp from './components/user/signUp.vue';
 import main from './components/index/main.vue';

 // 配置路由信息
 const routes = [{
 		path: '/',
 		component: main
 	},{
 		path: '/signIn',
 		component: signIn
 	},
 	{
 		path: '/signUp',
 		component: signUp
 	}
 ]

 // 将路由构造出来
 const router = new VueRouter({
 	routes
 })

 // 导出
 // 在 main.js 中引入, 放入 App Vue 实例配置对象中
 export default router;
