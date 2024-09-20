const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let spy;

    beforeEach(() => {
        spy = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(() => {
        spy.restore(); // Always restore spies after the test to avoid side effects
    });

    it('should call Utils.calculateNumber with the correct arguments', () => {
        sendPaymentRequestToApi(100, 20);

        // Assert that the spy was called with the correct arguments
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    });
});