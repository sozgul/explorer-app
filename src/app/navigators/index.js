import { createStackNavigator } from 'react-navigation';
import {reduxifyNavigator, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import * as ScreenNames from './screen_names';
import MainNavigator from './main';
import SignupNavigator from './signup';
import MapNavigator from './map';

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigationData
);

const RootNavigator = createStackNavigator(
  {
    [ScreenNames.SIGNUP_FLOW]: SignupNavigator,
    [ScreenNames.MAIN_FLOW]: MainNavigator,
    [ScreenNames.MAP_FLOW]: MapNavigator
  },
  {
    initialRouteName: ScreenNames.SIGNUP_FLOW,
    headerMode: 'none'
  }
);

const AppWithNavState = reduxifyNavigator(RootNavigator, 'root');
const mapStateToProps = state => ({
  state: state.navigationData,
});
const AppNavigator = connect(mapStateToProps)(AppWithNavState);

export {
  RootNavigator,
  AppNavigator,
  navMiddleware
};
export default AppNavigator;
