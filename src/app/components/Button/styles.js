
import {StyleSheet} from 'react-native';
import {PURPLE, MEDIUM_GREY} from '../../common/colors';
import {REGULAR_FONT} from '../../common/fonts';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: PURPLE,
    borderRadius: 4,
    padding: 18,
    marginTop: 30
  },
  buttonDisabled: {
    borderColor: MEDIUM_GREY
  },
  buttonText: {
    fontFamily: REGULAR_FONT,
    fontSize: 20,
    fontWeight: '600',
    color: PURPLE
  },
  buttonTextDisabled: {
    color: MEDIUM_GREY
  }
});

export default styles;
