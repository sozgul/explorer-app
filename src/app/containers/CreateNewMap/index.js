import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';
import CustomButton from '../../components/Button';
import {navigateToSignup} from '../../actions/navigation';
import commonStyles from '../../common/styles';
import styles from './styles';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { LinearGradient } from 'expo';
import {YELLOW, PURPLE} from '../../common/colors';


class WelcomeMapScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'welcome'
  };

  async continuePressed() {
    const { navigateToSignup} = this.props;
    await navigateToSignup();
  }
  render() {
    return (
      <LinearGradient colors={[YELLOW,PURPLE]}
        start={{x: 1.0, y: 0.0}} end={{x: 1.0, y: 1.0}} style = {commonStyles.container_home}
      >
        <View style={commonStyles.container}>
          <Text style={[commonStyles.text, styles.welcomeText]}>Welcome,</Text>
          <View style={styles.rocketWrapper}>
            <FontAwesome style={[styles.rocketIcon]}>
              {Icons.map}
            </FontAwesome>
          </View>
          <Text style={[commonStyles.text, styles.explorerText]}>You dont have Explorer maps yet.</Text>
          <Text style={[commonStyles.text, styles.descriptionText]}>Would you like to create one now?</Text>

          <CustomButton
            style={styles.continueButton}
            textStyle={styles.continueButtonText}
            text="Create New Map"
            onPress={this.continuePressed.bind(this)}
          />
        </View>
      </LinearGradient>
    );
  }
}

WelcomeMapScreen.propTypes = {
  account: PropTypes.object,
  navigateToSignup: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  account: state.accountData
});
const mapDispatchToProps = dispatch => bindActionCreators({
  navigateToSignup,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeMapScreen);
