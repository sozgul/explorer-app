
import ActionTypes from '../../actions/types';

export function createMap({ownerUserID, contactIDs, subject}) {
  return {
    type: ActionTypes.MAP_CREATED,
    map: {
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