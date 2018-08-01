import ActionTypes from '../actions/types';

let initialState = {
  knownUsers: []
};

const usersData = (state = initialState, action = {}) => {
  switch(action.type) {
  case ActionTypes.USERIDS_SYNC_UPDATED:
    return {
      ...state,
      knownUsers: action.knownUsers,
      lastFullSync: action.isFullSync ? new Date().getTime() : state.lastFullSync
    };
  default:
    break;
  }

  return state;
};

export default usersData;
