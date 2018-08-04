import { combineReducers } from 'redux';
import navigationData from './navigation';
import accountData from './account';
import userProfileData from './user-profile';
import mapsData from './maps';
import usersData from './users';
import authData from './auth';

export default combineReducers({
  navigationData,
  accountData,
  userProfileData,
  mapsData,
  usersData,
  authData
});
