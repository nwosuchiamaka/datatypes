describe("Data types tests ", function() {
  var chai = require('chai');
    var expect = chai.expect;
    var dataTypes= require('../app/datatypes.js')
  describe("Case for some falsy values", function() {

    it("should return 'no value' for null", function() {
      console.log(dataTypes(null))
      expect(dataTypes(null)).to.equal('no value');
    });

    it("should return 'no value' for undefined", function() {
      expect(dataTypes(undefined)).to.equal('no value');
    });

  });

  describe("Case for booleans", function() {

    it("should return true for `true`", function() {
      expect(dataTypes(true)).to.equal(true);
    });

    it("should return false for `false`", function() {
      expect(dataTypes(false)).to.equal(false);
    });

  });

  describe("Case for Numbers", function() {

    it("should return 'less than 100' for 44", function() {
      expect(dataTypes(44)).to.equal('less than 100');
    });

    it("should return 'more than 100' for 144", function() {
      expect(dataTypes(144)).to.equal('more than 100');
    });

    it("should return 'equal to 100' for 100", function() {
      expect(dataTypes(100)).to.equal('equal to 100');
    });


  });

  describe("Case for Strings", function() {

    it("should return the length of `tergiversate`", function() {
      expect(dataTypes('tergiversate')).to.equal(12);
    });

    it("should return the length of an empty string", function() {
      expect(dataTypes('')).to.equal(0);
    });

    it("should return the length of `555`", function() {
      expect(dataTypes('555')).to.equal(3);
    });

  });

  describe("Case for arrays", function() {

    it("should return `2` for `[0, 1, 2]`", function() {
      expect(dataTypes([0, 1, 2])).to.equal(2);
    });

    it("should return `undefined` for `[]`", function() {
      expect(dataTypes([])).to.be.undefined;
    });

    it("should return `undefined` for `[4, 9]`", function() {
      expect(dataTypes([4, 9])).to.be.undefined;
    });

  });


  describe("Case for functions", function() {

    it("should call the `callback` function with argument true, and return `called callback`", function() {
      var callback = function(arg) {
        expect(arg).to.equal(true);
        if(arg === true) {
          return 'called callback';
        }
      };
      expect(dataTypes(callback)).to.equal('called callback');
    });

  });

});