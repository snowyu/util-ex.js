import sinonChai from "sinon-chai";
import sinon from "sinon";
import chai from "chai";
var assert = chai.assert;
var should = chai.should();
chai.use(sinonChai);

import injectMethods from "../src/injectMethods";

describe("injectMethods", function () {
  it("should inject methods to an object", function () {
    var Test, newExec, newRun, orgExec, orgRun, t;
    orgExec = sinon.spy();
    orgRun = sinon.spy();
    Test = function () {
      class Test {}
      ;
      Test.prototype.exec = orgExec;
      Test.prototype.run = orgRun;
      return Test;
    }.call(this);
    newExec = sinon.spy(function (a, b) {
      this.super("hi", 1);
      return this.self.should.be.equal(t);
    });
    newRun = sinon.spy(function (a, b) {
      this.super("my", 2);
      return this.self.should.be.equal(t);
    });
    injectMethods(Test.prototype, {
      'exec': newExec,
      'run': newRun
    });
    t = new Test();
    t.exec(1, 2);
    orgExec.should.have.been.calledOnce;
    orgExec.should.have.been.calledWith('hi', 1);
    newExec.should.have.been.calledOnce;
    newExec.should.have.been.calledWith(1, 2);
    t.run(4, 5);
    orgRun.should.have.been.calledOnce;
    orgRun.should.have.been.calledWith('my', 2);
    newRun.should.have.been.calledOnce;
    return newRun.should.have.been.calledWith(4, 5);
  });
  it("should inject new methods to an object", function () {
    var Test, newExec, newRun, t;
    Test = class Test {};
    newExec = sinon.spy(function (a, b) {
      should.not.exist(this.super);
      return this.should.be.equal(t);
    });
    newRun = sinon.spy(function (a, b) {
      should.not.exist(this.super);
      return this.should.be.equal(t);
    });
    injectMethods(Test.prototype, {
      'exec': newExec,
      'run': newRun
    });
    Test.prototype.exec.should.be.equal(newExec);
    Test.prototype.run.should.be.equal(newRun);
    t = new Test();
    t.exec(1, 2);
    newExec.should.have.been.calledOnce;
    newExec.should.have.been.calledWith(1, 2);
    t.run(4, 5);
    newRun.should.have.been.calledOnce;
    return newRun.should.have.been.calledWith(4, 5);
  });
  it("should inject (class) methods to an object", function () {
    var Test, newExec, newRun, orgExec, orgRun;
    orgExec = sinon.spy();
    orgRun = sinon.spy();
    Test = function () {
      class Test {}
      ;
      Test.exec = orgExec;
      Test.run = orgRun;
      return Test;
    }.call(this);
    newExec = sinon.spy(function (a, b) {
      return this.super("hi", 1);
    });
    newRun = sinon.spy(function (a, b) {
      return this.super("my", 2);
    });
    injectMethods(Test, {
      'exec': newExec,
      'run': newRun
    });
    Test.exec(1, 2);
    orgExec.should.have.been.calledOnce;
    orgExec.should.have.been.calledWith('hi', 1);
    newExec.should.have.been.calledOnce;
    newExec.should.have.been.calledWith(1, 2);
    Test.run(4, 5);
    orgRun.should.have.been.calledOnce;
    orgRun.should.have.been.calledWith('my', 2);
    newRun.should.have.been.calledOnce;
    return newRun.should.have.been.calledWith(4, 5);
  });
  return it("should replace class methods to an object", function () {
    var Test, newExec, newRun, orgExec, orgRun;
    orgExec = sinon.spy();
    orgRun = sinon.spy();
    Test = function () {
      class Test {}
      ;
      Test.exec = orgExec;
      Test.run = orgRun;
      return Test;
    }.call(this);
    newExec = sinon.spy(function (a, b) {
      return this.should.not.ownProperty('super');
    });
    newRun = sinon.spy(function (a, b) {
      return this.super("my", 2);
    });
    injectMethods(Test, {
      'exec': newExec,
      'run': newRun
    }, {
      replacedMethods: {
        'exec': true
      }
    });
    Test.exec(1, 2);
    orgExec.should.have.not.been.called;
    newExec.should.have.been.calledOnce;
    newExec.should.have.been.calledWith(1, 2);
    Test.run(4, 5);
    orgRun.should.have.been.calledOnce;
    orgRun.should.have.been.calledWith('my', 2);
    newRun.should.have.been.calledOnce;
    newRun.should.have.been.calledWith(4, 5);
  });
});
