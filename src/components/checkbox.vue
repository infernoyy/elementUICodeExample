<template>
  <el-checkbox-group v-model="checkList" :min="2" :max="4">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 B1"></el-checkbox>
    <el-checkbox label="复选框 B2"></el-checkbox>
    <el-checkbox label="复选框 C" @change="Cchange"></el-checkbox>
    <!-- <el-checkbox label="选中" true-label="选中D" false-label="未选中D" @change="Dchange"></el-checkbox> -->
    <el-checkbox label="禁用" disabled></el-checkbox>
    <!-- <el-checkbox label="选中且禁用" disabled></el-checkbox> -->
	<!-- <el-checkbox :indeterminate="a" v-model="b" @change="Kchange">全选</el-checkbox> -->
  </el-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['选中且禁用','复选框 A'],
		checked: true,
		a: true,
		b: true
      };
    },
		
	methods:{
		Cchange(val){
			console.log(val)
		},
		Kchange(val){
			console.log(val)
		},
		Dchange(val){
			console.log(val)
			if(val=='选中D'){
				this.checkList.push('选中')
			}else{
				let index = Array.indexOf('选中')
				this.checkList.splice(index,1)
			}
		}
	}
  };
</script>