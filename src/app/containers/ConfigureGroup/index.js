import React from 'react';
import PropTypes from 'prop-types';
import { View} from 'react-native';
import {connect} from 'react-redux';
import {navigateToDisplayMap} from '../../actions/navigation';
import CustomButton from '../../components/Button';
import { bindActionCreators } from 'redux';
import ContactList from '../../components/ContactList';
import * as ScreenNames from '../../navigators/screen_names';
import {HeaderBackButton} from 'react-navigation';
import commonStyles from '../../common/styles';
import {createMap} from '../Map/actions';
import {navigateToConfirmGroup} from '../../actions/navigation';
import {getContactsAsync, getFullName } from '../../utilities/contacts';

class CreateGroupScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
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
      selectedContacts: []
    };
    this.getContacts();
  }

  async getContacts() {
    const contacts = await getContactsAsync();
    this.setState({
      contacts
    });
  }

  _continuePressed() {
    const {navigateToDisplayMap, profile, createMap} = this.props;
    if (this.state.selectedContacts.length > 1) {
      const {navigateToConfirmGroup} = this.props;
      navigateToConfirmGroup(this.state.selectedContacts);
    } else if (this.state.selectedContacts.length === 1) {
      let subject = getFullName(this.state.selectedContacts[0]);
      createMap({ownerUserID: profile.displayUserName, contactIDs: this.state.selectedContacts[0].id, subject: subject});
      navigateToDisplayMap();
    }
  }
  
  sortContacts(contacts) {
    return contacts.sort((a, b) => a.firstName  === b.firstName  ?
      a.lastName.localeCompare(b.lastName) :
      a.firstName.localeCompare(b.firstName));
  }

  _onContactItemPressed(contact) {
    const {contacts, selectedContacts} = this.state;
    const selectedContactIDsIndex = selectedContacts.findIndex(x => { return x.id == contact.id});
    const contactIndex = contacts.findIndex(c => c.id === contact.id);
    const isContactSelected = selectedContactIDsIndex > -1;

    if (isContactSelected) {
      // remove the contact from selectedContactIDs.
      selectedContacts.splice(selectedContactIDsIndex, 1);
      const removedContact = contacts.splice(contactIndex, 1);
      contacts.splice(0, selectedContacts.length, removedContact[0]);
      this.sortContacts(contacts);
      contacts.unshift.apply( contacts, selectedContacts );
    } else {
      contacts.splice(contactIndex, 1);
      contacts.unshift(contact);
      selectedContacts.unshift(contact);
    }

    this.setState({contacts, selectedContacts});
  }

  render() {
    return (
      <View style={commonStyles.container}>
        <ContactList
          onContactPressed= {(contact) => this._onContactItemPressed(contact)}
          contacts={this.state.contacts}
          hideCreateContact={true} />
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
  navigateToDisplayMap: PropTypes.func.isRequired,
  createMap: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.userProfileData
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({navigateToDisplayMap, createMap, navigateToConfirmGroup}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupScreen);
