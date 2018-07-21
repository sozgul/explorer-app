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

class ContactDetailsScreen extends Component {
  static navigationOptions = () => {
    return {
      headerTitle: ''
    };
  };
  _directToMap() {
    const {params: contact} = this.props.navigation.state;
    this.props.navigateToMap(contact);
  }

  _blockUser() {
    // TODO: add this user to the block list.
  }

  render() {
    const {params: contact} = this.props.navigation.state;
    return (
      <View>
        <View style={styles.mainContainer}>
          <Text style={[commonStyles.text, styles.titleWrapper]}>{`${contact.firstName} ${contact.lastName}`}</Text>
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
        <View style = {styles.lastcontactWrapper}>
          <Text style = {[commonStyles.text, styles.containerText]}>Last Contact</Text>
          <Text style = {[commonStyles.text, styles.containerValue]}></Text>
        </View>

        
        <TouchableOpacity
          style={styles.iconButtonWrapper}
          onPress={() => this._blockUser()}
        >
          <FontAwesome style={[styles.icon, styles.blockText]}>{Icons.ban}</FontAwesome>
          <Text style={[commonStyles.text, styles.textWrapper, styles.blockText]}>block user</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ContactDetailsScreen.propTypes = {
  navigateToMap: PropTypes.func.isRequired
};

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch =>
  bindActionCreators({navigateToMap}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailsScreen);
