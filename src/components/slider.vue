<template>
	<el-scrollbar>
		<div class="scroll">
			<slot></slot>
		</div>
	</el-scrollbar>
</template>

<script>
</script>

<style>
	.scroll{
		width:100%;
		height:100%;
	}
	/* .el-scrollbar{
		overflow: unset;	
	} */
	
	/* 侧边栏滚动条 */
	.el-aside>.el-scrollbar{
		height: calc(100% - 60px)
	}
	.el-aside>.el-scrollbar .el-scrollbar__wrap{
		overflow-x: hidden;
	}
	
	/* 主信息滚动条 */
	.el-main>.el-scrollbar{
		height: calc(100% - 60px)
	}
	.el-main>.el-scrollbar>.el-scrollbar__wrap{
		overflow-x: hidden;
	}
</style>
