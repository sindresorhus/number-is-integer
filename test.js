'use strict';
var test = require('ava');
Number.isInteger = undefined;
var isInteger = require('./');

test(function (t) {
	t.assert(isInteger(0));
	t.assert(isInteger(-0));
	t.assert(isInteger(1));
	t.assert(isInteger(5034));
	t.assert(isInteger(-5034));
	t.assert(isInteger(9007199254740991));
	t.assert(isInteger(-9007199254740991));
	t.assert(isInteger(1.0));
	t.assert(!isInteger(1.1));
	t.assert(!isInteger(NaN));
	t.assert(!isInteger(Infinity));
	t.assert(!isInteger(-Infinity));
	t.assert(!isInteger(null));
	t.assert(!isInteger(undefined));
	t.end();
});
