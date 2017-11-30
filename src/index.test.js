const addNumber = require('./index.js')

describe('addNumber', () => {
	it('should add two numbers', () => {
		expect(addNumber(1, 2)).toBe(3);
	});
});
