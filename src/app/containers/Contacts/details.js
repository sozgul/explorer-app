import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {navigateToMap} from '../../actions/navigation';
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

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View>
        <View style = {styles.mainContainer}>
          <Text style = {styles.titleWrapper}>{`${params.firstName} ${params.lastName}`}</Text>
          <TouchableOpacity
            onPress={() => this._directToMap() }>
            <Text style={styles.navIconWrapper}>
              <FontAwesome>
                {Icons.compass}
              </FontAwesome>
              <Text style = {styles.textWrapper}>navigate to shared map</Text>
            </Text>
          </TouchableOpacity>
        </View>
        { params.phoneNumbers.map((item, key) => (
          <View style = {styles.phoneContainer} key = {key}>
            <Text style = {styles.containerText}>{item.label}</Text>
            <Text style = {styles.containerValue}>{item.number}</Text>
          </View>
        ))}
        <View style = {styles.lastcontactWrapper}>
          <Text style = {styles.containerText}>Last Contact</Text>
          <Text style = {styles.containerValue}> </Text>
        </View>

        <Text style={styles.iconWrapper}>
          <FontAwesome>
            {Icons.userO}
            <Text>block user</Text>
          </FontAwesome>
        </Text>
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
