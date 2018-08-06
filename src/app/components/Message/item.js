import React, {Component} from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import commonStyles from '../../common/styles';
import { LinearGradient } from 'expo';


class MessageListItem extends Component {
  render() {
    const {message,senderColor} = this.props;
    const {content} = message;
    const dotStyles = [styles.dot, {backgroundColor:senderColor}];

    return (
      <View>
        <LinearGradient colors={['rgba(255,255,255,0.7)','rgba(255,255,255,0.9)']}
          start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style = {styles.buttonContainer}
        >
          <View style= {dotStyles}></View>
          <Text style= {[commonStyles.text,styles.text]}>{content}</Text>
        </LinearGradient>
      </View>
    );
  }
}

MessageListItem.propTypes = {
  message: PropTypes.object.isRequired,
  senderColor: PropTypes.string.isRequired
};
export default MessageListItem;
