import { expect } from 'chai';
import { getHelloWorld } from './index.js';

describe('Function getHelloWorld', () => {
    it('Should Return Hello World!', () => {
        expect(getHelloWorld()).to.equal("Hello World!");
    });
});
