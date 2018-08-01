import ActionTypes from '../actions/types';

let initialState = {
  API_AUTH_ACCESS_TOKEN: null,
  API_AUTH_REFRESH_TOKEN: null
};

const authData = (state = initialState, action = {}) => {
  switch(action.type) {
  case ActionTypes.AUTH_TOKENS_UPDATED:
  case ActionTypes.SMS_VERIFICATION_CODE_ACCEPTED:
    return {
      ...state,
      API_AUTH_ACCESS_TOKEN: action.accessToken,
      API_AUTH_REFRESH_TOKEN: action.refreshToken
    };
  default:
    break;
  }

  return state;
};

export default authData;
