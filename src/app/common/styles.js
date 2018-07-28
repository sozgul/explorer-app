
import {StyleSheet} from 'react-native';
import {REGULAR_FONT} from './fonts';
import {MEDIUM_GREY,PURPLE} from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container_home: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontFamily: REGULAR_FONT,
  },
  purple_text: {
    paddingLeft: 15,
    paddingTop: 15,
    paddingRight: 15,
    color: PURPLE,
    fontSize: 24,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: MEDIUM_GREY,
    padding: 8,
    fontFamily: REGULAR_FONT,
    fontSize: 24
  },
  plus: {
    paddingTop: 15,
    color: PURPLE,
    fontSize: 18
  },
  wrapper_button:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  continueButton: {
    borderWidth: 0,
    borderColor: PURPLE,
    borderRadius: 0,
    padding: 18,
    marginTop: 30
  },
  continueText: {
    fontSize: 14,
    marginTop: 95,
    color: PURPLE
  },

});

export default styles;
