import { combineReducers } from 'redux';
import navigationData from './navigation';
import accountData from './account';
import userProfileData from './user-profile';
import messagesData from './messages';
import mapsData from './maps';

export default combineReducers({
  navigationData,
  accountData,
  userProfileData,
  mapsData,
  messagesData
});
