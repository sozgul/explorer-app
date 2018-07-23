
import ActionTypes from '../../actions/types';

export function createMap({id, ownerUserID, contactIDs, subject, lastContact, messages = []}) {
  return {
    type: ActionTypes.MAP_CREATED,
    map: {
      id,
      ownerUserID,
      contactIDs,
      subject,
      lastContact,
      messages
    }
  };
}

export function deleteMap(mapID) {
  return {
    type: ActionTypes.MAP_DELETED,
    mapID
  };
}