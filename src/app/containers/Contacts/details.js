import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {navigateToMap} from '../../actions/navigation';
import styles from './styles';

class ContactDetailsScreen extends Component {
  static navigationOptions = () => {
    // TODO: Customize header title to display contact's name.
    return {
      headerTitle: 'contact details'
    };
  };
  _directToMap() {
    this.props.navigateToMap();
  }
  viewTapped() {
    Keyboard.dismiss();
  }

  render() {
    const {params} = this.props.navigation.state;
    return (
      <TouchableWithoutFeedback onPress={this.viewTapped.bind(this)}>
        <View>
          <View style = {styles.mainContainer}>
            <Text style = {styles.titleWrapper}>{`${params.firstName} ${params.lastName}`}</Text>
            <TouchableOpacity
              onPress={() => this._directToMap() }>
              <FontAwesome style={[styles.navIconWrapper]}>
                {Icons.compass}
                <View>
                  <Text style = {styles.textWrapper}>     navigate to shared map </Text>
                </View>
              </FontAwesome>
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

          <View>
            <FontAwesome style={[styles.iconWrapper]}>
              {Icons.userO}
              <Text>  block user</Text>
            </FontAwesome>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
