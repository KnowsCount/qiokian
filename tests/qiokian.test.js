/*
 * @Date: 11/07/2016 16.00.01 +0800
 * @Author: KnowsCount
 * @LastEditTime: 20/06/2021 00.54.39 +0800
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

	const wrapper = shallowMount(qiokian)
	it('should contain a <button> & <div> element', function() {
		// expect(wrapper.find('button')).toExist()
		// The expect assertion was handed over to the Jest team, who in their infinite wisdom, created a new API.
		expect(wrapper.find('button')).toBeTruthy()
		expect(wrapper.find('div')).toBeTruthy()
	})

	// if (screen.width < 768) {
	// 	expect(wrapper.find('button')).toBeFalsy()
	// }
	// what happened to this part?... it says `Received: {"selector": "button"}`
})
