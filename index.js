'use strict';

const phoneNumberRegEx = /^1[34578]{1}\d{9}$/;

const phoneNumber = x => x && x.exact ?
    new RegExp(phoneNumberRegEx) :
    new RegExp(phoneNumberRegEx, 'g');

module.exports = x => phoneNumber({exact: true}).test(x);
