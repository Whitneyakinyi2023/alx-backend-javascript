const { expect } = require('chai');
const { calculate } = require('./2-calcul_chai');

describe('calculate', () => {
    it('should return the correct sum', () => {
        expect(calculate('SUM', 1, 2)).to.equal(3);
    });

    it('should return the correct difference', () => {
        expect(calculate('SUBTRACT', 5, 3)).to.equal(2);
    });
});