<template>
	<div>
		<el-radio-group v-model="radio3" size="small" @change="valChange">
		  <el-radio label="1" border>备选项1</el-radio>
		  <el-radio label="2" border>备选项2</el-radio>
		  <el-radio label="3" border :disabled="isDisabled">备选项3</el-radio>
		</el-radio-group>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        radio3: '1',
		isDisabled: false
      };
    },
	methods:{
		valChange(option){
			console.log(option)
			if(option==1){
				console.log(this.isDisabled)
				this.isDisabled=true
			}
		}
	}
  }
</script>