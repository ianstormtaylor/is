describe('is-empty', function () {

var empty = require('..');

it('handles arrays', function () {
  empty([]).should.be.true;
  empty(['a', 'b']).should.be.false;
});

it('handles objects', function () {
  empty({}).should.be.true;
  empty({ a: 'b' }).should.be.false;
});

it('handles strings', function () {
  empty('').should.be.true;
  empty('string').should.be.false;
});

it('handles numbers', function () {
  empty(0).should.be.true;
  empty(42).should.be.false;
});

it('handles functions', function () {
  empty(function(){}).should.be.true;
  empty(function(a,b){}).should.be.false;
});

it('handles nulls', function () {
  empty(null).should.be.true;
  empty(undefined).should.be.true;
});

});