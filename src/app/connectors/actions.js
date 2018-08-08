
import ActionTypes from '../actions/types';

export function locationDataReceived({userId, timestamp, location}) {
  return {
    type: ActionTypes.LOCATION_DATA_RECEIVED,
    userId,
    timestamp,
    location
  };
}