import React from 'react';
import {SafeAreaView,View, StatusBar} from 'react-native';
import styles from './styles';

const LayoutComponent = ({children}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        {children}
      </View>
    </SafeAreaView>
  );
};

export default LayoutComponent;
