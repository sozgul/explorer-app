import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight} from 'react-native';
import {listItemStyles} from '../../common/styles';
import commonStyles from '../../common/styles';
import FontAwesome, {Icons} from 'react-native-fontawesome';

class ContactListItem extends Component {
  render() {
    const {contact, onPress, isSelected} = this.props;
    const selectedStyle = isSelected ? listItemStyles.selected : null;

    return (
      <TouchableHighlight
        style={listItemStyles.listItem}
        onPress={() => onPress(contact)}
        underlayColor="#fff"
      >
        <View style={listItemStyles.listItemContent}>
          <Text style={[commonStyles.text, listItemStyles.itemText, selectedStyle]}>{`${contact.firstName} ${contact.lastName}`}</Text>
          {isSelected && (
            <FontAwesome style={selectedStyle}>{Icons.minus}</FontAwesome>
          )}
        </View>
      </TouchableHighlight>
    );
  }
}

ContactListItem.propTypes = {
  contact: PropTypes.object,
  onPress: PropTypes.func,
  isSelected: PropTypes.bool
};

export default ContactListItem;
