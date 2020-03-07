<template>
	<div id="app">
<!-- 		<img src="./assets/logo.png">
		<div>
			<el-button @click="startHacking">Start</el-button>
		</div> -->
		<radioVue></radioVue>
	</div>
</template>

<script>
	import radioVue from './components/radio.vue'

	export default {
		components: {
			radioVue
		},
		methods: {
			startHacking() {
				this.$notify({
					title: 'It works!',
					type: 'success',
					message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
					duration: 5000
				})
			}
		}
	}
</script>

<style>
	#app {
		font-family: Helvetica, sans-serif;
		text-align: center;
	}
</style>
