import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, Text} from 'react-native';
import ContactListItem from './item';
import {listStyles} from './styles';
import commonStyles from '../../common/styles';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class ContactList extends Component {
  _onItemPressed(contact) {
    const {onContactPressed = () => {}} = this.props;

    onContactPressed(contact);
  }

  _renderContactItem({item}) {
    const {selectedContacts, showSelectedContacts} = this.props;

    const isSelected = showSelectedContacts ? 
      selectedContacts.some((contact) => (item.id === contact.id)) 
      : false;
    return (
      <ContactListItem
        contact={item}
        onPress={() => this._onItemPressed(item)}
        isSelected={isSelected}
      />
    );
  }

  render() {
    let {contacts, hideCreateContact} = this.props;
    contacts = contacts.map(item => {
      item.key = item.id;
      return item;
    });

    return (
      <View style={listStyles.wrapper}>
        {!hideCreateContact && (
          <View style={commonStyles.wrapper_button}>
            <Text style={commonStyles.purple_text} onPress={() => {}}>Create new contact</Text>
            <FontAwesome style={commonStyles.plus}>
              {Icons.plus}
            </FontAwesome>
          </View>
        )}
        <FlatList
          style={listStyles.list}
          data={contacts}
          renderItem={this._renderContactItem.bind(this)}
        />
      </View>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onContactPressed: PropTypes.func,
  hideCreateContact: PropTypes.bool,
  showSelectedContacts: PropTypes.bool,
  selectedContacts: PropTypes.array
};

ContactList.defaultProps = {
  selectedContacts: []
};

export default ContactList;
