
import ActionTypes from '../../actions/types';

export function phoneNumberUpdated(phoneNumber, countryCode, country) {
  return {
    type: ActionTypes.PHONE_NUMBER_UPDATED,
    phoneNumber,
    countryCode,
    country
  };
}

export function smsVerificationAccepted() {
  return {
    type: ActionTypes.SMS_VERIFICATION_CODE_ACCEPTED
  };
}