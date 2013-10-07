# is-empty

  Check whether a value is empty.

## Installation
  
```
$ component install ianstormtaylor/is-empty
```
```
$ npm install is-empty
```

## Example

```js
var empty = require('is-empty');

empty([]);              // true
empty({});              // true
empty('');              // true
empty(0);               // true
empty(function(){});    // true
empty(null);            // true
empty(undefined);       // true

empty(['a', 'b']);      // false
empty({ a: 'b' });      // false
empty('string');        // false
empty(42);              // false
empty(function(a,b){}); // false
```

## API

### isEmpty(value)

  Check whether `value` is empty.

## License

  MIT
