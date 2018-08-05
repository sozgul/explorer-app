import ActionTypes from '../actions/types';
import {getCurrentTimestampSeconds} from '../utilities/time';

let initialState = {
  explorerAPIAccessToken: null,
  explorerAPIRefreshToken: null,
  explorerAPIAccessTokenIssuedAt: null
};

function updateExplorerAPICreds(state, newCreds = {}) {
  const {accessToken, refreshToken, accessTokenIssuedAt} = newCreds;
  const currentRefreshToken = state.explorerAPIRefreshToken;
  return {
    ...state,
    explorerAPIAccessToken: accessToken,
    explorerAPIRefreshToken: refreshToken || currentRefreshToken,
    explorerAPIAccessTokenIssuedAt: accessTokenIssuedAt
  };
}

const authData = (state = initialState, action = {}) => {
  switch(action.type) {
  case ActionTypes.AUTH_TOKENS_UPDATED:
  case ActionTypes.SMS_VERIFICATION_CODE_ACCEPTED:
    return updateExplorerAPICreds(state, {
      accessToken: action.accessToken,
      refreshToken: action.refreshToken,
      accessTokenIssuedAt: getCurrentTimestampSeconds()
    });
  default:
    break;
  }

  return state;
};

export default authData;
