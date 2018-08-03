import React from 'react';
import {View} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import styles from './styles';

export function createCustomBottomTabNavigator(routes = {}, options) {
  return createBottomTabNavigator(
    routes,
    {
      ...options,
      tabBarComponent: props => (
        <View style={styles.tabBarWrapper}><BottomTabBar {...props} style={styles.tabBar} /></View>
      )
    }
  );
}