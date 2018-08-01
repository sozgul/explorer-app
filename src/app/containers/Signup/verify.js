import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import CustomButton from '../../components/Button';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {navigateToProfile} from '../../actions/navigation';
import styles from './styles';
import commonStyles from '../../common/styles';
import {formatNumber} from 'libphonenumber-js';
import LoadingOverlay from '../../components/LoadingOverlay';
import {sendSMSCode} from './actions';

const VALID_CODE_PATTERN = /^\d{4}$/;

class SignupVerifyScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'verify phone number',
    headerBackTitle: 'verify'
  };

  constructor(props) {
    super(props);
    this.state = {
      codeNum1: '',
      codeNum2: '',
      codeNum3: '',
      codeNum4: '',
      validationInProgress: false,
      currentInputID: 1
    };
  }

  validate() {
    // TODO: Validate the code & then go to the profile settings page.
    // Setting the verification to accepted to continue set up till we have the twilio hookup.
    const {sendSMSCode, account} = this.props;
    const {phoneNumber, countryCode, country} = account;
    const smsCode = this._buildCode();
    
    this.setState({
      validationInProgress: true
    });
    
    sendSMSCode({
      phoneNumber,
      countryCode,
      country,
      smsCode
    }).then(() => {
      this.setState({
        validationInProgress: false
      });
      this.props.navigateToProfile();
    }).catch(() => {
      this.setState({
        validationInProgress: false
      });
    });
  }

  _codeInputChanged(inputID, num) {
    this.setState({
      [`codeNum${inputID}`]: num
    });
    if (num.length > 0) {
      if (inputID < 4) {
        this[`_codeInput${inputID + 1}`].focus();
      } else if (inputID === 4) {
        this[`_codeInput${inputID}`].blur();
      }
    }
  }
  
  _buildCode() {
    const {codeNum1, codeNum2, codeNum3, codeNum4} = this.state;

    return `${codeNum1}${codeNum2}${codeNum3}${codeNum4}`;
  }

  _codeLooksValid() {
    return VALID_CODE_PATTERN.test(this._buildCode());
  }

  render() {
    const {account} = this.props;
    const phoneNumber = account.phoneNumber ? formatNumber({ country: account.country, phone: account.phoneNumber }, 'National') : account.phoneNumber;
    
    return (
      <View style={commonStyles.container}>
        <Text style={[commonStyles.text, styles.subTitle, styles.verify]}>please enter the 4-digit code to verify we sent an SMS to the number below</Text>
        <TextInput
          value={phoneNumber}
          placeholder="mobile number"
          textContentType="telephoneNumber"
          editable={false}
          style={[commonStyles.textInput, styles.phoneInput]}
        />
        <View style={styles.codeWrapper}>
          <TextInput
            ref={ref => this._codeInput1 = ref}
            value={this.state.codeNum1}
            maxLength={1}
            onChangeText={num => this._codeInputChanged(1, num)}
            style={[commonStyles.textInput, styles.codeInput]}
            keyboardType="numeric"
          />
          <TextInput
            ref={ref => this._codeInput2 = ref}
            value={this.state.codeNum2}
            maxLength={1}
            onChangeText={num => this._codeInputChanged(2, num)}
            style={[commonStyles.textInput, styles.codeInput]}
            keyboardType="numeric"
          />
          <TextInput
            ref={ref => this._codeInput3 = ref}
            maxLength={1}
            onChangeText={num => this._codeInputChanged(3, num)}
            style={[commonStyles.textInput, styles.codeInput]}
            keyboardType="numeric"
          />
          <TextInput
            ref={ref => this._codeInput4 = ref}
            value={this.state.codeNum4}
            maxLength={1}
            onChangeText={num => this._codeInputChanged(4, num)}
            style={[commonStyles.textInput, styles.codeInput]}
            keyboardType="numeric"
          />
        </View>
        <CustomButton
          text="Verify"
          onPress={this.validate.bind(this)}
          disabled={!this._codeLooksValid()}
        />

        {this.state.validationInProgress && (
          <LoadingOverlay message="validating code" />
        )}
      </View>
    );
  }
}

SignupVerifyScreen.propTypes = {
  account: PropTypes.object.isRequired,
  navigateToProfile: PropTypes.func.isRequired,
  sendSMSCode: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  account: state.accountData
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({navigateToProfile, sendSMSCode}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignupVerifyScreen);
