const expect = require('chai').expect;
const myapp = require(".");

describe('Function getHelloWorld', () => {
    it('Should Return Hello World!', () => {
        expect(myapp.getHelloWorld()).to.equal("Hello World!");
    });
});
