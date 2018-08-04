import { createSwitchNavigator} from 'react-navigation';
import {reduxifyNavigator, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import * as ScreenNames from './screen_names';
import AuthNavigator from './auth';
import AuthLoadingScreen from '../containers/AuthLoading';
import MainNavigator from './main';

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigationData
);

const RootNavigator = createSwitchNavigator(
  {
    [ScreenNames.AUTH_LOADING]: AuthLoadingScreen,
    [ScreenNames.AUTH_FLOW]: AuthNavigator,
    [ScreenNames.MAIN_FLOW]: MainNavigator
  },
  {
    initialRouteName: ScreenNames.AUTH_LOADING,
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
