import React from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
  navigateToSignup() {
    this.props.navigation.navigate('Signup');
  }
  render() {
    return (
      <View>
        <Text>Welcome to</Text>
        <Text>Explorer</Text>
        <Text>GPS Sharing</Text>
        <Button 
          title="Continue"
          onPress={this.navigateToSignup.bind(this)}
        />
      </View>
    );
  }
}

export default HomeScreen;