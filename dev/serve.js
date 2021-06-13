/*
 * @Date: 11/06/2021 18.25.29 +0800
 * @Author: KnowsCount
 * @LastEditTime: 13/06/2021 11.14.04 +0800
 * @FilePath: /qiokian/dev/serve.js
 */
import Vue from 'vue'
import Dev from './serve.vue'

Vue.config.productionTip = false

new Vue({
	render: (h) => h(Dev),
}).$mount('#app')
