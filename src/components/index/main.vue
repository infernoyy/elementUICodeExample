<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="表格" name="table">
		<my-table></my-table>
	</el-tab-pane>
    <el-tab-pane label="表单" name="form">
		<my-form></my-form>
	</el-tab-pane>
    <!-- <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane> -->
    <!-- <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
  </el-tabs>
</template>
<script>
	import myTable from '../main/table.vue'
	import myForm from '../main/form.vue'
  export default {
    data() {
      return {
        activeName: 'table'
      };
    },
	components:{
		myTable,
		myForm
	},
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>
	.el-tabs{
		line-height: 60px !important;
	}
</style>