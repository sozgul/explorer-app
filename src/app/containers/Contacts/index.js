import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { View } from 'react-native';
import commonStyles from '../../common/styles';
import ContactList from '../../components/ContactList';
import {navigateToContactDetails} from '../../actions/navigation';
import {getContactsAsync} from '../../utilities/contacts';
import {getContactsWithUserIDsSelector} from '../../selectors/contacts_users';

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
    const {usersData} = this.props;
    const rawContacts = await getContactsAsync();
    const contacts = getContactsWithUserIDsSelector(usersData.registeredUsers, rawContacts);

    this.setState({
      contacts
    });
  }

  render() {
    const {navigateToContactDetails} = this.props;
    return (
      <View style={commonStyles.container}>
        <ContactList
          onContactPressed={navigateToContactDetails}
          contacts={this.state.contacts}
          hideCreateContact={true} />
      </View>
    );
  }
}
ContactsScreen.propTypes = {
  navigateToContactDetails: PropTypes.func.isRequired,
  usersData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  usersData: state.usersData
});
const mapDispatchToProps = dispatch => bindActionCreators({
  navigateToContactDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreen);
