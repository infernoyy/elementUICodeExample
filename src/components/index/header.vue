<template>
	<div>
		<div class="headerWrapper">
			<div class="header">
				<div class="container">
					<el-image :src="url" fit="scale-down"></el-image>
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
						<el-menu-item index="1">首页</el-menu-item>
						<el-submenu index="2">
							<template slot="title">博客中心</template>
							<el-menu-item index="2-0">
								<el-link href="https://infernoyy.github.io/cv" type="primary" target="_blank">个人简历</el-link>
							</el-menu-item>
							<el-menu-item index="2-1">
								<el-link href="https://infernoyy.github.io/" type="primary" target="_blank">博客详情</el-link>
							</el-menu-item>
							<el-submenu index="2-2">
								<template slot="title">联系我</template>
								<el-menu-item index="2-3-1" @click="dialogVisible = true">
									<el-button type="text">微信</el-button>
								</el-menu-item>
								<el-menu-item index="2-3-2" @click="openEmailInfo">
									<el-button type="text">邮箱</el-button>
								</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="3" disabled>广告招租</el-menu-item>
						<el-menu-item index="4">
							<i class="el-icon-search"></i>
							<el-link href="https://www.baidu.com" type="primary" target="_blank">百度一下</el-link>
						</el-menu-item>
						<el-submenu index="5">
							<template slot="title"><i class="el-icon-user"></i>个人中心</template>
							<el-menu-item index="5-0">
								<el-button @click="SignIn">登录</el-button>
							</el-menu-item>
							<el-menu-item index="5-1">
								<el-button @click="SignUp">注册</el-button>
							</el-menu-item>
						</el-submenu>
					</el-menu>
				</div>
			</div>
		</div>

		<el-dialog title="微信二维码" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<el-image :src="wxCode"></el-image>
			<!-- 		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span> -->
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				url: require('../../assets/logo.svg'),
				activeIndex: '1',
				activeIndex2: '1',
				dialogVisible: false,
				wxCode: require('../../assets/wxCode.png')
			};
		},
		methods: {
			handleClose(done) {
				// this.$confirm('确认关闭？')
				//   .then(_ => {
				done();
				// })
				// .catch(_ => {});
			},
			openEmailInfo() {
				this.$notify({
					title: '邮箱信息',
					message: '1085435176@qq.com',
					duration: 0
				});
			},
			SignIn(){
				console.log('SignIn')
			},
			SignUp(){
				console.log('SignUp')
			}
		}
	}
</script>

<style scoped>
	.headerWrapper {
		height: 60px;
	}

	.header {
		height: 60px;
		background-color: #fff;
		color: #fff;
		top: 0;
		left: 0;
		width: 100%;
		line-height: 60px;
		z-index: 100;
		position: relative;
	}

	.header .container {
		height: 100%;
		box-sizing: border-box;
		border-bottom: 1px solid #dcdfe6;
	}

	.header .el-image {
		margin: 0;
		float: left;
		font-size: 32px;
		font-weight: 400;
		padding-left: 15px;
	}
	

	.header .container .el-menu-demo {
		float: right;
		height: 100%;
		line-height: 80px;
		background: transparent;
		padding: 0;
		margin: 0;
	}
	
</style>
