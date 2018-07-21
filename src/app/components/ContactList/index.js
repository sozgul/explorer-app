import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList} from 'react-native';
import ContactListItem from './item';
import {listStyles} from './styles';

class ContactList extends Component {
  _onItemPressed(contact) {
    const {onContactPressed = () => {}} = this.props;

    onContactPressed(contact);
  }

  _renderContactItem({item}) {
    return (
      <ContactListItem
        contact={item}
        onPress={() => this._onItemPressed(item)}
      />
    );
  }

  render() {
    let {contacts} = this.props;

    contacts = contacts.map(item => {
      item.key = item.id;
      return item;
    });

    return (
      <View style={listStyles.wrapper}>
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
  onContactPressed: PropTypes.func
};

export default ContactList;
