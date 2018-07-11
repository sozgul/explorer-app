import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const LayoutComponent = ({children}) => {
  return <View style={styles.wrapper}>{children}</View>;
};

export default LayoutComponent;