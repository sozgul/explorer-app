import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import defaultStyles from './styles';

class CustomButtonComponent extends Component {
  render() {
    const {text, onPress, disabled, style, textStyle} = this.props;
    let buttonStyles = [defaultStyles.button];
    let textStyles = [defaultStyles.buttonText];

    if (disabled) {
      buttonStyles.push(defaultStyles.buttonDisabled);
      textStyles.push(defaultStyles.buttonTextDisabled);
    }

    if (style) {
      buttonStyles = buttonStyles.concat(style);
    }
    if (textStyle) {
      textStyles = textStyles.concat(textStyle);
    }

    return (
      <TouchableOpacity 
        style={buttonStyles}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={textStyles}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

CustomButtonComponent.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any,
  textStyle: PropTypes.any,
  disabled: PropTypes.bool
};

export default CustomButtonComponent;