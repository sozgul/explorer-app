
import mirrorKeys from './mirror_keys';

const types = mirrorKeys([
  'LOG',
  'INFO',
  'WARN',
  'ERROR'
]);

const {
  info: consoleInfo, 
  log: consoleLog, 
  warn: consoleWarn, 
  error: consoleError
} = console;

export default class Logger {
  constructor({name}) {
    this.name = name;
  }

  log() {
    consoleLog(this._prefix(types.LOG), ...arguments);
  }

  info() {
    consoleInfo(this._prefix(types.INFO), ...arguments);
  }

  warn() {
    consoleWarn(this._prefix(types.WARN), ...arguments);
  }

  error() {
    consoleError(this._prefix(types.ERROR), ...arguments);
  }

  _prefix(type = '') {
    return `[${type}] ${this.name}: `;
  }
}