import { createStackNavigator } from 'react-navigation';
import * as ScreenNames from './screen_names';
import CreateGroupScreen from '../containers/ConfigureGroup';
import ConfirmGroupScreen from '../containers/ConfigureGroup/confirm';
import {commonStackNavigationOptions} from './options';
import React from 'react';

export default createStackNavigator({
  [ScreenNames.CREATE_GROUP]: {screen:CreateGroupScreen},
  [ScreenNames.CONFIRM_GROUP]: {screen:ConfirmGroupScreen}
},
{
  initialRouteName: ScreenNames.CREATE_GROUP,
  navigationOptions: () => ({
    ...commonStackNavigationOptions
  }),
});
