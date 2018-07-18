import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';
import CustomButtonComponent from '../../components/Button';
import {navigateToSignup} from '../../actions/navigation';
import {userAcceptedTerms} from './actions';
import commonStyles from '../../common/styles';
import styles from './styles';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Linking } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo';
// #f6e672
class HomeScreen extends React.Component {
  async continuePressed() {
    const {userAcceptedTerms, navigateToSignup} = this.props;
    await userAcceptedTerms();
    await navigateToSignup();
  }
  render() {
    return (
      <LinearGradient colors={['#f7ed72','#210368']}
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} style = {commonStyles.container_home}
      >
        <View style={commonStyles.container}>
          <View style={styles.rocketWrapper}>
            <FontAwesome style={[styles.rocketIcon]}>
              {Icons.rocket}
            </FontAwesome>
          </View>
          <Text style={[commonStyles.text, styles.welcomeText]}>Welcome to</Text>
          <Text style={[commonStyles.text, styles.explorerText]}>Explorer</Text>
          <Text style={[commonStyles.text, styles.descriptionText]}>group GPS sharing</Text>
          <Text style={[commonStyles.text, styles.continueText]}>Tap {'"continue"'} to agree with our </Text>
          <Text style={[commonStyles.text, styles.termsText]} onPress={() => Linking.openURL('#')}>
Terms of Service and Privacy Policy </Text>

          <CustomButtonComponent style={[styles.continueButton, styles.continueButtonText]}
            text="Continue"
            onPress={this.continuePressed.bind(this)}
          />
        </View>
      </LinearGradient>
    );
  }
}

HomeScreen.propTypes = {
  account: PropTypes.object,
  userAcceptedTerms: PropTypes.func.isRequired,
  navigateToSignup: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  account: state.accountData
});
const mapDispatchToProps = dispatch => bindActionCreators({
  navigateToSignup,
  userAcceptedTerms
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
