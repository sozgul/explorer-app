import React from 'react';
import { Text, View } from 'react-native';
import {connect} from 'react-redux';

class CreateMapScreen extends React.Component {
  static navigationOptions = () => {
    // TODO: Customize the header title for map based on contact/group.
    return {
      headerTitle: 'select a contact to start a map'
    };
  }

  render() {
    return (
      <View>
        <Text>Welcome to Create Map</Text>
      </View>
    );
  }
}

CreateMapScreen.propTypes = {
};

const mapStateToProps = state => (state);

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreateMapScreen);
