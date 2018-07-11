import { combineReducers } from 'redux';
import settingsData from './settings';
import userProfileData from './user-profile';
import navigationData from './navigation';

export default combineReducers({
  navigationData,
  settingsData,
  userProfileData
});