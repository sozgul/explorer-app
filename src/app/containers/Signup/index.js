import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import CustomButton from '../../components/Button';
import PickerInput from '../../components/PickerInput';
import countries from '../../utilities/countries';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import commonStyles from '../../common/styles';
import styles from './styles';
import {navigateToSignupVerify} from '../../actions/navigation';
import {phoneNumberUpdated} from './actions';
import {getCountryCallingCode, AsYouType, isValidNumber, parseNumber} from 'libphonenumber-js';
import LoadingOverlay from '../../components/LoadingOverlay';

class SignupScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'phone number',
    headerBackTitle: 'phone'
  };

  constructor(props) {
    super(props);

    const {account} = this.props;
    this.state = {
      countryCode: account.countryCode || '1',
      country: account.country || 'US',
      phoneNumber: account.phoneNumber || '',
      initiatingAccount: false
    };
  }

  sendSMSPressed() {
    if (this._isPhoneNumberValid()) {
      Alert.alert(
        'Confirm phone number',
        'please confirm that your number is correct',
        [
          {text: 'Cancel', onPress: () => {}},
          {text: 'OK', onPress: this.onPhoneNumberCorrect.bind(this)}
        ]
      );
    } else {
      Alert.alert(
        'Invalid phone number',
        'please revise the phone number',
        [
          {text: 'OK', onPress: () => {}}
        ]
      );
    }
  }

  onPhoneNumberCorrect() {
    const {phoneNumberUpdated, navigateToSignupVerify} = this.props;
    const phoneNumber = parseNumber(this.state.phoneNumber, this.state.country);
    phoneNumberUpdated(phoneNumber.phone, this.state.countryCode, phoneNumber.country);
    navigateToSignupVerify();
  }

  countryChanged(country) {
    this.setState({countryCode: getCountryCallingCode(country), country});
  }

  phoneNumberChanged(phoneNumber) {
    this.setState({phoneNumber});
  }

  countryFocused() {
    this._phoneInput.blur();
  }

  phoneFocused() {
    this._countryPicker.blur();
  }

  viewTapped() {
    Keyboard.dismiss();
    this._countryPicker.blur();
  }

  _isPhoneNumberValid() {
    return isValidNumber(this.state.phoneNumber, this.state.country);
  }

  render() {
    const formattedPhoneNumber = new AsYouType(this.state.country).input(this.state.phoneNumber);

    return (
      <TouchableWithoutFeedback onPress={this.viewTapped.bind(this)}>
        <View style={[commonStyles.container, styles.container]}>
          <Text style={[commonStyles.text, styles.title]}>Verify Phone #</Text>
          <Text style={[commonStyles.text, styles.subTitle]}>Please confirm your country code,{'\n'}and enter your phone number</Text>

          <PickerInput
            ref={ref => this._countryPicker = ref}
            options={countries.map(item => ({label: item.country, value: item.code}))}
            onChange={this.countryChanged.bind(this)}
            selectedValue={this.state.country}
            onFocus={this.countryFocused.bind(this)}
          />
          <View style={[styles.phoneWrapper]}>
            <TextInput
              style={[commonStyles.textInput, styles.countryCodeInput]}
              value={`+ ${this.state.countryCode}`}
              maxLength={3}
              editable={false}
            />
            <TextInput
              ref={ref => this._phoneInput = ref}
              style={[commonStyles.textInput, styles.phoneInput]}
              placeholder="mobile number"
              value={formattedPhoneNumber}
              onChangeText={value => this.setState({phoneNumber:value})}
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              onFocus={this.phoneFocused.bind(this)}
            />
          </View>
          <CustomButton
            text="Send SMS"
            onPress={this.sendSMSPressed.bind(this)}
            disabled={!this._isPhoneNumberValid()}
          />

          {this.state.initiatingAccount && (
            <LoadingOverlay message="initiating account" />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => ({
  account: state.accountData
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({phoneNumberUpdated, navigateToSignupVerify}, dispatch);

SignupScreen.propTypes = {
  phoneNumberUpdated: PropTypes.func.isRequired,
  navigateToSignupVerify: PropTypes.func.isRequired,
  account: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
