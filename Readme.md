# is
  
  Simple type checking.

## Installation

    $ component install ianstormtaylor/is

## Example

```js
var is = require('is');

is.arguments(arguments);   // true
is.array([]);              // true
is.boolean(true);          // true
is.date(new Date);         // true
is.element(document.body); // true
is.function(function(){}); // true
is.null(null);             // true
is.number(42);             // true
is.object({});             // true
is.regexp(/[A-Za-z0-9]+/); // true
is.string('A');            // true
is.undefined(undefined);   // true
is.empty([]);              // true
is.empty({});              // true
is.empty(0);               // true
is.empty("");              // true
is.empty(null);            // true
```

## License

  MIT
