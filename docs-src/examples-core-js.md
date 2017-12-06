---
title: Core JS
name: 2-core-js
category: Examples
hologram: true
---
## `Array.filter`

```js_example
import 'core-js/fn/array/filter';
[1, 2, 3].filter(a => a % 2 === 1);
// [1, 3]
```

## `Array.indexOf`

```js_example
import 'core-js/fn/array/index-of';
[1, 2, 3].indexOf(3) >= 0, [1, 2, 3].indexOf(0) >= 0;
// true, false
```

## `Array.isArray`

```js_example
import 'core-js/fn/array/is-array';
Array.isArray([]), Array.isArray({});
// true, false
```

## `Array.map`

```js_example
import 'core-js/fn/array/map';
[1, 2, 3].map(n => n * 2);
// [2, 4, 6]
```

## `Array.reduce`

```js_example
import 'core-js/fn/array/reduce';
[1, 2, 3].reduce((a, b) => a + b, 0));
// 6
```

## `Object.assign`

```js_example
import 'core-js/fn/object/assign';
Object.assign({ a: 1, b: 2 }, { c: 3 });
// { a: 1, b: 2, c: 3 }
```

## `Object.entries`

```js_example
import 'core-js/fn/array/map';
import 'core-js/fn/object/entries';
Object.entries({ a: 1, b: 2, c: 3 }).map(([key, value]) => value);
// [1, 2, 3]
```
