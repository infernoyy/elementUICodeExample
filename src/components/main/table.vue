<template>
	<div>
		<my-slider>
			<el-table :data="tableData" height="600" style="width: 100%">
				<el-table-column prop="date" label="日期" width="">
				</el-table-column>
				<el-table-column prop="id" label="id" width="">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="">
				</el-table-column>
				<el-table-column prop="address" label="地址" width="">
				</el-table-column>
			</el-table>
		</my-slider>
		<el-divider></el-divider>
		<div class="block">
			<!-- <span class="demonstration"></span> -->
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
			 :page-sizes="pagesizes" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import data from '../../assets/data.json'
	import mySlider from '../slider.vue'
	export default {
		data() {
			return {
				currentPage: 1,
				alltableData: data,
				tableData: [],
				pagesizes: [10, 50, 100, 200],
				pagesize: 10
			}
		},
		components: {
			mySlider
		},
		created: function() {
			this.initData()
		},
		computed: {
			total: function() {
				return this.alltableData.length
			}
		},
		methods: {
			initData() {
				this.tableData = []
				let now = this.alltableData.filter(x => x.id >= 0 * this.pagesize && x.id < this.pagesize)
				now.forEach((item) => {
					this.tableData.push(item)
				})
			},
			handleSizeChange(val) {
				this.currentPage = 1
				this.tableData = []
				this.pagesize = val
				let now = this.alltableData.filter(x => x.id >= 0 * this.pagesize && x.id < this.pagesize)
				now.forEach((item) => {
					this.tableData.push(item)
				})
			},
			handleCurrentChange(val) {
				this.tableData.length = 0
				this.currentPage = val
				let now = this.alltableData.filter(x => x.id >= (parseInt(val) - 1) * this.pagesize && x.id < parseInt(val) * this.pagesize)
				now.forEach((item) => {
					this.tableData.push(item)
				})
			}
		}
	}
</script>
