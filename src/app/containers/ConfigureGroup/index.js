import React from 'react';
import PropTypes from 'prop-types';
import { View} from 'react-native';
import {connect} from 'react-redux';
import {navigateToConfirmGroup} from '../../actions/navigation';
import CustomButton from '../../components/Button';
import { bindActionCreators } from 'redux';
import { Contacts, Permissions } from 'expo';
import ContactList from '../../components/ContactList';
import * as ScreenNames from '../../navigators/screen_names';
import {HeaderBackButton} from 'react-navigation';
import commonStyles from '../../common/styles';
import {createMap} from '../Map/actions';
import {navigateToMap} from '../../actions/navigation';

class CreateGroupScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    // TODO: Customize the header title for map based on contact/group.
    return {
      headerTitle: 'add participants',
      headerLeft: (
        <HeaderBackButton
          onPress={() => navigation.navigate(ScreenNames.MAPS_TAB)}
          title ='cancel'
          tintColor= '#FFF'
        />
      )
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      selectedContactIDs: []
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
  }

  _getContactFullName(contact) {
    return `${contact.firstName} ${contact.lastName}`;
  }

  _continuePressed() {
    const {navigateToMap} = this.props;
    if (this.state.selectedContactIDs.length > 1) {
      const {navigateToConfirmGroup} = this.props;
      navigateToConfirmGroup(this.state.selectedContactIDs);
    } else if (this.state.selectedContactIDs.length == 1) {
      createMap('', '', this.state.selectedContactIDs[0].id, this.state.selectedContactIDs[0].firstName, '', '' );
      navigateToMap();
    } else
      return;
  }

  sortContacts(contacts) {
    return contacts.sort((a, b) => a.firstName  === b.firstName  ?
      a.lastName.localeCompare(b.lastName) :
      a.firstName.localeCompare(b.firstName));
  }

  _onContactItemPressed(contact) {
    const {contacts, selectedContactIDs} = this.state;
    const selectedContactIDsIndex = selectedContactIDs.findIndex(function (x) { return x.id == contact.id});
    const contactIndex = contacts.findIndex(c => c.id === contact.id);
    const isContactSelected = selectedContactIDsIndex > -1;

    if (isContactSelected) {
      // remove the contact from selectedContactIDs.
      selectedContactIDs.splice(selectedContactIDsIndex, 1);
      const removedContact = contacts.splice(contactIndex, 1);
      contacts.splice(0, selectedContactIDs.length, removedContact[0]);
      this.sortContacts(contacts);
      contacts.unshift.apply( contacts, selectedContactIDs );
    } else {
      contacts.splice(contactIndex, 1);
      contacts.unshift(contact);
      selectedContactIDs.unshift(contact);
    }

    this.setState({contacts, selectedContactIDs});
  }

  render() {
    return (
      <View style={commonStyles.container}>
        <ContactList
          onContactPressed= {(contact) => this._onContactItemPressed(contact)}
          contacts={this.state.contacts} />
        <CustomButton
          text="Continue"
          onPress={this._continuePressed.bind(this)}
        />
      </View>
    );
  }
}

CreateGroupScreen.propTypes = {
  navigateToConfirmGroup: PropTypes.func.isRequired,
  navigateToMap: PropTypes.func.isRequired,
  createMap: PropTypes.func.isRequired
};

const mapStateToProps = state => (state);
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({navigateToConfirmGroup, navigateToMap, createMap}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupScreen);
