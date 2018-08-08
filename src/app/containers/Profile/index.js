import React from 'react';
import PropTypes from 'prop-types';
import commonStyles from '../../common/styles';
import styles from './styles';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {navigateToMainFlow} from '../../actions/navigation';
import { bindActionCreators } from 'redux';
import PickerInput from '../../components/PickerInput';
import gpsExpirationTimes from '../../utilities/gps_expiration_times';
import {connect} from 'react-redux';
import CustomButton from '../../components/Button';
import {profileUpdated} from './actions';
import LoadingOverlay from '../../components/LoadingOverlay';
import {formatNumber} from 'libphonenumber-js';
import {syncUserIds} from '../../actions/users';
import {requestContactsPermissionAsync} from '../../utilities/contacts';
import {requestLocationPermissionAsync} from '../../utilities/location';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'profile'
  };

  constructor(props) {
    super(props);

    const {profile, account} = this.props;
    const timeLimit = (profile.gpsTimeLimit instanceof Number) ? profile.gpsTimeLimit : gpsExpirationTimes[0].value;

    this.state = {
      gpsTimeLimit: timeLimit,
      displayUserName: profile.displayUserName || '',
      phoneNumber: account.phoneNumber || '',
      saveInProgress: false
    };
  }

  continuePressed() {
    // continuePressed is triggered during the signup flow.

    const {profileUpdated, navigateToMainFlow, syncUserIds} = this.props;
    profileUpdated(this.state.gpsTimeLimit, this.state.displayUserName, this.state.phoneNumber);
    
    // Request app permissions...
    requestContactsPermissionAsync();
    requestLocationPermissionAsync();

    // Sync contacts with userID's from API.
    syncUserIds();

    // Head to the app's main flow!
    navigateToMainFlow();
  }

  savePressed() {
    // savePressed is triggered from the profile tab in the main flow.
    const {profileUpdated} = this.props;
    profileUpdated(this.state.gpsTimeLimit, this.state.displayUserName, this.state.phoneNumber);
    
  }

  gpsValueChanged(time) {
    this.setState({gpsTimeLimit: time});
  }

  viewTapped() {
    Keyboard.dismiss();
    this._gpsTimeLimit.blur();
  }

  _isProfileValid() {
    return this.state.displayUserName.length >= 4 && this.state.phoneNumber;
  }

  render() {
    const {account} = this.props;
    const phoneNumber = `+${account.countryCode} ${formatNumber({country: account.country, phone: this.state.phoneNumber }, 'National')}`;

    return (
      <TouchableWithoutFeedback onPress={this.viewTapped.bind(this)}>
        <View style = {styles.container}>
          <Text style={[commonStyles.text, styles.title]}>Profile Settings</Text>
          <Text style={[commonStyles.text, styles.subTitle]}>Enter your name for others to see,{'\n'}and confirm your privacy settings</Text>
          <View style = {styles.container1}>
            <Text style={[styles.textBox]}>Display Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="display name"
              onChangeText={value => this.setState({displayUserName:value})}
              value={this.state.displayUserName}
            />
          </View>
          <View style = {styles.container1}>

            <Text style={[styles.textBox]}>GPS permissions default expiration</Text>
          </View>
          <PickerInput
            ref={ref => this._gpsTimeLimit = ref}
            options={gpsExpirationTimes}
            onChange={this.gpsValueChanged.bind(this)}
            selectedValue={this.state.gpsTimeLimit}
            inputTextStyle={styles.wrapper}
            inputHorizontalAlignment="left"
            textInputWidth={styles.pickerTextInput}
            wrapperPadding={styles.wrapperPaddingLeft}

          />
          <View style = {styles.container1}>

            <Text style={[styles.textBox]}>Paired phone number</Text>
            <TextInput
              style={styles.textInput}
              value={phoneNumber}
              editable={false}
            />
          </View>
          <View style = {styles.container_button}>

            {this.props.inSignupFlow ? (
              <CustomButton
                text="Continue"
                onPress={this.continuePressed.bind(this)}
                disabled={!this._isProfileValid()}
              />
            ) : (
              <CustomButton
                text="Save"
                onPress={this.savePressed.bind(this)}
                disabled={!this._isProfileValid()}
              />
            )}
          </View>

          {this.state.saveInProgress && (
            <LoadingOverlay message="saving profile" />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ProfileScreen.propTypes = {
  inSignupFlow: PropTypes.bool.isRequired,
  navigateToMainFlow: PropTypes.func.isRequired,
  profileUpdated: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
  syncUserIds: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.userProfileData,
  account: state.accountData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    profileUpdated,
    navigateToMainFlow,
    syncUserIds
  }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
