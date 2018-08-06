import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import commonStyles from '../../common/styles';
import styles from './styles';

class LoadingOverlayComponent extends Component {
  render() {
    const {message} = this.props;

    return (
      <View style={styles.overlay}>
        <View style={styles.wrapper}>
          <ActivityIndicator
            animating={true}
            size="large"
          />
          <Text style={[commonStyles.text, styles.message]}>{message}</Text>
        </View>
      </View>
    );
  }
}

LoadingOverlayComponent.propTypes = {
  message: PropTypes.string
};

export default LoadingOverlayComponent;