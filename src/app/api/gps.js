
import {getGPSHost} from '../config/hosts';
import mirrorKeys from '../utilities/mirror_keys';
import socketIO from 'socket.io-client';
import Logger from '../utilities/logger';
import EventEmitter from 'EventEmitter';

const logger = new Logger({name:'GPSClient'});
const messageTypes = mirrorKeys([
  'USER_LOCATION',
  'USER_CONNECTED',
  'USER_DISCONNECTED',
  'USER_JOINED_MAP'
]);

export const eventNames = mirrorKeys([
  'location_data_received'
]);

class GPSClient {
  constructor({host}) {
    this._host = host;
    this._setup();
    this._eventEmitter = new EventEmitter();
  }
  
  _setup() {
    this._io = socketIO(this._host, {
      autoConnect: false
    });
    this._io.on('system-message', this._onSystemMessage.bind(this));
  }

  on(eventName, listener) {
    this._eventEmitter.addListener(eventName, listener);
  }

  removeEventListener(eventName, listener) {
    this._eventEmitter.removeListener(eventName, listener);
  }

  _emit(event, payload, error = false) {
    this._eventEmitter.emit(event, payload, error);
  }

  connect() {
    return this._io.open();
  }
  
  disconnect() {
    this._io.close();
  }

  isConnected() {
    return this._io.connected;
  }

  setUserId({userId}) {
    logger.log('signing into GPS server\'s socket connection.');
    this._io.emit('alias-change', userId);
  }
  
  joinMap({mapId}) {
    logger.log(`joining map ${mapId}`);
    this._io.emit('channel-join', mapId);
  }

  sendGPS({userId: userid, mapIds, coordinates}) {
    const payload = {
      userid,
      mapsToBroadcast: mapIds.map(mapID => ({mapID})),
      coordinates,
      timestamp: Date.now()
    };

    logger.log('sending gps data .', payload);
    this._io.emit('system-gps', payload);
  }

  _onSystemMessage(data = {}) {
    const {type} = data;

    switch(type) {
    case messageTypes.USER_LOCATION:
      this._locationDataReceived(data);
      break;
    default:
      break;
    }
  }

  _locationDataReceived(data) {
    const {message: location, userid: userId, timestamp} = data;
    this._emit(eventNames.location_data_received, {
      location,
      userId,
      timestamp
    });
  }

}

const client = new GPSClient({
  host: getGPSHost()
});

export default client;