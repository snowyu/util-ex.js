// Generated by CoffeeScript 2.7.0
var assert, chai, injectMethod, should, sinon, sinonChai;

chai = require('chai');

sinon = require('sinon');

sinonChai = require('sinon-chai');

assert = chai.assert;

should = chai.should();

chai.use(sinonChai);

injectMethod = require('../src/injectMethod');

describe("injectMethod", function() {
  it("should inject method to an object", function() {
    var newExec, newRun, orgExec, orgRun, t;
    orgExec = sinon.spy(function() {
      return this.should.be.equal(t);
    });
    orgRun = sinon.spy(function() {
      return this.should.be.equal(t);
    });
    class Test {};

    Test.prototype.exec = orgExec;

    Test.prototype.run = orgRun;

    newExec = sinon.spy(function(a, b) {
      this.super("hi", 1);
      return this.self.should.be.equal(t);
    });
    newRun = sinon.spy(function(a, b) {
      this.super("my", 2);
      return this.self.should.be.equal(t);
    });
    injectMethod(Test.prototype, 'exec', newExec).should.be.true;
    t = new Test();
    t.exec(1, 2);
    orgExec.should.have.been.calledOnce;
    orgExec.should.have.been.calledWith('hi', 1);
    newExec.should.have.been.calledOnce;
    return newExec.should.have.been.calledWith(1, 2);
  });
  it("should inject new method to an object", function() {
    var Test, newExec, newRun, t;
    Test = class Test {};
    newExec = sinon.spy(function(a, b) {
      should.not.exist(this.super);
      return this.should.be.equal(t);
    });
    newRun = sinon.spy(function(a, b) {
      should.not.exist(this.super);
      return this.should.be.equal(t);
    });
    injectMethod(Test.prototype, 'exec', newExec).should.be.true;
    Test.prototype.exec.should.be.equal(newExec);
    t = new Test();
    t.exec(1, 2);
    newExec.should.have.been.calledOnce;
    return newExec.should.have.been.calledWith(1, 2);
  });
  it("should inject (class) method to an object", function() {
    var newExec, newRun, orgExec, orgRun;
    orgExec = sinon.spy();
    orgRun = sinon.spy();
    class Test {};

    Test.exec = orgExec;

    Test.run = orgRun;

    newExec = sinon.spy(function(a, b) {
      return this.super("hi", 1);
    });
    newRun = sinon.spy(function(a, b) {
      return this.super("my", 2);
    });
    injectMethod(Test, 'exec', newExec).should.be.true;
    Test.exec(1, 2);
    orgExec.should.have.been.calledOnce;
    orgExec.should.have.been.calledWith('hi', 1);
    newExec.should.have.been.calledOnce;
    return newExec.should.have.been.calledWith(1, 2);
  });
  it("should not inject method to a non-function attribute of an object", function() {
    var newExec;
    class Test {};

    Test.prototype.exec = 123;


    newExec = sinon.spy(function(a, b) {
      should.not.exist(this.super);
      return this.should.be.equal(t);
    });
    injectMethod(Test.prototype, 'exec', newExec).should.be.false;
    Test.prototype.exec.should.be.equal(123);
  });
});