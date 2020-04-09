export const Patterns = {
    alphanumericAtLeastOneCharacter: /^\d*[a-zA-Z áÁ éÉ íÍ óÓ úÚ ,. ñÑ][a-zA-Z ñÑ0-9]*$/,
    alphanumericAtLeastOneNumber: /^(?=.*\d)[a-zA-Z áÁ éÉ íÍ óÓ úÚ ,. ñÑ\d]{1,}$/,
    lettersAndNumbers: '^[a-zA-Z0-9 ñÑ]*$',
    notOnlySpecialCharacters: /^[^a-zA-Z0-9]+$/,
    onlyLetters: '^[a-zA-Z áÁ éÉ íÍ óÓ úÚ ñÑ ,.]+',
    onlyNumbers: '[0-9]+(\.[0-9][0-9]?)?',
    zeroToNinetyNine: '^([0-9][0-9]?|)$',
    zeroToNineHundredAndNinetyNine: '^([0-9][0-9]?[0-9]?|)$',
    twoDecimalPlaces: /^\d*\.?\d{0,2}$/g,
    datepickerPattern: '^(0?[1-9]|1[0-2])/(0?[1-9]|1[0-9]|2[0-9]|3[01])/\d{4}$',
    phoneNumber: '^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$',
    zipCode: '^[0-9]{5}(?:-[0-9]{4})?$',
    zipCodeTenDigits: '^[0-9]{5}(?:-[0-9]{5})?$',
    coordinates: '^[0-9,.]*$'
};
