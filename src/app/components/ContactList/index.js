import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, Text} from 'react-native';
import ContactListItem from './item';
import {listStyles} from './styles';
import commonStyles from '../../common/styles';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Linking } from 'react-native';

class ContactList extends Component {
  _onItemPressed(contact) {
    const {onContactPressed = () => {}} = this.props;

    onContactPressed(contact);
  }
  async continuePressed() {
    const { navigateToSignup} = this.props;
    await navigateToSignup();
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
    let {contacts,createContact} = this.props;
    let buttonStyles = [commonStyles.wrapper_button];
    if(!createContact){
      buttonStyles.push(commonStyles.hidden);
    }
    contacts = contacts.map(item => {
      item.key = item.id;
      return item;
    });

    return (
      <View style={listStyles.wrapper}>
        <View style={commonStyles.wrapper_button} createContact={createContact}>
          <Text style={commonStyles.purple_text} onPress={() => Linking.openURL('app-settings:')}>Create new contact
          </Text>
          <FontAwesome style={[commonStyles.plus]}>
            {Icons.plus}
          </FontAwesome>
        </View>
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
  createContact: PropTypes.bool
};

export default ContactList;
