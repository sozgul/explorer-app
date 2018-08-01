
import mirrorKeys from '../utilities/mirror_keys';
import {APP_ENVIRONMENT} from 'react-native-dotenv';

export const environments = mirrorKeys([
  'production',
  'development',
  'debug'
]);

export function isProduction() {
  return !__DEV__;
}

export function isDevelopment() {
  return __DEV__;
}

export function isDebug() {
  return APP_ENVIRONMENT === environments.debug;
}

export function getEnvironment() {
  let env = environments.development;

  if (isDebug()) {
    env = environments.debug;
  } else if (isProduction()) {
    env = environments.production;
  }

  return env;
}
