import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';
import CustomButtonComponent from '../../components/Button';
import {navigateToSignup} from '../../actions/navigation';
import commonStyles from '../../common/styles';
import styles from './styles';

class HomeScreen extends React.Component {
  navigateToSignup() {
    // TODO: use the navigateToSignup action instead so it is bound to redux.
    this.props.navigateToSignup();
  }
  render() {
    return (
      <View style={commonStyles.container}>
        <Text style={[commonStyles.text, styles.welcomeText]}>Welcome to</Text>
        <Text style={[commonStyles.text, styles.explorerText]}>Explorer</Text>
        <Text style={[commonStyles.text, styles.descriptionText]}>group GPS sharing</Text>
        <CustomButtonComponent 
          text="Continue"
          onPress={this.navigateToSignup.bind(this)}
        />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigateToSignup: PropTypes.func.isRequired
};

const mapStateToProps = state => (state);
const mapDispatchToProps = dispatch =>
  bindActionCreators({navigateToSignup}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);