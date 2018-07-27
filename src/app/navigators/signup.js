import { createStackNavigator } from 'react-navigation';
import * as ScreenNames from './screen_names';
import WelcomeScreen from '../containers/Welcome';
import SignupScreen from '../containers/Signup';
import SignupVerifyScreen from '../containers/Signup/verify';
import ProfileScreen from '../containers/Profile';
import {commonStackNavigationOptions} from './options';
import WelcomeMapScreen from '../containers/CreateNewMap';

export default createStackNavigator({
  [ScreenNames.WELCOME_MAP]: {screen:WelcomeMapScreen},
  [ScreenNames.WELCOME]: {screen:WelcomeScreen},
  [ScreenNames.SIGNUP]: {screen:SignupScreen},
  [ScreenNames.SIGNUP_VERIFY]: {screen:SignupVerifyScreen},
  [ScreenNames.USER_PROFILE]: {screen:ProfileScreen},
},{
  navigationOptions: {
    ...commonStackNavigationOptions
  }
});
