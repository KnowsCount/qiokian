/*
 * @Date: 11/07/2016 16.00.01 +0800
 * @Author: KnowsCount
 * @LastEditTime: 17/06/2021 08.47.00 +0800
 * @FilePath: /qiokian/test/test.js
 */

/* eslint-disable no-undef */

'use strict'

require('mocha')
var assert = require('assert')
var qiokian = require('..')

describe('qiokian', function() {
	// it('should export a function', function() {
	// 	assert.equal(typeof qiokian, 'function')
	// })

	it('should export an object', function() {
		assert(qiokian)
		assert.equal(typeof qiokian, 'object')
	})

	it('should throw an error when invalid args are passed', function() {
		assert.throws(function() {
			qiokian()
		})
	})
})
