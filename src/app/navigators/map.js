import { createStackNavigator } from 'react-navigation';
import * as ScreenNames from './screen_names';
import MapParticipantsScreen from '../containers/CreateMap/participants';
import MapConfigurationScreen from '../containers/CreateMap/configuration';
import MapScreen from '../containers/Map';
import {commonStackNavigationOptions} from './options';

export default createStackNavigator({
  [ScreenNames.MAP_PARTICIPANTS]: {screen:MapParticipantsScreen},
  [ScreenNames.MAP_CONFIGURATION]: {screen:MapConfigurationScreen},
  [ScreenNames.MAP]: {screen:MapScreen}
},
{
  initialRouteName: ScreenNames.MAP_PARTICIPANTS,
  navigationOptions: {
    ...commonStackNavigationOptions  
  },
});
