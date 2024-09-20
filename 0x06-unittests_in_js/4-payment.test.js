const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi with stub', () => {
    let stub;
    let consoleSpy;

    beforeEach(() => {
        // Stub the calculateNumber function to return 10 always
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Spy on console.log to verify the correct message
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the stub and spy after each test to avoid side effects
        stub.restore();
        consoleSpy.restore();
    });

    it('should call Utils.calculateNumber with the correct arguments', () => {
        sendPaymentRequestToApi(100, 20);

        // Verify that Utils.calculateNumber was called with the correct arguments
        expect(stub.calledOnce).to.be.true;
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;

        // Verify that console.log was called with the correct message
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    });
});