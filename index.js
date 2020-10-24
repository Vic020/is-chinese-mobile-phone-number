'use strict';

// Match all numbers (Phone number + IoT number + Data only number)
const allNumber = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4(?:(?:10|4[01])\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$/;

// Match all numbers with SMS (Phone number + Data only number)
const allSMSNumber = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4[579]\d{2})\d{6}$/;

// Mobile phone number
// Match all
const allPhoneNumber = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/;
// Match China Mobile
const phoneNumberOnlyChinaMobile = /^(?:\+?86)?1(?:3(?:4[^9\D]|[5-9]\d)|5[^3-6\D]\d|7[28]\d|8[23478]\d|9[578]\d)\d{7}$/;
// Match China Unicom
const phoneNumberOnlyChinaUnicom = /^(?:\+?86)?1(?:3[0-2]|[578][56]|66|96)\d{8}$/;
// Match China Telecom
const phoneNumberOnlyChinaTelecom = /^(?:\+?86)?1(?:3(?:3\d|49)\d|53\d{2}|8[019]\d{2}|7(?:[37]\d{2}|40[0-5])|9[0139]\d{2})\d{6}$/;
// Match China Broadcast Network
const phoneNumberOnlyChinaBroadcastNetwork = /^(?:\+?86)?192\d{8}$/;
// Match Inmarsat (Satellite Communications)
const phoneNumberOnlyInmarsat = /^(?:\+?86)?1749\d{7}$/;
//Match Emergency Communication Support Center of MIIT (Emergency communications)
const phoneNumberOnlyEmergency = /^(?:\+?86)?174(?:0[6-9]|1[0-2])\d{6}$/;

// MVNO number
// Match all
const allMVNONumber = /^(?:\+?86)?1(?:7[01]|6[257])\d{8}$/;
// Match China Mobile
const mvnoNumberOnlyChinaMobile = /^(?:\+?86)?1(?:65\d|70[356])\d{7}$/;
// Match China Unicom
const mvnoNumberOnlyChinaUnicom = /^(?:\+?86)?1(?:70[4789]|71\d|67\d)\d{7}$/;
// Match China Telecom
const mvnoNumberOnlyChinaTelecom = /^(?:\+?86)?1(?:70[012]|62\d)\d{7}$/;

// IoT number
// Match all
const allIoTNumber = /^(?:\+?86)?14(?:[14]0|41|[68]\d)\d{9}$/;
// Match China Mobile
const iotNumberOnlyChinaMobile = /^(?:\+?86)?14(?:4[01]|8\d)\d{9}$/;
// Match China Unicom
const iotNumberOnlyChinaUnicom = /^(?:\+?86)?146\d{10}$/;
// Match China Telecom
const iotNumberOnlyChinaTelecom = /^(?:\+?86)?1410\d{9}$/;

// Data only number
// Match all
const allDataOnlyNumber = /^(?:\+?86)?14[579]\d{8}$/;
// Match China Mobile
const dataOnlyNumberOnlyChinaMobile = /^(?:\+?86)?147\d{8}$/;
// Match China Unicom
const dataOnlyNumberOnlyChinaUnicom = /^(?:\+?86)?145\d{8}$/;
// Match China Telecom
const dataOnlyNumberOnlyChinaTelecom = /^(?:\+?86)?149\d{8}$/;

const phoneNumber = x => x && x.exact ?
    new RegExp(x.regexp) :
    new RegExp(x.regexp, 'g');

const isPhoneNumber = x => phoneNumber({ exact: true, regexp: allNumber }).test(x);

isPhoneNumber.allSMSNumber = x => phoneNumber({ exact: true, regexp: allSMSNumber }).test(x);
isPhoneNumber.allPhoneNumber = x => phoneNumber({ exact: true, regexp: allPhoneNumber }).test(x);
isPhoneNumber.phoneNumberOnlyChinaMobile = x => phoneNumber({ exact: true, regexp: phoneNumberOnlyChinaMobile }).test(x);
isPhoneNumber.phoneNumberOnlyChinaUnicom = x => phoneNumber({ exact: true, regexp: phoneNumberOnlyChinaUnicom }).test(x);
isPhoneNumber.phoneNumberOnlyChinaTelecom = x => phoneNumber({ exact: true, regexp: phoneNumberOnlyChinaTelecom }).test(x);
isPhoneNumber.phoneNumberOnlyChinaBroadcastNetwork = x => phoneNumber({ exact: true, regexp: phoneNumberOnlyChinaBroadcastNetwork }).test(x);
isPhoneNumber.phoneNumberOnlyInmarsat = x => phoneNumber({ exact: true, regexp: phoneNumberOnlyInmarsat }).test(x);
isPhoneNumber.phoneNumberOnlyEmergency = x => phoneNumber({ exact: true, regexp: phoneNumberOnlyEmergency }).test(x);

isPhoneNumber.allMVNONumber = x => phoneNumber({ exact: true, regexp: allMVNONumber }).test(x);
isPhoneNumber.mvnoNumberOnlyChinaMobil = x => phoneNumber({ exact: true, regexp: mvnoNumberOnlyChinaMobil }).test(x);
isPhoneNumber.mvnoNumberOnlyChinaUnicom = x => phoneNumber({ exact: true, regexp: mvnoNumberOnlyChinaUnicom }).test(x);
isPhoneNumber.mvnoNumberOnlyChinaTelecom = x => phoneNumber({ exact: true, regexp: mvnoNumberOnlyChinaTelecom }).test(x);

isPhoneNumber.allIoTNumbe = x => phoneNumber({ exact: true, regexp: allIoTNumbe }).test(x);
isPhoneNumber.iotNumberOnyChinaMobile = x => phoneNumber({ exact: true, regexp: iotNumberOnyChinaMobile }).test(x);
isPhoneNumber.iotNumberOnyChinaUnicom = x => phoneNumber({ exact: true, regexp: iotNumberOnyChinaUnicom }).test(x);
isPhoneNumber.iotNumberOnyChinaTelecom = x => phoneNumber({ exact: true, regexp: iotNumberOnyChinaTelecom }).test(x);

isPhoneNumber.allDataOnlyumber = x => phoneNumber({ exact: true, regexp: allDataOnlyumber }).test(x);
isPhoneNumber.dataOnlyNumerOnlyChinaMobile = x => phoneNumber({ exact: true, regexp: dataOnlyNumerOnlyChinaMobile }).test(x);
isPhoneNumber.dataOnlyNumerOnlyChinaUnicom = x => phoneNumber({ exact: true, regexp: dataOnlyNumerOnlyChinaUnicom }).test(x);
isPhoneNumber.dataOnlyNumerOnlyChinaTelecom = x => phoneNumber({ exact: true, regexp: dataOnlyNumerOnlyChinaTelecom }).test(x);

export default isPhoneNumber;