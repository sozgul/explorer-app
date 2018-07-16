import ActionTypes from '../actions/types';

let initialState = {
  displayUserName: null,
  gpsTimeLimit: null,
  phoneNumber: null
};

const userProfileData = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.PROFILE_UPDATED:
    state.displayUserName = action.displayUserName;
    state.gpsTimeLimit = action.gpsTimeLimit;
    state.phoneNumber = action.phoneNumber;
    break;
  default:
    break;
  }
  return state;
};

export default userProfileData;
