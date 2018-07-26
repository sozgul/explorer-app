import ActionTypes from '../actions/types';
import uuidV4 from 'uuid/v4';

let initialState = {
  mapList: [],
};

function addMapToState(state, {ownerUserID, contactIDs, subject}) {
  const {mapList} = state;
  const newMap = {
    id: uuidV4(),
    ownerUserID,
    contactIDs,
    subject,
    lastContact: null,
    messages: []
  };
  mapList.unshift(newMap);
  return {
    ...state,
    mapList
  };
}

function deleteMapFromState(state, mapID) {
  const {mapList} = state;
  const mapIndex = mapList.findIndex(m => m.id === mapID);
  mapList.splice(mapIndex, 1);
  return {
    ...state,
    mapList
  };
}

const mapsData = (state = initialState, action) => {
  switch (action.type) {
  case ActionTypes.MAP_CREATED:
    return addMapToState(state, action.map);
  case ActionTypes.MAP_DELETED:
    return deleteMapFromState(state, action.mapID);
  default:
    break;
  }
  return state;
};

export default mapsData;
