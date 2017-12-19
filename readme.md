# is-chinese-mobile-phone-number [![Build Status](https://travis-ci.org/Vic020/is-chinese-mobile-phone-number.svg?branch=master)](https://travis-ci.org/Vic020/is-chinese-mobile-phone-number)

> Check if a string is an Chinese mobile phone number

Vendors support:
- China Mobile(中国移动)
- China Unicom(中国联通)
- China Telecom(中国电信)
- MVNO(虚拟运营商)

## Install

```
$ npm install --save is-chinese-mobile-phone-number
```


## Usage

```js
const isPhoneNumber = require('is-chinese-mobile-phone-number');

isPhoneNumber("13912341234");
// true

isPhoneNumber.onlyChinaMobile("13912341234");
// true

isPhoneNumber.onlyChinaUnicom("18612341234");
// true

isPhoneNumber.onlyChinaTelecom("13312341234");
// true

isPhoneNumber.exceptSatellitePhone("13312341234");
// true

isPhoneNumber.exceptDataOnly("13312341234");
// true

isPhoneNumber.exceptMVNO("13312341234");
// true

isPhoneNumber.exceptMVNO("17112341234");
// false
```

## API
### isPhoneNumber(string)
Match all phone numbers

### isPhoneNumber.exceptMVNO(string)
Match all except MVNO phone numbers

### isPhoneNumber.exceptSatellitePhone(string)
Match all except satellite phone numbers

### isPhoneNumber.exceptDataOnly(string)
Match all except data-only phone numbers

### isPhoneNumber.onlyChinaMobile(string)
Match only China Mobile

### isPhoneNumber.onlyChinaTelecom(string)
Match only China Telecom

### isPhoneNumber.onlyChinaUnicom(string)
Match only China Unicom

## Regular expressions
[VincentSit/ChinaMobilePhoneNumberRegex](https://github.com/VincentSit/ChinaMobilePhoneNumberRegex)

## License

MIT © [Vic Yu](https://vicyu.com)

> Joke & Respect
