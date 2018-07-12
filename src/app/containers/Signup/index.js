import React from 'react';
import { View, Text, TextInput} from 'react-native';
import CustomButton from '../../components/Button';
import {connect} from 'react-redux';
import commonStyles from '../../common/styles';
import styles from './styles';

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
      <View style={[commonStyles.container, styles.container]}>
        <Text style={[commonStyles.text, styles.title]}>Verify Phone #</Text>
        <Text style={[commonStyles.text, styles.subTitle]}>Please confirm your country code,{'\n'}and enter your phone number</Text>
        
        <View style={[styles.phoneWrapper]}>
          <TextInput
            style={[commonStyles.textInput, styles.countryCode]}
            value={this.state.countryCode}
            maxLength={3}
            onChangeText={value => this.setState({countryCode: value})}
          />
          <TextInput 
            style={[commonStyles.textInput, styles.phoneNumber]}
            placeholder="mobile number"
            value={this.state.phoneNumber}
            onChangeText={value => this.setState({phoneNumber: value})}
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            autoFocus={true}
          />
        </View>
        <CustomButton 
          text="Send SMS"
          onPress={() => navigate('SignupVerify')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => (state);
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);