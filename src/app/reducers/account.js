import ActionTypes from '../actions/types';

let initialState = {
  userId: null,
  country: null,
  countryCode: null,
  phoneNumber: null,
  verificationStatus: null,
  termsAccepted: false
};

const accountData = (state = initialState, action = {}) => {
  switch(action.type) {
  case ActionTypes.USER_ACCEPTED_TERMS:
    return { ...state, termsAccepted:true };
  case ActionTypes.PHONE_NUMBER_UPDATED:
    return { ...state, country: action.country, countryCode: action.countryCode, phoneNumber: action.phoneNumber };
  case ActionTypes.SMS_VERIFICATION_SENT:
    return { ...state, verificationStatus:'pending' };
  case ActionTypes.SMS_VERIFICATION_ACCEPTED:
    return { ...state, verificationStatus:'verified' };
  case ActionTypes.SMS_VERIFICATION_REJECTED:
    return { ...state, verificationStatus: 'rejected' };
  case ActionTypes.PROFILE_UPDATED:
    return { ...state, phoneNumber: action.phoneNumber };
  default:
    break;
  }

  return state;
};

export default accountData;
