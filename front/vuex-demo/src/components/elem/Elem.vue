<template>
	<div class="elem">
		 <el-button type="primary" @click="test">{{msg}}</el-button>
		 <el-button type="success">成功按钮</el-button>
	</div>
</template>
<script>
	export default {
		name:'Elem',
		data() {
			return {
				msg:"测试按钮"
			}
		},
		methods:{
			test: function() {
				console.log("element-ui work!");
			}
		}
	}
</script>