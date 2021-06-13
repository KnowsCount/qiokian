/*
 * @Date: 11/06/2021 18.25.29 +0800
 * @Author: KnowsCount
 * @LastEditTime: 13/06/2021 11.13.55 +0800
 * @FilePath: /qiokian/src/entry.esm.js
 */
// Import vue component
import component from '@/qiokian.vue'

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
export default /*#__PURE__*/ (() => {
	// Get component instance
	const installable = component

	// Attach install function executed by Vue.use()
	installable.install = (Vue) => {
		Vue.component('Qiokian', installable)
	}
	return installable
})()

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
