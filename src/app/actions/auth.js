
import APIClient from '../api/api';
import ActionTypes from './types';

export function updateAPIAccessToken({userId, refreshToken}) {
  return function(dispatch) {
    return APIClient.updateAPIToken({userId, refreshToken}).then(token => {
      dispatch({
        type: ActionTypes.AUTH_TOKENS_UPDATED,
        accessToken: token
      });
    }).catch(error => {
      dispatch(apiAccessTokenUpdateFailed(error));
    });
  };
}

export function apiAccessTokenUpdateFailed(error) {
  return {
    type: ActionTypes.AUTH_TOKEN_UPDATE_FAILED,
    error
  };
}