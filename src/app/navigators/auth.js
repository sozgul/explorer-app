
// Defines nav for flows such as 'sign-up', 'sign-in', 'recover account', etc.
import { createSwitchNavigator } from 'react-navigation';
import * as ScreenNames from './screen_names';
import SignupNavigator from './signup';

export default createSwitchNavigator({
  [ScreenNames.SIGNUP_FLOW]: SignupNavigator,
},
{
  initialRouteName: ScreenNames.SIGNUP_FLOW
});
