// Generated by CoffeeScript 2.7.0
var assert, chai, should, sinon, sinonChai;

chai = require('chai');

sinon = require('sinon');

sinonChai = require('sinon-chai');

assert = chai.assert;

should = chai.should();

chai.use(sinonChai);

describe("is/string/int", function() {
  var isInt;
  isInt = require('../src/is/string/int');
  return it("should test string whether integer", function() {
    assert.equal(isInt("12883"), true);
    assert.equal(isInt("012883"), true);
    assert.equal(isInt("0x12883"), true);
    assert.equal(isInt("128.83"), false);
    return assert.equal(isInt("128e83"), false);
  });
});

describe("is/string/json", function() {
  var isJson;
  isJson = require('../src/is/string/json');
  it("should test string integer whether json", function() {
    assert.equal(isJson("12883"), true);
    assert.equal(isJson("012883"), true);
    assert.equal(isJson("0x12883"), false);
    assert.equal(isJson("128.83"), true);
    return assert.equal(isJson("128e83"), true);
  });
  it("should test string whether json", function() {
    assert.equal(isJson("'12883'"), false);
    assert.equal(isJson('"012883"'), true);
    return assert.equal(isJson("'0x12883\""), false);
  });
  it("should test string object whether json", function() {
    assert.equal(isJson('{"a":12883}'), true);
    assert.equal(isJson("{a:12883}"), false);
    return assert.equal(isJson("{a:12883,b}", true), true); //almost json = true
  });
  return it("should test string array whether json", function() {
    assert.equal(isJson('["a", 12883]'), true);
    assert.equal(isJson('["a", 12883'), false);
    assert.equal(isJson('["a, 12883]'), false);
    return assert.equal(isJson('["a, 12883]', true), true);
  });
});

describe("is/string/function", function() {
  var isFunctionStr;
  isFunctionStr = require('../src/is/string/function');
  it("should test anonymous function string", function() {
    isFunctionStr('function(){}').should.be.true;
    isFunctionStr('function() \t {\t;}\t').should.be.true;
    isFunctionStr(';function(a,b){}').should.be.true;
    return isFunctionStr('a;function(a,b){}').should.be.false;
  });
  return it("should test function string", function() {
    isFunctionStr('function abs(){}').should.be.true;
    return isFunctionStr('functionabs(){}').should.be.false;
  });
});
