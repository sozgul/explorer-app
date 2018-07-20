import React from 'react';
import {View, StatusBar} from 'react-native';
import styles from './styles';

const LayoutComponent = ({children}) => {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      {children}
    </View>
  );
};

export default LayoutComponent;