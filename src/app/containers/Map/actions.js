
import ActionTypes from '../../actions/types';
import APIClient from '../../api/api';

export function createMap({ownerUserID, contactIDs, subject}, callback = () => {}) {
  return function(dispatch) {
    APIClient.createMap({
      userId: ownerUserID,
      subject, 
      participantIDs: contactIDs
    }).then(response => {
      const {data} = response;
      const {mapid:id} = data;
      dispatch({
        type: ActionTypes.MAP_CREATED,
        map: {
          id,
          ownerUserID,
          contactIDs,
          subject
        }
      });
      callback(id);
    });
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
