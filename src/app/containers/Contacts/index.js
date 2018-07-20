import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { View } from 'react-native';
import commonStyles from '../../common/styles';
import { Contacts, Permissions } from 'expo';
import ContactList from '../../components/ContactList';
import {navigateToContactDetails} from '../../actions/navigation';

class ContactsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'contacts'
  };

  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.getContacts();
  }

  async getContacts() {
    const permission = await Permissions.askAsync(Permissions.CONTACTS);
    if (permission.status !== 'granted') {
      return;
    }
    const contacts = await Contacts.getContactsAsync({
      fields: [
        Contacts.PHONE_NUMBERS,
        Contacts.EMAILS
      ]
    });

    this.setState({
      contacts: contacts.data.sort((c1, c2) => {
        const c1Name = this._getContactFullName(c1).toLowerCase();
        const c2Name = this._getContactFullName(c2).toLowerCase();
        if (c1Name < c2Name) {
          return -1;
        } else if (c1Name > c2Name) {
          return 1;
        }
        return 0;
      })
    });
    //console.log(this.state.contacts);
  }

  _getContactFullName(contact) {
    return `${contact.firstName} ${contact.lastName}`;
  }

  render() {
    const {navigateToContactDetails} = this.props;

    return (
      <View style={commonStyles.container}>
        <ContactList
          onContactPressed={navigateToContactDetails}
          contacts={this.state.contacts} />
      </View>
    );
  }
}
ContactsScreen.propTypes = {
  navigateToContactDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => (state);
const mapDispatchToProps = dispatch => bindActionCreators({
  navigateToContactDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreen);
