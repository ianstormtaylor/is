describe('is', function () {

var assert = require('assert')
  , is = require('is')
  , isEmpty = require('is-empty');

var types = {
  arguments: arguments,
  array: [],
  boolean: true,
  date: new Date(),
  element: document.createElement('div'),
  function: function(){},
  null: null,
  number: 42,
  regexp: /a/,
  string: '',
  undefined: undefined
};

for (var type in types) {
  var value = types[type];
  it('.'+type, function () {
    assert(is[type](value));
    for (var t in types) {
      if (t !== type) assert(!is[t](value));
    }
  });
}

it('.fn', function () {
  assert(is.fn == is.function);
});

it('.empty', function () {
  assert(is.empty == isEmpty);
});

it('.nan', function () {
  assert(!is.nan(42));
  assert(!is.nan(null));
  assert(!is.nan(undefined));
  assert(is.nan(NaN));
});

});