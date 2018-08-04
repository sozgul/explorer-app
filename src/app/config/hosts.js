import {environments, getEnvironment, isExplorerDebugEnabled} from './env';

const env = isExplorerDebugEnabled() ? getEnvironment() : environments.debug;
const hosts = {
  API: {
    [environments.debug]: 'http://localhost:8001',
    [environments.development]: 'http://ec2-18-212-132-175.compute-1.amazonaws.com',
    [environments.production]: 'http://ec2-18-212-132-175.compute-1.amazonaws.com'
  },
  GPS: {
    [environments.debug]: 'http://localhost:8888',
    [environments.development]: 'http://ec2-34-228-9-208.compute-1.amazonaws.com',
    [environments.production]: 'http://ec2-34-228-9-208.compute-1.amazonaws.com'
  },
  MESSENGER: {
    [environments.debug]: 'http://localhost:3000',
    [environments.development]: 'http://ec2-107-23-85-208.compute-1.amazonaws.com',
    [environments.production]: 'http://ec2-107-23-85-208.compute-1.amazonaws.com'
  }
};

export function getAPIHost() {
  return hosts.API[env];
}

export function getGPSHost() {
  return hosts.GPS[env];
}

export function getMessengerHost() {
  return hosts.MESSENGER[env];
}
