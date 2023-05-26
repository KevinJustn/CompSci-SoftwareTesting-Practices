var assert = require('assert');

var calc = require('../src/findAverage.js');
var check = require('../src/isQualified');

describe('Partial GPA Calculator Tests', function() {
	it('returns qualified for 100, 80, 70, 90', function(done) {
		var avg = calc.findAverage(100, 80, 70, 90);
		assert.strictEqual(check.isQualified(avg), "qualified");
		done();
	});

	it('returns not qualified for 60, 60, 60, 70', function(done) {
		var avg = calc.findAverage(60,60,60,70);
		assert.strictEqual(check.isQualified(avg), "not qualified");
		done();
	});

	it('returns qualified for 68, 69, 71, 72', function(done) {
		var avg = calc.findAverage(68,69,71,72);
		assert.strictEqual(check.isQualified(avg), "qualified");
		done();
	});

	it('returns not qualified for 43, 51, 80, 75', function(done) {
		var avg = calc.findAverage(43,51,80,75);
		assert.strictEqual(check.isQualified(avg), "not qualified");
		done();
	});

	it('returns qualified for 65, 80, 94, 69', function(done) {
		var avg = calc.findAverage(65,80,94,69);
		assert.strictEqual(check.isQualified(avg), "qualified");
		done();
	});
});