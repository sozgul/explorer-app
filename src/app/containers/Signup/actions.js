
import ActionTypes from '../../actions/types';

export function phoneNumberUpdated(phoneNumber, countryCode, country) {
  return {
    type: ActionTypes.PHONE_NUMBER_UPDATED,
    phoneNumber,
    countryCode,
    country
  };
}