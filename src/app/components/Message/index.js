import React, {Component} from 'react';
import { Text, View,ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { TRANSPARENT} from '../../common/colors';
import commonStyles from '../../common/styles';
import { LinearGradient } from 'expo';

class MessageComponent extends Component {
  render() {


    return (
      <View style={styles.contentContainer}>
        <ScrollView>

          <Text style= {[commonStyles.text,styles.textRight]}>Meenu</Text>
          <View style={styles.bubbles}>
            <LinearGradient colors={[TRANSPARENT,'rgba(255,255,255,0.5)','rgba(255,255,255,0.6)']}
              start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style = {styles.bubbles}
            >
              <Text style= {[commonStyles.text,styles.text]}>Hi Serhan!!</Text>
            </LinearGradient>

          </View>
          <Text style= {[commonStyles.text,styles.textRight]}>Serhan</Text>

          <LinearGradient colors={[TRANSPARENT,'rgba(255,255,255,0.5)','rgba(255,255,255,0.6)']}
            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style = {styles.bubbles}
          >
            <Text style= {[commonStyles.text,styles.text]}>Hello Meenu How are you</Text>
          </LinearGradient>
        </ScrollView>
      </View>
    );
  }
}

MessageComponent.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any,
  textStyle: PropTypes.any,
  disabled: PropTypes.bool
};

export default MessageComponent;
