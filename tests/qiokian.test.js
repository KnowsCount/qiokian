/*
 * @Date: 11/07/2016 16.00.01 +0800
 * @Author: KnowsCount
 * @LastEditTime: 19/06/2021 20.16.53 +0800
 * @FilePath: /qiokian/tests/qiokian.test.js
 */

/* eslint-disable no-undef */

import qiokian from '../src/qiokian.vue'
import assert from 'assert'

describe('qiokian', function() {
	// it('should export a function', function() {
	// 	assert.equal(typeof qiokian, 'function')
	// })

	it('should export an object', function() {
		assert(qiokian)
		assert.strictEqual(typeof qiokian, 'object')
	})

	it('should throw an error when invalid args are passed', function() {
		assert.throws(function() {
			qiokian()
		})
	})
})
