'use strict';

const allNumber = /^(?=\d{11}$)^1(?:3\d|4[57]|5[^4\D]|66|7[^249\D]|8\d|9[89])\d{8}$/;

const exceptMVNO = /^(?=\d{11}$)^1(?:3\d|4[57]|5[^4\D]|66|7[^01249\D]|8\d|9[89])\d{8}$/;

const exceptSatellitePhone = /^(?=\d{11}$)^1(?:3(?!49)\d|4[57]|5[^4\D]|66|7[^249\D]|8\d|9[89])\d{8}$/;

const exceptDataOnly = /^(?=\d{11}$)^1(?:3\d|5[^4\D]|66|7[^249\D]|8\d|9[89])\d{8}$/;

const onlyChinaMobile = /^(?=\d{11}$)^1(?:3(?!49)\d|4[57]|5[^4\D]|66|7[^249\D]|8\d|9[89])\d{8}$/;

const onlyChinaUnicom = /^(?=\d{11}$)^1(?:(?:3[0-2]|45|5[56]|66|7[156]|8[56])\d{8}$|(?:70[4789])\d{7}$)/;

const onlyChinaTelecom = /^(?=\d{11}$)^1(?:(?:33|49|53|7[37]|8[019]|99)\d{8}$|(?:349|70[0-2])\d{7}$)/;

const phoneNumber = x => x && x.exact ?
    new RegExp(x.regexp) :
    new RegExp(x.regexp, 'g');

const isPhoneNumber = x => phoneNumber({exact: true, regexp: allNumber}).test(x);
isPhoneNumber.exceptMVNO = x => phoneNumber({exact: true, regexp: exceptMVNO}).test(x);
isPhoneNumber.exceptSatellitePhone = x => phoneNumber({exact: true, regexp: exceptSatellitePhone}).test(x);
isPhoneNumber.exceptDataOnly = x => phoneNumber({exact: true, regexp: exceptDataOnly}).test(x);
isPhoneNumber.onlyChinaMobile = x => phoneNumber({exact: true, regexp: onlyChinaMobile}).test(x);
isPhoneNumber.onlyChinaUnicom = x => phoneNumber({exact: true, regexp: onlyChinaUnicom}).test(x);
isPhoneNumber.onlyChinaTelecom = x => phoneNumber({exact: true, regexp: onlyChinaTelecom}).test(x);

module.exports = isPhoneNumber;
