import ActionTypes from '../actions/types';

let initialState = {
  mapList: [],
};

function addMapToState(state, {id, ownerUserID, contactIDs, subject, lastContact, messages}) {
  console.log("in addMapTO State");
  const {mapList} = state;
  const newMap = {
    id, // id will be provided by API response
    ownerUserID, // ownerUserID will be provided in API response
    contactIDs,
    lastContact,
    subject,
    messages
  };
  console.log(newMap);
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
