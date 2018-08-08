import React, {Component} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {AppNavigator} from '../../navigators';
import styles from './styles';
import GPSConnector from '../../connectors/gps';

class AppContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
        <GPSConnector />
      </View>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);