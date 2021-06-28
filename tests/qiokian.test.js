/*
 * @Date: 11/07/2016 16.00.01 +0800
 * @Author: KnowsCount
 * @LastEditTime: 28/06/2021 20.13.38 +0800
 * @FilePath: /qiokian/tests/qiokian.test.js
 */

/* eslint-disable no-undef */

import qiokian from '../src/qiokian.vue'
import { shallowMount } from '@vue/test-utils'
import assert from 'assert'

describe('qiokian', function() {
	it('should export an object', function() {
		assert(qiokian)
		assert.strictEqual(typeof qiokian, 'object')
	})

	it('should throw an error when invalid args are passed', function() {
		assert.throws(function() {
			qiokian()
		})
	})

	it('should contain a <button> & <div> element', () => {
		const wrapper = shallowMount(qiokian)
		expect(wrapper.find('button')).toBeTruthy()
		expect(wrapper.find('div')).toBeTruthy()
		wrapper.destroy()
	})

	// if (screen.width < 768) {
	// 	expect(wrapper.find('button')).toBeFalsy()
	// }
	// what happened to this part?... it says `Received: {"selector": "button"}`
})
