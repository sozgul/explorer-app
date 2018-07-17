import React from 'react';
import PropTypes from 'prop-types';
import commonStyles from '../../common/styles';
import styles from './styles';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {navigateToMap} from '../../actions/navigation';
import { bindActionCreators } from 'redux';
import PickerInput from '../../components/PickerInput';
import gpsExpirationTime from '../../utilities/gps_expiration_times';
import {connect} from 'react-redux';
import CustomButton from '../../components/Button';
import {profileUpdated} from './actions';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    const {profile, account} = this.props;
    this.state = {
      gpsTimeLimit: profile.gpsTimeLimit,
      displayUserName: profile.displayUserName,
      phoneNumber: account.phoneNumber
    };
  }

  continuePressed() {
    const {profileUpdated, navigateToMap} = this.props;
    profileUpdated(this.state.gpsTimeLimit, this.state.displayUserName, this.state.phoneNumber);
    navigateToMap();
  }

  gpsValueChanged(time) {
    this.setState({gpsTimeLimit: time});
  }
  viewTapped() {
    Keyboard.dismiss();
    this._gpsTimeLimit.blur();
  }

  render() {
    const {account} = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.viewTapped.bind(this)}>
        <View style = {commonStyles.container}>
          <Text style={[commonStyles.text, styles.title]}>Profile Settings</Text>
          <Text style={[commonStyles.text, styles.subTitle]}>Enter your name for others to see,{'\n'}and confirm your privacy settings</Text>
          <Text style={[styles.textBox]}>Display Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="display name"
            onChangeText={value => this.setState({displayUserName:value})}
          />
          <Text style={[styles.textBox]}>GPS permissions default expiration</Text>
          <PickerInput
            ref={ref => this._gpsTimeLimit = ref}
            options={gpsExpirationTime.map(item => ({label: item.label, value: item.value}))}
            onChange={this.gpsValueChanged.bind(this)}
            selectedValue={this.state.gpsTimeLimit}
          />
          <Text style={[styles.textBox]}>Paired phone number</Text>
          <TextInput
            style={styles.textInput}
            value = {account.phoneNumber}
          />
          <CustomButton
            text="Continue"
            onPress={this.continuePressed.bind(this)}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ProfileScreen.propTypes = {
  navigateToMap: PropTypes.func.isRequired,
  profileUpdated: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.userProfileData,
  account: state.accountData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({profileUpdated, navigateToMap}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
