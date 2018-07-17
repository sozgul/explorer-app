import ActionTypes from '../actions/types';

let initialState = {
  displayUserName: null,
  gpsTimeLimit: null
};

const userProfileData = (state = initialState, action) => {
  switch (action.type) {
  case ActionTypes.PROFILE_UPDATED:
    return { ...state, displayUserName: action.displayUserName, gpsTimeLimit: action.gpsTimeLimit };
  default:
    break;
  }
  return state;
};

export default userProfileData;
