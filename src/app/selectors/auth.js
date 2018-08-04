import { createSelector } from 'reselect';
import {getCurrentTimestampSeconds} from '../utilities/time';

export const EXPLORER_API_TOKEN_LIFESPAN = 24 * 60 * 60; // 1 day (86,400 seconds)
export const TOKEN_REFRESH_OFFSET = 60 * 60; // 1 hour (3600 seconds)

const explorerAPICredsSelector = state => state.credentials.explorerAPI;
const explorerAPIAccessTokenSelector = createSelector(explorerAPICredsSelector, creds => creds.accessToken);
const explorerAPIRefreshTokenSelector = createSelector(explorerAPICredsSelector, creds => creds.refreshToken);
const explorerAPIAccessTokenIssuedAtSelector = createSelector(explorerAPICredsSelector, creds => creds.accessTokenIssuedAt);

export const isLoggedInSelector = createSelector(
  explorerAPIAccessTokenSelector,
  explorerAPIRefreshTokenSelector,
  explorerAPIAccessTokenIssuedAtSelector,
  (accessToken, refreshToken, accessTokenIssuedAt) => {
    const now = getCurrentTimestampSeconds();
    const hasTokens = (accessToken && refreshToken);

    return (hasTokens && ((accessTokenIssuedAt + EXPLORER_API_TOKEN_LIFESPAN) <= now)) ? true : false;
  }
);

export const shouldRefreshExplorerAPITokenSelector = createSelector(
  explorerAPIAccessTokenIssuedAtSelector,
  (accessTokenIssuedAt) => {
    const now = getCurrentTimestampSeconds();

    return ((accessTokenIssuedAt + EXPLORER_API_TOKEN_LIFESPAN - TOKEN_REFRESH_OFFSET) >= now) ? true : false;
  }
);
