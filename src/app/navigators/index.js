import { createStackNavigator } from 'react-navigation';
import {reduxifyNavigator, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import * as ScreenNames from './screen_names';
import HomeScreen from '../containers/Home';
import SignupScreen from '../containers/Signup';
import SignupVerifyScreen from '../containers/Signup/verify';
import MapScreen from '../containers/Map';

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigationData
);

const RootNavigator = createStackNavigator(
  {
    [ScreenNames.HOME]: {screen:HomeScreen},
    [ScreenNames.SIGNUP]: {screen:SignupScreen},
    [ScreenNames.SIGNUP_VERIFY]: {screen:SignupVerifyScreen},
    [ScreenNames.MAP]: {screen:MapScreen}
  },
  {
    initialRouteName: ScreenNames.HOME
  }
);

const AppWithNavState = reduxifyNavigator(RootNavigator, 'root');
const mapStateToProps = state => ({
  state: state.navigationData,
});
const AppNavigator = connect(mapStateToProps)(AppWithNavState);

export {RootNavigator, AppNavigator, navMiddleware};
export default AppNavigator;