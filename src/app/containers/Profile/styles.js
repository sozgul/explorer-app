import {StyleSheet } from 'react-native';
import {REGULAR_FONT} from '../../common/fonts';
import {MEDIUM_GREY,WHITE} from '../../common/colors';

const styles = StyleSheet.create({
  container1: {
    padding: 50,
    paddingTop:1,
    paddingBottom:1
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor:WHITE
  },
  container_button: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginTop: 30,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: MEDIUM_GREY
  },
  textBox: {
    marginTop: 24,
    fontSize: 16,
    textAlign: 'left',
    padding: 5,
    color: MEDIUM_GREY

  },
  textInput: {
    fontSize: 23,
    textAlign: 'left',
    padding: 6,
    borderBottomWidth: 1,
    borderColor: MEDIUM_GREY,
    fontFamily: REGULAR_FONT
  },
  wrapper: {
    textAlign: 'left'
  },
  pickerTextInput:{
    minWidth:260,
  }
});

export default styles;
