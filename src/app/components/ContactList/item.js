import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableHighlight} from 'react-native';
import {listItemStyles} from './styles';
import commonStyles from '../../common/styles';

class ContactListItem extends Component {
  render() {
    const {contact, onPress} = this.props;

    return (
      <TouchableHighlight
        style={listItemStyles.listItem}
        onPress={() => onPress(contact)}
        underlayColor="#fff"
      >
        <Text style={[commonStyles.text, listItemStyles.itemText]}>{`${contact.firstName} ${contact.lastName}`}</Text>
      </TouchableHighlight>
    );
  }
}

ContactListItem.propTypes = {
  contact: PropTypes.object,
  onPress: PropTypes.func
};

export default ContactListItem;
