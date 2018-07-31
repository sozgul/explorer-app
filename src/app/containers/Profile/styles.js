import {StyleSheet } from 'react-native';
import {REGULAR_FONT} from '../../common/fonts';
import {MEDIUM_GREY} from '../../common/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginTop: 30
  },
  subTitle: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center'
  },
  textBox: {
    marginTop: 24,
    fontSize: 16,
    textAlign: 'left',
    padding: 5
  },
  textInput: {
    fontSize: 16,
    textAlign: 'left',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: MEDIUM_GREY,
    fontFamily: REGULAR_FONT
  }
});

export default styles;
