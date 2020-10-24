const test = require('ava');
const m = require('.');

test('all', t => {
	t.true(m('13912341234'));
	t.false(m('12345678901'));
	t.true(m.allSMSNumber('13912312312'));
	t.true(m.phoneNumberOnlyChinaMobile('13912341234'));
	t.true(m.phoneNumberOnlyChinaUnicom('18612341234'));
	t.true(m.phoneNumberOnlyChinaTelecom('13312341234'));
	t.true(m.phoneNumberOnlyChinaBroadcastNetwork('19212341234'));
	t.true(m.phoneNumberOnlyInmarsat('17492341234'));
	t.false(m.phoneNumberOnlyInmarsat('13312341234'));
	t.true(m.phoneNumberOnlyEmergency('17412341234'));
	t.false(m.phoneNumberOnlyEmergency('13312341234'));
});

test('mvno', t => {
	t.true(m.allMVNONumber('17012312312'));
	t.false(m.allMVNONumber('13912312312'));
	t.true(m.mvnoNumberOnlyChinaMobile('16512341234'));
	t.false(m.mvnoNumberOnlyChinaMobile('13912341234'));
	t.true(m.mvnoNumberOnlyChinaUnicom('17042341234'));
	t.false(m.mvnoNumberOnlyChinaUnicom('18612341234'));
	t.true(m.mvnoNumberOnlyChinaTelecom('17012341234'));
	t.false(m.mvnoNumberOnlyChinaTelecom('13312341234'));
});

test('iot', t => {
	t.true(m.allIoTNumber('1410123412341'));
	t.false(m.allIoTNumber('13912312312'));
	t.true(m.iotNumberOnlyChinaMobile('1440123412341'));
	t.false(m.iotNumberOnlyChinaMobile('13912341234'));
	t.true(m.iotNumberOnlyChinaUnicom('1460123412341'));
	t.false(m.iotNumberOnlyChinaMobile('18612341234'));
	t.true(m.iotNumberOnlyChinaTelecom('1410123412341'));
	t.false(m.iotNumberOnlyChinaMobile('13312341234'));
});

test('data only', t => {
	t.true(m.allDataOnlyumber('14512312312'));
	t.false(m.allDataOnlyumber('13912312312'));
	t.true(m.dataOnlyNumberOnlyChinaMobile('14712341234'));
	t.true(m.dataOnlyNumberOnlyChinaUnicom('14512341234'));
	t.true(m.dataOnlyNumberOnlyChinaTelecom('14912341234'));
});
