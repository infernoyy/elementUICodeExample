<template>
	<el-container>
		<el-header>
			<my-head></my-head>
		</el-header>
		<el-container>
			<el-aside>
				<my-slider>
					<my-aside></my-aside>
				</my-slider>
			</el-aside>
			<el-main>
				<my-slider>
					  <p>
						<router-link to="/signIn">Go to signIn</router-link>
						<router-link to="/signUp">Go to signUp</router-link>
					  </p>
					  <!-- 路由出口 -->
					  <router-view></router-view>
					<!-- <my-main></my-main> -->
				</my-slider>
			</el-main>
		</el-container>
	</el-container>
</template>


<script>
	import myHead from '../components/index/header.vue'
	import mySlider from '../components/slider.vue'
	import myAside from '../components/index/aside.vue'
	import myMain from '../components/index/main.vue'
	
	
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			};
		},
		components: {
			mySlider,
			myHead,
			myAside,
			myMain
		},
		methods: {
		}
	}
</script>

<style scoped>
	.el-header,
	.el-footer {
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		width: 220px !important;
		/* background-color: #D3DCE6; */
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}
	.el-container {
		width: 100%;
		height: 100%;
	}
	body>.el-container {
		margin-bottom: 40px;
	}
</style>
