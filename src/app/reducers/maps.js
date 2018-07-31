import ActionTypes from '../actions/types';

let initialState = {
  mapList: []
};

function addMapToState(state, {id, ownerUserID, contactIDs, subject}) {
  const {mapList} = state;
  const newMap = {
    id,
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

function toggleGPS(state, {mapID, gpsEnabled, gpsEnabledAt}) {
  const {mapList} = state;
  mapList.some(m => {
    if (m.id === mapID) {
      m.gpsEnabled = gpsEnabled;
      m.gpsEnabledAt = gpsEnabledAt;
      return true;
    }
    return false;
  });

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
  case ActionTypes.MAP_GPS_TOGGLED:
    return toggleGPS(state, {
      mapID: action.mapID,
      gpsEnabled: action.gpsEnabled,
      gpsEnabledAt: action.gpsEnabledAt
    });
  default:
    break;
  }
  return state;
};

export default mapsData;
