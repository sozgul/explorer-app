import ActionTypes from '../actions/types';

let initialState = {
  knownUsers: []
};

const usersData = (
  state = initialState, 
  {type, registeredUsers, isFullSync}
) => {
  switch(type) {
  case ActionTypes.USERIDS_SYNC_UPDATED:
    return {
      ...state,
      registeredUsers,
      lastFullSync: isFullSync ? new Date().getTime() : state.lastFullSync
    };
  default:
    break;
  }

  return state;
};

export default usersData;
