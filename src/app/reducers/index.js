import { combineReducers } from 'redux';
import settingsData from './settings';
import userProfileData from './user-profile';
import navigationData from './navigation';
import accountData from './account';

export default combineReducers({
  navigationData,
  settingsData,
  userProfileData,
  accountData
});