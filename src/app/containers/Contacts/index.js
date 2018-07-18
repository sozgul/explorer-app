import React from 'react';
import { connect } from 'react-redux';
import { View, Text,FlatList } from 'react-native';
import commonStyles from '../../common/styles';
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
          renderItem={({item, index}) => this._renderContactItem(item, index)}
        />
      </View>
    );
  }
}
ContactsScreen.propTypes = {};

const mapStateToProps = state => (state);
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreen);
