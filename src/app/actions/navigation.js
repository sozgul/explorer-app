import { NavigationActions } from 'react-navigation';
import * as ScreenNames from '../navigators/screen_names';
import RNExitApp from 'react-native-exit-app';

export const navigateBack = () => NavigationActions.back();

export const navigateToHome = () =>
  NavigationActions.navigate({
    routeName: ScreenNames.HOME
  });

export const navigateToSignup = () =>
  NavigationActions.navigate({
    routeName: ScreenNames.SIGNUP
  });

export const navigateToSignupVerify = () =>
  NavigationActions.navigate({
    routeName: ScreenNames.SIGNUP_VERIFY
  });

export const navigateToMap = () =>
  NavigationActions.navigate({
    routeName: ScreenNames.MAP
  });

export const exitApp = () => {
  RNExitApp.exitApp();
};