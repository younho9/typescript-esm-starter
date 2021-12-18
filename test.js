import test from 'ava';
import greet from './index.js';

test('greet()', t => {
	t.is(greet('username'), 'Hello username');
});
