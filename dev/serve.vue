<!--
 * @Date: 11/06/2021 18.25.29 +0800
 * @Author: KnowsCount
 * @LastEditTime: 21/06/2021 01.51.00 +0800
 * @FilePath: /qiokian/dev/serve.vue
-->
<template>
	<div id="app">
		<!-- 使用组件 -->
		<Qiokian />
	</div>
</template>

<script>
/* eslint-disable */
// 引用组件
import Qiokian from '@/qiokian.vue'
export default {
	components: {
		Qiokian,
	}
}
</script>

<style>
* {
	font-family: sans-serif;
}
</style>