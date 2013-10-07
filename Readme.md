# is
  
  Simple type checking.

## Installation

    $ component install ianstormtaylor/is
    $ npm install ianstormtaylor/is

## Example

```js
var is = require('is');

is.arguments(arguments);   // true
is.array([]);              // true
is.boolean(true);          // true
is.date(new Date);         // true
is.element(document.body); // true
is.function(function(){}); // true
is.fn(function(){});       // true
is.null(null);             // true
is.number(42);             // true
is.object({});             // true
is.regexp(/[A-Za-z0-9]+/); // true
is.string('A');            // true
is.undefined(undefined);   // true
is.empty([]);              // true
```

_Note: If you need old browser support, use `.fn` instead of `.function`._

## License

  MIT
