
import {StyleSheet} from 'react-native';
import {REGULAR_FONT} from './fonts';
import {MEDIUM_GREY} from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontFamily: REGULAR_FONT,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: MEDIUM_GREY,
    padding: 8,
    fontFamily: REGULAR_FONT,
    fontSize: 24
  }
});

export default styles;