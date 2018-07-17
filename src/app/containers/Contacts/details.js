import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import commonStyles from '../../common/styles';

class ContactDetailsScreen extends Component {
  static navigationOptions = () => {
    // TODO: Customize header title to display contact's name.
    return {
      headerTitle: 'contact details'
    };
  };

  render() {
    return (
      <View style={commonStyles.container}>
        <Text>CONTACT DETAILS</Text>
      </View>
    );
  }
}
ContactDetailsScreen.propTypes = {};

const mapStateToProps = state => (state);
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailsScreen);
