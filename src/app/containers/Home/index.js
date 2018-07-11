import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button } from 'react-native';
import {navigateToSignup} from '../../actions/navigation';

class HomeScreen extends React.Component {
  navigateToSignup() {
    // TODO: use the navigateToSignup action instead so it is bound to redux.
    this.props.navigateToSignup();
  }
  render() {
    return (
      <View>
        <Text>Welcome to</Text>
        <Text>Explorer</Text>
        <Text>GPS Sharing</Text>
        <Button 
          title="Continue"
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