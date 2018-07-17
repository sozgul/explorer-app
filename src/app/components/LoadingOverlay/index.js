import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import Loader from '../Loader';
import commonStyles from '../../common/styles';
import styles from './styles';

class LoadingOverlayComponent extends Component {
  render() {
    const {message} = this.props;

    return (
      <View style={styles.overlay}>
        <View style={styles.wrapper}>
          <Loader style={styles.loader} />
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