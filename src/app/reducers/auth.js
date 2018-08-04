import ActionTypes from '../actions/types';
import {getCurrentTimestampSeconds} from '../utilities/time';

let initialState = {
  credentials: {
    explorerAPI: {
      accessToken: null,
      refreshToken: null,
      accessTokenIssuedAt: null
    }
  }
};

function updateExplorerAPICreds(state, newCreds = {}) {
  const {accessToken, refreshToken, accessTokenIssuedAt} = newCreds;
  const currentRefreshToken = state.refreshToken;
  return {
    ...state,
    credentials: {
      ...state.credentials,
      explorerAPI: {
        ...state.credentials.explorerAPI,
        accessToken,
        refreshToken: refreshToken || currentRefreshToken, // only update refresh token if provided.
        accessTokenIssuedAt
      }
    }
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
