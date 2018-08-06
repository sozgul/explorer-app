
import mirrorKeys from '../utilities/mirror_keys';
import {ENV} from 'react-native-dotenv';
                                                                                                                                                                                                                                                                                                                                                                                                               
export const environments = mirrorKeys([
  'production',
  'development',
  'debug'
]);

export function isProduction() {
  return ENV === environments.production;
}

export function isDevelopment() {
  return ENV === environments.development;
}

export function getEnvironment() {
  return environments[ENV];
}

// ----------------------------------------------------------------------------
// Support for accessing Explorer APis on localhost.
// (this is useful for API integration & full-stack development)
// ----------------------------------------------------------------------------
export function isExplorerDebugEnabled() {
  return [1, '1', 'true'].includes(process.env.REACT_NATIVE_EXPLORER_DEBUG);
}