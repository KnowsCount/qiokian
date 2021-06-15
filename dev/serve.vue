<!--
 * @Date: 11/06/2021 18.25.29 +0800
 * @Author: KnowsCount
 * @LastEditTime: 15/06/2021 08.33.01 +0800
 * @FilePath: /qiokian/dev/serve.vue
-->
<template>
	<div id="app">
		<!-- 使用组件 -->
		<Figures />
	</div>
</template>

<script>
/* eslint-disable */
// 引用组件
import Figures from '@/qiokian.vue'
export default {
	components: {
		Figures,
	}
}
</script>

<style>
* {
	font-family: sans-serif;
}
</style>