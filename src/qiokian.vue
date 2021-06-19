<!--
 * @Date: 10/02/2021 20.07.50 +0800
 * @Author: KnowsCount
 * @LastEditTime: 19/06/2021 23.55.05 +0800
 * @FilePath: /qiokian/src/qiokian.vue
-->
<template>
	<div></div>
</template>

<script>
export default {
	data() {
		return {
			live2d_path:
				'https://cdn.jsdelivr.net/gh/knowscount/live2d-widget@latest/',
			cdnPath: 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/',
		}
	},
	mounted() {
		this.__init()
		console.log(`
			く__,.ヘヽ.        /  ,ー､ 〉
					＼ ', !-─‐-i  /  /´
					／｀ｰ'       L/／｀ヽ､
					/   ／,   /|   ,   ,       ',
				ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
					ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
					!,/7 '0'     ´0iソ|    |
					|.从"    _     ,,,, / |./    |
					ﾚ'| i＞.､,,__  _,.イ /   .i   |
						ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
						| |/i 〈|/   i  ,.ﾍ |  i  |
						.|/ /  ｉ：    ﾍ!    ＼  |
						kヽ>､ﾊ    _,.ﾍ､    /､!
						!'〈//｀Ｔ´', ＼ ｀'7'ｰr'
						ﾚ'ヽL__|___i,___,ンﾚ|ノ
							ﾄ-,/  |___./
							'ｰ'    !_,.:
		`)
	},
	methods: {
		__init() {
			this.loadAssets()
		},
		loadAssets() {
			// 加载 waifu.css live2d.min.js waifu-tips.js
			if (screen.width >= 768) {
				Promise.all([
					this.loadExternalResource(
						this.live2d_path + 'waifu.css',
						'css'
					),
					this.loadExternalResource(
						this.live2d_path + 'live2d.min.js',
						'js'
					),
					this.loadExternalResource(
						this.live2d_path + 'waifu-tips.js',
						'js'
					),
				]).then(() => {
					// eslint-disable-next-line no-undef
					initWidget({
						waifuPath: this.live2d_path + 'waifu-tips.json',
						//apiPath: "https://live2d.fghrsh.net/api/",
						cdnPath: this.cdnPath,
					})
				})
			}
			// initWidget 第一个参数为 waifu-tips.json 的路径，第二个参数为 API 地址
			// API 后端可自行搭建，参考 https://github.com/fghrsh/live2d_api
			// 初始化看板娘会自动加载指定目录下的 waifu-tips.json
		},

		/**
		 * @description: 封装异步加载资源的方法
		 * @param {*} url
		 * @param {*} type
		 * @return {*}
		 */
		loadExternalResource(url, type) {
			// 注意：live2d_path 参数应使用绝对路径
			// const live2d_path =
			//   "https://cdn.jsdelivr.net/gh/knowscount/live2d-widget@latest/";
			// const live2d_path = "/live2d-widget/";
			return new Promise((resolve, reject) => {
				let tag

				if (type === 'css') {
					tag = document.createElement('link')
					tag.rel = 'stylesheet'
					tag.href = url
				} else if (type === 'js') {
					tag = document.createElement('script')
					tag.src = url
				}
				if (tag) {
					tag.onload = () => resolve(url)
					tag.onerror = () => reject(url)
					document.head.appendChild(tag)
				}
			})
		},
	},
}
</script>

<style scoped>
@import url(https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css);
</style>