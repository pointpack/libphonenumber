goog.require('i18n.phonenumbers.PhoneNumberFormat');
goog.require('i18n.phonenumbers.PhoneNumberUtil');
goog.require('i18n.phonenumbers.PhoneNumberType');
goog.require('i18n.phonenumbers.PhoneNumberUtil.ValidationResult');

var PhoneNumberFormat = {
    'E164': i18n.phonenumbers.PhoneNumberFormat.E164,
    'INTERNATIONAL': i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL,
    'NATIONAL': i18n.phonenumbers.PhoneNumberFormat.NATIONAL,
    'RFC3966': i18n.phonenumbers.PhoneNumberFormat.RFC3966
};

var PhoneNumberType = {
    'FIXED_LINE': i18n.phonenumbers.PhoneNumberType.FIXED_LINE,
    'MOBILE': i18n.phonenumbers.PhoneNumberType.MOBILE,
    'FIXED_LINE_OR_MOBILE': i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE,
    'TOLL_FREE': i18n.phonenumbers.PhoneNumberType.TOLL_FREE,
    'PREMIUM_RATE': i18n.phonenumbers.PhoneNumberType.PREMIUM_RATE,
    'SHARED_COST': i18n.phonenumbers.PhoneNumberType.SHARED_COST,
    'VOIP': i18n.phonenumbers.PhoneNumberType.VOIP,
    'PERSONAL_NUMBER': i18n.phonenumbers.PhoneNumberType.PERSONAL_NUMBER,
    'PAGER': i18n.phonenumbers.PhoneNumberType.PAGER,
    'UAN': i18n.phonenumbers.PhoneNumberType.UAN,
    'VOICEMAIL': i18n.phonenumbers.PhoneNumberType.VOICEMAIL,
    'UNKNOWN': i18n.phonenumbers.PhoneNumberType.UNKNOWN
};

var ValidationResult = {
    'IS_POSSIBLE': i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE,
    'INVALID_COUNTRY_CODE': i18n.phonenumbers.PhoneNumberUtil.ValidationResult.INVALID_COUNTRY_CODE,
    'TOO_SHORT': i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT,
    'TOO_LONG': i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_LONG
};


var PhoneNumberUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();

function parse(phoneNumber, countryCode) {
    return PhoneNumberUtil.parse(phoneNumber, countryCode);
}

function parseAndKeepRawInput(phoneNumber, countryCode) {
    return PhoneNumberUtil.parseAndKeepRawInput(phoneNumber, countryCode);
}

function format(phoneNumberObject, phoneNumberFormat) {
    return PhoneNumberUtil.format(phoneNumberObject, phoneNumberFormat);
}

function formatInOriginalFormat(phoneNumberObject, regionCallingFrom) {
    return PhoneNumberUtil.formatInOriginalFormat(phoneNumberObject, regionCallingFrom);
}

function formatOutOfCountryCallingNumber(phoneNumberObject, regionCallingFrom) {
    return PhoneNumberUtil.formatOutOfCountryCallingNumber(phoneNumberObject, regionCallingFrom);
}

function isPossibleNumber(phoneNumberObject) {
    return PhoneNumberUtil.isPossibleNumber(phoneNumberObject)
}

function isPossibleNumberWithReason(phoneNumberObject) {
    return PhoneNumberUtil.isPossibleNumberWithReason(phoneNumberObject)
}

function isValidNumber(phoneNumberObject) {
    return PhoneNumberUtil.isValidNumber(phoneNumberObject);
}

function isValidNumberForRegion(phoneNumberObject, countryCode) {
    return PhoneNumberUtil.isValidNumberForRegion(phoneNumberObject, countryCode);
}

function getRawInputForNumber(phoneNumberObject) {
    return phoneNumberObject.getRawInput();
}

function getCountryCodeForNumber(phoneNumberObject) {
    return phoneNumberObject.getCountryCode();
}

function getRegionCodeForNumber(phoneNumberObject) {
    return PhoneNumberUtil.getRegionCodeForNumber(phoneNumberObject);
}

function getNationalNumber(phoneNumberObject) {
    return phoneNumberObject.getNationalNumber();
}

function getNationalSignificantNumber(phoneNumberObject) {
    return PhoneNumberUtil.getNationalSignificantNumber(phoneNumberObject)
}

function getNumberType(phoneNumberObject) {
    return PhoneNumberUtil.getNumberType(phoneNumberObject);
}

goog.exportSymbol('LibPhoneNumber.PhoneNumberFormat', PhoneNumberFormat);
goog.exportSymbol('LibPhoneNumber.PhoneNumberType', PhoneNumberType);
goog.exportSymbol('LibPhoneNumber.ValidationResult', ValidationResult);

goog.exportSymbol('LibPhoneNumber.parse', parse);
goog.exportSymbol('LibPhoneNumber.parseAndKeepRawInput', parseAndKeepRawInput);
goog.exportSymbol('LibPhoneNumber.format', format);
goog.exportSymbol('LibPhoneNumber.formatInOriginalFormat', formatInOriginalFormat);
goog.exportSymbol('LibPhoneNumber.formatOutOfCountryCallingNumber', formatOutOfCountryCallingNumber);
goog.exportSymbol('LibPhoneNumber.isPossibleNumber', isPossibleNumber);
goog.exportSymbol('LibPhoneNumber.isPossibleNumberWithReason', isPossibleNumberWithReason);
goog.exportSymbol('LibPhoneNumber.isValidNumber', isValidNumber);
goog.exportSymbol('LibPhoneNumber.isValidNumberForRegion', isValidNumberForRegion);
goog.exportSymbol('LibPhoneNumber.getNumberRawInput', getRawInputForNumber);
goog.exportSymbol('LibPhoneNumber.getNumberCountryCode', getCountryCodeForNumber);
goog.exportSymbol('LibPhoneNumber.getRegionCodeForNumber', getRegionCodeForNumber);
goog.exportSymbol('LibPhoneNumber.getNationalNumber', getNationalNumber);
goog.exportSymbol('LibPhoneNumber.getNationalSignificantNumber', getNationalSignificantNumber);
goog.exportSymbol('LibPhoneNumber.getNumberType', getNumberType);