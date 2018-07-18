import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text,FlatList } from 'react-native';
import ContactList from '../../components/Contact';
import commonStyles from '../../common/styles';
import FontAwesome, { Icons } from 'react-native-fontawesome';
// import Contacts from 'react-native-contacts';
import {Contacts, Permissions} from 'expo';
class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsList: []
    };
  }
  async componentDidMount() {
    const permission = await Permissions.askAsync(Permissions.CONTACTS);
    if (permission.status !== 'granted') {
      console.log('PERMISSION WAS DENIED :(');
      return;
    }
    const contacts = await Contacts.getContactsAsync({
      fields: [
        Contacts.PHONE_NUMBERS,
        Contacts.EMAILS,
      ],
      pageSize: 10,
      pageOffset: 0,
    });

    console.log('GOT CONTACTS: ', contacts);
    this.setState({contactsList: contacts});
  }
  _renderContactItem(item) {
    return (
      <Text>{`${item.firstName} ${item.lastName}`}</Text>
    );
  }
  render() {
    return (
      <View style={commonStyles.container}>
        <FlatList
          data={this.state.contactsList}
          renderItem={({item}) => this._renderContactItem(item)}
        />
      </View>
    );
  }
}
ContactsScreen.propTypes = {};

const mapStateToProps = state => (state);
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreen);
// export default ContactsScreen;
