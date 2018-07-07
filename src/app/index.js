import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './containers/Home';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}