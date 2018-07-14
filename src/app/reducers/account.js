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
    state.termsAccepted = true;
    break;
  case ActionTypes.PHONE_NUMBER_UPDATED:
    state.country = action.country;
    state.countryCode = action.countryCode;
    state.phoneNumber = action.phoneNumber;
    break;
  case ActionTypes.SMS_VERIFICATION_SENT:
    state.verificationStatus = 'pending';
    break;
  case ActionTypes.SMS_VERIFICATION_ACCEPTED:
    state.verificationStatus = 'verified';
    break;
  case ActionTypes.SMS_VERIFICATION_REJECTED:
    state.verificationStatus = 'rejected';
    break;
  default:
    break;
  }
  
  return state;
};

export default accountData;