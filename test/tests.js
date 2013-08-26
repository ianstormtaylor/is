describe('is', function () {

var assert = require('assert')
  , is = require('is');

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

});