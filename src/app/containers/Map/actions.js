
import ActionTypes from '../../actions/types';

export function createMap({id, ownerUserID, contactIDs, subject}) {
  return {
    type: ActionTypes.MAP_CREATED,
    map: {
      id,
      ownerUserID,
      contactIDs,
      subject
    }
  };
}

export function deleteMap(mapID) {
  return {
    type: ActionTypes.MAP_DELETED,
    mapID
  };
}

export function addParticipantsToMap({mapID, participants = []}) {
  return {
    type: ActionTypes.MAP_PARTICIPANTS_ADDED,
    mapID,
    participants
  };
}

export function mapGPSToggled({mapID, gpsEnabled}) {
  return {
    type: ActionTypes.MAP_GPS_TOGGLED,
    mapID,
    gpsEnabled,
    gpsEnabledAt: (new Date().getTime())
  };
}
