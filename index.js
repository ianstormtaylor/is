
var typeOf = require('type');


/**
 * Types.
 */

var types = [
  'arguments',
  'array',
  'boolean',
  'date',
  'element',
  'function',
  'null',
  'number',
  'object',
  'regexp',
  'string',
  'undefined',
  'empty'
];


/**
 * Expose type checkers.
 *
 * @param {Mixed} value
 * @return {Boolean}
 */

for (var i = 0, type; type = types[i]; i++) exports[type] = generate(type);


/**
 * Generate a type checker.
 *
 * @param {String} type
 * @return {Function}
 */

function generate (type) {
  if( type != "empty" ) {
    return function (value) {
      return type === typeOf(value);
    };
  } else {
    return function(value) {
      if( obj == null ) return true;
      if( obj.length && obj.length > 0 ) return false;
      if( obj.length === 0 ) return true;

      for( var key in obj ) {
          if( hasOwnProperty.call(obj, key) ) return false;
      }

      if( value === "" ) return true;

      return true;
    }
  }
}