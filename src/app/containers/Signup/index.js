import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: '1',
      phoneNumber: ''
    };
  }
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <Text>Verify Phone #</Text>
        <Text>Please confirm your country code, and enter your phone number</Text>
        <Text>United States</Text>
        <TextInput
          value={this.state.countryCode}
          maxLength={3}
          onChangeText={value => this.setState({countryCode: value})}
        />
        <TextInput 
          placeholder="mobile number"
          value={this.state.phoneNumber}
          onChangeText={value => this.setState({phoneNumber: value})}
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          autoFocus={true}
        />
        <Button 
          title="Send SMS"
          onPress={() => navigate('SignupVerify')}
        />
      </View>
    );
  }
}

export default SignupScreen;