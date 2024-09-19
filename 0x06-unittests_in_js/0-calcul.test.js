const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return 7 when input is 4.8 and 2.2', () => {
        assert.strictEqual(calculateNumber(4.8, 2.2), 7);
    });

    it('should return 5 when input is 1.4 and 3.6', () => {
        assert.strictEqual(calculateNumber(1.4, 3.6), 5);
    });

    it('should return 0 when input is 0.4 and 0.4', () => {
        assert.strictEqual(calculateNumber(0.4, 0.4), 0);
    });

    it('should return -5 when input is -2.6 and -2.4', () => {
        assert.strictEqual(calculateNumber(-2.6, -2.4), -5);
    });

    it('should return 4 when input is 1.9 and 2.1', () => {
        assert.strictEqual(calculateNumber(1.9, 2.1), 4);
    });
});
