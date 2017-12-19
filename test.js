import test from 'ava';
import m from './';

test(t => {
	t.true(m('13912341234'));
	t.false(m('12345678901'));
});

