import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { MEDIUM_GREY} from '../../common/colors';
import MessageListItem from './item';


class MessageList extends Component {
  _getColorForSender(senderID) {
    const senderColorItem = this.props.colors.find(item => item.senderID === senderID);
    return senderColorItem ? senderColorItem.color : MEDIUM_GREY;
  }

  render() {
    return (
      <ScrollView style={styles.contentContainer}>
        {this.props.messages.map(message => (
          <MessageListItem
            key={message.id}
            message={message}
            senderColor={this._getColorForSender(message.senderID)}
          />)
        )}
      </ScrollView>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired
};



export default MessageList;
