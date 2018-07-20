import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './styles';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import * as ScreenNames from '../../navigators/screen_names';

function NavTabItem(props) {
  const {routeName, tintColor} = props;
  let icon = null;
        
  switch(routeName) {
  case ScreenNames.CONTACTS_TAB:
    icon = Icons.user;
    break;
  case ScreenNames.PROFILE_TAB:
    icon = Icons.cog;
    break;
  case ScreenNames.MAPS_TAB:
    icon = Icons.locationArrow;
    break;
  default:
    break;
  }

  return (
    <View style={[styles.iconWrapper, {borderColor:tintColor}]}>
      <FontAwesome style={[styles.icon, {color:tintColor}]}>{icon}</FontAwesome>
    </View>
  );
}

NavTabItem.propTypes = {
  routeName: PropTypes.string.isRequired,
  tintColor: PropTypes.string
};

export default NavTabItem;
