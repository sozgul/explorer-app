
import ActionTypes from '../../actions/types';

export function profileUpdated(gpsTimeLimit, displayUserName, phoneNumber) {
  return {
    type: ActionTypes.PROFILE_UPDATED,
    gpsTimeLimit,
    displayUserName,
    phoneNumber
  };
}
