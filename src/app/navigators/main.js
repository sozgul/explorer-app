import React from 'react';
import * as ScreenNames from './screen_names';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import ContactsScreen from '../containers/Contacts';
import ContactDetailsScreen from '../containers/Contacts/details';
import ProfileScreen from '../containers/Profile';
import NavTabItem from '../components/NavTabItem';
import {commonStackNavigationOptions, commonTabBarOptions} from './options';
import DisplayMap from '../containers/Map/main';
import MapNavigator from './map';
import {createCustomBottomTabNavigator} from '../components/NavBottomTabBar';

const tabTitles = {
  [ScreenNames.CONTACTS_TAB]: 'contacts',
  [ScreenNames.MAPS_TAB]: 'maps',
  [ScreenNames.PROFILE_TAB]: 'profile'
};

const MainNavigator = createCustomBottomTabNavigator({
  [ScreenNames.CONTACTS_TAB]: createStackNavigator(
    {
      [ScreenNames.CONTACTS]: {screen:ContactsScreen},
      [ScreenNames.CONTACT_DETAILS]: {screen:ContactDetailsScreen}
    },
    {
      initialRouteName: ScreenNames.CONTACTS,
      navigationOptions: {
        ...commonStackNavigationOptions
      }
    }
  ),

  [ScreenNames.MAPS_TAB]: createStackNavigator(
    {
      [ScreenNames.DISPLAY_MAP]: {screen:DisplayMap}
    },
    {
      initialRouteName: ScreenNames.DISPLAY_MAP,
      navigationOptions: {
        ...commonStackNavigationOptions
      }
    }
  ),

  [ScreenNames.PROFILE_TAB]: createStackNavigator(
    {
      [ScreenNames.USER_PROFILE]: {
        screen: props => <ProfileScreen {...props} inSignupFlow={false} />
      }
    },
    {
      initialRouteName: ScreenNames.USER_PROFILE,
      navigationOptions: {
        ...commonStackNavigationOptions
      }
    }
  ),
},
{
  initialRouteName: ScreenNames.CONTACTS_TAB,
  navigationOptions: ({navigation}) => ({
    tabBarIcon: props => {
      const {routeName} = navigation.state;

      return (<NavTabItem {...props} routeName={routeName} />);
    },
    title: tabTitles[navigation.state.routeName]
  }),
  tabBarOptions: commonTabBarOptions
});


export default createSwitchNavigator({
  [ScreenNames.MAIN_FLOW]: MainNavigator,
  [ScreenNames.MAPS_FLOW]: MapNavigator
});
