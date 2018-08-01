import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {navigateToMap} from '../../actions/navigation';
import {capitalizeString} from '../../utilities';
import commonStyles from '../../common/styles';
import styles from './styles';
import {getFullName} from '../../utilities/contacts';
import {createMap} from '../Map/actions';
import uuidV4 from 'uuid/v4';

class ContactDetailsScreen extends Component {
  static navigationOptions = () => {
    return {
      headerTitle: ''
    };
  };

  _directToMap() {
    const {params: contact} = this.props.navigation.state;
    const {maps, account, createMap} = this.props;
     
    const existingMap = maps && maps.mapList.find(m => {
      return (m.contactIDs.length === 1) && (m.contactIDs[0] === contact.id);
    });
    
    if (!existingMap) {
      const mapID = uuidV4();
      createMap({id: mapID, ownerUserID: account.userId, contactIDs: [contact.id], subject: getFullName(contact)});
    }

    this.props.navigateToMap(contact, getFullName(contact));
  }

  _blockUser() {
    // TODO: add this user to the block list.
  }

  render() {
    const {params: contact} = this.props.navigation.state;
    return (
      <View>
        <View style={styles.mainContainer}>
          <Text style={[commonStyles.text, styles.titleWrapper]}>{getFullName(contact)}</Text>
          <TouchableOpacity
            style={styles.iconButtonWrapper}
            onPress={() => this._directToMap()}
          >
            <FontAwesome style={styles.icon}>{Icons.compass}</FontAwesome>
            <Text style={[commonStyles.text, styles.textWrapper]}>navigate to shared map</Text>
          </TouchableOpacity>
        </View>
        { contact.phoneNumbers.map((item, key) => (
          <View style = {styles.phoneContainer} key = {key}>
            <Text style = {[commonStyles.text, styles.containerText]}>{capitalizeString(item.label)}</Text>
            <Text style = {[commonStyles.text, styles.containerValue]}>{item.number}</Text>
          </View>
        ))}
        <TouchableOpacity
          style={styles.iconButtonWrapper}
          onPress={() => this._blockUser()}
          disabled={true}
        >
          <FontAwesome style={[styles.icon, styles.blockText]}>{Icons.ban}</FontAwesome>
          <Text style={[commonStyles.text, styles.textWrapper, styles.blockText]}>block user</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ContactDetailsScreen.propTypes = {
  navigateToMap: PropTypes.func.isRequired,
  maps: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
  createMap: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  maps: state.mapsData,
  account: state.accountData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({navigateToMap, createMap}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailsScreen);
