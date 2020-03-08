<template>
	<div id="app">
		<index></index>
	</div>
</template>

<script>
	// import radioVue from './components/radio.vue'
	// import checkboxVue from './components/checkbox.vue'
	import Index from './basic/Index.vue'

	export default {
		components: {
			// radioVue,
			// checkboxVue
			Index
		},
		methods: {
			// startHacking() {
				// this.$notify({
				// 	title: 'It works!',
				// 	type: 'success',
				// 	message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
				// 	duration: 5000
				// })
			// }
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	#app {
		width:100%;
		height: 100%;
		position: absolute;
		font-family: Helvetica, sans-serif;
		text-align: center;
		overflow: hidden;
	}
	
	/* logo上下居中 */
	.header .el-image>.el-image__inner{
		vertical-align: sub !important;
		color: red;
	}
</style>
