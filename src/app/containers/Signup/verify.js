import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import CustomButton from '../../components/Button';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {navigateToMap} from '../../actions/navigation';
import styles from './styles';
import commonStyles from '../../common/styles';

class SignupVerifyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeNum1: '',
      codeNum2: '',
      codeNum3: '',
      codeNum4: ''
    };
  }
  validate() {
    // TODO: Validate the code & then go to the profile settings page.

    // FOR DEMO: Temporarily going straight to the map screen.  This WILL change.
    this.props.navigateToMap();
  }
  render() {
    return (
      <View style={commonStyles.container}>
        <Text style={[commonStyles.text, styles.subTitle, styles.verify]}>please enter the 4-digit code to verify we sent an SMS to the number below</Text>
        <TextInput 
          value={this.props.phoneNumber}
          placeholder="mobile number"
          textContentType="telephoneNumber"
          editable={false}
          style={[commonStyles.textInput, styles.phoneInput]}
        />
        <View style={styles.codeWrapper}>
          <TextInput
            value={this.state.codeNum1}
            maxLength={1}
            onChangeText={num => this.setState({codeNum1: num})}
            style={[commonStyles.textInput, styles.codeInput]}
          />
          <TextInput
            value={this.state.codeNum2}
            maxLength={1}
            onChangeText={num => this.setState({codeNum2: num})}
            style={[commonStyles.textInput, styles.codeInput]}
          />
          <TextInput
            value={this.state.codeNum3}
            maxLength={1}
            onChangeText={num => this.setState({codeNum3: num})}
            style={[commonStyles.textInput, styles.codeInput]}
          />
          <TextInput
            value={this.state.codeNum4}
            maxLength={1}
            onChangeText={num => this.setState({codeNum4: num})}
            style={[commonStyles.textInput, styles.codeInput]}
          />
        </View>
        <CustomButton 
          text="Verify"
          onPress={this.validate.bind(this)}
        />
      </View>
    );
  }
}

SignupVerifyScreen.propTypes = {
  phoneNumber: PropTypes.string,
  navigateToMap: PropTypes.func.isRequired
};

const mapStateToProps = state => (state);
const mapDispatchToProps = dispatch =>
  bindActionCreators({navigateToMap}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignupVerifyScreen);