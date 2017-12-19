import test from 'ava';
import m from './';

test(t => {
	t.true(m('13912341234'));
	t.false(m('12345678901'));
	t.true(m.onlyChinaMobile('13912341234'));
	t.true(m.onlyChinaUnicom('18612341234'));
	t.true(m.onlyChinaTelecom('13312341234'));
	t.true(m.exceptSatellitePhone('13312341234'));
	t.true(m.exceptDataOnly('13312341234'));
	t.true(m.exceptMVNO('13312341234'));
	t.false(m.exceptMVNO('17112341234'));
});

