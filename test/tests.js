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
  undefined: undefined,
  empty: []
};

var emptyObjects = [
  [],
  {},
  null,
  "",
  0
];

var notEmptyObjets = [
  [1,2],
  {test: "test"},
  "test",
  12542
];

for (var type in types) {
  var value = types[type];
  it('.'+type, function () {
    assert(is[type](value));
    for (var t in types) {
      if (t !== type) assert(!is[t](value));
    }
  });
}

for (var iObj in emptyObjects ) {
  var value = emptyObjects[iObj];
  it('.empty', function () {
    assert(is["empty"](value));
  });
}

for (var iObj in notEmptyObjets ) {
  var value = notEmptyObjets[iObj];
  it('.empty', function () {
    assert(!is["empty"](value));
  });
}

});