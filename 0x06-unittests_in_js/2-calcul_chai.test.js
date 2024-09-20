const { expect } = require('chai');
const { calculateNumber } = require('./2-calcul_chai');

describe('calculateNumber', () => {
    it('should return the correct sum', () => {
        expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });

    it('should return the correct difference', () => {
        expect(calculate('SUBTRACT', 5, 3)).to.equal(2);
    });
});