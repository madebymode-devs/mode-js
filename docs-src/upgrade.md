---
title: Upgrade
name: upgrade
category: Install
hologram: true
---

## Migrating from [mode-front-end 2.11.1](https://github.com/madebymode/mode-front-end/tree/v2.11.1) to lata 0.1.x

### `array/filter` → [`core-js/library/fn/array/filter`](https://github.com/zloirock/core-js#ecmascript-6-array)

Before:

```js_example
const filter = require('mode-front-end/resources/assets/js/array/filter');
console.log(filter([1, 2, 3], (a) => a % 2 === 1)); // [1, 3]
```

After:

```js_example
// Without overriding global Array.prototype
import filter from 'core-js/library/fn/array/filter';
console.log(filter([1, 2, 3], (a) => a % 2 === 1)); // [1, 3]

// Overriding global Array.prototype
import 'core-js/fn/array/filter';
console.log([1, 2, 3].filter(a => a % 2 === 1)); // [1, 3]
```

### `array/inArray` → [`core-js/library/fn/array/index-of`](https://github.com/zloirock/core-js#ecmascript-6-array)

Before:

```js_example
const inArray = require('mode-front-end/resources/assets/js/array/inArray');
console.log(inArray([1, 2, 3], 3), inArray([1, 2, 3], 0)); // true, false
```

After:

```js_example
// Without overriding global Array.prototype
import indexOf from 'core-js/library/fn/array/index-of';
const inArray = (arr, val) => arr.indexOf(val) >= 0;
console.log(inArray([1, 2, 3], 3), inArray([1, 2, 3], 0)); // true, false

// Overriding global Array.prototype
import 'core-js/fn/array/index-of';
console.log([1, 2, 3].indexOf(3) >= 0, [1, 2, 3].indexOf(0) >= 0); // true, false
```

### `array/isArray` → [`core-js/library/fn/array/is-array`](https://github.com/zloirock/core-js#ecmascript-6-array)

Before:

```js_example
const isArray = require('mode-front-end/resources/assets/js/array/isArray');
console.log(isArray([]), isArray({})); // true, false
```

After:

```js_example
// Without overriding global Array.prototype
import isArray from 'core-js/library/fn/array/is-array';
console.log(isArray([]), isArray({})); // true, false

// Overriding global Array.prototype
import 'core-js/fn/array/is-array';
console.log(Array.isArray([]), Array.isArray({})); // true, false
```

### `array/map` → [`core-js/library/fn/array/map`](https://github.com/zloirock/core-js#ecmascript-6-array)

Before:

```js_example
const map = require('mode-front-end/resources/assets/js/array/map');
console.log(map([1, 2, 3], n => n * 2)); // [2, 4, 6]
```

After:

```js_example
// Without overriding global Array.prototype
import map from 'core-js/library/fn/array/map';
console.log(map([1, 2, 3], n => n * 2)); // [2, 4, 6]

// Overriding global Array.prototype
import 'core-js/fn/array/map';
console.log([1, 2, 3].map(n => n * 2)); // [2, 4, 6]
```

### `array/mapObj` → [`core-js/library/fn/object/entries`](https://github.com/zloirock/core-js#ecmascript-7-proposals)

Before:

```js_example
const mapObj = require('mode-front-end/resources/assets/js/array/mapObj');
console.log(mapObj({ a: 1, b: 2, c: 3 }, (value, key) => value)); // [1, 2, 3]
```

After:

```js_example
// Without overriding global Array.prototype
import map from 'core-js/library/fn/array/map';
import entries from 'core-js/library/fn/object/entries';
const mapObj = (obj, fn) => map(entries(obj), ([key, value]) => fn(value, key));
console.log(mapObj({ a: 1, b: 2, c: 3 }, (value, key) => value)); // [1, 2, 3]

// Overriding global Array.prototype
import 'core-js/fn/array/map';
import 'core-js/fn/object/entries';
console.log(Object.entries({ a: 1, b: 2, c: 3 }).map(([key, value]) => value)); // [1, 2, 3]
```

### `array/reduce` → [`core-js/library/fn/array/reduce`](https://github.com/zloirock/core-js#ecmascript-6-array)

Before:

```js_example
const reduce = require('mode-front-end/resources/assets/js/array/reduce');
console.log(reduce([1, 2, 3], (a, b) => a + b, 0)); // 6
```

After:

```js_example
// Without overriding global Array.prototype
import reduce from 'core-js/library/fn/array/reduce';
console.log(reduce([1, 2, 3], (a, b) => a + b, 0)); // 6

// Overriding global Array.prototype
import 'core-js/fn/array/reduce';
console.log([1, 2, 3].reduce((a, b) => a + b, 0)); // 6
```

### `object/extend` → [`core-js/library/fn/object/assign`](https://github.com/zloirock/core-js#ecmascript-6-object)

Before:

```js_example
const extend = require('mode-front-end/resources/assets/js/object/extend');
console.log(extend({ a: 1, b: 2 }, { c: 3 })); // { a: 1, b: 2, c: 3 }
```

After:

```js_example
// Without overriding global Array.prototype
import extend from 'core-js/library/fn/object/assign';
console.log(extend({ a: 1, b: 2 }, { c: 3 })); // { a: 1, b: 2, c: 3 }

// Overriding global Array.prototype
import 'core-js/fn/object/assign';
console.log(Object.assign({ a: 1, b: 2 }, { c: 3 })); // { a: 1, b: 2, c: 3 }
```
