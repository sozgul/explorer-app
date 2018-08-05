import {getCurrentTimestampSeconds} from '../utilities/time';

export const EXPLORER_API_TOKEN_LIFESPAN = 24 * 60 * 60; // 1 day (86,400 seconds)
export const TOKEN_REFRESH_OFFSET = 60 * 60; // 1 hour (3600 seconds)

export const isLoggedInSelector = state => {
  const {
    explorerAPIRefreshToken: refreshToken,
    explorerAPIAccessToken: accessToken,
    explorerAPIAccessTokenIssuedAt: accessTokenIssuedAt
  } = state;
  const hasTokens = (accessToken && refreshToken);
  const now = getCurrentTimestampSeconds();

  return (hasTokens && ((accessTokenIssuedAt + EXPLORER_API_TOKEN_LIFESPAN) <= now)) ? true : false;
};

export const shouldRefreshExplorerAPITokenSelector = accessTokenIssuedAt => {
  const now = getCurrentTimestampSeconds();

  return ((accessTokenIssuedAt + EXPLORER_API_TOKEN_LIFESPAN - TOKEN_REFRESH_OFFSET) >= now) ? true : false;
};
