/*
 * @Date: 11/06/2021 18.25.29 +0800
 * @Author: KnowsCount
 * @LastEditTime: 13/06/2021 11.14.38 +0800
 * @FilePath: /qiokian/babel.config.js
 */
const devPresets = ['@vue/babel-preset-app']
const buildPresets = [
	[
		'@babel/preset-env',
		// Config for @babel/preset-env
		{
			// Example: Always transpile optional chaining/nullish coalescing
			// include: [
			//   /(optional-chaining|nullish-coalescing)/
			// ],
		},
	],
]
module.exports = {
	presets: process.env.NODE_ENV === 'development' ? devPresets : buildPresets,
}
