
import SocketIOClient from 'socket.io-client';
import {getMessengerHost} from '../config/hosts';
import Logger from '../utilities/logger';

let client;
const logger = new Logger({name: 'MessengerClient'});

class MessengerClient {
  constructor({host}) {
    this._host = host;
  }

  _createSocketClient() {
    this._socket = SocketIOClient(this._host);
  }

  async initiateChat() {
    logger.info('initiating connection to the messenger api');
    this._socket = this._createSocketClient();
    this._socket.on('message', this.onReceivedMessage);
    return this._socket;
  }

  onReceivedMessage(message) {
    logger.info(message);
  }
}

client = new MessengerClient({
  host: getMessengerHost()
});

export default client;
