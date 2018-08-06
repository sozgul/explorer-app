
import { createSwitchNavigator } from 'react-navigation';
import * as ScreenNames from './screen_names';
import SignupNavigator from './signup';

export default createSwitchNavigator({
  // Will eventually define user-authentication related routes 
  // such as 'sign-up', 'sign-in', 'recover account', etc.
  [ScreenNames.SIGNUP_FLOW]: SignupNavigator,
},
{
  initialRouteName: ScreenNames.SIGNUP_FLOW
});
