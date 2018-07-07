import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './containers/Home';
import SignupScreen from './containers/Signup';
import SignupVerifyScreen from './containers/Signup/verify';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Signup: SignupScreen,
    SignupVerify: SignupVerifyScreen
  },
  {
    initialRouteName: 'Home'
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack style={styles.container} />;
  }
}