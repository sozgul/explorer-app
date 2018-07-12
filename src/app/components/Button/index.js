import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

class CustomButtonComponent extends Component {
  render() {
    const { text, onPress} = this.props;
    return (
      <TouchableOpacity style={styles.button}
        onPress={() => onPress()}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

CustomButtonComponent.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
};

export default CustomButtonComponent;