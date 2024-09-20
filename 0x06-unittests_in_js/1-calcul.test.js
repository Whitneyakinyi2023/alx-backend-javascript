const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
    it('should return the sum of two rounded numbers when type is SUM', function () {
        assert(calculateNumber('SUM', 1.4, 4.5), 6);
        assert(calculateNumber('SUM', 1.9, 2.1), 4);
        assert(calculateNumber('SUM', -1.4, -3.7), -5);
    });

    it('should return the difference of two rounded numbers when type is SUBTRACT', function () {
        assert(calculateNumber('SUBTRACT', 5.8, 3.2), 3);
        assert(calculateNumber('SUBTRACT', 1.4, 4.5), -3);
        assert(calculateNumber('SUBTRACT', -3.7, 2.6), -6);
    });

    it('should return the division of two rounded numbers when type is DIVIDE', function () {
        assert(calculateNumber('DIVIDE', 7.4, 2.8), 2);
        assert(calculateNumber('DIVIDE', 9.1, 3.5), 3);
    });

    it('should return "Error" if the divisor (second argument) rounds to 0 when type is DIVIDE', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 5.2, 0.4), 'Error');
        assert.strictEqual(calculateNumber('DIVIDE', 5.6, 0), 'Error');
    });

    it('should return "Invalid operation type" if an unsupported operation type is provided', function () {
        assert.strictEqual(calculateNumber('MULTIPLY', 5, 3), 'Invalid operation type');
        assert.strictEqual(calculateNumber('ADD', 2, 3), 'Invalid operation type');
    });
});
