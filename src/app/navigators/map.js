import { createStackNavigator } from 'react-navigation';
import * as ScreenNames from './screen_names';
import CreateGroupScreen from '../containers/ConfigureGroup';
import ConfirmGroupScreen from '../containers/ConfigureGroup/confirm';
import MapScreen from '../containers/Map';
import {commonStackNavigationOptions} from './options';

export default createStackNavigator({
  [ScreenNames.CREATE_GROUP]: {screen:CreateGroupScreen},
  [ScreenNames.CONFIRM_GROUP]: {screen:ConfirmGroupScreen},
  [ScreenNames.MAP]: {screen:MapScreen}
},
{
  initialRouteName: ScreenNames.CREATE_GROUP,
  navigationOptions: {
    ...commonStackNavigationOptions  
  },
});
