'use strict';

var addNumber = require('./index.js');

describe('addNumber', function () {
	it('should add two numbers', function () {
		expect(addNumber(1, 2)).toBe(3);
	});
});