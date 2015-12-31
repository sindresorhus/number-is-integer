'use strict';
const test = require('ava');
Number.isInteger = undefined;
const fn = require('./');

test(t => {
	t.true(fn(0));
	t.true(fn(-0));
	t.true(fn(1));
	t.true(fn(5034));
	t.true(fn(-5034));
	t.true(fn(9007199254740991));
	t.true(fn(-9007199254740991));
	t.true(fn(1.0));
	t.false(fn(1.1));
	t.false(fn(NaN));
	t.false(fn(Infinity));
	t.false(fn(-Infinity));
	t.false(fn(null));
	t.false(fn(undefined));
});
