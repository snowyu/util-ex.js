// Generated by CoffeeScript 2.7.0
var assert, chai, should, sinon, sinonChai;

chai = require('chai');

sinon = require('sinon');

sinonChai = require('sinon-chai');

assert = chai.assert;

should = chai.should();

chai.use(sinonChai);

describe("is/type/integer", function() {
  var isInt;
  isInt = require('../src/is/type/integer');
  return it("should test value whether integer", function() {
    assert.equal(isInt(12883), true);
    assert.equal(isInt(0), true);
    assert.equal(isInt(0x12883), true);
    assert.equal(isInt("12883"), false);
    assert.equal(isInt(128e-10), false);
    return assert.equal(isInt(128.83), false);
  });
});
