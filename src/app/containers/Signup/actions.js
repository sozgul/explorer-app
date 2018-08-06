
import ActionTypes from '../../actions/types';
import APIClient from '../../api/api';

export function requestSMSCode({phoneNumber, countryCode, country}) {
  return function(dispatch) {
    return APIClient.verifyPhoneNumber({
      phoneNumber,
      countryCode,
      country
    }).then(() => {
      dispatch({
        type: ActionTypes.SMS_VERIFICATION_SENT
      });
    }).catch(error => {
      dispatch({
        type: ActionTypes.SMS_VERIFICATION_SEND_FAILURE,
        error
      });
    });
  };
}

export function sendSMSCode({phoneNumber, countryCode, country, smsCode}) {
  return function(dispatch) {
    return APIClient.verifySMSToken({
      phoneNumber,
      countryCode,
      country,
      smsCode
    }).then((response = {}) => {
      const {data = {}} = response;
      const {userid, accessToken, refreshToken} = data;
      return dispatch(smsVerificationAccepted({
        userId: userid,
        accessToken,
        refreshToken
      }));
    }).catch(error => {
      return dispatch(smsVerificationRejected({error}));
    });
  };
}

export function phoneNumberUpdated(phoneNumber, countryCode, country) {
  return {
    type: ActionTypes.PHONE_NUMBER_UPDATED,
    phoneNumber,
    countryCode,
    country
  };
}

export function smsVerificationAccepted({userId, accessToken, refreshToken}) {
  return {
    type: ActionTypes.SMS_VERIFICATION_CODE_ACCEPTED,
    userId,
    accessToken,
    refreshToken
  };
}

export function smsVerificationRejected({error}) {
  return {
    type: ActionTypes.SMS_VERIFICATION_CODE_REJECTED,
    error
  };
}
