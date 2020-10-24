# is-chinese-mobile-phone-number [![Build Status](https://travis-ci.org/Vic020/is-chinese-mobile-phone-number.svg?branch=master)](https://travis-ci.org/Vic020/is-chinese-mobile-phone-number)

> Check if a string is an Chinese mobile phone number/IoT number/Data only number

Vendors support:
- China Mobile(中国移动)
- China Unicom(中国联通)
- China Telecom(中国电信)
- China Broadcast Network(中国广电)
- MVNO(虚拟运营商)
- Inmarsat

## Install

```
$ npm install --save is-chinese-mobile-phone-number
```

## Quick Usage
```js
// init
const isPhoneNumber = require('is-chinese-mobile-phone-number');

// make a phone number 
var phoneNumber = "13912341234"

// Match all numbers (Phone number + IoT number + Data only number)
isPhoneNumber(phoneNumber);
// true

```

## API

```js
// Match all numbers (Phone number + IoT number + Data only number)
isPhoneNumber(phoneNumber);

// Match all numbers with SMS (Phone number + Data only number)
isPhoneNumber.allSMSNumber(phoneNumber);

// Mobile phone number
// Match all
isPhoneNumber.allPhoneNumber(phoneNumber);
// Match China Mobile
isPhoneNumber.phoneNumberOnlyChinaMobile(phoneNumber);
// Match China Unicom
isPhoneNumber.phoneNumberOnlyChinaUnicom(phoneNumber);
// Match China Telecom
isPhoneNumber.phoneNumberOnlyChinaTelecom(phoneNumber);
// Match China Broadcast Network
isPhoneNumber.phoneNumberOnlyChinaBroadcastNetwork(phoneNumber);
// Match Inmarsat (Satellite Communications)
isPhoneNumber.phoneNumberOnlyInmarsat(phoneNumber);
//Match Emergency Communication Support Center of MIIT (Emergency communications)
isPhoneNumber.phoneNumberOnlyEmergency(phoneNumber);

// MVNO number
// Match all
isPhoneNumber.allMVNONumber(phoneNumber);
// Match China Mobile
isPhoneNumber.mvnoNumberOnlyChinaMobile(phoneNumber);
// Match China Unicom
isPhoneNumber.mvnoNumberOnlyChinaUnicom(phoneNumber);
// Match China Telecom
isPhoneNumber.mvnoNumberOnlyChinaTelecom(phoneNumber);

// IoT number
// Match all
isPhoneNumber.allIoTNumber(phoneNumber);
// Match China Mobile
isPhoneNumber.iotNumberOnlyChinaMobile(phoneNumber);
// Match China Unicom
isPhoneNumber.iotNumberOnlyChinaUnicom(phoneNumber);
// Match China Telecom
isPhoneNumber.iotNumberOnlyChinaTelecom(phoneNumber);

// Data only number
// Match all
isPhoneNumber.allDataOnlyNumber(phoneNumber);
// Match China Mobile
isPhoneNumber.dataOnlyNumberOnlyChinaMobile(phoneNumber);
// Match China Unicom
isPhoneNumber.dataOnlyNumberOnlyChinaUnicom(phoneNumber);
// Match China Telecom
isPhoneNumber.dataOnlyNumberOnlyChinaTelecom(phoneNumber);
```

## Regular expressions
[VincentSit/ChinaMobilePhoneNumberRegex](https://github.com/VincentSit/ChinaMobilePhoneNumberRegex)

## License

MIT © [Vic Yu](https://vicyu.com)
