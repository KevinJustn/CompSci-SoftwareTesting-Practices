var assert = require('assert');

var calc = require('../src/findAverage.js');

describe('Partial GPA Calculator Tests', function() {
	it('returns 73 for 65, 44, 89, 92', function(done) {
        assert.strictEqual(calc.findAverage(65, 44, 89, 92), 73);
		done();
	});

	it('returns 86 for 78.4, 97.2, 80, 89.5', function(done) {
		assert.strictEqual(calc.findAverage(78.4, 97.2, 80, 89.5), 86);
		done();
    });

    it('returns 87 for 76.60, 88.71, 90.46, 93.47', function(done) {
        assert.strictEqual(calc.findAverage(76.60, 88.71, 90.46, 93.47), 87);
        done();
	});

	it('returns 68 for 58.62, 80.1, 79.64, 50.55', function(done) {
        assert.strictEqual(calc.findAverage(58.62, 80.1, 79.64, 50.55), 68);
        done();
	});

	it('returns 82 for 88.03, 67.76, 95, 74.63', function(done) {
        assert.strictEqual(calc.findAverage(88.03, 67.76, 95, 74.63), 82);
        done();
	});
});