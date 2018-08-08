import ActionTypes from '../actions/types';

let initialState = {
  mapList: [],
  locationData: {}
};

function addMapToState(state, {id, ownerUserID, contactIDs, subject}) {
  const {mapList} = state;
  const newMap = {
    id,
    ownerUserID,
    contactIDs,
    subject,
    lastContact: null,
    messages: [],
    gpsEnabled: false,
    gpsEnabledAt: null
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

function updateUserLocation(state, action) {
  const {userId, timestamp, location} = action;
  const {locationData = {}} = state;

  if (!locationData[userId]) {
    locationData[userId] = {
      location: []
    };
  }

  location.timestamp = timestamp;
  locationData[userId].location.push(location);

  return {
    ...state,
    locationData
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
  case ActionTypes.LOCATION_DATA_RECEIVED:
    return updateUserLocation(state, action);
  default:
    break;
  }
  return state;
};

export default mapsData;
