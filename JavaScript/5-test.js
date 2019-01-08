'use strict';

const assert = require('assert');

const id = x => x;
const square = x => x * x;

const value = 10;

const result1 = square(value);
assert.notStrictEqual(value, result1);

// const result2 = id(value);
// assert.notStrictEqual(value, result2);
